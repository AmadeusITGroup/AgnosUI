<script lang="ts">
	import {type CarouselProps, createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import AutoPlay from 'embla-carousel-autoplay';
	import type {Snippet} from 'svelte';
	import previousSvg from '@agnos-ui/common/samples/carousel/previous.svg?raw';
	import nextSvg from '@agnos-ui/common/samples/carousel/next.svg?raw';
	import pauseSvg from '@agnos-ui/common/samples/carousel/pause.svg?raw';
	import playSvg from '@agnos-ui/common/samples/carousel/play.svg?raw';
	import {setCarouselApiContext} from './carousel';

	let {
		children,
		autoplay,
		...props
	}: Partial<Omit<CarouselProps, 'plugins'>> & {
		children: Snippet;
		autoplay?: boolean;
	} = $props();

	const plugins = $derived(autoplay ? [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 2_000})] : []);

	const {
		state: cState,
		directives: {root, tabIndicator, slidePrev, slideNext},
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

	setCarouselApiContext(api);
</script>

<div class="overflow-hidden relative w-full cursor-grab active:cursor-grabbing ring-primary has-[.au-carousel-slide:focus-visible]:ring-3" use:root>
	{#if cState.showNavigationArrows || cState.showNavigationIndicators || autoplay}
		<div class={['absolute top-2 right-2 left-2 z-1 flex', autoplay ? 'justify-between' : 'justify-center']} dir={cState.direction}>
			{#if autoplay}
				<div class="flex p-1 px-2 cursor-auto bg-base-100 rounded" {onpointerdown}>
					<button class="btn btn-xs btn-square" aria-label={playing ? 'Pause' : 'Play'} onclick={togglePlay}>
						{@html playing ? pauseSvg : playSvg}
					</button>
				</div>
			{/if}
			{#if cState.showNavigationArrows || cState.showNavigationIndicators}
				<div class="flex p-1 px-2 gap-1 cursor-auto bg-base-100 rounded-xl" dir={cState.direction} {onpointerdown}>
					{#if cState.showNavigationArrows}
						<button class="btn btn-circle btn-xs" use:slidePrev>
							{@html cState.direction === 'rtl' ? nextSvg : previousSvg}
						</button>
					{/if}
					{#if cState.showNavigationIndicators}
						<div class="flex gap-1" role="tablist">
							{#each cState.slides as { id }, index (id)}
								<!-- svelte-ignore a11y_consider_explicit_label -->
								<button class={['btn btn-xs', cState.selectedScrollSnap === index && 'btn-active']} use:tabIndicator={{index, id}}>
									{index + 1}
								</button>
							{/each}
						</div>
					{/if}
					{#if cState.showNavigationArrows}
						<button class="btn btn-circle btn-xs" use:slideNext>
							{@html cState.direction === 'rtl' ? previousSvg : nextSvg}
						</button>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
	<div class="flex container touch-pan-y touch-pinch-zoom" aria-atomic="false" aria-live={autoplay ? 'off' : 'polite'} dir={cState.direction}>
		{@render children()}
	</div>
</div>
