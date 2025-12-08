import Play from "./Play.svelte";


const __controlComponents = {
    Play
};
export {Play, __controlComponents as Components };


export type ComponentName = keyof typeof __controlComponents;
export const ComponentNames = Object.keys(__controlComponents) as Array<keyof typeof __controlComponents>;
