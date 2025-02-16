<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();
</script>

{@render children()}

<div class="divider"></div>

<div class="w-full flex justify-between">
	<div>
		{#if $page.data.prev}
			<div class="font-extrabold text-start">PREVIOUS</div>
			<a class="text-start link" href="{$pathToRoot$}docs/{$selectedFramework$}/{$page.data.prev.slug}{$page.data.prev.subpath ?? ''}"
				>{$page.data.prev.title}</a
			>
		{/if}
	</div>
	<div class="flex flex-col items-end">
		{#if $page.data.next}
			<div class="font-extrabold text-end w-full">NEXT</div>
			<a class="text-end w-full link" href="{$pathToRoot$}docs/{$selectedFramework$}/{$page.data.next.slug}{$page.data.next.subpath ?? ''}"
				>{$page.data.next.title}</a
			>
		{/if}
	</div>
</div>
