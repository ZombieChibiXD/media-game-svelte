<script lang="ts">
  import './loading.css';
  import Animal from '$lib/assets/Animal.svelte';
	import Background from '$lib/assets/Background.svelte';
	import Logo from '$lib/assets/Logo.svelte';

  interface Props {
    /** The onclick event handler */
    // onclick?: () => void;
    /** Whether to animate the loading component */
    animate?: boolean;
  }

  export let animate: Props['animate'] = false;


  // if animate is true, add the animate class to the body where it scrolls to the side
  $: if (animate) {
  } else {
  }

</script>

<Background type="Loading" class="overflow-x-auto bg-amber-300 overflow-y-auto flex flex-row items-center justify-center">
  <Animal type="Dog" />
  <Animal type="Cat" />
  <Animal type="Mouse" />
  <Logo />
</Background>
