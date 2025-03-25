<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselProps, CarouselApi, CarouselContext} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import CarouselDefaultNavigation from './CarouselDefaultNavigation.svelte';
	import CarouselDefaultStructure from './CarouselDefaultStructure.svelte';

	let props: Partial<CarouselProps<SlideData>> = $props();

	const widget = callWidgetFactory({
		factory: createCarousel<SlideData>,
		widgetName: 'collapse',
		props,
		enablePatchChanged: true,
		defaultConfig: {
			structure,
			navigation,
		},
	});
	export const api: CarouselApi = widget.api;
</script>

{#snippet structure(props: CarouselContext<SlideData>)}
	<CarouselDefaultStructure {...props} />
{/snippet}
{#snippet navigation(props: CarouselContext<SlideData>)}
	<CarouselDefaultNavigation {...props} />
{/snippet}

<div use:widget.directives.root>
	<Slot content={widget.state.structure} props={widget} />
</div>
