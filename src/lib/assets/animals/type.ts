import type { SVGAttributes } from "svelte/elements";

export type AnimalProps = {
    animate_frown?: () => void;
    animate_wag?: () => void;
    animate_playful?: () => void;
    el?: SVGElement
} & SVGAttributes<SVGElement>;