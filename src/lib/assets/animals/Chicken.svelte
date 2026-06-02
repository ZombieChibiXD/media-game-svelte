<script lang="ts">
	// Komponen ini menampilkan gambar hewan Ayam (SVG)
	// dengan dukungan animasi seperti berjalan, bermain, dll.
	import type { AnimalProps } from "./type";
    let {
        el = $bindable(),
        animate_wag = $bindable(animateWag),
        animate_frown = $bindable(defaultAnimate),
        animate_playful = $bindable(defaultAnimate),
        animate = $bindable(),
        ...restProps
    }: AnimalProps = $props();

    function animateWag () {
        //TODO: Manually rig the svg here
        return []
    }

    function animatePlayful(){

    }

    function defaultAnimate(el: SVGElement) {
        if (!el) return [];


        const left = el.querySelector<SVGGElement>("#leg-left");
        const right = el.querySelector<SVGGElement>("#leg-right");
        const wing =  el.querySelector<SVGGElement>("#wing");

        if (!left || !right || !wing) return [];

        const timing = {
            duration: 1000,
            iterations: Infinity,
            easing: "ease-in-out"
        };

	    const animations: Animation[] = [];

        // Left leg forward when right leg back
        animations.push(
            left.animate(
                [
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" }, // Start
                    { transform: "rotate(2deg) translateY(0px) translateX(-25px)" }, // Forward
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                    { transform: "rotate(-2deg) translateY(-0px) translateX(70px)" },
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                ],
                timing
            )
        )
        animations.push(
            right.animate(
                [
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" }, // Start
                    { transform: "rotate(-2deg) translateY(-0px) translateX(25px)" },
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                    { transform: "rotate(2deg) translateY(0px) translateX(-70px)" }, // Forward
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                ],
                timing
            )
        )
        animations.push(
            wing.animate(
                [
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" }, // Start
                    { transform: "rotate(-2deg) translateY(-0px) translateX(0px)" },
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                    { transform: "rotate(2deg) translateY(0px) translateX(0px)" }, // Forward
                    { transform: "rotate(0deg) translateY(0px) translateX(0px)" },
                ],
                timing
            )
        )

        animations.push(
            // Optional: subtle body bob so it doesn’t look like skating
            el.animate(
                [
                    { transform: "translateY(0px)" },
                    { transform: "translateY(2px)" },
                    { transform: "translateY(0px)" }
                ],
                {
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in-out"
                }
            )
        )
        return animations

    }

    let activeAnimations: Animation[] = [];
    function stopAnimations() {
        for (const anim of activeAnimations) anim.cancel();
        activeAnimations = [];
    }



    $effect(() => {
	if (!el) return;

	stopAnimations();

	switch (animate) {
		case "walk":
			activeAnimations = defaultAnimate(el);
			break;

		// case "wag":
		// 	activeAnimations = animateWag() ?? [];
		// 	break;

		// case "playful":
		// 	activeAnimations = animatePlayful() ?? [];
		// 	break;

		default:
			// idle = no animation
			break;
	}
});
</script>

{@render Animal(restProps)}

