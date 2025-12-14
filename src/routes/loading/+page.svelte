<script>
	import { goto } from "$app/navigation";
	import Loading from "$lib/scenes/Loading.svelte";

</script>
<Loading animate={true} fnAfterAnimate={() => { goto('/main-menu') }}/>