<script lang="ts">
  import './loading.css';
  import Animal from '$lib/assets/Animal.svelte';
	import Background from '$lib/assets/Background.svelte';
	import Logo from '$lib/assets/Logo.svelte';
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { HTMLVideoAttributes } from 'svelte/elements';

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

  let el: HTMLVideoElement | null = $state(null)


  $effect(()=>{
    if (!el) return;
    el.onended = (e) => {
      if (!fnAfterAnimate) return;
      fnAfterAnimate();
    }
  })

</script>

<video bind:this={el} src="/LoadingVideoLanding.mp4" class="h-full w-full" autoplay={animate}><track kind="captions"></video>
