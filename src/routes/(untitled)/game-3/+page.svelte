<script lang="ts">
	// Permainan 3: Cari Hewan.
	// Menampilkan petunjuk (hint) dalam sebuah modal dialog yang muncul otomatis saat halaman dibuka.
	// Pemain harus menemukan hewan yang benar di dalam lanskap yang dapat digulir secara horizontal.
	// Jika jawaban benar, dialog sukses muncul dengan skor 100 dan opsi "Kembali" atau "Ulangi".
	// Tombol bantuan (?) di pojok kanan atas untuk membuka kembali dialog petunjuk.
	import { goto } from "$app/navigation";
	import { animalListing } from "$lib/animalData";
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import BackButton from "$lib/components/BackButton.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import XIcon from "$lib/components/XIcon.svelte";

	import { cn } from "$lib/utils";
	import type { PageProps } from "./$types";
	import Button from "./Button.svelte";
	import Encyclopedia from '../encyclopedia/Encyclopedia.webp'
	import { onMount } from "svelte";
	import Question from "$lib/components/Question.svelte";


	let viewport: HTMLDivElement | null = null as unknown as HTMLDivElement
	let dialogEl: HTMLDialogElement | null = null as unknown as HTMLDialogElement
	let dialogSuccessEl: HTMLDialogElement | null = null as unknown as HTMLDialogElement


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

		dialogEl?.showModal()
	})

	let prop : PageProps = $props();

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
						if (type == prop.data.selectedAnimalComponent.type) {
							dialogSuccessEl?.showModal()
						} else {
							dialogEl?.showModal();
						}
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
		class="absolute top-[1cqb] right-[1cqb] text-white p-[0.25cqb] w-[4cqb] rounded-full cursor-pointer"
		type="reset"
		onclick={() => {
			dialogEl?.close();
		}}
		aria-label="Tutup"
		autofocus
	>
		<XIcon />

	</button>
	<article class="flex gap-[3cqb] h-full w-full">
		<aside class="basis-2/5">
			<Animal type={prop.data.selectedAnimalComponent.type} animate="walk" class="**:fill-[black_!important] w-full"/>
		</aside>
		<div class="basis-3/5 relative font-semibold font-schoolbell text-center">
			<div class="absolute inset-0">
				<ScrollArea class="h-full w-full p-[2cqb]">
					{#each prop.data.selectedAnimalComponent.hint.split('\n') as line}
						{line}<br />
					{/each}
				</ScrollArea>
			</div>
		</div>
	</article>
</dialog>


<dialog
	bind:this={dialogSuccessEl}
	class="m-auto p-[5cqb] text-[2cqb] rounded-2xl relative w-full max-w-[75cqb]"
>
	<button
		class="absolute top-[1cqb] right-[1cqb] text-white p-[0.25cqb] w-[4cqb] rounded-full cursor-pointer"
		type="reset"
		onclick={() => {
			dialogSuccessEl?.close();
		}}
		aria-label="Tutup"
		autofocus
	>
		<XIcon />
	</button>
	<article class="flex flex-col gap-[3cqb] h-full w-full">
		<header class="h-[10cqb] rounded-2xl border-2 border-black w-full flex flex-col items-center justify-center text-[3cqb] p-[10cqb]">
			<span>
				Hebat!
			</span>
			<span>
				Skor: 100
			</span>
		</header>
		<footer class="flex items-center justify-center gap-[5cqb] *:bg-cyan-300 *:p-[2cqb] *:rounded-2xl *:uppercase font-bold font-schoolbell">
			<button onclick={()=>goto('/level-select')}>
				Kembali
			</button>

			<button onclick={()=>window.location.reload()}>
				Ulangi
			</button>
		</footer>
	</article>
</dialog>


<button onclick={()=>{ dialogEl?.showModal()  }} title="Bantuan" class="active:bg-black transition-all duration-300 cursor-pointer absolute top-0 right-0 m-[2cqb] p-[2cqb] rounded-lg">
	<Question class="w-[6cqb] h-[6cqb] pointer-events-none" />
</button>

<BackButton onclick={()=>{ goto('/level-select') }} />

<style>
.animal-box {
	/* container-type: size; */
}
</style>
