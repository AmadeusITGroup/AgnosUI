<script lang="ts">
	import type {CarouselProps, CarouselApi} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import {type Snippet} from 'svelte';
	import {setCarouselApiContext} from './carousel';

	let {children, ...props}: Partial<CarouselProps> & {children: Snippet} = $props();

	const {
		directives: {root, slidePrev, slideNext, tabIndicator},
		api: carouselApi,
		state,
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'collapse',
		get props() {
			return {...props};
		},
		enablePatchChanged: true,
	});
	export const api: CarouselApi = carouselApi;

	const onpointerdown = (event: PointerEvent) => {
		event.preventDefault();
	};

	setCarouselApiContext(carouselApi);
</script>

<div use:root>
	{#if state.showNavigationArrows}
		{#if state.canScrollPrev}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="carousel-control-prev" use:slidePrev {onpointerdown}>
				<span class="carousel-control-prev-icon"></span>
			</button>
		{/if}
		{#if state.canScrollNext}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="carousel-control-next" use:slideNext {onpointerdown}>
				<span class="carousel-control-next-icon"></span>
			</button>
		{/if}
	{/if}
	{#if state.showNavigationIndicators}
		<div class="carousel-indicators" role="tablist">
			{#each state.slides as { id }, index (id)}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button use:tabIndicator={{index, id}} {onpointerdown}></button>
			{/each}
		</div>
	{/if}
	<div class="au-carousel-container" aria-atomic="false" aria-live="polite">
		{@render children()}
	</div>
</div>
