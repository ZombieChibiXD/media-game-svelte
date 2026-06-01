<script>
	import { cn } from "$lib/utils";
	import { AIFont } from '$lib/components/ai-font';
	import Landing from '$lib/Landing.webp'

	let playHover = $state(false)
    const scale = 0.5;
    const gap = 10;

</script>

<img src={Landing} alt="Halaman Utama" srcset="" />

<div
	class={cn(
		'absolute inset-0 top-0 bottom-0 m-auto w-fit h-fit py-2 px-5 flex flex-col items-center gap-8'
	)}
>
	<div class="mx-auto py-2 w-fit h-fit flex flex-col items-center justify-center">
		<img src="/logo.png" alt="Logo" class="w-96 h-fit my-4 bg-white/50" />
		<AIFont text={'Mari belajar mengenal'} {scale} {gap} />
		<AIFont text={'hewan bersama di'} {scale} {gap} />
		<AIFont text={'SD Saraswati 4 Denpasar'} {scale} {gap} />
	</div>
	<a
		href="/level-select"
		onmouseenter={() => (playHover = true)}
		onmouseleave={() => (playHover = false)}
	>
		<img src={playHover ? '/play_hover.svg' : '/play.svg'} alt="Main" class="w-64 h-auto" />
	</a>
</div>
