<script lang="ts">
	import { onMount } from 'svelte';

	interface BBox { x: number; y: number; w: number; h: number; }
	type GlyphItem = { c: string; bb: BBox; space: false };
	type SpaceItem = { space: true; w: number };
	type LayoutItem = GlyphItem | SpaceItem;

	let { text = '', scale = 1, gap = 10 }: { text?: string; scale?: number; gap?: number } = $props();

	let svgContent = $state('');
	let boxes: Record<string, BBox> = $state({});
	let ready = $state(false);
	let measureEl: SVGSVGElement | undefined = $state();

	const ALL_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	onMount(async () => {
		const res = await fetch('/fonts/SortedAIFont.svg');
		svgContent = await res.text();
		await new Promise(r => setTimeout(r, 400));
		if (!measureEl) return;
		for (const c of ALL_CHARS) {
			const el = measureEl.querySelector(`[data-char="${c}"]`);
			if (el) {
				try {
					const r = (el as SVGGraphicsElement).getBBox();
					boxes[c] = { x: r.x, y: r.y, w: r.width, h: r.height };
				} catch { /* skip */ }
			}
		}
		for (const c of ALL_CHARS) {
			if (!boxes[c]) boxes[c] = { x: 0, y: 0, w: 200, h: 200 };
		}
		ready = true;
	});

	let charLayout: LayoutItem[] = $derived(
		text.toUpperCase().split('').map((c): LayoutItem | null => {
			if (c === ' ') return { space: true, w: 50 };
			const bb = boxes[c];
			if (!bb) return null;
			return { c, bb, space: false };
		}).filter((it): it is LayoutItem => it !== null)
	);

	let positions = $derived.by(() => {
		let x = 0;
		return charLayout.map((item) => {
			const w = item.space ? item.w : item.bb.w;
			const pos = { x };
			x += w + gap;
			return pos;
		});
	});

	let totalW = $derived(
		charLayout.reduce((s, it, i) => {
			const w = it.space ? it.w : it.bb.w;
			return s + w + (i < charLayout.length - 1 ? gap : 0);
		}, 0)
	);

	let totalH = $derived(
		Object.values(boxes).length > 0
			? Math.max(...Object.values(boxes).map(b => b.h), 100) + 5
			: 200
	);
</script>

<!-- Hidden measurement: uses the inlined SVG as source, renders each letter via <use> -->
<svg bind:this={measureEl} class="measure">
	{#each ALL_CHARS as c}
		<g data-char={c}><use href={'#' + c + ' G'} /></g>
	{/each}
</svg>

<!-- Inline the full source SVG (rendered once, provides defs + groups) -->
<div class="source">
	{#if svgContent}{@html svgContent}{/if}
</div>

{#if ready && totalW > 0}
	<svg xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 {totalW} {totalH}"
		width={totalW * scale}
		height={totalH * scale}
		class="ai-font"
	>
		{#each charLayout as item, i}
			{@const p = positions[i]}
			{#if !item.space}
				<use
					href={'#' + item.c + ' G'}
					x={p.x - item.bb.x}
					y={-item.bb.y}
				/>
			{/if}
		{/each}
	</svg>
{:else}
	<div class="placeholder">Loading...</div>
{/if}

<style>
	.ai-font { display: block; overflow: visible; }
	.source { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; pointer-events: none; }
	.measure { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; pointer-events: none; }
	.placeholder { display: flex; align-items: center; justify-content: center; color: #666; height: 200px; font-family: monospace; }
</style>
