<script>
	// Halaman loading (memuat).
	// Menampilkan animasi loading menggunakan komponen Loading.
	// Setelah animasi selesai (fnAfterAnimate), pengguna otomatis diarahkan ke menu utama (/main-menu).
	import { goto } from "$app/navigation";
	import Loading from "$lib/scenes/Loading.svelte";

</script>
<Loading animate={true} fnAfterAnimate={() => { goto('/main-menu') }}/>