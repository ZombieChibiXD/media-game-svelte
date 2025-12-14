<script lang="ts">
  import './loading.css';
  import Animal from '$lib/assets/Animal.svelte';
	import Background from '$lib/assets/Background.svelte';
	import Logo from '$lib/assets/Logo.svelte';
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

  interface Props {
    /** The onclick event handler */
    // onclick?: () => void;
    /** Whether to animate the loading component */
    animate?: boolean;
    fnAfterAnimate?: () => void;
  }


  let {
    animate = false,
    fnAfterAnimate
  }: Props = $props();

  let viewportRef: HTMLElement | null= null;
  function scrollLinear(
    element: HTMLElement,
    target: number,
    duration = 8000 // ms
  ): Promise<void> {
    return new Promise((resolve) => {
      const start = element.scrollLeft;
      const distance = target - start;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        element.scrollLeft = start + distance * progress;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(step);
    });
  }

  onMount(async () => {
    if (!animate || !viewportRef) return;

    // Wait for layout
    await new Promise(requestAnimationFrame);

    const maxScroll =
      viewportRef.scrollWidth - viewportRef.clientWidth;

    // Slow controlled scroll
    await scrollLinear(viewportRef, maxScroll, 15000);

    // Hold on logo
    await new Promise((r) => setTimeout(r, 3000));

    if (fnAfterAnimate) fnAfterAnimate();
  });
</script>
<ScrollArea class="w-full h-full" orientation="horizontal" bind:viewportRef={viewportRef}>
  <Background type="Loading" class="flex items-center justify-center w-auto h-full">
    <div class="min-w-(--view-width) bg-red-500"></div>
    <div class="flex items-center justify-center w-auto h-full *:min-w-[calc(var(--view-width)*0.33)] gap-1.5">
      <Animal type="Cat" />
      <Animal type="Dog" />
      <Animal type="Cat" />
      <Animal type="Mouse" />
      <Animal type="Cat" />
      <Animal type="Mouse" />
      <Animal type="Cat" />
      <Animal type="Mouse" />
    </div>
    <div class="min-w-(--view-width) flex items-center justify-center">
      <Logo />
    </div>
  </Background>
</ScrollArea>
