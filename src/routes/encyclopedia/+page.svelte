<script lang="ts">
	import { goto } from "$app/navigation";
	import Animal from "$lib/assets/Animal.svelte";
	import type { ComponentName } from "$lib/assets/animals";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

	import { cn } from "$lib/utils";
	import Button from "./Button.svelte";
	import Encyclopedia from './Encyclopedia.jpg'
	import { onMount } from "svelte";


	let viewport: HTMLDivElement | null = null as unknown as HTMLDivElement
	let dialogEl: HTMLDialogElement | null = null as unknown as HTMLDialogElement

	interface AnimalList {
		type: ComponentName;
		x:number;
		y:number;
		width: number;
		name: string;
		description: string;
	}
	let animalListing: AnimalList[] = [
		{
			type: 'Bat',
			x: 300,
			y: 20,
			width: 10,
			name: 'Kelelawar',
			description: `Kelelawar adalah hewan yang aktif pada malam hari. Mereka bisa terbang menggunakan sayap tipis yang terbuat dari kulit. Kelelawar sering tidur dengan posisi terbalik di gua atau pohon.

			Kelelawar sangat pintar karena bisa melihat dengan suara. Mereka mengeluarkan bunyi kecil dan mendengarkan pantulannya untuk mengetahui arah saat terbang di tempat gelap.`
		},
		{
			type: 'Bee',
			x: 200,
			y: 2,
			width: 10,
			name: 'Lebah',
			description: `Lebah adalah serangga kecil yang suka terbang dari bunga ke bunga. Mereka mengumpulkan cairan manis yang disebut nektar untuk membuat madu.

			Lebah sangat penting bagi tumbuhan karena membantu bunga tumbuh menjadi buah. Mereka bekerja bersama dalam sarang dan saling membantu satu sama lain.`
		},

		{
			type: 'Beetle',
			x: 210,
			y: 6,
			width: 8,
			name: 'Kumbang',
			description: `Kumbang adalah serangga kecil dengan tubuh keras dan mengkilap. Mereka sering ditemukan di tanah, daun, atau kayu.

			Kumbang sangat kuat untuk ukurannya dan bisa membawa benda yang lebih berat dari tubuhnya. Ada banyak jenis kumbang di dunia.`
		},
		{
			type: 'Butterfly',
			x: 180,
			y: 10,
			width: 10,
			name: 'Kupu-kupu',
			description: `Kupu-kupu adalah serangga cantik dengan sayap berwarna-warni. Mereka terbang pelan dan sering hinggap di bunga.

			Sebelum menjadi kupu-kupu, mereka adalah ulat. Perubahan ini disebut metamorfosis dan merupakan salah satu hal paling menakjubkan di alam.`
		},

		{
			type: 'Cat',
			x: 150,
			y: 25,
			width: 10,
			name: 'Kucing',
			description: `Kucing adalah hewan peliharaan yang lucu dan berbulu lembut. Mereka suka tidur, bermain, dan mengejar benda kecil.

			Kucing bisa melompat dengan sangat lincah dan memiliki pendengaran yang tajam. Mereka sering mengeong untuk berbicara dengan manusia.`
		},
		{
			type: 'Chicken',
			x: 200,
			y: 40,
			width: 10,
			name: 'Ayam',
			description: `Ayam adalah hewan yang sering kita lihat di rumah atau di peternakan. Ayam memiliki sayap, tetapi tidak bisa terbang jauh seperti burung.

			Ayam bertelur dan telurnya sering dimakan manusia. Mereka suka mengais tanah untuk mencari makanan kecil seperti biji atau serangga.`
		},
		{
			type: 'Cow',
			x: 190,
			y: 50,
			width: 18,
			name: 'Sapi',
			description: `Sapi adalah hewan besar yang hidup di padang rumput. Mereka memakan rumput sepanjang hari untuk mendapatkan energi.

			Sapi sangat berguna bagi manusia karena menghasilkan susu. Susu bisa diolah menjadi keju, mentega, dan yogurt.`
		},
		{
			type: 'Crab',
			x: 100,
			y: 5,
			width: 10,
			name: 'Kepiting',
			description: `Kepiting adalah hewan yang hidup di laut atau pantai. Mereka memiliki cangkang keras untuk melindungi tubuhnya.

			Kepiting berjalan menyamping dan memiliki capit yang kuat. Capit ini digunakan untuk makan dan melindungi diri.`
		},
		{
			type: 'Deer',
			x: 250,
			y: 22,
			width: 14,
			name: 'Rusa',
			description: `Rusa adalah hewan yang hidup di hutan dan padang rumput. Rusa jantan biasanya memiliki tanduk di kepalanya.

			Rusa berlari dengan cepat untuk menghindari bahaya. Mereka memakan daun, rumput, dan buah-buahan.`
		},
		{
			type: 'Dog',
			x: 150,
			y: 45,
			width: 12,
			name: 'Anjing',
			description: `Anjing adalah sahabat manusia yang setia. Mereka suka bermain, berlari, dan menemani pemiliknya.

			Anjing sangat pintar dan bisa dilatih melakukan banyak hal. Mereka juga memiliki penciuman yang sangat tajam.`
		},
		{
			type: 'Dolphin',
			x: 30,
			y: 40,
			width: 15,
			name: 'Lumba-lumba',
			description: `Lumba-lumba adalah hewan laut yang sangat cerdas. Mereka suka berenang cepat dan melompat keluar dari air.

			Lumba-lumba hidup berkelompok dan saling berkomunikasi dengan suara. Mereka ramah dan sering membantu sesamanya.`
		},
		{
			type: 'Dove',
			x: 170,
			y: 50,
			width: 10,
			name: 'Merpati',
			description: `Merpati adalah burung yang sering hidup dekat manusia. Mereka memiliki sayap kuat untuk terbang jauh.

			Merpati dikenal sebagai burung yang tenang dan setia. Mereka sering kembali ke rumah yang sama.`
		},
		{
			type: 'Dragonfly',
			x: 230,
			y: 8,
			width: 10,
			name: 'Capung',
			description: `Capung adalah serangga yang bisa terbang sangat cepat. Mereka memiliki tubuh panjang dan sayap tipis.

			Capung sering hidup di dekat air. Mereka membantu mengurangi jumlah nyamuk.`
		},
		{
			type: 'Duck',
			x: 160,
			y: 50,
			width: 10,
			name: 'Bebek',
			description: `Bebek adalah unggas yang suka hidup di dekat air. Mereka memiliki kaki berselaput yang membantu mereka berenang dengan baik.

			Bebek bisa berjalan di darat dan berenang di air. Mereka sering hidup berkelompok dan mengeluarkan suara "kwek kwek".`
		},
		{
			type: 'Elephant',
			x: 200,
			y: 65,
			width: 30,
			name: 'Gajah',
			description: `Gajah adalah hewan darat terbesar di dunia. Mereka memiliki belalai panjang yang digunakan untuk makan dan minum.

			Gajah sangat cerdas dan memiliki ingatan yang kuat. Mereka hidup bersama keluarga dan saling menjaga satu sama lain.`
		},
		{
			type: 'Fly',
			x: 220,
			y: 6,
			width: 8,
			name: 'Lalat',
			description: `Lalat adalah serangga kecil yang sering kita lihat di sekitar rumah. Mereka terbang dengan sangat cepat.

			Lalat suka makanan manis dan sisa makanan. Karena itu, kita harus selalu menjaga kebersihan.`
		},

		{
			type: 'FlyingThermite',
			x: 190,
			y: 6,
			width: 8,
			name: 'Rayap Terbang',
			description: `Rayap terbang adalah serangga kecil yang keluar saat musim hujan. Mereka terbang bersama-sama dalam jumlah besar.

			Rayap terbang akan mencari tempat baru untuk membuat rumah. Setelah itu, mereka melepaskan sayapnya.`
		},
		{
			type: 'Giraffe',
			x: 175,
			y: 65,
			width: 25,
			name: 'Jerapah',
			description: `Jerapah adalah hewan tertinggi di dunia. Mereka memiliki leher yang sangat panjang untuk mencapai daun di pohon tinggi.

			Jerapah hidup di padang rumput Afrika. Mereka berjalan dengan langkah yang tenang dan anggun.`
		},
		{
			type: 'Goat',
			x: 310,
			y: 26,
			width: 14,
			name: 'Kambing',
			description: `Kambing adalah hewan ternak yang suka memanjat dan melompat. Mereka memakan rumput dan daun.

			Kambing memiliki tanduk dan suara khas. Mereka mudah beradaptasi di berbagai tempat.`
		},
		{
			type: 'Gorrila',
			x: 160,
			y: 65,
			width: 15,
			name: 'Gorila',
			description: `Gorila adalah kera besar yang sangat kuat. Mereka hidup di hutan dan berjalan menggunakan tangan dan kaki.

			Meskipun terlihat menakutkan, gorila sebenarnya lembut dan penyayang. Mereka hidup bersama keluarga.`
		},
		{
			type: 'Hedgehog',
			x: 140,
			y: 20,
			width: 10,
			name: 'Landak',
			description: `Landak adalah hewan kecil dengan duri tajam di tubuhnya. Duri ini digunakan untuk melindungi diri.

			Saat merasa takut, landak akan menggulung tubuhnya. Mereka aktif di malam hari.`
		},
		{
			type: 'Horse',
			x: 200,
			y: 26,
			width: 16,
			name: 'Kuda',
			description: `Kuda adalah hewan besar yang kuat dan suka berlari. Mereka telah membantu manusia sejak lama untuk bepergian dan bekerja.

			Kuda bisa berlari dengan sangat cepat dan memiliki kaki yang kuat. Mereka juga mengenali pemiliknya dan bisa dilatih dengan baik.`
		},

		{
			type: 'Koala',
			x: 250,
			y: 85,
			width: 16,
			name: 'Koala',
			description: `Koala adalah hewan yang hidup di Australia. Mereka suka memanjat pohon dan tidur lama.

			Koala memakan daun eucalyptus. Mereka terlihat lucu dan bergerak dengan lambat.`
		},
		{
			type: 'Lion',
			x: 250,
			y: 45,
			width: 15,
			name: 'Singa',
			description: `Singa adalah kucing besar yang hidup di padang rumput. Singa jantan memiliki rambut tebal di sekitar kepalanya.

			Singa hidup berkelompok yang disebut kawanan. Mereka bekerja sama saat berburu makanan.`
		},
		{
			type: 'Manta',
			x: 70,
			y: 14,
			width: 10,
			name: 'Ikan Pari Manta',
			description: `Ikan pari manta adalah hewan laut yang sangat besar dan lebar. Mereka berenang dengan anggun di laut.

			Manta tidak berbahaya dan memakan makanan kecil di air. Mereka sering disebut raksasa lembut laut.`
		},

		{
			type: 'Mosquitto',
			x: 170,
			y: 4,
			width: 6,
			name: 'Nyamuk',
			description: `Nyamuk adalah serangga kecil yang terbang dan berdengung. Beberapa nyamuk menggigit manusia.

			Nyamuk berkembang biak di air. Karena itu, air bersih harus selalu dijaga.`
		},
		{
			type: 'Moth',
			x: 190,
			y: 15,
			width: 10,
			name: 'Ngengat',
			description: `Ngengat adalah serangga yang mirip kupu-kupu. Mereka lebih aktif pada malam hari.

			Ngengat tertarik pada cahaya. Mereka memiliki sayap dengan warna lembut.`
		},
		{
			type: 'Nautilus',
			x: 100,
			y: 50,
			width: 10,
			name: 'Nautilus',
			description: `Nautilus adalah hewan laut dengan cangkang spiral yang indah. Mereka hidup di laut dalam.

			Nautilus sudah hidup sejak zaman dinosaurus. Mereka menggunakan tentakel untuk bergerak dan makan.`
		},
		{
			type: 'Octopus',
			x: 75,
			y: 50,
			width: 18,
			name: 'Gurita',
			description: `Gurita adalah hewan laut dengan delapan lengan. Setiap lengannya sangat kuat dan lentur.

			Gurita sangat pintar dan bisa bersembunyi dengan mengubah warna tubuhnya.`
		},
		{
			type: 'Panda',
			x: 305,
			y: 70,
			width: 15,
			name: 'Panda',
			description: `Panda adalah beruang lucu berwarna hitam dan putih. Mereka suka duduk sambil memakan bambu.

			Panda terlihat malas, tetapi sebenarnya sangat kuat. Mereka hidup di hutan bambu yang sejuk.`
		},
		{
			type: 'Parrot',
			x: 300,
			y: 5,
			width: 12,
			name: 'Burung Beo',
			description: `Burung beo adalah burung berwarna cerah. Mereka bisa meniru suara manusia.

			Burung beo sangat pintar dan suka bermain. Mereka hidup di hutan tropis.`
		},
		{
			type: 'Peacock',
			x: 175,
			y: 26,
			width: 18,
			name: 'Merak',
			description: `Merak adalah burung besar yang terkenal dengan ekornya yang sangat indah. Merak jantan bisa membuka ekornya seperti kipas besar penuh warna.

			Ekor merak digunakan untuk menarik perhatian merak betina. Merak berjalan dengan anggun dan hidup di daerah yang hangat.`
		},
		{
			type: 'PrayingMantis',
			x: 210,
			y: 15,
			width:7,
			name: 'Belalang Sembah',
			description: `Belalang sembah adalah serangga dengan posisi tangan seperti sedang berdoa. Mereka sering diam menunggu mangsa.

			Belalang sembah sangat cepat saat menangkap makanan. Mereka membantu menjaga keseimbangan alam.`
		},
		{
			type: 'Rabbit',
			x: 140,
			y: 42,
			width: 7,
			name: 'Kelinci',
			description: `Kelinci adalah hewan kecil dengan telinga panjang. Mereka suka melompat dan berlari cepat.

			Kelinci memakan sayuran seperti wortel dan rumput. Mereka juga sangat pemalu dan mudah terkejut.`
		},
		{
			type: 'SeaHorse',
			x: 20,
			y: 60,
			width: 7,
			name: 'Kuda Laut',
			description: `Kuda laut adalah hewan laut kecil dengan bentuk seperti kuda. Mereka berenang pelan di air.

			Kuda laut sangat unik karena jantannya yang membawa telur. Mereka hidup di antara tanaman laut.`
		},
		{
			type: 'SeaTurtle',
			x: 90,
			y: 28,
			width: 14,
			name: 'Penyu',
			description: `Penyu adalah kura-kura laut yang berenang jauh di lautan. Mereka memiliki sirip besar untuk berenang.

			Penyu kembali ke pantai untuk bertelur. Mereka sudah hidup di bumi sejak lama sekali.`
		},
		{
			type: 'Shrimp',
			x: 60,
			y: 76,
			width: 8,
			name: 'Udang',
			description: `Udang adalah hewan kecil yang hidup di laut dan sungai. Mereka berenang menggunakan ekor.

			Udang sering bersembunyi di pasir atau batu. Banyak orang menyukai udang sebagai makanan.`
		},
		{
			type: 'Snake',
			x: 170,
			y: 18,
			width: 10,
			name: 'Ular',
			description: `Ular adalah hewan yang tidak memiliki kaki. Mereka bergerak dengan cara melata di tanah.

			Beberapa ular berbisa, tetapi banyak juga yang tidak berbahaya. Ular membantu menjaga keseimbangan alam.`
		},
		{
			type: 'Squid',
			x: 20,
			y: 44,
			width: 10,
			name: 'Cumi-cumi',
			description: `Cumi-cumi adalah hewan laut dengan tubuh lunak dan banyak lengan. Mereka berenang sangat cepat.

			Cumi-cumi bisa menyemprotkan tinta untuk melindungi diri. Ini membantu mereka melarikan diri dari bahaya.`
		},
		{
			type: 'Starfish',
			x: 100,
			y: 70,
			width: 12,
			name: 'Bintang Laut',
			description: `Bintang laut adalah hewan laut berbentuk bintang. Mereka hidup di dasar laut.

			Bintang laut bisa menumbuhkan kembali lengannya. Ini membuat mereka sangat istimewa.`
		},
		{
			type: 'Tiger',
			x: 270,
			y: 34,
			width: 12,
			name: 'Harimau',
			description: `Harimau adalah kucing besar dengan garis hitam dan oranye. Setiap harimau memiliki pola garis yang berbeda.

			Harimau sangat kuat dan bisa berlari cepat. Mereka hidup sendiri dan menjaga wilayahnya.`
		},
		{
			type: 'Tortoise',
			x: 110,
			y: 28,
			width: 16,
			name: 'Kura-kura Darat',
			description: `Kura-kura darat memiliki cangkang keras untuk melindungi tubuhnya. Mereka bergerak dengan lambat.

			Kura-kura bisa hidup sangat lama. Mereka memakan tumbuhan dan sayuran.`
		},
		{
			type: 'Wasp',
			x: 180,
			y: 0,
			width: 8,
			name: 'Tawon',
			description: `Tawon adalah serangga yang mirip lebah tetapi lebih agresif. Mereka bisa menyengat saat merasa terancam.

			Tawon membantu mengontrol serangga lain di alam. Mereka membuat sarang dari kertas.`
		},
		{
			type: 'Wolf',
			x: 300,
			y: 35,
			width: 12,
			name: 'Serigala',
			description: `Serigala adalah hewan mirip anjing yang hidup di alam liar. Mereka terkenal dengan suara aumannya.

			Serigala hidup berkelompok dan bekerja sama mencari makanan. Mereka sangat setia pada kelompoknya.`
		},
		{
			type: 'Zebra',
			x: 215,
			y: 45,
			width: 12,
			name: 'Zebra',
			description: `Zebra adalah hewan yang mirip kuda dengan garis hitam putih. Garis ini membantu zebra saling mengenali.

			Zebra hidup berkelompok di padang rumput. Mereka selalu waspada terhadap bahaya.`
		},
	];


	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	function onPointerDown(e: MouseEvent) {
		if (!viewport) return;
		isDragging = true;
		startX = e.clientX;
		startScrollLeft = viewport.scrollLeft;
	}

	function onPointerMove(e: MouseEvent) {
		if (!isDragging || !viewport) return;

		const dx = e.clientX - startX;
		viewport.scrollLeft = startScrollLeft - dx;
	}

	function onPointerUp(e: MouseEvent) {
		if (!viewport) return;

		isDragging = false;
	}

	onMount(()=>{
		if (!viewport) return;

		viewport.onmousedown = onPointerDown;
		viewport.onmousemove = onPointerMove;
		viewport.onmouseup = onPointerUp;
		viewport.onmouseleave = onPointerUp;
		viewport.style = "cursor: grab"


	})

	let selectedName = $state('Empty')
	let selectedDescription = $state('Empty')
	let selectedAnimal : ComponentName | undefined = $state();

