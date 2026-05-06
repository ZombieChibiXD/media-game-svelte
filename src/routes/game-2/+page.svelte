<script lang="ts">
	import Animal from '$lib/assets/Animal.svelte';
	import MatchGame from '$lib/scenes/MatchGame.svelte';
	import Landing from '../Landing.jpg';
</script>

<MatchGame landingImage={Landing}>
	{#snippet leftCard({ row })}
		<Animal class="h-[10cqw] **:fill-[black_!important]" type={row.type} />
	{/snippet}
</MatchGame>
