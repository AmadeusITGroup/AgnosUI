<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();
</script>

{@render children()}

<div class="divider"></div>

<div class="w-full flex justify-between">
	<div>
		{#if page.data.prev}
			<div class="font-extrabold text-start">PREVIOUS</div>
			<a class="text-start" href="{routing.pathToRoot}docs/{routing.selectedFramework}/{page.data.prev.slug}{page.data.prev.subpath ?? ''}"
				>{page.data.prev.title}</a
			>
		{/if}
	</div>
	<div class="flex flex-col items-end">
		{#if page.data.next}
			<div class="font-extrabold text-end w-full">NEXT</div>
			<a class="text-end w-100" href="{routing.pathToRoot}docs/{routing.selectedFramework}/{page.data.next.slug}{page.data.next.subpath ?? ''}"
				>{page.data.next.title}</a
			>
		{/if}
	</div>
</div>
