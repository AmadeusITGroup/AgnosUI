<script lang="ts">
	import Header from '$lib/layout/Header.svelte';

	import {selectedFramework$, selectedTabName$} from '$lib/stores';

	import {page} from '$app/stores';
	import {getTitle} from '../../../../app';

	$: tabs = $page.data.tabs ?? [];
	$: selectedTab = tabs.find((tabItem: any) => tabItem.key === $selectedTabName$);
	$: title = `${$page.data.mainTitle} ${selectedTab?.title.toLowerCase() ?? ''}`;
</script>

<svelte:head>
	<meta name="description" content={getTitle(title, $selectedFramework$)} />
</svelte:head>

<Header title={$page.data.mainTitle} />
<div class="main-content">
	<slot />
</div>
