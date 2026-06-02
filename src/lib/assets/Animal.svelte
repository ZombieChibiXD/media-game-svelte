<!-- src/lib/components/Animal.svelte -->
<script lang="ts">
	// Komponen Animal — merender gambar SVG hewan berdasarkan tipe yang dipilih.
	// Menerima properti 'type' (nama hewan) dan properti lainnya untuk SVG.
	// Jika tipe tidak dikenali atau tidak tersedia, menampilkan komponen NoImage sebagai fallback.
	// Mendukung animasi (properti 'animate') untuk efek seperti hewan berjalan.
	import type { SVGAttributes } from 'svelte/elements';
  import { Components as AnimalComponents, type ComponentName } from './animals';
	import type { AnimalProps } from './animals/type';
	import NoImage from './NoImage.svelte';

  let {
    type,
    ...restProps
  }: AnimalProps & {
    type?: ComponentName;
  } & SVGAttributes<SVGElement> = $props();

  let Selected = $derived.by(()=>{
    if (type === undefined || !AnimalComponents?.[type]) return null;
    return AnimalComponents[type];
  })
</script>

{#if Selected}
  <Selected {...restProps} />
{:else}
    <NoImage  {...restProps} />
{/if}
