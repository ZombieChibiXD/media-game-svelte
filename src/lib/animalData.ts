// File ini berisi data semua hewan yang ditampilkan dalam permainan.
// Setiap hewan memiliki nama, deskripsi, petunjuk (hint), dan posisi (x, y, width)
// untuk penempatannya di dalam scene ensiklopedia.

import type { ComponentName } from "./assets/animals";

// Interface AnimalItem mendefinisikan struktur data untuk satu entri hewan.
// - type: nama komponen Svelte yang merender hewan ini
// - x, y: koordinat posisi hewan di scene ensiklopedia
// - width: lebar area hewan di scene
// - name: nama hewan dalam bahasa Indonesia
// - description: paragraf penjelasan (bahasa Indonesia, ditampilkan di detail modal)
// - hint: petunjuk ciri-ciri hewan (digunakan untuk permainan tebak-tebakan)
export interface AnimalItem {
    type: ComponentName;
    x:number;
    y:number;
    width: number;
    name: string;
    description: string;
    hint: string;
}

// Array animalListing berisi 50 entri hewan yang menjadi data utama permainan.
// Setiap entri memiliki komponen SVG, posisi di peta, dan informasi edukatif.
export const animalListing: AnimalItem[] = [
    {
        type: 'Bat',
        x: 300,
        y: 20,
        width: 14,
        name: 'Kelelawar',
        description: `Kelelawar adalah hewan yang aktif pada malam hari. Mereka bisa terbang menggunakan sayap tipis yang terbuat dari kulit. Kelelawar sering tidur dengan posisi terbalik di gua atau pohon.

        Kelelawar sangat pintar karena bisa melihat dengan suara. Mereka mengeluarkan bunyi kecil dan mendengarkan pantulannya untuk mengetahui arah saat terbang di tempat gelap.`,
        hint: `Aku bisa terbang
Aku aktif di malam hari
Aku tidur terbalik
Aku menggunakan bunyi untuk melihat arah`
    },
    {
        type: 'Bee',
        x: 200,
        y: 2,
        width: 10,
        name: 'Lebah',
        description: `Lebah adalah serangga kecil yang suka terbang dari bunga ke bunga. Mereka mengumpulkan cairan manis yang disebut nektar untuk membuat madu.

        Lebah sangat penting bagi tumbuhan karena membantu bunga tumbuh menjadi buah. Mereka bekerja bersama dalam sarang dan saling membantu satu sama lain.`,
        hint: `Aku serangga kecil
Aku mengumpulkan nektar
Aku bisa membuat madu
Aku hidup bersama dalam sarang`
    },

    {
        type: 'Beetle',
        x: 212,
        y: 2,
        width: 10,
        name: 'Kumbang',
        description: `Kumbang adalah serangga kecil dengan tubuh keras dan mengkilap. Mereka sering ditemukan di tanah, daun, atau kayu.

        Kumbang sangat kuat untuk ukurannya dan bisa membawa benda yang lebih berat dari tubuhnya. Ada banyak jenis kumbang di dunia.`,
        hint: `Aku serangga kecil
Tubuhku keras dan mengkilap
Aku bisa membawa benda lebih berat dari tubuhku
Aku sering ditemukan di tanah atau kayu`
    },
    {
        type: 'Butterfly',
        x: 180,
        y: 12,
        width: 10,
        name: 'Kupu-kupu',
        description: `Kupu-kupu adalah serangga cantik dengan sayap berwarna-warni. Mereka terbang pelan dan sering hinggap di bunga.

        Sebelum menjadi kupu-kupu, mereka adalah ulat. Perubahan ini disebut metamorfosis dan merupakan salah satu hal paling menakjubkan di alam.`,
        hint: `Aku serangga cantik
Sayapku berwarna-warni
Aku dulunya ulat
Perubahan tubuhku disebut metamorfosis`
    },

    {
        type: 'Cat',
        x: 150,
        y: 25,
        width: 10,
        name: 'Kucing',
        description: `Kucing adalah hewan peliharaan yang lucu dan berbulu lembut. Mereka suka tidur, bermain, dan mengejar benda kecil.

        Kucing bisa melompat dengan sangat lincah dan memiliki pendengaran yang tajam. Mereka sering mengeong untuk berbicara dengan manusia.`,
        hint: `Aku hewan peliharaan
Aku berbulu lembut
Aku suka tidur dan bermain
Aku mengeong untuk berbicara`
    },
    {
        type: 'Chicken',
        x: 200,
        y: 40,
        width: 10,
        name: 'Ayam',
        description: `Ayam adalah hewan yang sering kita lihat di rumah atau di peternakan. Ayam memiliki sayap, tetapi tidak bisa terbang jauh seperti burung.

        Ayam bertelur dan telurnya sering dimakan manusia. Mereka suka mengais tanah untuk mencari makanan kecil seperti biji atau serangga.`,
        hint: `Aku unggas yang hidup di peternakan
Aku memiliki sayap tapi tidak bisa terbang jauh
Aku bertelur
Aku suka mengais tanah`
    },
    {
        type: 'Cow',
        x: 190,
        y: 50,
        width: 18,
        name: 'Sapi',
        description: `Sapi adalah hewan besar yang hidup di padang rumput. Mereka memakan rumput sepanjang hari untuk mendapatkan energi.

        Sapi sangat berguna bagi manusia karena menghasilkan susu. Susu bisa diolah menjadi keju, mentega, dan yogurt.`,
        hint: `Aku hewan besar
Aku memakan rumput
Aku bisa menghasilkan susu
Aku hidup di padang rumput`
    },
    {
        type: 'Crab',
        x: 120,
        y: 5,
        width: 10,
        name: 'Kepiting',
        description: `Kepiting adalah hewan yang hidup di laut atau pantai. Mereka memiliki cangkang keras untuk melindungi tubuhnya.

        Kepiting berjalan menyamping dan memiliki capit yang kuat. Capit ini digunakan untuk makan dan melindungi diri.`,
        hint: `Aku hewan laut
Aku berjalan menyamping
Aku punya capit kuat
Tubuhku dilindungi cangkang keras`
    },
    {
        type: 'Deer',
        x: 250,
        y: 22,
        width: 14,
        name: 'Rusa',
        description: `Rusa adalah hewan yang hidup di hutan dan padang rumput. Rusa jantan biasanya memiliki tanduk di kepalanya.

        Rusa berlari dengan cepat untuk menghindari bahaya. Mereka memakan daun, rumput, dan buah-buahan.`,
        hint: `Aku hewan pemakan daun
Aku hidup di hutan dan padang rumput
Aku bisa berlari cepat
Aku punya tanduk (jika jantan)`
    },
    {
        type: 'Dog',
        x: 150,
        y: 45,
        width: 10,
        name: 'Anjing',
        description: `Anjing adalah sahabat manusia yang setia. Mereka suka bermain, berlari, dan menemani pemiliknya.

        Anjing sangat pintar dan bisa dilatih melakukan banyak hal. Mereka juga memiliki penciuman yang sangat tajam.`,
        hint: `Aku hewan peliharaan
Aku suka bermain dan berlari
Aku bisa dilatih
Aku punya penciuman tajam`
    },
    {
        type: 'Dolphin',
        x: 30,
        y: 40,
        width: 15,
        name: 'Lumba-lumba',
        description: `Lumba-lumba adalah hewan laut yang sangat cerdas. Mereka suka berenang cepat dan melompat keluar dari air.

        Lumba-lumba hidup berkelompok dan saling berkomunikasi dengan suara. Mereka ramah dan sering membantu sesamanya.`,
        hint: `Aku hewan laut
Aku pintar dan ramah
Aku suka berenang cepat
Aku hidup berkelompok`
    },
    {
        type: 'Dove',
        x: 170,
        y: 50,
        width: 10,
        name: 'Merpati',
        description: `Merpati adalah burung yang sering hidup dekat manusia. Mereka memiliki sayap kuat untuk terbang jauh.

        Merpati dikenal sebagai burung yang tenang dan setia. Mereka sering kembali ke rumah yang sama.`,
        hint: `Aku burung
Aku hidup dekat manusia
Aku bisa terbang jauh
Aku selalu kembali ke rumah yang sama`
    },
    {
        type: 'Dragonfly',
        x: 230,
        y: 8,
        width: 10,
        name: 'Capung',
        description: `Capung adalah serangga yang bisa terbang sangat cepat. Mereka memiliki tubuh panjang dan sayap tipis.

        Capung sering hidup di dekat air. Mereka membantu mengurangi jumlah nyamuk.`,
        hint: `Aku serangga terbang cepat
Tubuhku panjang dan ramping
Aku hidup di dekat air
Aku membantu mengurangi nyamuk`
    },
    {
        type: 'Duck',
        x: 160,
        y: 50,
        width: 10,
        name: 'Bebek',
        description: `Bebek adalah unggas yang suka hidup di dekat air. Mereka memiliki kaki berselaput yang membantu mereka berenang dengan baik.

        Bebek bisa berjalan di darat dan berenang di air. Mereka sering hidup berkelompok dan mengeluarkan suara "kwek kwek".`,
        hint: `Aku unggas
Aku suka hidup di dekat air
Kakiku berselaput
Aku bisa berjalan di darat dan berenang`
    },
    {
        type: 'Elephant',
        x: 200,
        y: 65,
        width: 30,
        name: 'Gajah',
        description: `Gajah adalah hewan darat terbesar di dunia. Mereka memiliki belalai panjang yang digunakan untuk makan dan minum.

        Gajah sangat cerdas dan memiliki ingatan yang kuat. Mereka hidup bersama keluarga dan saling menjaga satu sama lain.`,
        hint: `Aku hewan darat terbesar
Aku punya belalai panjang
Aku cerdas dengan ingatan kuat
Aku hidup bersama keluarga`
    },
    {
        type: 'Fly',
        x: 220,
        y: 6,
        width: 10,
        name: 'Lalat',
        description: `Lalat adalah serangga kecil yang sering kita lihat di sekitar rumah. Mereka terbang dengan sangat cepat.

        Lalat suka makanan manis dan sisa makanan. Karena itu, kita harus selalu menjaga kebersihan.`,
        hint: `Aku serangga kecil
Aku terbang cepat
Aku menyebarkan penyakit, seperti tipes
Aku sering ada di sekitar rumah`
    },

    {
        type: 'FlyingThermite',
        x: 190,
        y: 6,
        width: 10,
        name: 'Rayap Terbang',
        description: `Rayap terbang adalah serangga kecil yang keluar saat musim hujan. Mereka terbang bersama-sama dalam jumlah besar.

        Rayap terbang akan mencari tempat baru untuk membuat rumah. Setelah itu, mereka melepaskan sayapnya.`,
        hint: `Aku serangga kecil
Aku terbang saat musim hujan
Aku mencari tempat baru untuk membuat rumah
Aku melepaskan sayap setelah terbang`
    },
    {
        type: 'Giraffe',
        x: 175,
        y: 65,
        width: 25,
        name: 'Jerapah',
        description: `Jerapah adalah hewan tertinggi di dunia. Mereka memiliki leher yang sangat panjang untuk mencapai daun di pohon tinggi.

        Jerapah hidup di padang rumput Afrika. Mereka berjalan dengan langkah yang tenang dan anggun.`,
        hint: `Aku hewan tertinggi
Aku punya leher panjang
Aku memakan daun di pohon tinggi
Aku hidup di padang rumput Afrika`
    },
    {
        type: 'Goat',
        x: 265,
        y: 10,
        width: 14,
        name: 'Kambing',
        description: `Kambing adalah hewan ternak yang suka memanjat dan melompat. Mereka memakan rumput dan daun.

        Kambing memiliki tanduk dan suara khas. Mereka mudah beradaptasi di berbagai tempat.`,
        hint: `Aku hewan ternak
Aku suka memanjat
Aku memakan rumput dan daun
Aku punya tanduk`
    },
    {
        type: 'Gorrila',
        x: 160,
        y: 65,
        width: 15,
        name: 'Gorila',
        description: `Gorila adalah kera besar yang sangat kuat. Mereka hidup di hutan dan berjalan menggunakan tangan dan kaki.

        Meskipun terlihat menakutkan, gorila sebenarnya lembut dan penyayang. Mereka hidup bersama keluarga.`,
        hint: `Aku kera besar
Aku kuat
Aku berjalan dengan tangan dan kaki
Aku hidup bersama keluarga`
    },
    {
        type: 'Hedgehog',
        x: 140,
        y: 20,
        width: 10,
        name: 'Landak',
        description: `Landak adalah hewan kecil dengan duri tajam di tubuhnya. Duri ini digunakan untuk melindungi diri.

        Saat merasa takut, landak akan menggulung tubuhnya. Mereka aktif di malam hari.`,
        hint: `Aku hewan kecil
Tubuhku berduri
Aku menggulung tubuh saat takut
Aku aktif di malam hari`
    },
    {
        type: 'Horse',
        x: 200,
        y: 26,
        width: 16,
        name: 'Kuda',
        description: `Kuda adalah hewan besar yang kuat dan suka berlari. Mereka telah membantu manusia sejak lama untuk bepergian dan bekerja.

        Kuda bisa berlari dengan sangat cepat dan memiliki kaki yang kuat. Mereka juga mengenali pemiliknya dan bisa dilatih dengan baik.`,
        hint: `Aku hewan besar
Aku suka berlari
Aku punya kaki kuat
Aku bisa dilatih`},

    {
        type: 'Koala',
        x: 250,
        y: 85,
        width: 16,
        name: 'Koala',
        description: `Koala adalah hewan yang hidup di Australia. Mereka suka memanjat pohon dan tidur lama.

        Koala memakan daun eucalyptus. Mereka terlihat lucu dan bergerak dengan lambat.`,
        hint: `Aku hewan Australia
Aku memanjat pohon
Aku tidur lama
Aku memakan daun eucalyptus`
    },
    {
        type: 'Lion',
        x: 250,
        y: 45,
        width: 15,
        name: 'Singa',
        description: `Singa adalah kucing besar yang hidup di padang rumput. Singa jantan memiliki rambut tebal di sekitar kepalanya.

        Singa hidup berkelompok yang disebut kawanan. Mereka bekerja sama saat berburu makanan.`,
        hint: `Aku kucing besar
Aku hidup berkelompok
Aku jantan punya rambut tebal di kepala
Aku berburu bersama kawanan`
    },
    {
        type: 'Manta',
        x: 70,
        y: 14,
        width: 10,
        name: 'Ikan Pari Manta',
        description: `Ikan pari manta adalah hewan laut yang sangat besar dan lebar. Mereka berenang dengan anggun di laut.

        Manta tidak berbahaya dan memakan makanan kecil di air. Mereka sering disebut raksasa lembut laut.`,
        hint: `Aku hewan laut besar
Aku berenang anggun
Aku memakan makanan kecil di air
Aku tidak berbahaya`
    },

    {
        type: 'Mosquitto',
        x: 165,
        y: 4,
        width: 10,
        name: 'Nyamuk',
        description: `Nyamuk adalah serangga kecil yang terbang dan berdengung. Beberapa nyamuk menggigit manusia.

        Nyamuk berkembang biak di air. Karena itu, air bersih harus selalu dijaga.`,
        hint: `Aku serangga kecil
Aku terbang dan berdengung
Beberapa dari kami menggigit manusia
Aku berkembang biak di air`
    },
    {
        type: 'Moth',
        x: 190,
        y: 15,
        width: 10,
        name: 'Ngengat',
        description: `Ngengat adalah serangga yang mirip kupu-kupu. Mereka lebih aktif pada malam hari.

        Ngengat tertarik pada cahaya. Mereka memiliki sayap dengan warna lembut.`,
        hint: `Aku serangga malam
Aku mirip kupu-kupu
Aku tertarik pada cahaya
Sayapku berwarna lembut`
    },
    {
        type: 'Nautilus',
        x: 120,
        y: 50,
        width: 10,
        name: 'Nautilus',
        description: `Nautilus adalah hewan laut dengan cangkang spiral yang indah. Mereka hidup di laut dalam.

        Nautilus sudah hidup sejak zaman dinosaurus. Mereka menggunakan tentakel untuk bergerak dan makan.`,
        hint: `Aku hewan laut
Aku punya cangkang spiral
Aku hidup di laut dalam
Aku sudah hidup sejak zaman dinosaurus`
    },
    {
        type: 'Octopus',
        x: 75,
        y: 50,
        width: 18,
        name: 'Gurita',
        description: `Gurita adalah hewan laut dengan delapan lengan. Setiap lengannya sangat kuat dan lentur.

        Gurita sangat pintar dan bisa bersembunyi dengan mengubah warna tubuhnya.`,
        hint: `Aku hewan laut
Aku punya delapan lengan
Aku pintar dan lentur
Aku bisa mengubah warna tubuh`
    },
    {
        type: 'Panda',
        x: 305,
        y: 70,
        width: 15,
        name: 'Panda',
        description: `Panda adalah beruang lucu berwarna hitam dan putih. Mereka suka duduk sambil memakan bambu.

        Panda terlihat malas, tetapi sebenarnya sangat kuat. Mereka hidup di hutan bambu yang sejuk.`,
        hint: `Aku beruang hitam-putih
Aku suka duduk makan bambu
Aku terlihat malas
Aku hidup di hutan bambu`
    },
    {
        type: 'Parrot',
        x: 300,
        y: 5,
        width: 14,
        name: 'Burung Beo',
        description: `Burung beo adalah burung berwarna cerah. Mereka bisa meniru suara manusia.

        Burung beo sangat pintar dan suka bermain. Mereka hidup di hutan tropis.`,
        hint: `Aku burung berwarna cerah
Aku bisa meniru suara manusia
Aku pintar
Aku hidup di hutan tropis`
    },
    {
        type: 'Peacock',
        x: 175,
        y: 26,
        width: 18,
        name: 'Merak',
        description: `Merak adalah burung besar yang terkenal dengan ekornya yang sangat indah. Merak jantan bisa membuka ekornya seperti kipas besar penuh warna.

        Ekor merak digunakan untuk menarik perhatian merak betina. Merak berjalan dengan anggun dan hidup di daerah yang hangat.`,
        hint: `Aku burung besar
Aku punya ekor indah
Aku membuka ekor seperti kipas
Aku menarik perhatian betina dengan ekor`
    },
    {
        type: 'PrayingMantis',
        x: 212,
        y: 15,
        width:12,
        name: 'Belalang Sembah',
        description: `Belalang sembah adalah serangga dengan posisi tangan seperti sedang berdoa. Mereka sering diam menunggu mangsa.

        Belalang sembah sangat cepat saat menangkap makanan. Mereka membantu menjaga keseimbangan alam.`,
        hint: `Aku serangga
Tanganku seperti sedang berdoa
Aku diam menunggu mangsa
Aku cepat menangkap makanan`
    },
    {
        type: 'Rabbit',
        x: 140,
        y: 42,
        width: 7,
        name: 'Kelinci',
        description: `Kelinci adalah hewan kecil dengan telinga panjang. Mereka suka melompat dan berlari cepat.

        Kelinci memakan sayuran seperti wortel dan rumput. Mereka juga sangat pemalu dan mudah terkejut.`,
        hint: `Aku hewan kecil
Aku punya telinga panjang
Aku suka melompat
Aku memakan wortel dan rumput`
    },
    {
        type: 'SeaHorse',
        x: 20,
        y: 60,
        width: 7,
        name: 'Kuda Laut',
        description: `Kuda laut adalah hewan laut kecil dengan bentuk seperti kuda. Mereka berenang pelan di air.

        Kuda laut sangat unik karena jantannya yang membawa telur. Mereka hidup di antara tanaman laut.`,
        hint: `Aku hewan laut kecil
Tubuhku mirip kuda
Aku berenang pelan
Jantanku membawa telur`
    },
    {
        type: 'SeaTurtle',
        x: 90,
        y: 28,
        width: 14,
        name: 'Penyu',
        description: `Penyu adalah kura-kura laut yang berenang jauh di lautan. Mereka memiliki sirip besar untuk berenang.

        Penyu kembali ke pantai untuk bertelur. Mereka sudah hidup di bumi sejak lama sekali.`,
        hint: `Aku kura-kura laut
Aku berenang jauh
Aku punya sirip besar
Aku bertelur di pantai`
    },
    {
        type: 'Shrimp',
        x: 60,
        y: 76,
        width: 8,
        name: 'Udang',
        description: `Udang adalah hewan kecil yang hidup di laut dan sungai. Mereka berenang menggunakan ekor.

        Udang sering bersembunyi di pasir atau batu. Banyak orang menyukai udang sebagai makanan.`,
        hint: `Aku hewan kecil
Aku hidup di laut dan sungai
Aku berenang menggunakan ekor
Aku sering bersembunyi di pasir atau batu`
    },
    {
        type: 'Snake',
        x: 170,
        y: 18,
        width: 10,
        name: 'Ular',
        description: `Ular adalah hewan yang tidak memiliki kaki. Mereka bergerak dengan cara melata di tanah.

        Beberapa ular berbisa, tetapi banyak juga yang tidak berbahaya. Ular membantu menjaga keseimbangan alam.`,
        hint: `Aku hewan tanpa kaki
Aku melata di tanah
Beberapa ular berbisa
Aku membantu menjaga keseimbangan alam`
    },
    {
        type: 'Squid',
        x: 20,
        y: 44,
        width: 10,
        name: 'Cumi-cumi',
        description: `Cumi-cumi adalah hewan laut dengan tubuh lunak dan banyak lengan. Mereka berenang sangat cepat.

        Cumi-cumi bisa menyemprotkan tinta untuk melindungi diri. Ini membantu mereka melarikan diri dari bahaya.`,
        hint: `Aku hewan laut
Tubuhku lunak
Aku punya banyak lengan
Aku bisa menyemprot tinta untuk melindungi diri`
    },
    {
        type: 'Starfish',
        x: 120,
        y: 70,
        width: 10,
        name: 'Bintang Laut',
        description: `Bintang laut adalah hewan laut berbentuk bintang. Mereka hidup di dasar laut.

        Bintang laut bisa menumbuhkan kembali lengannya. Ini membuat mereka sangat istimewa.`,
        hint: `Aku hewan laut
Bentukku bintang
Aku hidup di dasar laut
Aku bisa menumbuhkan kembali lengan`
    },
    {
        type: 'Tiger',
        x: 270,
        y: 34,
        width: 10,
        name: 'Harimau',
        description: `Harimau adalah kucing besar dengan garis hitam dan oranye. Setiap harimau memiliki pola garis yang berbeda.

        Harimau sangat kuat dan bisa berlari cepat. Mereka hidup sendiri dan menjaga wilayahnya.`,
        hint: `Aku kucing besar
Tubuhku bergaris hitam dan oranye
Aku hidup sendiri
Aku menjaga wilayahku`
    },
    {
        type: 'Tortoise',
        x: 112,
        y: 28,
        width: 16,
        name: 'Kura-kura Darat',
        description: `Kura-kura darat memiliki cangkang keras untuk melindungi tubuhnya. Mereka bergerak dengan lambat.

        Kura-kura bisa hidup sangat lama. Mereka memakan tumbuhan dan sayuran.`,
        hint: `Aku hewan darat
Aku punya cangkang keras
Aku bergerak lambat
Aku memakan tumbuhan dan sayuran`
    },
    {
        type: 'Wasp',
        x: 180,
        y: 0,
        width: 8,
        name: 'Tawon',
        description: `Tawon adalah serangga yang mirip lebah tetapi lebih agresif. Mereka bisa menyengat saat merasa terancam.

        Tawon membantu mengontrol serangga lain di alam. Mereka membuat sarang dari kertas.`,
        hint: `Aku serangga mirip lebah
Aku bisa menyengat
Aku agresif
Aku membuat sarang dari kertas`
    },
    {
        type: 'Wolf',
        x: 265,
        y: 65,
        width: 16,
        name: 'Serigala',
        description: `Serigala adalah hewan mirip anjing yang hidup di alam liar. Mereka terkenal dengan suara aumannya.

        Serigala hidup berkelompok dan bekerja sama mencari makanan. Mereka sangat setia pada kelompoknya.`,
        hint: `Aku mirip anjing
Aku hidup liar
Aku hidup berkelompok
Aku terkenal dengan aumanku`
    },
    {
        type: 'Zebra',
        x: 215,
        y: 45,
        width: 10,
        name: 'Zebra',
        description: `Zebra adalah hewan yang mirip kuda dengan garis hitam putih. Garis ini membantu zebra saling mengenali.

        Zebra hidup berkelompok di padang rumput. Mereka selalu waspada terhadap bahaya.`,
        hint: `Aku mirip kuda
Tubuhku bergaris hitam-putih
Aku hidup di padang rumput
Aku selalu waspada terhadap bahaya`
    },
];