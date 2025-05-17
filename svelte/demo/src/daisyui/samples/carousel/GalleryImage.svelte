<script lang="ts">
	import type {Source} from '@agnos-ui/common/samples/carousel/photo';
	import type {Attachment} from 'svelte/attachments';

	let {
		loadRequested,
		sources,
		src,
		alt,
		aspectRatio,
		id,
		index,
		slide,
	}: {
		loadRequested: boolean;
		sources: Source[];
		src: string;
		alt: string;
		aspectRatio: number;
		id: string;
		index: number;
		slide: ({id, index}: {id: string; index: number}) => Attachment<HTMLElement>;
	} = $props();

	let imageLoaded = $state(false);
</script>

<div class="relative basis-full min-w-0 shrink-0 grow-0 flex justify-center" {@attach slide({id, index})}>
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