{#snippet Animal(restProps: AnimalProps)}
	<svg {...restProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 757.48 922.78" bind:this={el}>
		<defs>
		</defs>
		<g id="Layer_2" data-name="Layer 2">
			<g id="Layer_15" data-name="Layer 15">
				<path
					class="cls-1"
					d="M542.78,312.08C554.06,283,567.61,254.3,588,230.73s48.5-41.75,79.53-44.93,64.56,10.84,79.68,38.11l-47.56,6.18c37.66,29.87,59.78,78.35,57.67,126.38a168.87,168.87,0,0,0-50.07-13.25c26.92,35,36.23,83,24.4,125.54a99.49,99.49,0,0,0-48.41-18.08A90.52,90.52,0,0,1,694.4,515C647,488.78,582,500.17,546.4,540.94q-2.49-114.12-5.15-228.24"
				/>
				<path
					class="cls-2"
					d="M153.4,142.5a78.9,78.9,0,0,1-31.55-60.86c-.2-9.81,1.62-20,7.34-28s15.93-13.2,25.5-11c8.49,1.92,15,9.15,18.33,17.19s4,16.88,4.71,25.56c2.5-13,3.38-26.23,6.22-39.12s7.92-25.77,17.37-35,24-14.1,36.32-9.46c15,5.63,22.54,23.45,21.39,39.45S250,71.88,242.33,86c10.29-10.68,20.94-21.61,34.5-27.63s30.89-6,41.83,4c7.23,6.63,10.66,16.75,10.46,26.55s-3.7,19.3-8.59,27.8a89.89,89.89,0,0,1-40.7,36.86c-5.62,2.53-11.63,4.5-17.8,4.6-9.59.15-18.6-4.17-27.7-7.21-26.61-8.91-55.46-7.12-83.46-5.23"
				/>
				<!-- Leg start -->
				<g id="leg-left" data-name="leg left">
					<path
						class="cls-3"
						d="M216,763.21l-13,62c-.73,3.5-1.63,7.27-4.38,9.53-3.92,3.2-9.65,2-14.61,1a104.66,104.66,0,0,0-58.24,4.82c-5,1.94-10.87,6.16-9.33,11.33,1.45,4.84,7.9,5.56,12.95,5.35l56.11-2.41-32.82,18.44c-6.51,3.65-14,9.37-12.48,16.67,1.82,8.59,14.12,9.46,22.15,5.9,19.5-8.63,33.4-30.78,54.72-31.19,7.78-.16,15.37,2.79,23.15,2.65s16.63-5.3,16.31-13.08c-.21-5.18-4.61-9.43-9.51-11.13s-10.24-1.38-15.41-1l14.22-81.24-30.79,2.49"
					/>
					<path
						class="cls-4"
						d="M200.21,721.36q2.63,23.14,6.91,46.06c1,5.39,3,11.75,8.28,13.11,6.16,1.58,12-5,18.28-4.15,6.68.91,10.63,9.72,17.38,9.51,5.71-.19,8.83-6.6,10.54-12.06q4.95-15.8,8.33-32.05c.6-2.89,1-6.29-1-8.46-1.24-1.36-3.13-1.87-4.92-2.3a368.4,368.4,0,0,0-65.14-9.82"
					/>
				</g>
				<g id="leg-right" data-name="Leg right">
					<path
						class="cls-3"
						d="M342.6,767.32a424.17,424.17,0,0,0-4.2,92.08,147.49,147.49,0,0,0-65.08,19.76c-5.38,3.14-11.31,8.87-8.78,14.56,2.7,6.06,11.54,4.88,17.8,2.7l46.71-16.27a103.51,103.51,0,0,0-38.28,41.77c15.11,3.83,30.06-5.81,42.57-15.12s27-19.32,42.32-16.3c7.65,1.51,14.52,6.23,22.29,6.84s17-6.4,13.95-13.59c-1.61-3.83-5.87-5.69-9.74-7.19l-31-12,2.69-100.18-35.37,4.3"
					/>
					<path
						class="cls-4"
						d="M327.73,730.69a193.54,193.54,0,0,0,4,52.92c.58,2.7,1.42,5.66,3.77,7.1,4.91,3,10.31-3,15.81-4.66,10.34-3.2,22.76,9.11,31.22,2.34,3.78-3,4.37-8.46,4.59-13.3a452.22,452.22,0,0,0-1-56.31,188.75,188.75,0,0,0-59.91,13.12"
					/>
				</g>
				<!-- Leg end -->
				<path
					class="cls-5"
					d="M335.11,326.16c32.52,28.42,78.45,40.77,120.83,32.5s80.3-37,99.75-75.53c4.74-9.4,11.51-21.15,21.91-19.54,11,1.71,13.38,16.51,12,27.56a174.51,174.51,0,0,1-30.84,78.7c11.12,2.92,21.45-6.06,29.88-13.87S609,340.39,619.16,345.7c10.35,5.39,10.63,20,8.39,31.46a191,191,0,0,1-51.23,97c8.66-10.41,27.48-2.71,31.79,10.12s-1,26.75-6.69,39c-30.79,66.39-76,126.94-135.19,170S333.4,761,260.42,755.71,116,713.42,74.6,653.1C39.23,601.61,27.21,537.34,26,474.88c-.51-26.22,2-55.33,21-73.41,8.72-8.29,20-13.25,31-18.05L224.1,319.89c18.66-8.12,37.88-16.37,58.22-17.14s42.37,7.61,52,25.55"
				/>
				<path
					class="cls-6"
					d="M56.05,344c-3.54,16.46-15.48,29.58-24,44.11s-13.25,34.21-2.71,47.35,32.14,12.49,46.21,3,22.48-25.15,30.35-40.19c-7,13,6,29.62,20.71,31.55s28.73-5.88,41.07-14,25-17.28,39.79-18.47c13.84-1.11,27.11,5,39.85,10.52s26.62,10.77,40.21,7.87S313,398.23,308,385.29a30.3,30.3,0,0,0,53-11.12c3.07-11.59-1-24-7.11-34.31s-14.22-19.35-20.34-29.67c-25.38-42.71-13.52-100.66-40.92-142.1-22.92-34.65-68.5-48.4-109.9-45-27.37,2.27-55.34,11.66-73.86,31.94-18.28,20-25.08,47.65-31.24,74.05L39.91,390.77"
				/>
                <g id="wing" data-name="Wing">
                    <path
                        class="cls-7"
                        d="M503.92,448.15c-13.94-2.62-28.2.58-42.29,2.25-45.84,5.44-106.34-3.44-129.39-49.92-6.13-12.37-11-32.2-26.88-35.14-6.93-1.29-13.93,1.57-20.19,4.81-56.25,29.07-89.48,97-77.88,159.27s67.08,113.67,130,120.53c17.12,1.86,38-1.49,45-17.22,5.81-13-1-28-8.4-40.21a176.47,176.47,0,0,1-9.68-17.07,90.24,90.24,0,0,0,57.07,23.14c13.69.44,27.88-2.52,38.88-10.69s18.2-22.1,16.08-35.64c-1.81-11.52-9.38-20.36-18.88-27.53h.14c21.94-1.41,44.2-8.06,60.7-22.6,7.77-6.85,14.41-16.24,14-26.6C531.66,461.35,517.86,450.77,503.92,448.15Z"
                    />
                </g>
				<path
					class="cls-8"
					d="M262.13,404.58c-2.4-13.24-10.19-24.8-18.1-35.69l-.09-.12a58.22,58.22,0,0,1-10.76-27.93c-.45-4.21-.94-8.41-1.65-12.58-2.17-12.78-7-25.95-17.36-33.74-12-9.06-29.39-8.64-42.93-2s-23.78,18.54-32,31.2S124.5,350.05,116,362.52c-10.66,15.67-24.24,29.22-34.67,45.05s-17.69,35.16-13.51,53.65,23.16,34.25,41.54,29.6c12.66-3.2,21.76-14.89,25.54-27.38.53-1.76,1-3.54,1.34-5.34a46.44,46.44,0,0,0,20.68,18.58c15.28,6.69,35.22,2.75,45.07-10.71,7.13-9.74,8.14-21.88,8.76-34.25,9.7,10.09,25.59,15,37.67,8.14C260.13,433.22,264.53,417.82,262.13,404.58Z"
				/>
				<path
					class="cls-9"
					d="M66.17,244a319.42,319.42,0,0,0-57,72.3C4.78,323.84.63,331.91.06,340.64s3.31,18.32,11.27,22c7.32,3.35,16.25.86,22.6-4.1s10.64-12,14.81-18.91C44.08,348.5,39.3,358,40.08,368s9.65,20.09,19.53,18.24c10.84-2,14.75-15.32,16.11-26.27a472.32,472.32,0,0,0,.45-112.1,170.36,170.36,0,0,1-24.12-.58"
				/>
				<path
					class="cls-10"
					d="M114.51,184.61c-10.73-8.82-36.22.54-87.2,19.27C22,205.82,12,209.5,11.3,216.25c-.6,5.89,4.47,10.65,9.08,14.38l45.54,36.79c13.31,10.75,22.2,13.07,28.72,11.74,12.41-2.53,19.28-16.75,24.56-27.67,3.6-7.44,8.94-18.87,7.84-34.36C126.52,209.77,125.36,193.52,114.51,184.61Z"
				/>
				<ellipse class="cls-11" cx="190.65" cy="206.57" rx="24.42" ry="34.37" /><ellipse
					class="cls-12"
					cx="185.86"
					cy="210.78"
					rx="10.85"
					ry="12.66"
				/>
			</g>
		</g>
	</svg>
{/snippet}

			<style>
        .cls-1{fill:#215642;}.cls-2{fill:#dc1a1a;}.cls-3{fill:#fec80c;}.cls-4{fill:#ab2617;}.cls-5{fill:#f7ae23;}.cls-6{fill:#f18c18;}.cls-7{fill:#9d0e08;}.cls-8{fill:#e21d27;}.cls-9{fill:#b00a0e;}.cls-10{fill:#ffcf43;}.cls-11{fill:#7a2415;}.cls-12{fill:#fffefe;}
			</style>