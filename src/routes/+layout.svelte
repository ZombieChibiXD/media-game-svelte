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
	<div class="viewpot bg-black flex items-center justify-center w-screen h-screen">
    <div class="game-container">
      <div class="game border border-white text-white relative">
        {@render children()}
      </div>
    </div>
	</div>
{/if}

<style>
  .game-container {
    container-type: size;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    width: 100%;
  }
  .game {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
  @container (min-aspect-ratio: 16 / 9) {
    .game {
      width: auto;
      height: 100%;
    }
  }

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
