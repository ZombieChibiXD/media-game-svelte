<script lang="ts">
	import '../app.css';
	import { afterNavigate, goto, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	import LandingImg from './Landing.jpg';
	import LevelSelectImg from './level-select/LevelSelect.jpg';
	import EncyclopediaImg from './encyclopedia/Encyclopedia.jpg';

	let { children } = $props();

  let isLandscape = $state(true);

  function updateOrientation() {
    isLandscape = window.matchMedia("(orientation: landscape)").matches;
  }

  onMount(() => {
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
  });

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let viewport: HTMLDivElement | null = $state(null)

  let layoutWidth = $state(0);
  let layoutHeight = $state(0);

  let isFullScreen = $state(false)
  let fullScreenClicked: (el: Event)=>void = $state(()=>{})

  $effect(()=>{
    if (!viewport) return;
    fullScreenClicked = (el) => {
      if (!document.fullscreenElement) {
        isFullScreen = true;
        viewport?.requestFullscreen();
      } else {
        document.exitFullscreen?.();
        isFullScreen = false;
      }
    }
  })
</script>

<svelte:head>
	<link rel="preload" as="image" href={LandingImg} />
	<link rel="prefetch" as="image" href={LevelSelectImg} />
	<link rel="prefetch" as="image" href={EncyclopediaImg} />
</svelte:head>

{#if !isLandscape}
	<div class="rotate-overlay">
		<p>Rotate your device</p>
	</div>
{:else}
	<div class="viewport bg-black flex items-center justify-center w-screen h-screen" bind:this={viewport}>
    <div class="game-container">
      <div class="game border border-white text-white relative overflow-hidden" bind:clientWidth={layoutWidth} bind:clientHeight={layoutHeight} style="--view-width: {layoutWidth}px; --view-height: {layoutHeight}px">
        {@render children()}
        <button onclick={fullScreenClicked} class="bg-gray-300/80 hover:bg-gray-300/90 active:bg-black transition-all duration-300 cursor-pointer absolute bottom-0 right-0 m-[2cqb] p-[2cqb] rounded-lg">
          {#if isFullScreen}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minimize-icon lucide-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>
          {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-icon lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
          {/if}
        </button>
      </div>
    </div>
	</div>
{/if}

<style>
  :root {
    --view-width: 0px;
    --view-height: 0px;
  }
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
    container-type: size;
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
