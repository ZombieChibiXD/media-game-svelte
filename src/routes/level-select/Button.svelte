<script lang="ts">
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import type { AnimalProps } from "$lib/assets/animals/type";
	import { cn } from "$lib/utils";
    import type { HTMLAnchorAttributes } from 'svelte/elements'
    type Prop = {
        buttonState?: null | 'hover' | 'click';
        fnAnimateState?: (buttonState: undefined | null | 'hover' | 'click') => AnimalProps['animate'];
        animalType: ComponentName,
    } & HTMLAnchorAttributes
    let {
        buttonState = $bindable(),
        animalType: type,
        fnAnimateState = (buttonState) =>{
            return null;
        },
        class: className,
        ...restProps
    }: Prop = $props();

</script>

<a
	onpointerenter={() => {
		buttonState = 'hover';
	}}
	onpointerleave={() => {
		buttonState = null;
	}}
    {...restProps}
	class={cn("absolute inset-0 w-[20cqb] h-auto aspect-square bg-red-500 rounded-lg py-[1cqb] px-[1cqb] flex flex-col justify-center items-center", className)}
>
	<Animal
		{type}
		class="p-[0.5cqb] bg-purple-500 aspect-square rounded-full"
		animate={fnAnimateState(buttonState)}
	/>
	<span class="uppercase text-[2cqb] font-semibold text-black text-center text-wrap"> Ensiklopedia Satwa </span>
</a>
