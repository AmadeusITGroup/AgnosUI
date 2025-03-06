<script lang="ts">
	import type {Source} from '@agnos-ui/common/samples/carousel/photo';
	import type {CarouselApi} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {
		loadRequested,
		sources,
		src,
		alt,
		aspectRatio,
		id,
		registerSlide,
	}: {
		loadRequested: boolean;
		sources: Source[];
		src: string;
		alt: string;
		aspectRatio: number;
		id: string;
		registerSlide: CarouselApi['registerSlide'];
	} = $props();

	let imageLoaded = $state(false);
	const {
		directives: {root},
	} = callWidgetFactory({
		factory: registerSlide,
		get props() {
			return {id};
		},
		enablePatchChanged: true,
	});
</script>

<div class="relative basis-full min-w-0 shrink-0 grow-0 flex justify-center" use:root>
	{#if loadRequested}
		{#if !imageLoaded}
			<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>
		{/if}
		<picture class="flex justify-center">
			{#each sources as { media, srcset }}
				<source {media} {srcset} />
			{/each}
			<img class="select-none object-contain" {alt} {src} style:aspect-ratio={aspectRatio} onload={() => (imageLoaded = true)} />
		</picture>
	{:else}
		<div class="skeleton w-full h-full"></div>
	{/if}
</div>
