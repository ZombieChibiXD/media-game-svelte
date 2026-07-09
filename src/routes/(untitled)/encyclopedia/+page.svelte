<script lang="ts">
	// Halaman ensiklopedia satwa.
	// Menampilkan daftar hewan yang dapat digulir secara horizontal (drag-to-scroll).
	// Setiap hewan dapat diklik untuk membuka dialog modal berisi detail (nama, deskripsi, dan audio TTS).
	// Dialog modal menampilkan animasi hewan berjalan dan teks deskripsi yang dapat digulir.
	import { goto } from "$app/navigation";
	import { animalListing } from "$lib/animalData";
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import BackButton from "$lib/components/BackButton.svelte";
	import InfoDialog from "$lib/components/InfoDialog.svelte";
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

<InfoDialog
	bind:dialogEl
	animal={selectedAnimal}
	lines={selectedDescription.split('\n')}
	audioSrc={selectedAnimal ? `/audios/tts/${selectedAnimal}.mp3` : ''}
	name={selectedName}
/>


<BackButton onclick={()=>{ goto('/level-select') }} />

<style>
.animal-box {
	/* container-type: size; */
}
</style>
