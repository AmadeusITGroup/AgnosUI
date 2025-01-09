<script lang="ts" module>
	export let counter = 0;
</script>

<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import CollapsibleSection from './CollapsibleSection.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import bootstrapLogo from '$resources/bootstrap.svg?raw';
	import typescriptLogo from '$resources/logo-typescript.svg?raw';

	import './menu.scss';
	import Svg from '$lib/layout/Svg.svelte';
	import type {DropdownAnchor} from '$lib/layout/dropdown';

	const regexFwk = /^(.*\/)(angular|react|svelte|typescript)(\/.*)$/;
	const regexPkg = /^(.*\/api\/)(angular|react|svelte|typescript)\/(bootstrap|headless)(\/.*)$/;
	let matchFwk = $derived(page.url.pathname.match(regexFwk));
	let matchPkg = $derived(page.url.pathname.match(regexPkg));

	const angularLogoPrefix = counter++ + '-';
	const patchedAngularLogo = angularLogo
		.replace(/id="([^"]+)"/g, `id="${angularLogoPrefix}$1"`)
		.replace(/url\(#([^)]+)/g, `url(#${angularLogoPrefix}$1`);

	interface FwkLink extends DropdownAnchor {
		logo: string;
	}
	let frameworks: FwkLink[] = $derived(
		matchFwk
			? [
					...((page.data.includesPkg
						? [
								{
									tag: 'a',
									id: 'Typescript',
									href: `${matchFwk[1]}typescript${matchFwk[3]}`,
									isSelected: routing.selectedApiFramework === 'typescript',
									logo: typescriptLogo,
								},
							]
						: []) as FwkLink[]),
					{
						tag: 'a',
						id: 'Angular',
						href: `${matchFwk[1]}angular${matchFwk[3]}`,
						isSelected: routing.selectedApiFramework === 'angular',
						logo: patchedAngularLogo,
					},
					{
						tag: 'a',
						id: 'React',
						href: `${matchFwk[1]}react${matchFwk[3]}`,
						isSelected: routing.selectedApiFramework === 'react',
						logo: reactLogo,
					},
					{
						tag: 'a',
						id: 'Svelte',
						href: `${matchFwk[1]}svelte${matchFwk[3]}`,
						isSelected: routing.selectedApiFramework === 'svelte',
						logo: svelteLogo,
					},
				]
			: [],
	);
	let selectedFwk = $derived(frameworks.find((fwk) => fwk.isSelected)!);
	let packages: FwkLink[] = $derived(
		matchPkg
			? [
					{
						tag: 'a',
						id: 'Headless',
						href: `${matchPkg[1]}${matchPkg[2]}/headless${matchPkg[4]}`,
						isSelected: page.params.type === 'headless',
						logo: agnosUILogo,
					},
					{
						tag: 'a',
						id: 'Bootstrap',
						href: `${matchPkg[1]}${matchPkg[2]}/bootstrap${matchPkg[4]}`,
						isSelected: page.params.type === 'bootstrap',
						logo: bootstrapLogo,
					},
				]
			: [],
	);
	let selectedPkg = $derived(packages.find((pkg) => pkg.isSelected)!);
</script>

<nav class="w-100 mt-1">
	{#if page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<Dropdown ariaLabel="choose the framework" items={frameworks} dropdownClass="mb-2 mt-1" btnClass="btn-outline-primary">
			{#snippet buttonSnip()}
				<Svg svg={selectedFwk.logo} className="icon-20 align-middle me-3" />
				<span class="fwk-name">{selectedFwk.id}</span>
			{/snippet}
			{#snippet itemSnip(item)}
				<Svg svg={item.logo} className="icon-20 align-middle me-3" />
				{item.id}
			{/snippet}
		</Dropdown>
	{/if}
	{#if page.data.includesPkg}
		<strong class="d-flex w-100 align-items-center fw-semibold">Package </strong>
		<Dropdown ariaLabel="choose the package" items={packages} dropdownClass="mb-2 mt-1" btnClass="btn-outline-primary">
			{#snippet buttonSnip()}
				<Svg svg={selectedPkg.logo} className="icon-20 align-middle me-3" />
				<span class="pkg-name">{selectedPkg.id}</span>
			{/snippet}
			{#snippet itemSnip(item)}
				<Svg svg={item.logo} className="icon-20 align-middle me-3" />
				{item.id}
			{/snippet}
		</Dropdown>
		<hr />
	{/if}
	{#each page.data.menu ?? [] as { title, submenu, path } (title)}
		{#if path}
			{@const isCurrent = page.url.pathname?.includes(path)}
			<a
				class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
				class:active={isCurrent}
				aria-current={isCurrent ? 'page' : undefined}
				href="{routing.pathToRoot}{path}"
			>
				{title}
			</a>
		{/if}
		{#if submenu}
			<CollapsibleSection headerText={title} path={submenu}>
				<div>
					{#each submenu as { label, status, path, subpath, slug } (slug)}
						{@const isCurrent = page.url.pathname?.includes(path)}
						<a
							class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
							class:active={isCurrent}
							aria-current={isCurrent ? 'page' : undefined}
							href="{routing.pathToRoot}{path}{subpath ?? ''}"
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
	.pkg-name {
		min-width: 80px;
		text-align: start;
	}
</style>
