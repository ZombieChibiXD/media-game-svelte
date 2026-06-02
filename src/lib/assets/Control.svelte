<script lang="ts">
	// Komponen Control — merender kontrol/elemen UI berdasarkan tipe yang dipilih.
	// Menerima properti 'type', 'class', dan 'style' untuk kustomisasi tampilan.
	// Jika tipe tidak dikenali, menampilkan NoImage sebagai fallback.
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
