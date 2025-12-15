import type { SVGAttributes } from "svelte/elements";

export type AnimalProps = {
    animate_frown?: (el: SVGElement) => Animation[];
    animate_wag?: (el: SVGElement) => Animation[];
    animate_playful?: (el: SVGElement) => Animation[];
    animate_walk?: (el: SVGElement) => Animation[];
    animate?: null | 'walk';
    el?: SVGElement
} & SVGAttributes<SVGElement>;