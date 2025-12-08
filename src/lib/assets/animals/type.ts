import type { SVGAttributes } from "svelte/elements";

export type AnimalProps = {
    animate?: () => void;
    el?: SVGElement
} & SVGAttributes<SVGElement>;