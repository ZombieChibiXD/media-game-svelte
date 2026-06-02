# Overview Media Game Svelte

Proyek ini adalah game edukasi untuk anak-anak berbasis web, dibuat dengan SvelteKit + Tailwind CSS. Game ini mengajarkan tentang hewan melalui berbagai permainan mencocokkan dan ensiklopedia. Teks antarmuka menggunakan Bahasa Indonesia.

---

## Struktur Proyek

```
src/
├── lib/                          # Komponen & data yang digunakan ulang
│   ├── assets/                   # Aset visual (hewan, background, kontrol)
│   │   ├── animals/              # 45+ komponen SVG hewan
│   │   ├── backgrounds/          # Komponen background
│   │   └── controls/             # Komponen kontrol UI
│   ├── components/               # Komponen umum (tombol, ikon, font)
│   │   ├── ai-font/              # Renderer font AI
│   │   └── ui/scroll-area/       # Komponen area gulir
│   ├── scenes/                   # Komponen scene game
│   ├── animalData.ts             # Data 50+ hewan (nama, deskripsi, petunjuk)
│   ├── index.ts                  # Barrel export
│   └── utils.ts                  # Fungsi pembantu (cn, tipe utility)
├── routes/                       # Halaman aplikasi (SvelteKit routing)
│   ├── (titled)/                 # Rute dengan layout bertajuk
│   │   ├── loading/              # Layar loading
│   │   └── main-menu/            # Menu utama
│   └── (untitled)/               # Rute tanpa tajuk
│       ├── ai-font/              # Demo font AI
│       ├── encyclopedia/         # Ensiklopedia hewan
│       ├── game-1/               # Game 1: Mencocokan nama
│       ├── game-2/               # Game 2: Mencocokan badan
│       ├── game-3/               # Game 3: Cari hewan
│       └── level-select/         # Pemilihan level
├── app.css                       # Style global
├── app.d.ts                      # Deklarasi tipe global
└── app.html                      # Template HTML utama
```

---

## File Penting

### `src/lib/utils.ts`
Fungsi `cn()` menggabungkan class Tailwind dengan benar (menggabungkan clsx + tailwind-merge). Juga berisi tipe helper: `WithoutChild`, `WithoutChildren`, `WithoutChildrenOrChild`, `WithElementRef`.

### `src/lib/animalData.ts`
Berisi interface `AnimalItem` (type, x, y, width, name, description, hint) dan array `animalListing` berisi data 50+ hewan dalam Bahasa Indonesia. Data ini digunakan oleh ensiklopedia dan game mencocokkan.

### `src/lib/assets/animals/type.ts`
Tipe `AnimalProps` — properti untuk komponen hewan: fungsi animasi (`animate_frown`, `animate_wag`, `animate_playful`, `animate_walk`), properti `animate` (null atau `'walk'`), dan semua atribut SVG standar.

### `src/lib/assets/animals/index.ts`
Barrel file yang mengekspor semua komponen hewan. Memetakan nama hewan ke komponen Svelte-nya untuk lookup dinamis.

### `src/lib/scenes/MatchGame.svelte`
Komponen inti permainan mencocokkan. Fitur:
- Mengacak 4 hewan untuk ditampilkan
- Drag & drop untuk menghubungkan kartu kiri (nama/badan) ke kartu kanan (hewan)
- Tap untuk memilih dan menghubungkan
- Garis koneksi visual antar kartu
- Dialog skor saat semua kartu terhubung
- Tombol kembali dan ulangi

### `src/routes/+layout.svelte`
Layout utama seluruh aplikasi. Fitur:
- Deteksi orientasi layar (portrait → tampilkan pesan "Putar perangkat Anda")
- Kontainer game dengan rasio 16:9 (container query)
- Tombol fullscreen
- Musik latar dengan tombol mute/unmute (dengan localStorage)
- Preload gambar untuk performa

### `src/routes/+page.svelte`
Halaman landing. Menampilkan gambar background dan tombol Play yang mengarah ke `/loading`.

### `src/routes/(titled)/main-menu/+page.svelte`
Menu utama menampilkan logo, teks "Mari belajar mengenal hewan bersama di SD Saraswati 4 Denpasar" menggunakan font AI, dan tombol Play menuju `/level-select`.

