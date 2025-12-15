<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Animal from "$lib/assets/Animal.svelte";
	import { animalListing, type AnimalItem } from "$lib/animalData";
	import type { ComponentName } from "$lib/assets/animals";

	type Point = { x: number; y: number };
	const SNAP_RADIUS_CQW = 4; // snapping in cqw

	// Utility to shuffle arrays
	function shuffle<T>(arr: T[]): T[] {
		return [...arr].sort(() => Math.random() - 0.5);
	}

	// Row data
	type Row = AnimalItem & {
		rightType: ComponentName;
		_leftEl: HTMLElement | null;
		_rightEl: HTMLElement | null;
	};

	let rows: Row[] = [];
	let container: HTMLElement | null = null;

	// Drag state
	let dragging: { fromId: string; from: Point } | null = null;
	let mouse: Point | null = null;

	// Connections & score
	let connections: Record<string, string> = {};
	let score: number | null = null;

	// Initialize game
	onMount(() => {
		if (!container) return;

		const picked = shuffle(animalListing).slice(0, 3);
		const rightOrder = shuffle(picked.map(a => a.type));

		rows = picked.map(a => ({
			...a,
			rightType: rightOrder.pop()!,
			_leftEl: null,
			_rightEl: null
		}));
	});

	// Get middle-left / middle-right anchor in container coordinates
	function getAnchor(el: HTMLElement, side: "left" | "right"): Point {
		if (!container) return { x: 0, y: 0 };
		const r = el.getBoundingClientRect();
		const c = container.getBoundingClientRect();
		return {
			x: side === "left" ? r.right - c.left : r.left - c.left,
			y: r.top - c.top + r.height / 2
		};
	}

	// Distance helper
	function dist(a: Point, b: Point) {
		return Math.hypot(a.x - b.x, a.y - b.y);
	}

	// Start dragging
	function startLine(e: PointerEvent, row: Row) {
		if (connections[row.type]) return;

		const el = row._leftEl!;
		el.setPointerCapture(e.pointerId);
		dragging = { fromId: row.type, from: getAnchor(el, "left") };
		mouse = { x: e.clientX - container!.getBoundingClientRect().left, y: e.clientY - container!.getBoundingClientRect().top };

		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onRelease);
	}

	function onMove(e: PointerEvent) {
		mouse = { x: e.clientX - container!.getBoundingClientRect().left, y: e.clientY - container!.getBoundingClientRect().top };
	}

	// Release drag
	function onRelease(e: PointerEvent) {
		if (!dragging) return;
		const dropPoint = { x: e.clientX - container!.getBoundingClientRect().left, y: e.clientY - container!.getBoundingClientRect().top };

		let closest: { id: string; point: Point } | null = null;

		for (const row of rows) {
			const el = row._rightEl!;
			const anchor = getAnchor(el, "right");
			const radiusPx = SNAP_RADIUS_CQW * container!.clientWidth / 100; // convert cqw → px
			const d = dist(anchor, dropPoint);

			if (d <= radiusPx && (!closest || d < dist(closest.point, dropPoint))) {
				closest = { id: row.rightType, point: anchor };
			}
		}

		if (closest) {
			connections[dragging.fromId] = closest.id;
			mouse = closest.point; // snap line visually
		}

		dragging = null;
		mouse = null;

		window.removeEventListener("pointermove", onMove);
		window.removeEventListener("pointerup", onRelease);

		// Compute score
		if (Object.keys(connections).length === rows.length) {
			score = rows.reduce((s, r) => s + (connections[r.rightType] === r.rightType ? 1 : 0), 0);
		}
	}

	// Get line coordinates
	function getLine(fromId: string, toId: string) {
		const from = rows.find(r => r.type === fromId)!._leftEl!;
		const to = rows.find(r => r.rightType === toId)!._rightEl!;
		const p1 = getAnchor(from, "left");
		const p2 = getAnchor(to, "right");
		return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
	}
</script>

<button
	onclick={() => goto("/level-select")}
	class="absolute top-4 left-4 px-4 py-2 bg-gray-300/80 rounded-lg z-10"
>
	Back
</button>

<div class="game" bind:this={container}>
	{#each rows as row}
		<div class="row">
			<div class="card left" bind:this={row._leftEl} onpointerdown={(e) => startLine(e, row)}>
				{row.name}
			</div>
			<div class="card right" bind:this={row._rightEl}>
				<Animal class="h-[10cqw]" type={row.rightType} />
			</div>
		</div>
	{/each}

	<svg class="lines" width="100%" height="100%">
		{#each Object.entries(connections) as [from, to]}
			<line {...getLine(from, to)} stroke="lime" stroke-width="0.4cqw" />
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

	{#if score !== null}
		<div class="score">Score: {score} / {rows.length}</div>
	{/if}
</div>

<style>
	.game {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2cqh;
		padding: 4cqh;
	}

	.row {
		display: grid;
		grid-template-columns: 12cqw 12cqw;
		align-items: center;
		column-gap: 6cqw;
	}

	.card {
		aspect-ratio: 4/3;
		background: #eee;
		border-radius: 0.75cqw;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
	}

	.left {
		cursor: pointer;
		font-size: 1.2cqw;
	}

	.lines {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.score {
		position: absolute;
		bottom: 2cqh;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.5cqw;
	}
</style>
