<script lang="ts">
	import { Components as BackgroundComponents, type ComponentName } from './backgrounds';
	import NoImage from './NoImage.svelte';
	import type { Snippet } from 'svelte';

	let {
		type,
		children,
		...restProps
	}: { type: ComponentName; children?: Snippet } = $props();

	const Selected = $derived(BackgroundComponents[type]);
</script>

{#if Selected}
	<Selected {...restProps}>
		{@render children?.()}
	</Selected>
{:else}
	<NoImage {...restProps} />
{/if}
