<script lang="ts">
	// Permainan 2: Mencocokan Badan Hewan.
	// Menggunakan komponen MatchGame dengan kartu kiri menampilkan gambar badan hewan (SVG).
	// Pemain mencocokkan gambar badan hewan dengan gambar hewan utuh di kartu kanan.
	import Animal from '$lib/assets/Animal.svelte';
	import MatchGame from '$lib/scenes/MatchGame.svelte';
	import Landing from '$lib/Landing.webp';
</script>

<MatchGame landingImage={Landing}>
	{#snippet leftCard({ row })}
		<Animal class="h-[10cqw] **:fill-[black_!important]" type={row.type} />
	{/snippet}
</MatchGame>
