<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Animal from '$lib/assets/Animal.svelte';
	import { animalListing, type AnimalItem } from '$lib/animalData';
	import type { ComponentName } from '$lib/assets/animals';
	import type { Snippet } from 'svelte';
	import BackButton from '$lib/components/BackButton.svelte';

	type Point = { x: number; y: number };
	type Side = 'left' | 'right';

	function shuffle<T>(arr: T[]): T[] {
		return [...arr].sort(() => Math.random() - 0.5);
	}

	type Row = AnimalItem & {
		rightType: ComponentName;
		_leftEl: HTMLElement | null;
		_rightEl: HTMLElement | null;
	};

	let {
		landingImage,
		leftCard
	}: {
		landingImage: string;
		leftCard: Snippet<[{ row: Row }]>;
	} = $props();

	let dialogEl = $state<HTMLDialogElement | null>(null);
	let rows = $state<Row[]>([]);
	let container = $state<HTMLElement | null>(null);

	let dragging = $state<{ fromId: string; fromSide: Side; from: Point } | null>(null);
	let mouse = $state<Point | null>(null);
	let selected = $state<{ id: string; side: Side } | null>(null);
	let connections = $state<Record<string, string>>({});
	let score = $state<number | null>(null);

	let cachedRect = $state<DOMRect | null>(null);
	let hasMoved = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let raf = 0;

	onMount(() => {
		if (!container) return;
		initRows();
	});

	function initRows() {
		const picked = shuffle(animalListing).slice(0, 4);
		const rightOrder = shuffle(picked.map((a) => a.type));

		rows = picked.map((a) => ({
			...a,
			rightType: rightOrder.pop()!,
			_leftEl: null,
			_rightEl: null
		}));
	}

	function restart() {
		connections = {};
		score = null;
		selected = null;
		dialogEl?.close();
		initRows();
	}

	// ---- helpers ----

	function rowEl(row: Row, side: Side) {
		return side === 'left' ? row._leftEl : row._rightEl;
	}

	function rowId(row: Row, side: Side) {
		return side === 'left' ? row.type : row.rightType;
	}

	function getAnchor(el: HTMLElement, side: Side): Point {
		if (!container) return { x: 0, y: 0 };
		const r = el.getBoundingClientRect();
		const c = cachedRect ?? container.getBoundingClientRect();
		return {
			x: side === 'left' ? r.right - c.left : r.left - c.left,
			y: r.top - c.top + r.height / 2
		};
	}

	function isInsideCard(el: HTMLElement, p: Point): boolean {
		const r = el.getBoundingClientRect();
		const c = cachedRect ?? container!.getBoundingClientRect();
		const pad = r.width * 0.5;
		return (
			p.x >= r.left - c.left - pad &&
			p.x <= r.right - c.left + pad &&
			p.y >= r.top - c.top - pad &&
			p.y <= r.bottom - c.top + pad
		);
	}

	function isConnected(side: Side, id: string): boolean {
		if (side === 'left') return id in connections;
		return Object.values(connections).includes(id);
	}

	function removeConnection(side: Side, id: string) {
		if (side === 'left') {
			const { [id]: _, ...rest } = connections;
			connections = rest;
		} else {
			const key = Object.entries(connections).find(([, v]) => v === id)?.[0];
			if (key) {
				const { [key]: _, ...rest } = connections;
				connections = rest;
			}
		}
	}

	// ---- tap-to-connect ----

	function onCardTap(e: MouseEvent, row: Row, side: Side) {
		if (hasMoved) {
			hasMoved = false;
			return;
		}
		const id = rowId(row, side);

		// tapped a connected card → disconnect it
		if (isConnected(side, id)) {
			removeConnection(side, id);
			selected = null;
			return;
		}

		// nothing selected → select this card
		if (!selected) {
			selected = { id, side };
			return;
		}

		// tapped same card → deselect
		if (selected.id === id && selected.side === side) {
			selected = null;
			return;
		}

		// tapped same side, different card → switch selection
		if (selected.side === side) {
			selected = { id, side };
			return;
		}

		// opposite side → connect!
		const leftId = side === 'left' ? id : selected.id;
		const rightId = side === 'right' ? id : selected.id;
		connections = { ...connections, [leftId]: rightId };
		selected = null;

		if (Object.keys(connections).length === rows.length) {
			score = rows.reduce((s, r) => s + (connections[r.type] === r.type ? 1 : 0), 0);
			dialogEl?.showModal();
		}
	}

	// ---- drag-to-connect ----

	function startDrag(e: PointerEvent, row: Row, side: Side) {
		const id = rowId(row, side);
		if (isConnected(side, id)) return;

		const el = rowEl(row, side)!;
		el.setPointerCapture(e.pointerId);
		cachedRect = container!.getBoundingClientRect();
		dragging = { fromId: id, fromSide: side, from: getAnchor(el, side) };
		mouse = { x: e.clientX - cachedRect.left, y: e.clientY - cachedRect.top };
		hasMoved = false;
		dragStartX = e.clientX;
		dragStartY = e.clientY;

		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onRelease);
		window.addEventListener('pointercancel', onCancel);
	}

	function onMove(e: PointerEvent) {
		if (!hasMoved && (Math.abs(e.clientX - dragStartX) > 3 || Math.abs(e.clientY - dragStartY) > 3)) {
			hasMoved = true;
			selected = null;
		}
		if (raf) return;
		raf = requestAnimationFrame(() => {
			raf = 0;
			if (!cachedRect) return;
			mouse = { x: e.clientX - cachedRect.left, y: e.clientY - cachedRect.top };
		});
	}

	function onCancel() {
		cleanupDrag();
	}

	function onRelease(e: PointerEvent) {
		if (!dragging || !cachedRect) return;
		const dropPoint = { x: e.clientX - cachedRect.left, y: e.clientY - cachedRect.top };

		const targetSide: Side = dragging.fromSide === 'left' ? 'right' : 'left';
		let matched: { id: string; point: Point } | null = null;

		for (const row of rows) {
			const el = rowEl(row, targetSide)!;
			if (isConnected(targetSide, rowId(row, targetSide))) continue;
			if (isInsideCard(el, dropPoint)) {
				matched = { id: rowId(row, targetSide), point: getAnchor(el, targetSide) };
				break;
			}
		}

		if (matched) {
			const leftId = dragging.fromSide === 'left' ? dragging.fromId : matched.id;
			const rightId = dragging.fromSide === 'right' ? dragging.fromId : matched.id;
			connections = { ...connections, [leftId]: rightId };
			selected = null;
		}

		cleanupDrag();

		if (Object.keys(connections).length === rows.length) {
			score = rows.reduce((s, r) => s + (connections[r.type] === r.type ? 1 : 0), 0);
			dialogEl?.showModal();
		}
	}

	function cleanupDrag() {
		dragging = null;
		mouse = null;
		cachedRect = null;
		window.removeEventListener('pointermove', onMove);
		window.removeEventListener('pointerup', onRelease);
		window.removeEventListener('pointercancel', onCancel);
	}

	// ---- line rendering ----

	function getLine(fromId: string, toId: string) {
		const leftRow = rows.find((r) => r.type === fromId);
		const rightRow = rows.find((r) => r.rightType === toId);
		if (!leftRow || !rightRow) return { x1: 0, y1: 0, x2: 0, y2: 0 };
		const p1 = getAnchor(leftRow._leftEl!, 'left');
		const p2 = getAnchor(rightRow._rightEl!, 'right');
		return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
	}
