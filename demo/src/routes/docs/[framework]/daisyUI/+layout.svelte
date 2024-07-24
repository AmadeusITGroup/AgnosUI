<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import StatusAlert from '$lib/layout/StatusAlert.svelte';
	import {selectedTabName$} from '$lib/stores';
	import {page} from '$app/stores';

	$: tabs = $page.data.tabs ?? [];
	$: selectedTab = tabs.find((tabItem: any) => tabItem.key === $selectedTabName$);
	$: pageTitle = `${$page.data.title} ${selectedTab?.title.toLowerCase() ?? ''}`;
</script>

<Header title={$page.data.title} {pageTitle} status={$page.data.status} cssFramework="daisyUI" />
<div class="main-content">
	{#if $page.data.status !== 'stable'}
		<StatusAlert status={$page.data.status} />
	{/if}
	<slot />
</div>
