<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, pathToChildRoot$, frameworkLessUrl$, selectedFramework$} from '$lib/stores';

	import './menu.scss';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<div class="col flex-grow-0">
			<div class="btn-group btn-group-sm me-2 my-2 bg-white" role="group" aria-label="Basic radio toggle button group">
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
		<strong class="d-flex w-100 align-items-center fw-semibold">{title}</strong>
		<div class="my-2">
			{#each submenu as { label, path, subpath }}
				{@const isCurrent = $page.route.id?.includes(path)}
				<a
					class="menu-item menu-item-sidenav"
					class:active={isCurrent}
					aria-current={isCurrent ? 'page' : undefined}
					href="{$pathToChildRoot$}{path}{subpath}"
				>
					{label}
				</a>
			{/each}
		</div>
	{/each}
</nav>
