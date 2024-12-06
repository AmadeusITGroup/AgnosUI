<script lang="ts">
	import type {Source} from '@agnos-ui/common/samples/carousel/photo';

	let {
		loadRequested,
		sources,
		src,
		alt,
		aspectRatio,
		toShow,
	}: {
		loadRequested: boolean;
		sources: Source[];
		src: string;
		alt: string;
		aspectRatio: number;
		toShow: boolean;
	} = $props();

	let imageLoaded = $state(false);
</script>

<div class="relative basis-full min-w-0 shrink-0 grow-0 flex justify-center">
	{#if loadRequested}
		{#if !imageLoaded}
			<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>
		{/if}
		<picture class="flex justify-center">
			{#each sources as { media, srcset }}
				<source {media} {srcset} />
			{/each}
			<img
				class="select-none object-contain transition-opacity ease-in-out duration-300 opacity-0"
				class:opacity-100={toShow}
				{alt}
				{src}
				style:aspect-ratio={aspectRatio}
				onload={() => (imageLoaded = true)}
			/>
		</picture>
	{:else}
		<div class="skeleton w-full h-full"></div>
	{/if}
</div>