</script>
<BackButton onclick={()=>{ goto('/level-select') }} title="Kembali ke pilih level" />

<img src={landingImage} alt="" />

<div class="game" bind:this={container}>
	{#each rows as row}
		<div class="row">
			<button
				class="card left"
				bind:this={row._leftEl}
				onpointerdown={(e) => startDrag(e, row, 'left')}
				onclick={(e) => onCardTap(e, row, 'left')}
				class:connected={isConnected('left', row.type)}
				class:selected={selected?.id === row.type && selected?.side === 'left'}
			>
				{@render leftCard({ row })}
			</button>
			<button
				class="card right"
				bind:this={row._rightEl}
				onpointerdown={(e) => startDrag(e, row, 'right')}
				onclick={(e) => onCardTap(e, row, 'right')}
				class:connected={isConnected('right', row.rightType)}
				class:selected={selected?.id === row.rightType && selected?.side === 'right'}
			>
				<Animal class="h-[10cqw]" type={row.rightType} />
			</button>
		</div>
	{/each}

	<svg class="lines" width="100%" height="100%">
		{#each Object.entries(connections) as [from, to]}
			{@const line = getLine(from, to)}
			<line
				x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
				stroke="lime" stroke-width="0.4cqw"
				class="conn-line"
			/>
		{/each}

		{#if dragging && mouse}
			<line
				x1={dragging.from.x}
				y1={dragging.from.y}
				x2={mouse.x}
				y2={mouse.y}
				stroke="yellow"
				stroke-width="0.4cqw"
			/>
		{/if}
	</svg>
</div>

<dialog
	bind:this={dialogEl}
	class="m-auto p-[5cqb] text-[2cqb] rounded-2xl relative w-full max-w-[75cqb]"
>
	<button
		class="absolute top-[1cqb] right-[1cqb] bg-red-500 text-white p-[0.25cqb] w-[4cqb] rounded-full"
		type="reset"
		onclick={() => dialogEl?.close()}
		aria-label="Tutup"
		autofocus
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
	</button>
	<article class="flex flex-col gap-[3cqb] h-full w-full">
		<header class="h-[10cqb] rounded-2xl border-2 border-black w-full flex flex-col items-center justify-center text-[3cqb] p-[10cqb]">
			<span>Hebat!</span>
			<span>Skor: {((score ?? 0) / rows.length) * 100}</span>
		</header>
		<footer class="flex items-center justify-center gap-[5cqb] *:bg-cyan-300 *:p-[2cqb] *:rounded-2xl *:uppercase font-bold font-schoolbell">
			<button onclick={() => goto('/level-select')}> Kembali </button>
			<button onclick={restart}> Ulangi </button>
		</footer>
	</article>
</dialog>

<style>
	.game {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 2cqh;
		padding: 4cqh;
		inset: 0;
		margin: auto;
		align-items: center;
		justify-content: center;
	}

	.row {
		display: grid;
		grid-template-columns: 12cqw 12cqw;
		align-items: center;
		column-gap: 10cqw;
	}

	.card {
		aspect-ratio: 4/3;
		background: #eee;
		border-radius: 0.75cqw;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		touch-action: none;
		border: 0.4cqw solid transparent;
		transition: border-color 0.2s, box-shadow 0.2s;
		cursor: pointer;
		font-family: inherit;
		font-size: 1.2cqw;
		color: #000;
		padding: 0;
		outline: none;
	}

	.card.selected {
		border-color: #3b82f6;
		box-shadow: 0 0 1cqw #3b82f6;
		animation: pulse 1s ease-in-out infinite;
	}

	.card.connected {
		cursor: default;
		border-color: #22c55e;
		box-shadow: 0 0 0.5cqw #22c55e;
	}

	.conn-line {
		pointer-events: all;
		cursor: pointer;
	}

	.lines {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	@keyframes pulse {
		0%, 100% { box-shadow: 0 0 0.5cqw #3b82f6; }
		50% { box-shadow: 0 0 2cqw #3b82f6, 0 0 4cqw #60a5fa; }
	}
</style>
