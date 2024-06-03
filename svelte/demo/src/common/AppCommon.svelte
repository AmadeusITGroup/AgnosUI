<script lang="ts">
	import {derived} from '@amadeus-it-group/tansu';
	import {hash$} from '@agnos-ui/common/samples/utils/hashUtil';

	import '@agnos-ui/common/demo.scss';
	import '@agnos-ui/common/samples/links.scss';
	import Lazy from './Lazy.svelte';

	const componentRegExp = /samples\/([^/]*)\/([^/]*).route.svelte/;

	export let componentsToBeProcessed: Record<string, any>;

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
	const components = replacePattern(componentsToBeProcessed);

	let oldPath: string;
	const component$ = derived(
		hash$,
		(hash, set) => {
			const newPath = hash.split('#')[0].split('?')[0];
			if (oldPath !== newPath) {
				// do not reload when the hash (route) stays the same
				oldPath = newPath;
				set(
					hash
						? async () => {
								const componentLoader = components[hash.split('#')[0].split('?')[0]];
								if (componentLoader) {
									const component = await componentLoader();
									if (window.parent) {
										window.parent.postMessage({type: 'sampleload'});
									}
									return component;
								} else {
									return import('./Page404.svelte');
								}
							}
						: undefined,
				);
			}
		},
		undefined as (() => Promise<any>) | undefined,
	);
</script>

{#if $component$}
	<Lazy component={$component$} />
{:else}
	<h3>Samples:</h3>
	<div class="sample-links">
		{#each Object.keys(components) as url}
			<div><a href={'#' + url}>{url}</a></div>
		{/each}
	</div>
{/if}
