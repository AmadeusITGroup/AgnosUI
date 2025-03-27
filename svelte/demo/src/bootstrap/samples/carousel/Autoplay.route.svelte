<script lang="ts">
	import {Carousel, type CarouselContext} from '@agnos-ui/svelte-bootstrap/components/carousel';
	import AutoplayNavigation from './AutoplayNavigation.svelte';
	import AutoPlay from 'embla-carousel-autoplay';
	import '@agnos-ui/common/samples/carousel/autoplay.css';

	type Photo = {id: string; src: string};
	const prefixId = $props.id();

	const photos: Photo[] = [944, 1011, 984].map((n) => ({id: `${prefixId}-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));

	let isPlaying = $state(true);
	let ariaLive = $derived(isPlaying ? 'off' : 'polite');

	const plugins = [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 4_000})];
</script>

<Carousel slidesData={photos} className="autoplay-carousel" loop {plugins} {ariaLive}>
	{#snippet navigation(context: CarouselContext<Photo>)}
		<AutoplayNavigation {...context} bind:isPlaying />
	{/snippet}
	{#snippet slide({src}: Photo)}
		<img class="w-100 rounded-5" alt="random picsum" {src} style="aspect-ratio: 1.8 / 1;" />
	{/snippet}
</Carousel>
