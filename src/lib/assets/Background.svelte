<!-- src/lib/components/Animal.svelte -->
<script lang="ts">
	import { Components as BackgroundComponents, type ComponentName } from './backgrounds';
	import NoImage from './NoImage.svelte';
	export let type: ComponentName;
	const Selected = BackgroundComponents[type];
</script>
{#if Selected}
	<svelte:component this={Selected} class="{($$restProps.class ?? '')}">
		<slot />
	</svelte:component>
{:else}
	<NoImage />
{/if}
