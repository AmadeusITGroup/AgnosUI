<script lang="ts">
	import type {Snippet} from 'svelte';
	import {getCarouselApiContext} from './carousel';
	import type {CarouselSlideProps} from './carousel.gen';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	const id = $props.id();
	let {children, ...slideProps}: Partial<CarouselSlideProps> & {children: Snippet} = $props();

	const {registerSlide} = getCarouselApiContext();
	const {
		directives: {root},
	} = callWidgetFactory({
		factory: registerSlide,
		get props() {
			return {...slideProps};
		},
		defaultConfig: {
			id,
		},
		enablePatchChanged: true,
	});
</script>

<div use:root>
	{@render children()}
</div>
