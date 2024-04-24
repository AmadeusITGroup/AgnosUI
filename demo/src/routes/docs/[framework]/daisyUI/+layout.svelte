<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import StatusAlert from '$lib/layout/StatusAlert.svelte';

	import {selectedFramework$, selectedTabName$} from '$lib/stores';

	import {page} from '$app/stores';
	import {getTitle} from '../../../../app';

	$: tabs = $page.data.tabs ?? [];
	$: selectedTab = tabs.find((tabItem: any) => tabItem.key === $selectedTabName$);
	$: title = `${$page.data.title} ${selectedTab?.title.toLowerCase() ?? ''}`;
</script>

<svelte:head>
	<meta name="description" content={getTitle(title, $selectedFramework$)} />
</svelte:head>

<Header title={$page.data.title} status={$page.data.status} cssFramework="daisyUI" selectedFramework={$selectedFramework$} />
<div class="main-content">
	{#if $page.data.status !== 'stable'}
		<StatusAlert status={$page.data.status} />
	{/if}
	<slot />
</div>
