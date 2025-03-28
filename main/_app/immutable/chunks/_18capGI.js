const t=`<script lang="ts">
	import {type CarouselProps, createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import AutoPlay from 'embla-carousel-autoplay';
	import previousSvg from './previous.svg?raw';
	import nextSvg from './next.svg?raw';
	import pauseSvg from './pause.svg?raw';
	import playSvg from './play.svg?raw';
	import type {Snippet} from 'svelte';

	interface Photo {
		src: string;
		alt: string;
		id: string;
	}

	let {
		autoplay,
		slide,
		photos,
		...props
	}: Partial<Omit<CarouselProps, 'plugins' | 'slide'>> & {
		autoplay?: boolean;
		slide: Snippet<[Photo]>;
		photos: Photo[];
	} = $props();

	const plugins = $derived(autoplay ? [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 2_000})] : []);

	const {
		state: cState,
		directives,
		api,
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		get props() {
			return {
				...props,
				plugins,
				container: '.container',
			};
		},
		defaultConfig: {
			duration: 40,
		},
		enablePatchChanged: true,
	});
	const onpointerdown = (e: PointerEvent) => {
		e.preventDefault();
	};
	let playing = $state(true);
	const togglePlay = () => {
		if (!playing) {
			api.plugins()!.autoplay.play();
		} else {
			api.plugins()!.autoplay.stop();
		}
		playing = !playing;
	};

	$effect(() => {
		if (!autoplay) {
			playing = true;
		}
	});
<\/script>

<div
	class="overflow-hidden relative w-full cursor-grab active:cursor-grabbing ring-primary has-[.au-carousel-slide:focus-visible]:ring-3"
	use:directives.root
>
	{#if cState.showNavigationArrows || cState.showNavigationIndicators || autoplay}
		<div class={['absolute top-2 right-2 left-2 z-1 flex', autoplay ? 'justify-between' : 'justify-center']}>
			{#if autoplay}
				<div class="flex p-1 px-2 cursor-auto bg-base-100 rounded" {onpointerdown}>
					<button class="btn btn-xs btn-square" aria-label={playing ? 'Pause' : 'Play'} onclick={togglePlay}>
						{@html playing ? pauseSvg : playSvg}
					</button>
				</div>
			{/if}
			{#if cState.showNavigationArrows || cState.showNavigationIndicators}
				<div class="flex p-1 px-2 gap-1 cursor-auto bg-base-100 rounded-xl" {onpointerdown}>
					{#if cState.showNavigationArrows}
						<button class="btn btn-circle btn-xs" use:directives.scrollPrev>
							{@html cState.direction === 'rtl' ? nextSvg : previousSvg}
						</button>
					{/if}
					{#if cState.showNavigationIndicators}
						<div class="flex gap-1" use:directives.tabList>
							{#each photos as { id }, index (id)}
								<!-- svelte-ignore a11y_consider_explicit_label -->
								<button class={['btn btn-xs', cState.selectedScrollSnap === index && 'btn-active']} use:directives.tabIndicator={{index, id}}>
									{index + 1}
								</button>
							{/each}
						</div>
					{/if}
					{#if cState.showNavigationArrows}
						<button class="btn btn-circle btn-xs" use:directives.scrollNext>
							{@html cState.direction === 'rtl' ? previousSvg : nextSvg}
						</button>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
	<div class="flex container touch-pan-y touch-pinch-zoom" aria-atomic="false" aria-live={autoplay ? 'off' : 'polite'}>
		{#each photos as slideData, index (slideData.id)}
			<div class="basis-full shrink-0 grow-0" use:directives.slide={{id: slideData.id, index}}>
				{@render slide(slideData)}
			</div>
		{/each}
	</div>
</div>
`;export{t as default};