</script>

<ScrollArea bind:viewportRef={viewport} class="h-full w-full" orientation="horizontal">
	<div
		class="w-max relative animal-box cursor-grab flex"
		class:cursor-grabbing={isDragging}
		style="height: var(--view-height);"
	>
		<img
			src={Encyclopedia}
			class="h-full select-none w-auto pointer-events-none object-cover"
			alt="Level Select BG"
			srcset=""
		/>
		{#each animalListing.sort((a, b) => a.x - b.x) as { type, x, y, width, name, description }}
			<div
				class="absolute h-auto bg-transparent inset-0 aspect-square cursor-pointer"
				style="width: {width}cqb; margin-left: {x}cqb; margin-top: {y}cqb"
			>
				<button
					onclick={(ev) => {
						selectedName = name;
						selectedDescription = description;
						selectedAnimal = type;
						dialogEl?.showModal();
					}}
					class="h-full w-full border-8 border-transparent transition-all duration-300 hover:border-pink-500 active:border-red-600 rounded-full flex items-center justify-center"
				>
					<Animal {type} />
				</button>
			</div>
		{/each}
	</div>
</ScrollArea>

<dialog
	bind:this={dialogEl}
	class="m-auto p-[5cqb] text-[2cqb] rounded-2xl relative w-full max-w-[100cqb]"
>
	<button
		class="absolute top-[1cqb] right-[1cqb] bg-red-500 text-white p-[0.25cqb] w-[4cqb] rounded-full"
		type="reset"
		onclick={() => {
			dialogEl?.close();
		}}
		aria-label="Close modal"
		autofocus
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-x-icon lucide-x w-full h-full"
			><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
		>
	</button>
	<article class="flex gap-[3cqb] h-full w-full">
		<aside class="basis-2/5">
			<Animal type={selectedAnimal} animate="walk" />
			<audio autoplay controls src="/audios/{selectedAnimal}.mp3"></audio>
			<p
				class=" bg-gray-500 text-center font-semibold font-schoolbell mt-[1cqb] rounded-full p-[1cqb]"
			>
				{selectedName}
			</p>
		</aside>
		<div class="basis-3/5 relative font-semibold font-schoolbell text-center">
			<div class="absolute inset-0">
				<ScrollArea class="h-full w-full p-[2cqb]">
					{@html selectedDescription.replaceAll('\n', '<br>\n')}
				</ScrollArea>
			</div>
		</div>
	</article>
</dialog>


<button onclick={()=>{ goto('/level-select') }} title="Navigate back" class="bg-gray-300/80 hover:bg-gray-300/90 active:bg-black transition-all duration-300 cursor-pointer absolute top-0 left-0 m-[2cqb] p-[2cqb] rounded-lg">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-icon lucide-arrow-big-left"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>
</button>

<style>
.animal-box {
	/* container-type: size; */
}
</style>
