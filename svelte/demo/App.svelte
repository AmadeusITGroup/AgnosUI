<script lang="ts">
	import {computed} from '@amadeus-it-group/tansu';
	import Page404 from './Page404.svelte';
	import {hash$} from '../../common/utils';

	import 'bootstrap/dist/css/bootstrap.css';
	import '../../common/demo.scss';

	const componentRegExp = /samples\/([^/]*)\/([^/]*).route.svelte/;
	function replacePattern(components: Record<string, any>) {
		const directComponents: Record<string, any> = {};
		for (const [key, component] of Object.entries(components)) {
			const matches = key.match(componentRegExp);
			if (matches) {
				directComponents[`/${matches[1]}/${matches[2]}`.toLowerCase()] = component;
			}
		}
		return directComponents;
	}
	const components = replacePattern(import.meta.glob('./samples/*/*.route.svelte', {eager: true, import: 'default'}));

	const component$ = computed(() => {
		const hash = hash$();
		return hash ? components[hash.split('#')[0].split('?')[0]] || Page404 : undefined;
	});
</script>

<div class="container p-3">
	{#if $component$}
		<svelte:component this={$component$} />
	{:else}
		<h3>Samples:</h3>
		<div class="sample-links">
			{#each Object.keys(components) as url}
				<div><a href={'#' + url}>{url}</a></div>
			{/each}
		</div>
	{/if}
</div>
