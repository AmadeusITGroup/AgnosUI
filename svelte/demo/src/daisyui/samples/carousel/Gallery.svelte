<script lang="ts">
	import {createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {untrack} from 'svelte';
	import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
	import GalleryImage from './GalleryImage.svelte';
	import expandSvg from '@agnos-ui/common/samples/carousel/expand.svg?raw';
	import compressSvg from '@agnos-ui/common/samples/carousel/compress.svg?raw';
	import previousSvg from '@agnos-ui/common/samples/carousel/previous.svg?raw';
	import nextSvg from '@agnos-ui/common/samples/carousel/next.svg?raw';

	let {
		photos,
		withNavArrows = false,
		withShowFullscreen = false,
		aspectRatio = 4 / 3,
	}: {
		photos: Photo[];
		withNavArrows?: boolean;
		withShowFullscreen?: boolean;
		aspectRatio?: number;
	} = $props();

	let photosWithLoadState = $state(photos.map((photo, index) => ({...photo, loadRequested: index === 0})));
	$effect(() => {
		photosWithLoadState = photos.map((photo, index) => ({...photo, loadRequested: index === 0}));
	});

	// The main Carousel
	const {
		state: mainCarouselState,
		directives: {emblaDirective},
		api: {scrollNext, scrollPrev, scrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
	});

	// The Thumbnail Carousel
	const {
		directives: {emblaDirective: thumbDirective},
		api: {scrollTo: thumbScrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		props: {
			dragFree: true,
			containScroll: 'keepSnaps',
		},
	});

	let canFullScreen = $derived(!!document?.fullscreenEnabled && withShowFullscreen);
	let isFullScreen = $state(false);

	let mainContainer: HTMLDivElement;

	const toggleFullScreen = () => {
		if (!isFullScreen) {
			void mainContainer.requestFullscreen();
		} else {
			void document.exitFullscreen();
		}
		isFullScreen = !isFullScreen;
	};

	$effect(() => {
		const selectedSnap = mainCarouselState.selectedScrollSnap;
		untrack(() => {
			thumbScrollTo(selectedSnap);
			photosWithLoadState[selectedSnap].loadRequested = true;
			if (selectedSnap > 0) {
				photosWithLoadState[selectedSnap - 1].loadRequested = true;
			}
			if (selectedSnap < photosWithLoadState.length - 1) {
				photosWithLoadState[selectedSnap + 1].loadRequested = true;
			}
		});
	});
	const onpointerdown = (event: PointerEvent) => event.preventDefault();
</script>

<div bind:this={mainContainer} class="grid grid-flow-row max-h-dvh">
	<div class="overflow-hidden relative cursor-grab active:cursor-grabbing" use:emblaDirective>
		<div class="flex max-h-full">
			{#each photosWithLoadState as { src, alt, sources, loadRequested }, index (index)}
				<GalleryImage {src} {alt} {sources} {loadRequested} {aspectRatio} toShow={Math.abs(mainCarouselState.selectedScrollSnap - index) <= 1} />
			{/each}
		</div>
		{#if withNavArrows}
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<button
					class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					{onpointerdown}
					disabled={!mainCarouselState.canScrollPrev}
					onclick={scrollPrev}
					aria-label="Go to previous photo"
				>
					{@html previousSvg}
				</button>
				<button
					class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					{onpointerdown}
					disabled={!mainCarouselState.canScrollNext}
					onclick={scrollNext}
					aria-label="Go to next photo"
				>
					{@html nextSvg}
				</button>
			</div>
		{/if}
		{#if canFullScreen}
			<div class="absolute right-5 bottom-5 flex">
				<button
					class="btn btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"
					onclick={toggleFullScreen}
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
				<div class="content-center">
					<button
						class="shadow-primary"
						onclick={() => scrollTo(index, Math.abs(mainCarouselState.selectedScrollSnap - index) > 1)}
						class:ring={mainCarouselState.selectedScrollSnap === index}
						aria-label="Go to photo {index + 1}"
					>
						<img class="select-none" alt="random picsum" src={thumbnail} loading="lazy" style:aspect-ratio={aspectRatio} />
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
