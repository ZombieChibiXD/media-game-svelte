// File ini berisi fungsi-fungsi pembantu (utility) untuk aplikasi,
// termasuk penggabungan kelas Tailwind CSS dan tipe-tipe helper untuk props komponen.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi cn() menggabungkan beberapa nama kelas Tailwind menjadi satu string.
// clsx menangani logika kondisional (true/false/null), lalu twMerge
// menyelesaikan konflik antar kelas Tailwind (misalnya px-4 vs px-2).
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Tipe WithoutChild<T>: menghapus properti "child" dari tipe T jika ada.
// Biasa digunakan saat membuat varian komponen yang tidak menerima child.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;

// Tipe WithoutChildren<T>: menghapus properti "children" dari tipe T jika ada.
// Berguna saat ingin melarang komponen menerima elemen anak.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;

// Tipe WithoutChildrenOrChild<T>: menghapus BOTH "children" dan "child" dari tipe T.
// Kombinasi dari dua tipe helper di atas.
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;

// Tipe WithElementRef<T>: menambahkan properti opsional "ref" bertipe HTMLElement
// ke tipe T. Berguna untuk meneruskan referensi elemen DOM ke komponen.
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
