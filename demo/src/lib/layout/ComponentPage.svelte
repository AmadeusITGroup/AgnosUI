<script lang="ts">
	import {afterUpdate} from 'svelte';
	import {getTitle, getWidgetDescription} from '../../app';
	import {selectedFramework$, selectedTabName$, intersectionApi} from '../stores';
	import Header from './Header.svelte';

	export let componentName: string;
	export let tabs: {title: string; key: string; path: string}[];

	$: selectedTab = tabs.find((tabItem) => tabItem.key === $selectedTabName$);
	$: title = `${componentName} ${selectedTab?.title.toLowerCase() ?? ''}`;

	let container: HTMLElement;
	afterUpdate(() =>
		intersectionApi.patch({
			elements: [...container.querySelectorAll('section')] as HTMLElement[],
		})
	);
</script>

<svelte:head>
	<title>{getTitle(title, $selectedFramework$)}</title>
	<meta name="description" content={getWidgetDescription(title, $selectedFramework$)} />
</svelte:head>

<Header title={componentName} {tabs} tab={$selectedTabName$} />
<div bind:this={container} class="main-content">
	<slot tab={$selectedTabName$} />
</div>
