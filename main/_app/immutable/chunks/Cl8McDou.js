const t=`<script lang="ts" generics="SlideData extends {id: string;}">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CarouselProps, CarouselApi} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let props: Partial<CarouselProps<SlideData>> = $props();

	const {
		directives,
		api: carouselApi,
		state,
	} = callWidgetFactory({
		factory: createCarousel<SlideData>,
		widgetName: 'collapse',
		props,
		enablePatchChanged: true,
	});
	export const api: CarouselApi = carouselApi;
<\/script>

<div use:directives.root {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.root)}>
	{#if state.showNavigationArrows}
		{#if state.canScrollPrev}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button use:directives.scrollPrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollPrev)}>
				<span class="carousel-control-prev-icon"></span>
			</button>
		{/if}
		{#if state.canScrollNext}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button use:directives.scrollNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollNext)}>
				<span class="carousel-control-next-icon"></span>
			</button>
		{/if}
	{/if}
	{#if state.showNavigationIndicators}
		<div class="carousel-indicators" role="tablist">
			{#each state.slidesData as { id }, index (id)}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button use:directives.tabIndicator={{index, id}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.tabIndicator, {index, id}])}></button>
			{/each}
		</div>
	{/if}
	<div class="au-carousel-container" aria-atomic="false" aria-live="polite">
		{#each state.slidesData as slideData, index (slideData.id)}
			<div use:directives.slide={{index, id: slideData.id}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.slide, {index, id: slideData.id}])}>
				<Slot content={state.slide} props={slideData} />
			</div>
		{/each}
	</div>
</div>
`;export{t as default};
