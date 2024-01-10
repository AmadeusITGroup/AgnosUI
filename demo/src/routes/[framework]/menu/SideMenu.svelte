<script lang="ts">
	import {page} from '$app/stores';
	import {menu} from '../../navigation';
	import {pathToRoot$, frameworkLessUrl$, selectedFramework$} from '$lib/stores';

	import './menu.scss';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';
</script>

<nav class="w-100 mt-1">
	<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
	<div class="col flex-grow-0">
		<div class="btn-group btn-group-sm me-2 my-2 bg-white" role="group" aria-label="Basic radio toggle button group">
			<a
				href={`${$pathToRoot$}angular/${$frameworkLessUrl$}`}
				class="btn btn-outline-primary"
				class:active={isAngular}
				aria-current={!isAngular || 'page'}>Angular</a
			>
			<a href={`${$pathToRoot$}react/${$frameworkLessUrl$}`} class="btn btn-outline-primary" class:active={isReact} aria-current={!isReact || 'page'}
				>React</a
			>
			<a
				href={`${$pathToRoot$}svelte/${$frameworkLessUrl$}`}
				class="btn btn-outline-primary"
				class:active={isSvelte}
				aria-current={!isSvelte || 'page'}>Svelte</a
			>
		</div>
	</div>
	{#each menu as { title, submenu }}
		<strong class="d-flex w-100 align-items-center fw-semibold">{title}</strong>
		<div class="my-2">
			{#each submenu as { label, path, subpath }}
				{@const isCurrent = $page.route.id?.startsWith(`/[framework]${path}`)}
				<a
					class="menu-item menu-item-sidenav"
					class:active={isCurrent}
					aria-current={isCurrent ? 'page' : undefined}
					href="{$pathToRoot$}{$selectedFramework$}{path}{subpath}"
				>
					{label}
				</a>
			{/each}
		</div>
	{/each}
</nav>
