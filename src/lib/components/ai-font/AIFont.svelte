<script lang="ts">
	let { text = '', scale = 1, gap = 10 }: { text?: string; scale?: number; gap?: number } = $props();

	const SPACE_W = 20;

	const DIMS: Record<string, { w: number; h: number }> = {
		'0': { w: 128, h: 162 },
		'1': { w: 93, h: 165 },
		'2': { w: 119, h: 176 },
		'3': { w: 115, h: 159 },
		'4': { w: 136, h: 169 },
		'5': { w: 114, h: 165 },
		'6': { w: 122, h: 162 },
		'7': { w: 106, h: 163 },
		'8': { w: 126, h: 166 },
		'9': { w: 116, h: 168 },
		'a': { w: 129, h: 166 },
		'b': { w: 128, h: 169 },
		'c': { w: 112, h: 167 },
		'd': { w: 116, h: 161 },
		'e': { w: 104, h: 165 },
		'f': { w: 119, h: 159 },
		'g': { w: 115, h: 156 },
		'h': { w: 131, h: 166 },
		'i': { w: 71, h: 157 },
		'j': { w: 135, h: 161 },
		'k': { w: 135, h: 159 },
		'l': { w: 104, h: 158 },
		'm': { w: 155, h: 164 },
		'n': { w: 133, h: 162 },
		'o': { w: 126, h: 157 },
		'p': { w: 134, h: 159 },
		'q': { w: 149, h: 183 },
		'r': { w: 137, h: 163 },
		's': { w: 116, h: 166 },
		't': { w: 111, h: 168 },
		'u': { w: 140, h: 161 },
		'v': { w: 129, h: 161 },
		'w': { w: 162, h: 158 },
		'x': { w: 133, h: 162 },
		'y': { w: 125, h: 175 },
		'z': { w: 118, h: 163 },
	};

	let items = $derived(
		text.toLowerCase().split('').map((c) => {
			if (c === ' ') return { t: 'space' } as const;
			const d = DIMS[c];
			if (!d) return { t: 'space' } as const;
			return { t: 'char' as const, c, w: d.w / 2, h: d.h / 2 };
		})
	);
</script>

<div class="ai-font" style="gap: {gap * scale}px;">
	{#each items as item}
		{#if item.t === 'space'}
			<div class="space" style="width: {SPACE_W * scale}px;"></div>
		{:else}
			<img
				src={`/fonts/png/${item.c}@2x.png`}
				alt={item.c}
				class="glyph"
				width={item.w * scale}
				height={item.h * scale}
			/>
		{/if}
	{/each}
</div>

<style>
	.ai-font {
		display: flex;
		align-items: end;
		line-height: 0;
	}
	.glyph {
		display: block;
	}
</style>
