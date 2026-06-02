<script lang="ts">
	// Permainan 1: Mencocokan Nama Hewan.
	// Menggunakan komponen MatchGame dengan kartu kiri menampilkan nama hewan (teks).
	// Pemain mencocokkan nama hewan dengan gambar hewan yang sesuai di kartu kanan.
	import MatchGame from '$lib/scenes/MatchGame.svelte';
	import Landing from '$lib/Landing.webp';
</script>

<MatchGame landingImage={Landing}>
	{#snippet leftCard({ row })}
		{row.name}
	{/snippet}
</MatchGame>
