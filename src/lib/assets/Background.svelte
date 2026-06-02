<script lang="ts">
	// Komponen Background — merender latar belakang berdasarkan tipe yang dipilih.
	// Menerima properti 'type' (nama background) dan 'children' (slot konten di dalamnya).
	// Jika tipe tidak dikenali, menampilkan NoImage sebagai fallback.
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
