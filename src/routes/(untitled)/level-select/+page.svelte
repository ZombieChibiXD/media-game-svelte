<script>
	import { goto } from "$app/navigation";
	import Animal from "$lib/assets/Animal.svelte";
	import BackButton from "$lib/components/BackButton.svelte";
	import { cn } from "$lib/utils";
	import Button from "./Button.svelte";
	import LevelSelect from './LevelSelect.jpg'

</script>

<img src={LevelSelect} alt="Latar Pilih Level" srcset="" />
<Button
	class="top-[20cqb] left-[5cqb]"
	fnAnimateState={(buttonState) => {
		switch (buttonState) {
			// case 'hover':
			// 	return 'walk';
			default:
				return null;
		}
	}}
	href="/encyclopedia"
>
	{#snippet children({ fnAnimateState, buttonState })}
		<Animal
			type="Chicken"
			class="p-[0.5cqb] bg-green-200/50 border-8 border-amber-300 aspect-square rounded-full"
			animate={fnAnimateState(buttonState)}
		/>
		<span
			class="uppercase text-[2.5cqb] font-extrabold font-schoolbell text-black text-center text-wrap text-outlined"
		>
			Ensiklopedia Satwa
		</span>
	{/snippet}
</Button>

<Button
	class="top-[45cqb] left-[55cqb]"
	fnAnimateState={(buttonState) => {
		switch (buttonState) {
			case 'hover':
				return 'walk';
			default:
				return null;
		}
	}}
	href="/game-1"
>
	{#snippet children({ fnAnimateState, buttonState })}
		<Animal
			type="Lion"
			class="p-[0.5cqb] bg-green-200/50 border-8 border-amber-300 aspect-square rounded-full"
			animate={fnAnimateState(buttonState)}
		/>
		<span
			class="uppercase text-[2.5cqb] font-extrabold font-schoolbell text-black text-center text-wrap text-outlined"
		>
			Mencocokan Nama Hewan
		</span>
	{/snippet}
</Button>

<Button
	class="top-0 left-[90cqb]"
	fnAnimateState={(buttonState) => {
		switch (buttonState) {
			case 'hover':
				return 'walk';
			default:
				return null;
		}
	}}
	href="/game-2"
>

	{#snippet children({ fnAnimateState, buttonState })}
		<Animal
			type="Tiger"
			class="p-[0.5cqb] bg-green-200/50 border-8 border-amber-300 aspect-square rounded-full"
			animate={fnAnimateState(buttonState)}
		/>
		<span
			class="uppercase text-[2.5cqb] font-extrabold font-schoolbell text-black text-center text-wrap text-outlined"
		>
			Mencocokan badan hewan
		</span>
	{/snippet}
</Button>

<Button
	class="top-[40cqb] left-[145cqb]"
	fnAnimateState={(buttonState) => {
		switch (buttonState) {
			case 'hover':
				return 'walk';
			default:
				return null;
		}
	}}
	href="game-3"
>


	{#snippet children({ fnAnimateState, buttonState })}
		<Animal
			type="Dog"
			class="p-[0.5cqb] bg-green-200/50 border-8 border-amber-300 aspect-square rounded-full"
			animate={fnAnimateState(buttonState)}
		/>
		<span
			class="uppercase text-[2.5cqb] font-extrabold font-schoolbell text-black text-center text-wrap text-outlined"
		>
			Cari Hewan
		</span>
	{/snippet}
</Button>


<BackButton onclick={()=>{ goto('/main-menu') }} />

<style>
	.text-outlined {
		--thickness: 0.35cqb;
		text-shadow: #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness);
	}
</style>
