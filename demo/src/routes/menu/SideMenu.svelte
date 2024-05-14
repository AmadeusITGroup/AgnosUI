<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import CollapsibleSection from './CollapsibleSection.svelte';
	import {computed, get} from '@amadeus-it-group/tansu';

	import './menu.scss';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';

	$: isCore = $page.params.package === 'core';
	$: isHeadless = $page.params.package === 'headless';
	$: isBootstrap = $page.params.package === 'bootstrap';

	function toKebabCase(original: string): string {
		return original
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
			.join('-')
			.toLowerCase();
	}

	const frameworkKeyRegExp = /\/(docs|api)\/[a-z]*\/(.*)$/;
	const frameworkRegexMatch$ = computed(() => {
		const $page = get(page);
		return $page.url.pathname.match(frameworkKeyRegExp) || [];
	});
	const preFrameworkMatch$ = computed(() => frameworkRegexMatch$()?.[1] ?? '');
	const afterFrameworkMatch$ = computed(() => frameworkRegexMatch$()?.[2] ?? '');
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<div class="col flex-grow-0">
			<div class="btn-group btn-group-sm me-2 my-2" role="group" aria-label="Basic radio toggle button group">
				<a
					href="{$pathToRoot$}{$preFrameworkMatch$}/angular/{$page.data.includesPkg ? $page.params.package : $afterFrameworkMatch$}"
					class="btn btn-outline-primary"
					class:active={isAngular}
					aria-current={!isAngular || 'page'}>Angular</a
				>
				<a
					href="{$pathToRoot$}{$preFrameworkMatch$}/react/{$page.data.includesPkg ? $page.params.package : $afterFrameworkMatch$}"
					class="btn btn-outline-primary"
					class:active={isReact}
					aria-current={!isReact || 'page'}>React</a
				>
				<a
					href="{$pathToRoot$}{$preFrameworkMatch$}/svelte/{$page.data.includesPkg ? $page.params.package : $afterFrameworkMatch$}"
					class="btn btn-outline-primary"
					class:active={isSvelte}
					aria-current={!isSvelte || 'page'}>Svelte</a
				>
			</div>
		</div>
	{/if}
	{#if $page.data.includesPkg}
		<strong class="d-flex w-100 align-items-center fw-semibold">Package </strong>
		<div class="col flex-grow-0">
			<div class="btn-group btn-group-sm me-2 my-2" role="group" aria-label="Basic radio toggle button group">
				<a href="{$pathToRoot$}api/{$selectedFramework$}/core" class="btn btn-outline-primary" class:active={isCore} aria-current={!isCore || 'page'}
					>Core</a
				>
				<a
					href="{$pathToRoot$}api/{$selectedFramework$}/headless"
					class="btn btn-outline-primary"
					class:active={isHeadless}
					aria-current={!isHeadless || 'page'}>Headless</a
				>
				<a
					href="{$pathToRoot$}api/{$selectedFramework$}/bootstrap"
					class="btn btn-outline-primary"
					class:active={isBootstrap}
					aria-current={!isBootstrap || 'page'}>Bootstrap</a
				>
			</div>
		</div>
	{/if}
	{#each $page.data.menu ?? [] as { title, submenu }}
		<CollapsibleSection headerText={title} defaultVisible={$page.url.pathname?.includes(toKebabCase(title))}>
			<div>
				{#each submenu as { label, status, path, subpath }}
					{@const isCurrent = $page.url.pathname?.includes(path)}
					<a
						class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
						class:active={isCurrent}
						aria-current={isCurrent ? 'page' : undefined}
						href="{$pathToRoot$}{path}{subpath}"
					>
						{label}
						{#if status === 'inprogress'}<span class="badge text-bg-warning">In progress</span>{/if}
						{#if status === 'beta'}<span class="badge text-bg-info">Beta</span>{/if}
					</a>
				{/each}
			</div>
		</CollapsibleSection>
	{/each}
</nav>
