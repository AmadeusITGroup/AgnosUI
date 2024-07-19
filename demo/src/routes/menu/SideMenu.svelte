<script lang="ts" context="module">
	export let counter = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import CollapsibleSection from './CollapsibleSection.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import Dropdown from '$lib/layout/Dropdown.svelte';

	import './menu.scss';
	import Svg from '$lib/layout/Svg.svelte';
	import type {DropdownAnchor} from '$lib/layout/dropdown';

	const regexFwk = /^(.*\/)(angular|react|svelte)(\/.*)$/;
	$: matchFwk = $page.url.pathname.match(regexFwk);

	const angularLogoPrefix = counter++ + '-';
	// very ugly patch of angular logo to work around the issue of the logo not showing on mobile.
	const patchedAngularLogo = angularLogo
		.replace(/id="([^"]+)"/g, `id="${angularLogoPrefix}$1"`)
		.replace(/url\(#([^)]+)/g, `url(#${angularLogoPrefix}$1`);

	interface FwkLink extends DropdownAnchor {
		logo: string;
	}
	let frameworks: FwkLink[];
	$: frameworks = matchFwk
		? [
				{
					tag: 'a',
					id: 'Angular',
					href: `${matchFwk[1]}angular${matchFwk[3]}`,
					isSelected: $selectedFramework$ === 'angular',
					logo: patchedAngularLogo,
				},
				{
					tag: 'a',
					id: 'React',
					href: `${matchFwk[1]}react${matchFwk[3]}`,
					isSelected: $selectedFramework$ === 'react',
					logo: reactLogo,
				},
				{
					tag: 'a',
					id: 'Svelte',
					href: `${matchFwk[1]}svelte${matchFwk[3]}`,
					isSelected: $selectedFramework$ === 'svelte',
					logo: svelteLogo,
				},
			]
		: [];
	$: selectedFwk = frameworks.find((fwk) => fwk.isSelected)!;
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<Dropdown ariaLabel="choose the framework" items={frameworks} dropdownClass="mb-2 mt-1" btnClass="btn-outline-primary">
			<svelte:fragment slot="button">
				<Svg svg={selectedFwk.logo} className="icon-20 align-middle me-3" />
				<span class="fwk-name">{selectedFwk.id}</span>
			</svelte:fragment>
			<svelte:fragment slot="item" let:item>
				<Svg svg={item.logo} className="icon-20 align-middle me-3" />
				{item.id}
			</svelte:fragment>
		</Dropdown>
	{/if}
	{#each $page.data.menu ?? [] as { title, submenu, path } (title)}
		{#if path}
			{@const isCurrent = $page.url.pathname?.includes(path)}
			<a
				class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
				class:active={isCurrent}
				aria-current={isCurrent ? 'page' : undefined}
				href="{$pathToRoot$}{path}"
			>
				{title}
			</a>
		{/if}
		{#if submenu}
			<CollapsibleSection headerText={title} path={submenu}>
				<div>
					{#each submenu as { label, status, path, subpath, slug } (slug)}
						{@const isCurrent = $page.url.pathname?.includes(path)}
						<a
							class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
							class:active={isCurrent}
							aria-current={isCurrent ? 'page' : undefined}
							href="{$pathToRoot$}{path}{subpath ?? ''}"
						>
							{label}
							{#if status === 'inprogress'}<span class="badge text-bg-warning">In progress</span>{/if}
							{#if status === 'beta'}<span class="badge text-bg-info">Beta</span>{/if}
						</a>
					{/each}
				</div>
			</CollapsibleSection>
		{/if}
	{/each}
</nav>

<style>
	.fwk-name {
		min-width: 65px;
		text-align: start;
	}
</style>
