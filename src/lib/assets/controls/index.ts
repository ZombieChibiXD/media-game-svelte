// File barrel untuk komponen kontrol UI (tombol-tombol interaktif).
// Mengekspor komponen Play (tombol mulai) serta tipe dan daftar nama komponen.

import Play from "./Play.svelte";

// Objek internal yang memetakan nama komponen kontrol ke komponen Svelte-nya.
const __controlComponents = {
    Play
};
export {Play, __controlComponents as Components };

// Tipe ComponentName: union dari semua nama komponen kontrol.
export type ComponentName = keyof typeof __controlComponents;

// Array ComponentNames: daftar nama komponen kontrol sebagai string[].
export const ComponentNames = Object.keys(__controlComponents) as Array<keyof typeof __controlComponents>;
