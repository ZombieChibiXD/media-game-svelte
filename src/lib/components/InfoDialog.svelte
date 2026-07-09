<script lang="ts">
	import XIcon from "$lib/components/XIcon.svelte";
	import Animal from "$lib/assets/Animal.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import type { ComponentName } from "$lib/assets/animals";

	let {
		dialogEl = $bindable(null),
		animal = undefined as ComponentName | undefined,
		lines = [],
		animalClass = '',
		audioSrc = '',
		name = '',
	}: {
		dialogEl?: HTMLDialogElement | null;
		animal?: ComponentName;
		lines?: string[];
		animalClass?: string;
		audioSrc?: string;
		name?: string;
	} = $props();
</script>

<dialog
	bind:this={dialogEl}
	class="m-auto p-[5cqb] text-[2.5cqb] rounded-2xl relative w-full max-w-[100cqb]"
	{...{'aria-description': 'animal description'}}>
	<button
		class="absolute top-[1cqb] right-[1cqb] text-white p-[0.25cqb] w-[4cqb] rounded-full cursor-pointer"
		type="reset"
		onclick={() => { dialogEl?.close(); }}
		aria-label="Tutup"
		autofocus
	>
		<XIcon />
	</button>
	<article class="flex gap-[3cqb] h-full w-full">
		<aside class="basis-2/5">
			<div class="flex justify-center items-center *:max-h-[30cqb]">
				<Animal type={animal} animate="walk" class={animalClass} />

			</div>
			{#if audioSrc}
				<audio autoplay controls src={audioSrc} />
			{/if}
			{#if name}
				<p class="bg-gray-500 text-center font-semibold font-arial mt-[1cqb] rounded-full p-[1cqb]">
					{name}
				</p>
			{/if}
		</aside>
		<div class="basis-3/5 relative font-semibold font-arial text-center">
			<div class="absolute inset-0">
				<ScrollArea class="h-full w-full p-[2cqb]">
					{#each lines as line}
						{line}<br />
					{/each}
				</ScrollArea>
			</div>
		</div>
	</article>
</dialog>
