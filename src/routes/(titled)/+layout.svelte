<script lang="ts">
	import { AIFont } from '$lib/components/ai-font';

	let { children } = $props();
    const scale = 0.5;
    const gap = 10;

</script>


<div class="absolute inset-0 mx-auto py-2 w-fit h-fit flex flex-col items-center justify-center">
		<AIFont text={'Mari belajar mengenal'} {scale} {gap} />
		<AIFont text={'hewan bersama di'} {scale} {gap} />
		<AIFont text={'SD Saraswati 4 Denpasar'} {scale} {gap} />
</div>

{@render children()}