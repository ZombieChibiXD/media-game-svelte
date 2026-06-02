<script lang="ts">
	// Tata letak untuk rute bertajuk (titled routes).
	// Rute di dalam folder (titled) mewarisi tata letak ini.
	// Saat ini hanya meneruskan konten anak (children) tanpa wrapper tambahan.
	let { children } = $props();
</script>


{@render children()}