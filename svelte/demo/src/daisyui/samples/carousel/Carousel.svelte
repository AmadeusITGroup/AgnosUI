<script lang="ts">
	import {type CarouselProps, createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import AutoPlay from 'embla-carousel-autoplay';

	type Item = $$Generic; // eslint-disable-line no-undef
	type $$Props = Partial<Omit<CarouselProps, 'plugins'>> & {
		items: Item[];
		withNavArrows?: boolean;
		withNavIndicators?: boolean;
		autoplay?: boolean;
	};

	export let items: Item[];
	export let withNavArrows = false;
	export let withNavIndicators = false;
	export let autoplay = false;

	const {
		stores: {canScrollNext$, canScrollPrev$, selectedScrollSnap$},
		directives: {emblaDirective},
		patchChangedProps,
		patch,
		api: {scrollNext, scrollPrev, scrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		$$props,
	});
	$: patchChangedProps($$props);
	$: {
		if (autoplay) {
			patch({plugins: [AutoPlay({playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true})]});
		} else {
			patch({plugins: []});
		}
	}
</script>

<div class="overflow-hidden relative cursor-grab active:cursor-grabbing" use:emblaDirective>
	<div class="flex">
		{#each items as item, index (index)}
			<div class="basis-full min-w-0 shrink-0 grow-0 flex justify-center">
				<slot prop={item} />
			</div>
		{/each}
	</div>
	{#if withNavArrows}
		<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<button
				class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
				on:pointerdown|preventDefault
				disabled={!$canScrollPrev$}
				on:click={scrollPrev}
				aria-label="Go to previous slide">❮</button
			>
			<button
				class="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
				on:pointerdown|preventDefault
				disabled={!$canScrollNext$}
				on:click={scrollNext}
				aria-label="Go to next slide">❯</button
			>
		</div>
	{/if}
	{#if withNavIndicators}
		<div class="flex w-full justify-center gap-2 py-2 cursor-auto">
			{#each items as _, index}
				<button
					class="btn btn-xs md:btn-sm"
					class:btn-active={$selectedScrollSnap$ === index}
					on:click={() => scrollTo(index)}
					aria-label="Go to slide {index + 1}">{index + 1}</button
				>
			{/each}
		</div>
	{/if}
</div>
