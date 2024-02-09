<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, frameworkLessUrl$, selectedFramework$} from '$lib/stores';
	import CollapsibleSection from './CollapsibleSection.svelte';

	import './menu.scss';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<div class="col flex-grow-0">
			<div class="btn-group btn-group-sm me-2 my-2" role="group" aria-label="Basic radio toggle button group">
				<a
					href={`${$pathToRoot$}docs/angular/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isAngular}
					aria-current={!isAngular || 'page'}>Angular</a
				>
				<a
					href={`${$pathToRoot$}docs/react/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isReact}
					aria-current={!isReact || 'page'}>React</a
				>
				<a
					href={`${$pathToRoot$}docs/svelte/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isSvelte}
					aria-current={!isSvelte || 'page'}>Svelte</a
				>
			</div>
		</div>
	{/if}
	{#each $page.data.menu ?? [] as { title, submenu }}
		<CollapsibleSection headerText={title}>
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
