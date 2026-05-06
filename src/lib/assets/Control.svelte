<script lang="ts">
	import { Components as ControlComponents, type ComponentName } from './controls';
	import NoImage from './NoImage.svelte';

	let {
		type,
		class: className = '',
		style = '',
		...restProps
	}: { type: ComponentName; class?: string; style?: string } = $props();

	const Selected = $derived(ControlComponents[type]);
</script>

{#if Selected}
	<div class={className} {style}>
		<Selected {...restProps} />
	</div>
{:else}
	<NoImage />
{/if}
