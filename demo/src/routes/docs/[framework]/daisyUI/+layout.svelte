<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import StatusAlert from '$lib/layout/StatusAlert.svelte';
	import {routing} from '$lib/routing.svelte';
	import {page} from '$app/state';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();

	let tabs = $derived(page.data.tabs ?? []);
	let selectedTab = $derived(tabs.find((tabItem: any) => tabItem.key === routing.selectedTabName));
	let pageTitle = $derived(`${page.data.title} ${selectedTab?.title.toLowerCase() ?? ''}`);
</script>

<Header title={page.data.title} {pageTitle} status={page.data.status} cssFramework="daisyUI" />
<div class="main-content">
	{#if page.data.status !== 'stable'}
		<StatusAlert status={page.data.status} />
	{/if}
	{@render children()}
</div>
