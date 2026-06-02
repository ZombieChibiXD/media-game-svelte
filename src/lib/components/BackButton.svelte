<script lang="ts">
	// Komponen tombol kembali (Back) yang dapat digunakan ulang.
	// Menampilkan ikon panah SVG dan teks "Kembali" menggunakan AIFont.
	// Menerima properti onclick untuk navigasi dan title untuk tooltip.

	import { cn } from "$lib/utils";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { AIFont } from "./ai-font";

	type Props = HTMLButtonAttributes & {
		// Fungsi yang dipanggil saat tombol diklik
		onclick: (e: MouseEvent) => void;
		// Teks tooltip (default: "Kembali")
        title?: string;
	};

	let { onclick, class: className, title = "Kembali", ...restProps }: Props = $props();
</script>

<button
	{onclick}
	{title}
	{...restProps}
	class={cn(
		"active:bg-black transition-all duration-300 cursor-pointer absolute z-10 top-0 left-0 m-[2cqb] rounded-lg flex gap-2 items-center",
		className
	)}
>
<svg
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 128.112 128.11198"
   class="w-[6cqb] h-[6cqb]"
>
  <defs>
    <linearGradient id="linearGradient5">
      <stop style="stop-color:#e7ba88;stop-opacity:1" offset="0" />
      <stop style="stop-color:#e7b987;stop-opacity:0" offset="1" />
    </linearGradient>
    <linearGradient id="linearGradient2">
      <stop style="stop-color:#4b8746;stop-opacity:1" offset="0" />
      <stop style="stop-color:#afd470;stop-opacity:1" offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient15"
       x1="0" y1="0" x2="1" y2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.0013783,112.81246,112.81246,-0.0013783,390.54596,543.80078)"
       spreadMethod="pad"
    >
      <stop style="stop-color:#f8dd57;stop-opacity:1" offset="0" />
      <stop style="stop-color:#aa3c2e;stop-opacity:1" offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient18"
       x1="0" y1="0" x2="1" y2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.0017993,-85.42453,-85.42453,0.0017993,390.54715,604.27338)"
       spreadMethod="pad"
    >
      <stop style="stop-color:#cc632c;stop-opacity:1" offset="0" />
      <stop style="stop-color:#c4732f;stop-opacity:1" offset="0.51" />
      <stop style="stop-color:#542b1a;stop-opacity:1" offset="1" />
    </linearGradient>
    <clipPath id="clipPath20" clipPathUnits="userSpaceOnUse">
      <path d="M 0,752.625 H 752.625 V 0 H 0 Z" transform="translate(-418.24651,-581.56121)" />
    </clipPath>
    <linearGradient
       id="linearGradient22"
       x1="0" y1="0" x2="1" y2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.0030348,-49.778055,49.778055,-0.0030348,516.16417,286.32256)"
       spreadMethod="pad"
    >
      <stop style="stop-color:#4e8f46;stop-opacity:1" offset="0" />
      <stop style="stop-color:#c8df85;stop-opacity:1" offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient3"
       xlink:href="#linearGradient2"
       x1="516.19696" y1="240.11824"
       x2="516.19696" y2="289.92651"
       gradientUnits="userSpaceOnUse"
    />
    <linearGradient
       id="linearGradient6"
       xlink:href="#linearGradient5"
       x1="520.72888" y1="203.74149"
       x2="520.72888" y2="296.02716"
       gradientUnits="userSpaceOnUse"
    />
  </defs>
  <g transform="translate(-456.672,-200.9627)">
    <path
       d="m 342.504,553.861 c 0,-26.461 21.581,-48.042 48.042,-48.042 v 0 c 26.461,0 48.042,21.581 48.042,48.042 v 0 c 0,26.461 -21.581,48.042 -48.042,48.042 v 0 c -26.461,0 -48.042,-21.581 -48.042,-48.042"
       transform="matrix(1.3333333,0,0,-1.3333333,0,1003.5)"
       style="fill:url(#linearGradient15);stroke:none" />
    <path
       d="m 350.421,553.861 c 0,-22.1 18.026,-40.124 40.125,-40.124 v 0 c 22.1,0 40.125,18.024 40.125,40.124 v 0 c 0,22.099 -18.025,40.125 -40.125,40.125 v 0 c -22.099,0 -40.125,-18.026 -40.125,-40.125"
       transform="matrix(1.3333333,0,0,-1.3333333,0,1003.5)"
       style="fill:url(#linearGradient18);stroke:none" />
    <path
       d="m 0,0 c -7.089,7.089 -16.883,11.474 -27.7,11.474 -10.818,0 -20.612,-4.385 -27.701,-11.474 -7.088,-7.089 -11.473,-16.883 -11.473,-27.7 0,-10.818 4.385,-20.612 11.473,-27.701 7.089,-7.088 16.883,-11.473 27.701,-11.473 10.817,0 20.611,4.385 27.7,11.473 7.089,7.089 11.474,16.883 11.474,27.701 C 11.474,-16.883 7.089,-7.089 0,0 m -27.7,13.374 c 11.342,0 21.611,-4.598 29.044,-12.03 7.432,-7.433 12.03,-17.702 12.03,-29.044 0,-11.342 -4.598,-21.612 -12.03,-29.045 -7.433,-7.432 -17.702,-12.03 -29.044,-12.03 -11.342,0 -21.611,4.598 -29.045,12.03 -7.432,7.433 -12.03,17.703 -12.03,29.045 0,11.342 4.598,21.611 12.03,29.044 7.434,7.432 17.703,12.03 29.045,12.03"
       style="fill:#fffcf4;fill-opacity:1;fill-rule:evenodd;stroke:none"
       transform="matrix(1.3333333,0,0,-1.3333333,557.662,228.08507)"
       clip-path="url(#clipPath20)" />
    <path
       style="display:inline;fill:url(#linearGradient6);stroke:none"
       d="m 520.6388,218.87481 c -25.47214,0.0493 -46.08554,20.73096 -46.05274,46.20312 2.57287,35.31472 12.45154,0.32359 46.13282,1.2754 0.003,1.4e-4 0.007,-1.6e-4 0.01,0 0.003,-1.6e-4 0.007,1.4e-4 0.01,0 33.68138,-0.95181 43.55993,34.03932 46.13281,-1.2754 0.0328,-25.47216 -20.58052,-46.15382 -46.05274,-46.20312 -0.0296,-6e-5 -0.0602,0 -0.0898,0 -0.0296,0 -0.0602,-6e-5 -0.0898,0 z" />
    <path
       d="m 529.60366,296.40042 c 8.26,-0.032 10.332,-9.336 10.332,-31.67733 v 0 c 0,-19.756 -1.564,-32.67867 -11.38133,-30.91867 v 0 c -25.088,4.5 -36.16533,24.85067 -36.16533,31.76534 v 0 c 0,12.80133 22.58533,30.83066 37.14799,30.83066 v 0 c 0.0227,0 0.044,0 0.0667,0"
       style="display:inline;fill:url(#linearGradient22);stroke:url(#linearGradient3);stroke-width:5px;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
  </g>
</svg>
<span class="pt-2">
    <AIFont text={"Kembali"} scale={0.4} gap={2} />
</span>


</button>
