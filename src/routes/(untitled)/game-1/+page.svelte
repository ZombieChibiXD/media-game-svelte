<script lang="ts">
	import MatchGame from '$lib/scenes/MatchGame.svelte';
	import Landing from '$lib/Landing.webp';
</script>

<MatchGame landingImage={Landing}>
	{#snippet leftCard({ row })}
		{row.name}
	{/snippet}
</MatchGame>
