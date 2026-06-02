// File barrel untuk komponen UI ScrollArea.
// ScrollArea adalah area yang bisa di-scroll (digeser) dengan scrollbar kustom.
// Mengekspor Root (container scroll) dan Scrollbar (batang penggulung).

import Scrollbar from "./scroll-area-scrollbar.svelte";
import Root from "./scroll-area.svelte";

export {
	Root,                    // Komponen root scroll-area (container utama)
	Scrollbar,               // Komponen scrollbar (batang penggulung)
	//,
	Root as ScrollArea,       // Alias: Root diekspor juga sebagai ScrollArea
	Scrollbar as ScrollAreaScrollbar, // Alias: Scrollbar diekspor juga sebagai ScrollAreaScrollbar
};
