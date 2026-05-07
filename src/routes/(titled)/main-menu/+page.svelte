<script>
	import { cn } from "$lib/utils";
	import Landing from '$lib/Landing.jpg'

</script>

<img src={Landing} alt="Landing" srcset="" />

<div
	class={cn(
		'absolute inset-0 top-0 bottom-0 m-auto w-fit h-fit py-2 px-5 flex flex-col',
		'*:[a]:px-20 *:[a]:py-4 *:[a]:text-2xl *:[a]:uppercase *:[a]:rounded-full',
		'*:[a]:font-semibold *:[a]:tracking-widest ',
		'*:[a]:bg-green-600 *:[a]:hover:bg-green-500 *:[a]:active:bg-green-700',
	)}
>
	<a href="/level-select">Play</a>
</div>
