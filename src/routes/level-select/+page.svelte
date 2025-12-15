<script>
	import Animal from "$lib/assets/Animal.svelte";
	import { cn } from "$lib/utils";
	import Button from "./Button.svelte";
	import LevelSelect from './LevelSelect.jpg'

</script>

<img src={LevelSelect} alt="Level Select BG" srcset="" />
<Button class="top-[20cqb] left-[5cqb]" animalType="Chicken" fnAnimateState={(buttonState) =>{
	switch (buttonState) {
		case 'hover':	return 'walk';
		default:        return null;
	}
}}/>

<Button class="top-[45cqb] left-[55cqb]" animalType="Chicken" fnAnimateState={(buttonState) =>{
	switch (buttonState) {
		case 'hover':	return 'walk';
		default:        return null;
	}
}}/>

<Button class="top-0 left-[90cqb]" animalType="Chicken" fnAnimateState={(buttonState) =>{
	switch (buttonState) {
		case 'hover':	return 'walk';
		default:        return null;
	}
}}/>

<Button class="top-[40cqb] left-[145cqb]" animalType="Chicken" fnAnimateState={(buttonState) =>{
	switch (buttonState) {
		case 'hover':	return 'walk';
		default:        return null;
	}
}}/>


