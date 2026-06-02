// File barrel untuk komponen latar belakang (background).
// Mengekspor komponen Loading (layar loading) serta tipe dan daftar nama komponen.

import Loading from "./Loading.svelte";

// Objek internal yang memetakan nama komponen latar ke komponen Svelte-nya.
const __backgroundComponents = {
  Loading
};
export { Loading, __backgroundComponents as Components };

// Tipe ComponentName: union dari semua nama komponen background.
export type ComponentName = keyof typeof __backgroundComponents;

// Array ComponentNames: daftar nama komponen background sebagai string[].
export const ComponentNames = Object.keys(__backgroundComponents) as Array<keyof typeof __backgroundComponents>;
