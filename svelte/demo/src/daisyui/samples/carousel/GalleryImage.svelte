<script lang="ts">
	import type {Source} from '@agnos-ui/common/samples/carousel/photo';

	export let loadRequested;
	export let sources: Source[];
	export let src: string;
	export let alt: string;
	export let aspectRatio: number;
	export let toShow: boolean;

	let imageLoaded = false;
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
				on:load={() => (imageLoaded = true)}
			/>
		</picture>
	{:else}
		<div class="skeleton w-full h-full"></div>
	{/if}
</div>
