<script lang="ts">
	import { goto } from "$app/navigation";
	import { animalListing } from "$lib/animalData";
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import BackButton from "$lib/components/BackButton.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

	import { cn } from "$lib/utils";
	import Button from "./Button.svelte";
	import Encyclopedia from './Encyclopedia.webp'
	import { onMount } from "svelte";


	let viewport: HTMLDivElement | null = null as unknown as HTMLDivElement
	let dialogEl: HTMLDialogElement | null = null as unknown as HTMLDialogElement


	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	function onPointerDown(e: MouseEvent) {
		if (!viewport) return;
		isDragging = true;
		startX = e.clientX;
		startScrollLeft = viewport.scrollLeft;
	}

	function onPointerMove(e: MouseEvent) {
		if (!isDragging || !viewport) return;

		const dx = e.clientX - startX;
		viewport.scrollLeft = startScrollLeft - dx;
	}

	function onPointerUp(e: MouseEvent) {
		if (!viewport) return;

		isDragging = false;
	}

	onMount(()=>{
		if (!viewport) return;

		viewport.onmousedown = onPointerDown;
		viewport.onmousemove = onPointerMove;
		viewport.onmouseup = onPointerUp;
		viewport.onmouseleave = onPointerUp;
		viewport.style = "cursor: grab"


	})

	let selectedName = $state('Kosong')
	let selectedDescription = $state('Kosong')
	let selectedAnimal : ComponentName | undefined = $state();

</script>

<ScrollArea bind:viewportRef={viewport} class="h-full w-full" orientation="horizontal">
	<div
		class="w-max relative animal-box cursor-grab flex"
		class:cursor-grabbing={isDragging}
		style="height: var(--view-height);"
	>
		<img
			src={Encyclopedia}
			class="h-full select-none w-auto pointer-events-none object-cover"
			alt="Latar Pilih Level"
			srcset=""
		/>
		{#each animalListing.sort((a, b) => a.x - b.x) as { type, x, y, width, name, description }}
			<div
				class="absolute h-auto bg-transparent inset-0 aspect-square cursor-pointer"
				style="width: {width}cqb; margin-left: {x}cqb; margin-top: {y}cqb"
			>
				<button
					onclick={(ev) => {
						selectedName = name;
						selectedDescription = description;
						selectedAnimal = type;
						dialogEl?.showModal();
					}}
					class="h-full w-full border-8 border-transparent transition-all duration-300 hover:border-pink-500 active:border-red-600 rounded-full flex items-center justify-center"
				>
					<Animal {type} />
				</button>
			</div>
		{/each}
	</div>
</ScrollArea>

<dialog
	bind:this={dialogEl}
	class="m-auto p-[5cqb] text-[2cqb] rounded-2xl relative w-full max-w-[100cqb]"
>
	<button
		class="absolute top-[1cqb] right-[1cqb] bg-red-500 text-white p-[0.25cqb] w-[4cqb] rounded-full"
		type="reset"
		onclick={() => {
			dialogEl?.close();
		}}
		aria-label="Tutup"
		autofocus
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-x-icon lucide-x w-full h-full"
			><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
		>
	</button>
	<article class="flex gap-[3cqb] h-full w-full">
		<aside class="basis-2/5">
			<Animal type={selectedAnimal} animate="walk" />
			<audio autoplay controls src="/audios/{selectedAnimal}.mp3"></audio>
			<p
				class=" bg-gray-500 text-center font-semibold font-schoolbell mt-[1cqb] rounded-full p-[1cqb]"
			>
				{selectedName}
			</p>
		</aside>
		<div class="basis-3/5 relative font-semibold font-schoolbell text-center">
			<div class="absolute inset-0">
				<ScrollArea class="h-full w-full p-[2cqb]">
					{#each selectedDescription.split('\n') as line}
						{line}<br />
					{/each}
				</ScrollArea>
			</div>
		</div>
	</article>
</dialog>


<BackButton onclick={()=>{ goto('/level-select') }} />

<style>
.animal-box {
	/* container-type: size; */
}
</style>
