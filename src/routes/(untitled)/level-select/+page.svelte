<script>
	import { goto } from "$app/navigation";
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
			Cocok Nama Hewan
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
			Cocok Awak Hewan
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


<button onclick={()=>{ goto('/main-menu') }} title="Navigate back" class="bg-gray-300/80 hover:bg-gray-300/90 active:bg-black transition-all duration-300 cursor-pointer absolute top-0 left-0 m-[2cqb] p-[2cqb] rounded-lg">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-icon lucide-arrow-big-left"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>
	</button>
<style>
	.text-outlined {
		--thickness: 0.35cqb;
		text-shadow: #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness), #FFF 0px 0px var(--thickness);
	}
</style>
