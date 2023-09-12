<script lang="ts">
	import {getTitle, getWidgetDescription} from '../../app';
	import {selectedFramework$, selectedTabName$} from '../stores';
	import Header from './Header.svelte';

	export let componentName: string;
	export let tabs: {title: string; key: string; path: string}[];

	$: selectedTab = tabs.find((tabItem) => tabItem.key === $selectedTabName$);
	$: title = `${componentName} ${selectedTab?.title.toLowerCase() ?? ''}`;
</script>

<svelte:head>
	<title>{getTitle(title, $selectedFramework$)}</title>
	<meta name="description" content={getWidgetDescription(title, $selectedFramework$)} />
</svelte:head>

<Header title={componentName} {tabs} tab={$selectedTabName$} />
<div class="main-content">
	<slot />
</div>
