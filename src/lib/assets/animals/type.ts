// File ini mendefinisikan tipe AnimalProps yang digunakan oleh semua komponen hewan SVG.
// Setiap komponen hewan menerima props ini untuk mengontrol animasi dan atribut SVG.

import type { SVGAttributes } from "svelte/elements";

// Tipe AnimalProps: props standar untuk semua komponen hewan.
// - animate_frown: fungsi animasi saat hewan terlihat sedih/marah
// - animate_wag: fungsi animasi saat hewan bergoyang (contoh: ekor bergerak)
// - animate_playful: fungsi animasi saat hewan bersikap ceria
// - animate_walk: fungsi animasi saat hewan berjalan
// - animate: string kontrol animasi (null = diam, 'walk' = berjalan)
// - el: referensi ke elemen SVG (untuk akses langsung dari luar)
// Mewarisi semua atribut SVG standar (fill, stroke, dll) dari SVGAttributes<SVGElement>.
export type AnimalProps = {
    animate_frown?: (el: SVGElement) => Animation[];
    animate_wag?: (el: SVGElement) => Animation[];
    animate_playful?: (el: SVGElement) => Animation[];
    animate_walk?: (el: SVGElement) => Animation[];
    animate?: null | 'walk';
    el?: SVGElement
} & SVGAttributes<SVGElement>;