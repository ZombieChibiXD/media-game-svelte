<script>
	import Animal from "$lib/assets/Animal.svelte";
	import { cn } from "$lib/utils";
	import Button from "./Button.svelte";
	import LevelSelect from './LevelSelect.jpg'

</script>

<img src={LevelSelect} alt="Level Select BG" srcset="" />
<Button
	class="top-[20cqb] left-[5cqb]"
	fnAnimateState={(buttonState) => {
		switch (buttonState) {
			case 'hover':
				return 'walk';
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
></Button>

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
/>

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
/>

<style>
	.text-outlined {
		--thickness: 0.35cqb;
		text-shadow: #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness);
	}
</style>
