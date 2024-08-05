<script lang="ts">
	import {createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount} from 'svelte';
	import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
	import GalleryImage from './GalleryImage.svelte';
	import expandSvg from '@agnos-ui/common/samples/carousel/expand.svg?raw';
	import compressSvg from '@agnos-ui/common/samples/carousel/compress.svg?raw';

	export let photos: Photo[];
	export let withNavArrows = false;
	export let withShowFullscreen = false;
	export let aspectRatio = 4 / 3;

	$: photosWithLoadState = photos.map((photo, index) => ({...photo, loadRequested: index === 0}));

	// The main Carousel
	const {
		stores: {canScrollNext$, canScrollPrev$, selectedScrollSnap$},
		directives: {emblaDirective},
		api: {scrollNext, scrollPrev, scrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		$$props: {},
	});

	// The Thumbnail Carousel
	const {
		directives: {emblaDirective: thumbDirective},
		api: {scrollTo: thumbScrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		$$props: {
			dragFree: true,
			containScroll: 'keepSnaps',
		},
	});

	$: canFullScreen = !!document?.fullscreenEnabled && withShowFullscreen;
	let isFullScreen = false;

	let mainContainer: HTMLDivElement;

	const toggleFullScreen = () => {
		if (!isFullScreen) {
			mainContainer.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
		isFullScreen = !isFullScreen;
	};

	onMount(() =>
		selectedScrollSnap$.subscribe((selectedSnap: number) => {
			thumbScrollTo(selectedSnap);
			photosWithLoadState[selectedSnap].loadRequested = true;
			if (selectedSnap > 0) {
				photosWithLoadState[selectedSnap - 1].loadRequested = true;
			}
			if (selectedSnap < photosWithLoadState.length - 1) {
				photosWithLoadState[selectedSnap + 1].loadRequested = true;
			}
		}),
	);
</script>

<div bind:this={mainContainer} class="grid grid-flow-row max-h-dvh">
	<div class="overflow-hidden relative cursor-grab active:cursor-grabbing" use:emblaDirective>
		<div class="flex max-h-full">
			{#each photosWithLoadState as { src, alt, sources, loadRequested }, index (index)}
				<GalleryImage {src} {alt} {sources} {loadRequested} {aspectRatio} toShow={Math.abs($selectedScrollSnap$ - index) <= 1} />
			{/each}
		</div>
		{#if withNavArrows}
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<button
					class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					on:pointerdown|preventDefault
					disabled={!$canScrollPrev$}
					on:click={scrollPrev}
					aria-label="Go to previous photo">❮</button
				>
				<button
					class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					on:pointerdown|preventDefault
					disabled={!$canScrollNext$}
					on:click={scrollNext}
					aria-label="Go to next photo">❯</button
				>
			</div>
		{/if}
		{#if canFullScreen}
			<div class="absolute right-5 bottom-5 flex">
				<button
					class="btn btn-sm md:btn-md opacity-75 hover:opacity-100"
					on:click={toggleFullScreen}
					aria-label={isFullScreen ? 'leave fullscreen' : 'open photo in fullscreen'}
				>
					{@html isFullScreen ? compressSvg : expandSvg}
				</button>
			</div>
		{/if}
	</div>
	<div class="overflow-hidden relative mt-1 mb-2" use:thumbDirective>
		<div class="grid grid-flow-col auto-cols-max gap-2 mx-1 my-1">
			{#each photos as { thumbnail }, index}
				<button
					class="shadow-primary"
					on:click={() => scrollTo(index, Math.abs($selectedScrollSnap$ - index) > 1)}
					class:ring={$selectedScrollSnap$ === index}
					aria-label="Go to photo {index + 1}"
				>
					<img class="select-none" alt="random picsum" src={thumbnail} loading="lazy" style:aspect-ratio={aspectRatio} />
				</button>
			{/each}
		</div>
	</div>
</div>
