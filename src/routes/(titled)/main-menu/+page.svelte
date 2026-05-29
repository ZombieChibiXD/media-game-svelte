<script>
	import { cn } from "$lib/utils";
	import Landing from '$lib/Landing.jpg'

	let playHover = $state(false)
</script>

<img src={Landing} alt="Landing" srcset="" />

<div
	class={cn(
		'absolute inset-0 top-0 bottom-0 m-auto w-fit h-fit py-2 px-5 flex flex-col items-center gap-8'	)}
>
	<img src="/logo.png" alt="Logo" class="w-64 h-auto" />
	<a
		href="/level-select"
		onmouseenter={() => playHover = true}
		onmouseleave={() => playHover = false}
	>
		<img
			src={playHover ? '/play_hover.svg' : '/play.svg'}
			alt="Play"
			class="w-64 h-auto"
		/>
	</a>
</div>
