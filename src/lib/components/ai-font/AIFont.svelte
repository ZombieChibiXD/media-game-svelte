<script lang="ts">
	// Komponen ini merender teks kustom menggunakan font yang dihasilkan AI (SVG font).
	// Cara kerjanya: mengambil file font SVG, mengukur dimensi setiap glyph (karakter),
	// lalu menyusun teks yang diberikan dengan spasi dan skala yang dapat disesuaikan.

	import { onMount } from 'svelte';

	// Kotak pembatas (bounding box) untuk satu glyph
	interface BBox { x: number; y: number; w: number; h: number; }
	// Item glyph: karakter dengan kotak pembatasnya
	type GlyphItem = { c: string; bb: BBox; space: false };
	// Item spasi (untuk karakter spasi)
	type SpaceItem = { space: true; w: number };
	// Item tata letak (layout): bisa berupa glyph atau spasi
	type LayoutItem = GlyphItem | SpaceItem;

	let { text = '', scale = 1, gap = 10 }: { text?: string; scale?: number; gap?: number } = $props();

	// Konten SVG mentah dari file font
	let svgContent = $state('');
	// Peta karakter ke kotak pembatasnya
	let boxes: Record<string, BBox> = $state({});
	// Penanda apakah font sudah siap digunakan
	let ready = $state(false);
	// Elemen SVG tersembunyi untuk mengukur glyph
	let measureEl: SVGSVGElement | undefined = $state();

	// Semua karakter yang didukung oleh font (0-9, A-Z)
	const ALL_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	// Saat komponen dipasang: ambil file font SVG, ukur setiap glyph,
	// lalu tandai komponen sebagai siap.
	onMount(async () => {
		const res = await fetch('/fonts/ExportFont.svg');
		svgContent = await res.text();
		await new Promise(r => setTimeout(r, 400));
		if (!measureEl) return;
		for (const c of ALL_CHARS) {
			const el = measureEl.querySelector(`[data-char="${c}"]`);
			if (el) {
				try {
					const r = (el as SVGGraphicsElement).getBBox();
					boxes[c] = { x: r.x, y: r.y, w: r.width, h: r.height };
				} catch { /* lewati jika tidak bisa diukur */ }
			}
		}
		// Karakter yang tidak ditemukan diberi ukuran default
		for (const c of ALL_CHARS) {
			if (!boxes[c]) boxes[c] = { x: 0, y: 0, w: 200, h: 200 };
		}
		ready = true;
	});

	// Tata letak karakter: mengubah teks menjadi array glyph atau spasi
	let charLayout: LayoutItem[] = $derived(
		text.toUpperCase().split('').map((c): LayoutItem | null => {
			if (c === ' ') return { space: true, w: 50 };
			const bb = boxes[c];
			if (!bb) return null;
			return { c, bb, space: false };
		}).filter((it): it is LayoutItem => it !== null)
	);

	// Menghitung posisi x setiap karakter berdasarkan lebar glyph sebelumnya dan gap
	let positions = $derived.by(() => {
		let x = 0;
		return charLayout.map((item) => {
			const w = item.space ? item.w : item.bb.w;
			const pos = { x };
			x += w + gap;
			return pos;
		});
	});

	// Total lebar seluruh teks yang akan dirender
	let totalW = $derived(
		charLayout.reduce((s, it, i) => {
			const w = it.space ? it.w : it.bb.w;
			return s + w + (i < charLayout.length - 1 ? gap : 0);
		}, 0)
	);

	// Total tinggi area render (diambil dari glyph tertinggi)
	let totalH = $derived(
		Object.values(boxes).length > 0
			? Math.max(...Object.values(boxes).map(b => b.h), 100) + 5
			: 200
	);
</script>

<!-- Hidden measurement: uses the inlined SVG as source, renders each letter via <use> -->
<svg bind:this={measureEl} class="measure">
	{#each ALL_CHARS as c}
		<g data-char={c}><use href={'#' + c + '_G'} /></g>
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
					href={'#' + item.c + '_G'}
					x={p.x - item.bb.x}
					y={-item.bb.y}
				/>
			{/if}
		{/each}
	</svg>
{:else}
	<div class="placeholder">Memuat...</div>
{/if}

<style>
	.ai-font { display: block; overflow: visible; }
	.source { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; pointer-events: none; }
	.measure { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; pointer-events: none; }
	.placeholder { display: flex; align-items: center; justify-content: center; color: #666; font-family: monospace; }
</style>
