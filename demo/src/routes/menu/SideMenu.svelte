<script lang="ts" context="module">
	export let counter = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, frameworkLessUrl$, selectedFramework$} from '$lib/stores';
	import CollapsibleSection from './CollapsibleSection.svelte';
	import {createHasFocus} from '@agnos-ui/svelte/services/focustrack';
	import {writable} from '@amadeus-it-group/tansu';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';

	import './menu.scss';
	import Svg from '$lib/layout/Svg.svelte';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';

	$: fwkCased = $selectedFramework$.substring(0, 1).toUpperCase() + $selectedFramework$.substring(1);

	const angularLogoPrefix = counter++ + '-';
	// very ugly patch of angular logo to work around the issue of the logo not showing on mobile.
	const patchedAngularLogo = angularLogo
		.replace(/id="([^"]+)"/g, `id="${angularLogoPrefix}$1"`)
		.replace(/url\(#([^)]+)/g, `url(#${angularLogoPrefix}$1`);

	$: logo = isAngular ? patchedAngularLogo : isReact ? reactLogo : svelteLogo;

	const open$ = writable(false);
	const {hasFocus$, directive} = createHasFocus();
	$: $open$ = $hasFocus$;

	function giveFocus(el: HTMLAnchorElement) {
		el.focus();
	}
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<div class="dropdown mb-2 mt-1">
			<button
				class="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
				aria-label="choose the framework"
				on:mousedown|preventDefault
				on:click={() => ($open$ = !$open$)}
				type="button"
				aria-expanded={$open$}
			>
				<Svg svg={logo} className="icon-20 align-middle me-3" />
				<span class="fwk-name">{fwkCased}</span>
			</button>
			{#if $open$}
				<ul use:directive class="dropdown-menu dropdown-menu-start bs-popover-auto position-absolute" class:show={$open$}>
					<li>
						<a
							use:giveFocus
							href={`${$pathToRoot$}docs/angular/${$frameworkLessUrl$}`}
							class="dropdown-item d-flex align-items-center"
							class:active={isAngular}
							aria-current={!isAngular || 'page'}
							on:click={() => ($open$ = !$open$)}
						>
							<Svg svg={patchedAngularLogo} className="icon-20 align-middle me-3" />
							Angular
						</a>
					</li>
					<li>
						<a
							href={`${$pathToRoot$}docs/react/${$frameworkLessUrl$}`}
							class="dropdown-item d-flex align-items-center"
							class:active={isReact}
							aria-current={!isReact || 'page'}
							on:click={() => ($open$ = !$open$)}
						>
							<Svg svg={reactLogo} className="icon-20 align-middle me-3" />
							React
						</a>
					</li>
					<li>
						<a
							href={`${$pathToRoot$}docs/svelte/${$frameworkLessUrl$}`}
							class="dropdown-item d-flex align-items-center"
							class:active={isSvelte}
							aria-current={!isSvelte || 'page'}
							on:click={() => ($open$ = !$open$)}
						>
							<Svg svg={svelteLogo} className="icon-20 align-middle me-3" />
							Svelte
						</a>
					</li>
				</ul>
			{/if}
		</div>
	{/if}
	{#each $page.data.menu ?? [] as { title, submenu }}
		<CollapsibleSection headerText={title} path={submenu}>
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

<style>
	.fwk-name {
		min-width: 65px;
		text-align: start;
	}
</style>
