import Dog from "./Dog.svelte";
import Cat from "./Cat.svelte";
import Mouse from "./Mouse.svelte";
import Crocodile from "./Crocodile.svelte";
import type { AnimalProps } from "./type";
import type { Component } from "svelte";

const __animalComponents : {
  [x: string]: Component<AnimalProps>
} = {
  Cat,
  // Dog,
  // Mouse,
  // Crocodile
} as const;

export { Dog, Cat, Mouse, __animalComponents as Components };


export type ComponentName = keyof typeof __animalComponents;
export const ComponentNames = Object.keys(__animalComponents) as ComponentName[];