### `src/routes/(untitled)/level-select/+page.svelte`
Halaman pemilihan level dengan 4 tombol:
1. Ensiklopedia Satwa (ikon: Ayam)
2. Mencocokan Nama Hewan (ikon: Singa)
3. Mencocokan badan hewan (ikon: Harimau)
4. Cari Hewan (ikon: Anjing)

### `src/routes/(untitled)/encyclopedia/+page.svelte`
Ensiklopedia hewan dengan area gulir horizontal. Setiap hewan ditampilkan pada posisi spesifik (dari `animalData.ts`). Klik hewan membuka dialog yang menampilkan:
- Gambar hewan dengan animasi berjalan
- Pemutaran audio nama hewan
- Nama dan deskripsi hewan

### `src/routes/(untitled)/game-1/+page.svelte`
Game 1: Mencocokan **nama** hewan dengan gambar hewan. Menggunakan `MatchGame` dengan label teks di sisi kiri.

### `src/routes/(untitled)/game-2/+page.svelte`
Game 2: Mencocokan **badan** hewan dengan gambar hewan. Menggunakan `MatchGame` dengan gambar hewan di kedua sisi.

### `src/routes/(untitled)/game-3/+page.svelte`
Game 3: **Cari hewan** berdasarkan petunjuk. Pemain membaca petunjuk, lalu mencari hewan yang benar di antara semua hewan di scene. Dialog sukses menampilkan skor.

### `src/lib/components/ai-font/AIFont.svelte`
Renderer font AI kustom. Alur kerja:
1. Fetch file font SVG (`/fonts/ExportFont.svg`)
2. Ukur bounding box setiap glyph (A-Z, 0-9) menggunakan SVG `getBBox()`
3. Render teks yang diinginkan dengan spacing dan scaling

### `src/lib/components/BackButton.svelte`
Tombol kembali yang reusable. Menampilkan ikon SVG panah kiri dan teks "Kembali" menggunakan AIFont.

### `src/lib/components/XIcon.svelte`
Ikon X (tutup) yang reusable. Menerima atribut SVG standar.

---

## File Barrel & Index

| File | Fungsi |
|------|--------|
| `src/lib/index.ts` | Re-export dari folder `$lib` |
| `src/lib/assets/animals/index.ts` | Ekspor semua komponen hewan, tipe `ComponentName` |
| `src/lib/assets/backgrounds/index.ts` | Ekspor komponen background |
| `src/lib/assets/controls/index.ts` | Ekspor komponen kontrol |
| `src/lib/components/ai-font/index.ts` | Ekspor komponen `AIFont` |
| `src/lib/components/ui/scroll-area/index.ts` | Ekspor `ScrollArea` + `ScrollAreaScrollbar` |

---

## Komponen Hewan (`src/lib/assets/animals/*.svelte`)

Setiap file adalah wrapper SVG untuk satu hewan. Semua mengikuti pola yang sama: menerima `AnimalProps` dan me-render SVG hewan yang sesuai dengan dukungan animasi (berjalan, bermain, dll). Total 45+ hewan: Kelelawar, Lebah, Kumbang, Kupu-kupu, Kucing, Ayam, Sapi, Kepiting, Rusa, Anjing, Lumba-lumba, Merpati, Capung, Bebek, Gajah, Lalat, Laron, Jerapah, Kambing, Gorila, Landak, Kuda, Koala, Singa, Pari Manta, Nyamuk, Ngengat, Nautilus, Gurita, Panda, Beo, Merak, Belalang Sembah, Kelinci, Kuda Laut, Penyu, Udang, Ular, Cumi-cumi, Bintang Laut, Harimau, Kura-kura, Tawon, Serigala, Zebra.

---

## Rute & Navigasi

```
/                          → Landing page (+page.svelte)
/loading                   → Loading screen → redirect ke /main-menu
/main-menu                 → Menu utama
/level-select              → Pilih level (4 game)
/encyclopedia              → Ensiklopedia hewan
/game-1                    → Game mencocokan nama
/game-2                    → Game mencocokan badan
/game-3                    → Game cari hewan
/ai-font                   → Halaman demo font AI
```

---

## Teknologi

- **Framework**: SvelteKit (Svelte 5)
- **Styling**: Tailwind CSS v4 + container queries
- **UI Primitives**: bits-ui
- **Ikon**: Lucide
- **Font AI**: Renderer font kustom berbasis SVG multi-layer
- **Deployment**: Cloudflare (adapter-cloudflare)
- **Testing**: Vitest + Playwright
