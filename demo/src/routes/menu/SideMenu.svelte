<script lang="ts" module>
	export let counter = 0;
</script>

<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import bootstrapLogo from '$resources/bootstrap.svg?raw';
	import typescriptLogo from '$resources/logo-typescript.svg?raw';

	import './menu.css';
	import Svg from '$lib/layout/Svg.svelte';
	import type {DropdownAnchor} from '$lib/layout/dropdown';

	// TODO migratiton daisyUI tree when possible
	// import Tree from '@agnos-ui/svelte-headless/components/tree.svelte';
	// import {type TreeItem} from '@agnos-ui/svelte-headless/components/tree';
	import CollapsibleSectionDaisyUI from './CollapsibleSectionDaisyUI.svelte';
	import DropdownDaisyUI from '$lib/layout/DropdownDaisyUI.svelte';

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
					{
						tag: 'a',
						id: 'Angular',
						href: `${matchFwk[1]}angular${matchFwk[3]}`,
						isSelected: routing.selectedApiFramework === 'angular',
						logo: patchedAngularLogo,
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

<nav class="w-full mt-1">
	<div class="px-4">
		{#if page.data.includesFwk}
			<strong class="flex w-full items-center font-semibold">Framework </strong>
			<DropdownDaisyUI
				ariaLabel="choose the framework"
				items={frameworks}
				dropdownClass="dropdown mb-2 mt-1"
				btnClass="btn btn-outline btn-primary m-1"
			>
				{#snippet buttonSnip()}
					<Svg svg={selectedFwk.logo} className="icon-20 align-middle me-3" />
					<span class="fwk-name">{selectedFwk.id}</span>
				{/snippet}
				{#snippet itemSnip(item)}
					<Svg svg={item.logo} className="icon-20 align-middle me-3" />
					{item.id}
				{/snippet}
			</DropdownDaisyUI>
		{/if}
		{#if page.data.includesPkg}
			<strong class="flex w-full items-center font-semibold">Package </strong>
			<DropdownDaisyUI ariaLabel="choose the package" items={packages} dropdownClass="dropdown mb-2 mt-1" btnClass="btn btn-outline btn-primary m-1">
				{#snippet buttonSnip()}
					<Svg svg={selectedPkg.logo} className="icon-20 align-middle me-3" />
					<span class="pkg-name">{selectedPkg.id}</span>
				{/snippet}
				{#snippet itemSnip(item)}
					<Svg svg={item.logo} className="icon-20 align-middle me-3" />
					{item.id}
				{/snippet}
			</DropdownDaisyUI>
			<hr />
		{/if}
	</div>
	{#if page.data.menu}
		<ul class="menu rounded-box w-full min-w-[250px]">
			{#each page.data.menu ?? [] as { title, submenu, path } (title)}
				{#if path}
					{@const isCurrent = page.url.pathname?.includes(path)}
					<li>
						<a
							class={[
								'menu-item menu-item-sidenav flex items-center justify-content-between',
								{'menu-active': isCurrent},
								{'hover:bg-secondary-subtle!': !isCurrent},
								{'hover:bg-primary-subtle!': isCurrent},
								{'focus-visible:bg-secondary-subtle!': !isCurrent},
								{'focus-visible:bg-primary-subtle!': isCurrent},
							]}
							aria-current={isCurrent ? 'page' : undefined}
							href="{routing.pathToRoot}{path}"
						>
							{title}
						</a>
					</li>
				{/if}
				{#if submenu}
					<CollapsibleSectionDaisyUI headerText={title} path={submenu}>
						{#each submenu as { label, status, path, subpath, slug } (slug)}
							{@const isCurrent = page.url.pathname?.includes(path)}
							<li class="flex">
								<a
									class={[
										'menu-item',
										'menu-item-sidenav',
										{'menu-active': isCurrent},
										{'hover:bg-secondary-subtle!': !isCurrent},
										{'hover:bg-primary-subtle!': isCurrent},
										{'focus-visible:bg-secondary-subtle!': !isCurrent},
										{'focus-visible:bg-primary-subtle!': isCurrent},
									]}
									aria-current={isCurrent ? 'page' : undefined}
									href="{routing.pathToRoot}{path}{subpath ?? ''}"
								>
									{label}
									{#if status === 'inprogress'}<span class="badge badge-warning">In progress</span>{/if}
									{#if status === 'beta'}<span class="badge badge-info">Beta</span>{/if}
								</a>
							</li>
						{/each}
					</CollapsibleSectionDaisyUI>
				{/if}
			{/each}
		</ul>
	{/if}
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
