<script>
	import { cn } from "$lib/utils";

</script>

<button
	class={cn(
		'absolute inset-0 m-auto w-32 h-32 p-8 rounded-full',
        'cursor-pointer',
		`bg-linear-to-b from-indigo-400 to-indigo-600`,
		`border-2 border-indigo-700`,
		`text-white font-bold`,
		`shadow-[0_5px_0_#3730a3]`,
		`hover:-translate-y-1 hover:shadow-[0_7px_0_#3730a3]`,
		`active:-translate-y-2 active:shadow-[0_3px_0_#3730a3]`,
		`transition-all duration-150`
	)}
	title="Play game"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="w-full h-full lucide lucide-play-icon lucide-play"
		><path
			d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
		/></svg
	>
</button>
