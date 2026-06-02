<script lang="ts">
  // Komponen ini menampilkan layar loading dengan pemutaran video.
  // Saat video selesai diputar, komponen akan memanggil fungsi fnAfterAnimate
  // yang disediakan oleh komponen induk untuk melanjutkan ke scene berikutnya.

  import './loading.css';
  import Animal from '$lib/assets/Animal.svelte';
	import Background from '$lib/assets/Background.svelte';
	import Logo from '$lib/assets/Logo.svelte';
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { HTMLVideoAttributes } from 'svelte/elements';

  interface Props {
    /** Apakah video loading akan dijalankan otomatis */
    animate?: boolean;
    /** Fungsi callback yang dipanggil setelah animasi/video selesai */
    fnAfterAnimate?: () => void;
  }


  let {
    animate = false,
    fnAfterAnimate
  }: Props = $props();

  // Referensi ke elemen video HTML
  let el: HTMLVideoElement | null = $state(null)

  // Efek reaktif: saat elemen video tersedia, pasang handler onended
  // untuk memanggil fnAfterAnimate ketika video selesai diputar.
  $effect(()=>{
    if (!el) return;
    el.onended = (e) => {
      if (!fnAfterAnimate) return;
      fnAfterAnimate();
    }
  })

</script>

<video bind:this={el} src="/LoadingVideoLanding.mp4" class="h-full w-full" autoplay={animate}><track kind="captions"></video>
