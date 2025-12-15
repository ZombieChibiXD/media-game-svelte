<script lang="ts">
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import type { AnimalProps } from "$lib/assets/animals/type";
	import { cn, type WithoutChildren } from "$lib/utils";
	import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from 'svelte/elements'
    type Prop = {
        buttonState?: null | 'hover' | 'click';
        fnAnimateState: (buttonState: undefined | null | 'hover' | 'click') => AnimalProps['animate'];
	} &  WithoutChildren<HTMLAnchorAttributes>
    let {
        buttonState = $bindable(),
        fnAnimateState = (buttonState) =>{
            return null;
        },
        class: className,
        children,
        ...restProps
    }: Prop & {
		children?: Snippet<[{fnAnimateState: Prop["fnAnimateState"], buttonState: Prop["buttonState"]}]>
	} = $props();

</script>

<a
	onpointerenter={() => {
		buttonState = 'hover';
	}}
	onpointerleave={() => {
		buttonState = null;
	}}
	{...restProps}
	class={cn(
		'absolute inset-0 w-[20cqb] h-auto aspect-square cursor-pointer rounded-lg py-[1cqb] px-[1cqb] flex flex-col justify-center items-center',
		className
	)}
>
{@render children?.({fnAnimateState, buttonState})}
</a>
