<script lang="ts" generics="Item">
	import {type CarouselProps, createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import AutoPlay from 'embla-carousel-autoplay';
	import type {Snippet} from 'svelte';
	import previousSvg from '@agnos-ui/common/samples/carousel/previous.svg?raw';
	import nextSvg from '@agnos-ui/common/samples/carousel/next.svg?raw';

	let {
		items,
		itemSnip,
		withNavArrows,
		withNavIndicators,
		autoplay,
		...props
	}: Partial<Omit<CarouselProps, 'plugins'>> & {
		items: Item[];
		withNavArrows?: boolean;
		withNavIndicators?: boolean;
		autoplay?: boolean;
		itemSnip: Snippet<[Item]>;
	} = $props();

	const plugins = $derived(autoplay ? [AutoPlay({playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true})] : []);

	const {
		state,
		directives: {emblaDirective},
		api: {scrollNext, scrollPrev, scrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		get props() {
			return {
				...props,
				container: '.container',
				plugins,
			};
		},
		enablePatchChanged: true,
	});
	const onpointerdown = (event: PointerEvent) => event.preventDefault();
</script>

<div class="overflow-hidden relative cursor-grab active:cursor-grabbing flex flex-col-reverse" use:emblaDirective>
	{#if withNavIndicators}
		<div class="flex w-full justify-center gap-2 py-2 cursor-auto">
			{#each items as _, index}
				<button
					class="btn btn-xs md:btn-sm"
					class:btn-active={state.selectedScrollSnap === index}
					onclick={() => scrollTo(index)}
					aria-label="Go to slide {index + 1}">{index + 1}</button
				>
			{/each}
		</div>
	{/if}
	<div class="flex container">
		{#each items as item, index (index)}
			<div class="basis-full min-w-0 shrink-0 grow-0 flex justify-center">
				{@render itemSnip(item)}
			</div>
		{/each}
	</div>
	{#if withNavArrows}
		<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<button
				class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
				{onpointerdown}
				disabled={!state.canScrollPrev}
				onclick={scrollPrev}
				aria-label="Go to previous slide"
			>
				{@html previousSvg}
			</button>
			<button
				class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
				{onpointerdown}
				disabled={!state.canScrollNext}
				onclick={scrollNext}
				aria-label="Go to next slide"
			>
				{@html nextSvg}
			</button>
		</div>
	{/if}
</div>
