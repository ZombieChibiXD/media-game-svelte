<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { class: className, ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 128.112 128.11198"
	class={className}
	{...restProps}
>
	<defs>
		<linearGradient id="xGrad5">
			<stop style="stop-color:#e7ba88;stop-opacity:1" offset="0" />
			<stop style="stop-color:#e7b987;stop-opacity:0" offset="1" />
		</linearGradient>
		<linearGradient
			id="xGradGold"
			x1="0" y1="0" x2="1" y2="0"
			gradientUnits="userSpaceOnUse"
			gradientTransform="matrix(0.0013783,112.81246,112.81246,-0.0013783,390.54596,543.80078)"
			spreadMethod="pad"
		>
			<stop style="stop-color:#f8dd57;stop-opacity:1" offset="0" />
			<stop style="stop-color:#aa3c2e;stop-opacity:1" offset="1" />
		</linearGradient>
		<linearGradient
			id="xGradOrange"
			x1="0" y1="0" x2="1" y2="0"
			gradientUnits="userSpaceOnUse"
			gradientTransform="matrix(-0.0017993,-85.42453,-85.42453,0.0017993,390.54715,604.27338)"
			spreadMethod="pad"
		>
			<stop style="stop-color:#cc632c;stop-opacity:1" offset="0" />
			<stop style="stop-color:#c4732f;stop-opacity:1" offset="0.51" />
			<stop style="stop-color:#542b1a;stop-opacity:1" offset="1" />
		</linearGradient>
		<clipPath id="xClip" clipPathUnits="userSpaceOnUse">
			<path d="M 0,752.625 H 752.625 V 0 H 0 Z" transform="translate(-418.24651,-581.56121)" />
		</clipPath>
		<linearGradient
			id="xGradGreenFill"
			x1="0" y1="0" x2="1" y2="0"
			gradientUnits="userSpaceOnUse"
			gradientTransform="matrix(0.00194533,41.384663,-41.384663,0.00194533,520.72745,245.79725)"
			spreadMethod="pad"
		>
			<stop style="stop-color:#c8df85;stop-opacity:1" offset="0" />
			<stop style="stop-color:#4e8f46;stop-opacity:1" offset="1" />
		</linearGradient>
		<linearGradient id="xGradGreenStroke">
			<stop style="stop-color:#afd470;stop-opacity:1" offset="0" />
			<stop style="stop-color:#4b8746;stop-opacity:1" offset="1" />
		</linearGradient>
		<linearGradient
			id="xGradGreenStrokeRef"
			xlink:href="#xGradGreenStroke"
			x1="518.46185" y1="291.43268"
			x2="518.46185" y2="235.52667"
			gradientUnits="userSpaceOnUse"
			gradientTransform="translate(2.266127)"
		/>
		<linearGradient
			id="xGradSkin"
			xlink:href="#xGrad5"
			x1="520.72888" y1="203.74149"
			x2="520.72888" y2="296.02716"
			gradientUnits="userSpaceOnUse"
		/>
	</defs>
	<g transform="translate(-456.672,-200.9627)">
		<path
			d="m 342.504,553.861 c 0,-26.461 21.581,-48.042 48.042,-48.042 v 0 c 26.461,0 48.042,21.581 48.042,48.042 v 0 c 0,26.461 -21.581,48.042 -48.042,48.042 v 0 c -26.461,0 -48.042,-21.581 -48.042,-48.042"
			transform="matrix(1.3333333,0,0,-1.3333333,0,1003.5)"
			style="fill:url(#xGradGold);stroke:none" />
		<path
			d="m 350.421,553.861 c 0,-22.1 18.026,-40.124 40.125,-40.124 v 0 c 22.1,0 40.125,18.024 40.125,40.124 v 0 c 0,22.099 -18.025,40.125 -40.125,40.125 v 0 c -22.099,0 -40.125,-18.026 -40.125,-40.125"
			transform="matrix(1.3333333,0,0,-1.3333333,0,1003.5)"
			style="fill:url(#xGradOrange);stroke:none" />
		<path
			d="m 0,0 c -7.089,7.089 -16.883,11.474 -27.7,11.474 -10.818,0 -20.612,-4.385 -27.701,-11.474 -7.088,-7.089 -11.473,-16.883 -11.473,-27.7 0,-10.818 4.385,-20.612 11.473,-27.701 7.089,-7.088 16.883,-11.473 27.701,-11.473 10.817,0 20.611,4.385 27.7,11.473 7.089,7.089 11.474,16.883 11.474,27.701 C 11.474,-16.883 7.089,-7.089 0,0 m -27.7,13.374 c 11.342,0 21.611,-4.598 29.044,-12.03 7.432,-7.433 12.03,-17.702 12.03,-29.044 0,-11.342 -4.598,-21.612 -12.03,-29.045 -7.433,-7.432 -17.702,-12.03 -29.044,-12.03 -11.342,0 -21.611,4.598 -29.045,12.03 -7.432,7.433 -12.03,17.703 -12.03,29.045 0,11.342 4.598,21.611 12.03,29.044 7.434,7.432 17.703,12.03 29.045,12.03"
			style="fill:#fffcf4;fill-opacity:1;fill-rule:evenodd;stroke:none"
			transform="matrix(1.3333333,0,0,-1.3333333,557.662,228.08507)"
			clip-path="url(#xClip)" />
		<path
			style="fill:url(#xGradSkin);stroke:none"
			d="m 520.6388,218.87481 c -25.47214,0.0493 -46.08554,20.73096 -46.05274,46.20312 2.57287,35.31472 12.45154,0.32359 46.13282,1.2754 0.003,1.4e-4 0.007,-1.6e-4 0.01,0 0.003,-1.6e-4 0.007,1.4e-4 0.01,0 33.68138,-0.95181 43.55993,34.03932 46.13281,-1.2754 0.0328,-25.47216 -20.58052,-46.15382 -46.05274,-46.20312 -0.0296,-6e-5 -0.0602,0 -0.0898,0 -0.0296,0 -0.0602,-6e-5 -0.0898,0 z" />
		<path
			d="m 528.28649,240.58754 -7.55866,7.55867 -7.55867,-7.55867 c -4.224,-4.224 -11.13467,-4.224 -15.35867,0 v 0 l -0.001,0.001 c -4.224,4.22266 -4.224,11.13466 0,15.35866 v 0 l 7.55867,7.55867 -7.55734,7.55733 c -4.224,4.224 -4.224,11.136 0,15.36 v 0 c 4.224,4.224 11.136,4.224 15.36,0 v 0 l 7.55734,-7.55733 7.55866,7.55733 c 4.224,4.224 11.13467,4.224 15.35867,0 v 0 h 10e-4 c 4.224,-4.224 4.224,-11.136 0,-15.36 v 0 l -7.55866,-7.55733 7.55866,-7.55867 c 4.224,-4.224 4.224,-11.136 0,-15.35866 v 0 l -10e-4,-0.001 c -2.112,-2.112 -4.896,-3.168 -7.67867,-3.168 v 0 c -2.784,0 -5.568,1.056 -7.68,3.168"
			style="fill:url(#xGradGreenFill);stroke:url(#xGradGreenStrokeRef);stroke-width:2.433;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
	</g>
</svg>
