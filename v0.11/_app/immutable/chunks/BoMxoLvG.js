const t=`<script lang="ts" generics="SlideData extends {id: string;}">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CarouselProps, CarouselApi, CarouselContext} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import CarouselDefaultNavigation from './CarouselDefaultNavigation.svelte';
	import CarouselDefaultStructure from './CarouselDefaultStructure.svelte';

	let props: Partial<CarouselProps<SlideData>> = $props();

	const widget = callWidgetFactory(createCarousel<SlideData>, {
		get props() {
			return props;
		},
		defaultConfig: {
			structure,
			navigation,
		},
	});
	export const api: CarouselApi = widget.api;
<\/script>

{#snippet structure(props: CarouselContext<SlideData>)}
	<CarouselDefaultStructure {...props} />
{/snippet}
{#snippet navigation(props: CarouselContext<SlideData>)}
	<CarouselDefaultNavigation {...props} />
{/snippet}

<div use:widget.directives.root {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.root)}>
	<Slot content={widget.state.structure} props={widget} />
</div>
`;export{t as default};
