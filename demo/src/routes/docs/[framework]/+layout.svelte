<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();
</script>

{@render children()}

<hr />

<div class="w-100 d-flex justify-content-between">
	<div>
		{#if page.data.prev}
			<div class="fw-bolder text-start">PREVIOUS</div>
			<a class="text-start" href="{routing.pathToRoot}docs/{routing.selectedFramework}/{page.data.prev.slug}{page.data.prev.subpath ?? ''}"
				>{page.data.prev.title}</a
			>
		{/if}
	</div>
	<div class="d-flex flex-column align-items-end">
		{#if page.data.next}
			<div class="fw-bolder text-end w-100">NEXT</div>
			<a class="text-end w-100" href="{routing.pathToRoot}docs/{routing.selectedFramework}/{page.data.next.slug}{page.data.next.subpath ?? ''}"
				>{page.data.next.title}</a
			>
		{/if}
	</div>
</div>
