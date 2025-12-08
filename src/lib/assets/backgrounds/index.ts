import Loading from "./Loading.svelte";

const __backgroundComponents = {
  Loading
};
export { Loading, __backgroundComponents as Components };


export type ComponentName = keyof typeof __backgroundComponents;
export const ComponentNames = Object.keys(__backgroundComponents) as Array<keyof typeof __backgroundComponents>;
