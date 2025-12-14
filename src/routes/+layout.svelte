<script lang="ts">
	import '../app.css';
	import { onMount } from "svelte";


	let { children } = $props();

  let isLandscape = $state(true);

  function updateOrientation() {
    isLandscape = window.matchMedia("(orientation: landscape)").matches;
  }

  onMount(() => {
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
  });
</script>

{#if !isLandscape}
	<div class="rotate-overlay">
		<p>Rotate your device</p>
	</div>
{:else}
	<div class="viewport bg-black h-screen w-screen flex items-center justify-center">
		<div class="game aspect-video max-w-svw max-h-svh w-full h-auto bg-red-500">
			{@render children()}
		</div>
	</div>
{/if}

<style>
  .rotate-overlay {
    position: fixed;
    inset: 0;
    background: black;
    color: white;
    display: grid;
    place-items: center;
    text-align: center;
    font-size: clamp(1.2rem, 4vw, 2rem);
    z-index: 9999;
  }
</style>
