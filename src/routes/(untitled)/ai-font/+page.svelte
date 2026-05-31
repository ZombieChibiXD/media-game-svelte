<script lang="ts">
	import { AIFont } from '$lib/components/ai-font';

	let input = $state('SVELTEKIT');
	let scale = $state(1);
	let gap = $state(10);
</script>

<div class="page">
	<h1>AI Font — Render SvelteKit</h1>
	<p>Ketik teks di bawah untuk merender dengan font berlapis buatan AI.</p>

	<input type="text" bind:value={input} placeholder="Ketik teks..." class="input" maxlength={20} />

	<div class="controls">
		<label class="range-label">
			Skala: {scale}x
			<input type="range" bind:value={scale} min={0.3} max={3} step={0.1} />
		</label>
		<label class="range-label">
			Jarak: {gap}px
			<input type="range" bind:value={gap} min={2} max={40} step={1} />
		</label>
	</div>

	<div class="preview">
		<AIFont text={input || 'KETIK'} {scale} {gap} />
	</div>

	<div class="info">
		<h3>Lapisan:</h3>
		<div class="layers">
			<span class="swatch o"></span> Garis Luar (emas→merah)
			<span class="swatch io"></span> Garis Dalam (oranye→cokelat)
			<span class="swatch s"></span> Bayangan (hijau)
			<span class="swatch f"></span> Isian (dasar gelap)
		</div>
	</div>
</div>

<style>
	.page {
		max-width: 900px;
		margin: 2rem auto;
		padding: 0 1rem;
		font-family: system-ui, sans-serif;
		background: #0f0f1a;
		color: #e0e0e0;
		min-height: 100vh;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}
	p {
		color: #888;
		margin-bottom: 1.5rem;
	}
	.input {
		width: 100%;
		padding: 0.75rem 1rem;
		font-size: 1.2rem;
		border: 2px solid #333;
		border-radius: 8px;
		background: #1a1a2e;
		color: #e0e0e0;
		outline: none;
		margin-bottom: 1rem;
	}
	.input:focus {
		border-color: #f8dd57;
	}
	.controls {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		align-items: center;
	}
	.range-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #888;
		flex: 1;
	}
	.range-label input {
		flex: 1;
		min-width: 80px;
	}
	.toggle-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #aaa;
		cursor: pointer;
	}
	.preview {
		background: #1a1a2e;
		border-radius: 12px;
		padding: 2rem;
		overflow-x: auto;
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}
	.info {
		background: #1a1a2e;
		border-radius: 12px;
		padding: 1.5rem;
	}
	.info h3 {
		margin-bottom: 0.75rem;
	}
	.layers {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		align-items: center;
	}
	.swatch {
		display: inline-block;
		width: 24px;
		height: 24px;
		border-radius: 4px;
		margin-right: 0.5rem;
		vertical-align: middle;
	}
	.swatch.o { background: linear-gradient(180deg, #f8dd57, #aa3c2e); }
	.swatch.io { background: linear-gradient(180deg, #cc632c, #542b1a); }
	.swatch.s { background: linear-gradient(180deg, #498545, #afd470); }
	.swatch.f { background: #1a1a2e; border: 1px solid #333; }
</style>
