// File ini berjalan di server (server-side) untuk memuat data sebelum halaman game-3 dirender.
// Fungsi load() memilih satu hewan secara acak dari animalListing dan mengirimkannya ke halaman.

import { animalListing } from "$lib/animalData";
import type { PageServerLoad } from "./$types";

// Fungsi load() dijalankan di server setiap kali halaman game-3 diakses.
// Memilih satu hewan secara acak dari daftar animalListing (50 hewan)
// dan mengembalikannya sebagai props ke komponen halaman.
export const load: PageServerLoad = () => {
    return {
        selectedAnimalComponent: animalListing[Math.floor(Math.random() * animalListing.length)]
    }
};