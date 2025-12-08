<script lang="ts">
  import { Components as ControlComponents, type ComponentName } from './controls';
	import NoImage from './NoImage.svelte';
  export let type: ComponentName;

  const Selected = ControlComponents[type];
</script>

{#if Selected}
<div class="{($$restProps.class ?? '')}" style="{($$restProps.style ?? '')}">
    <svelte:component this={Selected} />
</div>
{:else}
    <NoImage />
{/if}
