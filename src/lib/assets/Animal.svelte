<!-- src/lib/components/Animal.svelte -->
<script lang="ts">
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
