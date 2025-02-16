<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import bluesky from '$resources/bluesky.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import {canonicalURL$, pathToRoot$, routeLevel$, selectedFramework$, selectedApiFramework$} from '$lib/stores';
	import './app.css';
	import {afterNavigate, beforeNavigate, onNavigate} from '$app/navigation';
	import {page, updated} from '$app/stores';
	import MobileSubMenu from './menu/MobileSubMenu.svelte';
	import MobileMenu from './menu/MobileMenu.svelte';
	import MainSection from '$lib/layout/MainSection.svelte';
	import SideMenu from './menu/SideMenu.svelte';
	import TOC from './menu/TOC.svelte';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import type {Snapshot} from '@sveltejs/kit';
	import Theme from './menu/Theme.svelte';
	import Versions from './menu/Versions.svelte';
	import type {Snippet} from 'svelte';
	import type {LayoutData} from './$types';
	import viewTransition from './view-transition.css?raw';
	import Search from '$lib/docsearch/Search.svelte';

	let isMainPage = $derived($routeLevel$ === 0);
	let isApi = $derived($page.route.id?.startsWith('/api/'));
	let isDocActive = $derived($page.route.id?.startsWith('/docs/'));
	let isBlogActive = $derived($page.route.id?.startsWith('/blog/'));

	beforeNavigate(({willUnload, to}) => {
		if ($updated && !willUnload && to?.url) {
			// force reload of the page on navigation when a new version of the site has been detected
			location.href = to.url.href;
		}
	});
	onNavigate((navigation) => {
		if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion)').matches) return;
		let styleElement = document.createElement('style');
		styleElement.textContent = viewTransition;
		document.head.appendChild(styleElement);

		return new Promise<void>((resolve) => {
			void document
				.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				})
				.ready.then(() => styleElement.remove());
		});
	});

	let container: HTMLElement;

	const regexFwkSubPath = /\/docs\/(angular|react|svelte)\/([^#?]*)([#?].*)?$/;

	afterNavigate((navigation) => {
		if (!navigation.to?.url?.hash) {
			const toFwkSubPath = navigation.to?.url?.href?.match(regexFwkSubPath)?.[2];
			const fromFwkSubPath = navigation.from?.url?.href?.match(regexFwkSubPath)?.[2];
			if (!toFwkSubPath || !fromFwkSubPath || toFwkSubPath !== fromFwkSubPath) {
				container.scrollTo(0, 0);
			}
		}
	});
	export const snapshot: Snapshot<number> = {
		capture: () => container.scrollTop,
		restore: (y) => container.scrollTo(0, y),
	};

	let {
		data,
		children,
	}: {
		data: LayoutData;
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	{#if import.meta.env.GTAG}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-49LCWGVXJ9"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-49LCWGVXJ9');
		</script>
	{/if}
	{#if import.meta.env.PRELOAD_VERSIONS}
		<link rel="preload" href="https://www.agnosui.dev/versions.json" as="fetch" crossorigin="anonymous" />
	{/if}
	<link rel="canonical" href={$canonicalURL$} />
	<!-- Schema.org for Google -->
	<meta itemprop="name" content={$page.data.pageMeta.title} />
	<meta itemprop="description" content={$page.data.pageMeta.description} />
	<meta name="description" content={$page.data.pageMeta.description} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$page.data.pageMeta.title} />
	<meta property="twitter:domain" content="www.agnosui.dev" />
	<meta property="twitter:url" content={$page.data.pageMeta.shareUrl} />
	<meta name="twitter:image" content={$page.data.pageMeta.socialImage} />
	<meta name="twitter:image:alt" content={$page.data.pageMeta.socialImageAlt} />
	<meta name="twitter:description" content={$page.data.pageMeta.description} />
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:title" content={$page.data.pageMeta.title} />
	<meta name="og:description" content={$page.data.pageMeta.description} />
	<meta name="og:url" content={$page.data.pageMeta.shareUrl} />
	<meta name="og:site_name" content="AgnosUI" />
	<meta name="og:locale" content="en" />
	<meta name="og:type" content="website" />
	<meta property="og:image" content={$page.data.pageMeta.socialImage} />
</svelte:head>

<div class="agnos-ui text-base">
	<nav class="navbar z-1 demo-nav-top justify-between max-w-[1720px] mx-auto">
		<!--  -->
		<div class="navbar-start sm:w-1/2 w-10/35">
			<a class="md:mx-2 xl:mx-8 flex items-center text-xl" href={$pathToRoot$}
				><Svg svg={agnosUILogo} className="agnosui-logo-brand me-2" /> AgnosUI
			</a>
		</div>
		<div class="navbar-center">
			<div class="md:hidden">
				<Search />
			</div>
		</div>
		<div class="navbar-end">
			<div class="hidden md:flex-none md:flex">
				<ul class="menu menu-horizontal gap-2 xl:gap-3 items-center">
					<li>
						<Search />
					</li>
					<li class="h-full flex-row">
						<div class="divider divider-horizontal w-px! p-0 gap-0"></div>
					</li>
					<li>
						<a
							class={[{active: isDocActive}, 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!']}
							href="{$pathToRoot$}docs/{$selectedFramework$}/getting-started/introduction"
							aria-current={isDocActive ? 'page' : undefined}>Documentation</a
						>
					</li>
					{#if import.meta.env.API}
						<li>
							<a
								class={[{active: isApi}, 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!']}
								href="{$pathToRoot$}api/{$selectedApiFramework$}/bootstrap/types"
								aria-current={isApi ? 'page' : undefined}>API</a
							>
						</li>
					{/if}
					<li class="flex flex-nowrap flex-row">
						<a
							class={[{active: isBlogActive}, 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!']}
							href="{$pathToRoot$}blog/2024-12-06"
							aria-current={isBlogActive ? 'page' : undefined}>Blog</a
						>
					</li>
					<li class="h-full flex-row">
						<div class="divider divider-horizontal w-px! p-0 gap-0"></div>
					</li>
					<Theme />
					<li class="h-full flex-row">
						<div class="divider divider-horizontal w-px! p-0 gap-0"></div>
					</li>
					<Versions versions={data.versions} />
					<li class="h-full flex-row">
						<div class="divider divider-horizontal w-px! p-0 gap-0"></div>
					</li>
					<li>
						<a
							class="p-0 focus-visible:outline-solid! outline-secondary-subtle! hover:bg-base-100 hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
							href="https://github.com/AmadeusITGroup/AgnosUI"
							aria-label="link to GitHub repository"
							target="_blank"
						>
							<Svg className="icon-24 align-middle" svg={github} />
						</a>
					</li>
					<li>
						<a
							class="p-0 focus-visible:outline-solid! outline-secondary-subtle hover:bg-base-100 hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
							href="https://twitter.com/AgnosUI"
							aria-label="link to twitter / x account"
							target="_blank"
						>
							<Svg className="icon-24 align-middle" svg={twitter} />
						</a>
					</li>
					<li>
						<a
							class="p-0 focus-visible:outline-solid! outline-secondary-subtle! hover:bg-base-100 hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
							href="https://bsky.app/profile/agnosui.bsky.social"
							aria-label="link to bluesky profile"
							target="_blank"
						>
							<Svg className="icon-24 align-middle" svg={bluesky} />
						</a>
					</li>
				</ul>
			</div>
			<ul class="items-center flex md:hidden gap-2 menu menu-horizontal flex-nowrap">
				<Theme />
				<Versions versions={data.versions} />
				<MobileMenu />
			</ul>
		</div>
	</nav>
	<div class="demo-main flex flex-col z-0" bind:this={container}>
		{#if isMainPage}
			{@render children()}
		{:else}
			<div class="flex-wrap sm:flex-nowrap flex content-between w-full justify-between self-center max-w-[1670px]">
				<aside class="demo-sidebar xl:px-6 hidden md:block items-center sm:items-start col-auto-layout side-menu">
					<SideMenu />
				</aside>
				<div class="pb-6 col reset-ul">
					<div class="demo-mobile-menu top-0 z-10 block lg:hidden shadow-md">
						<MobileSubMenu />
					</div>
					<MainSection>
						{@render children()}
					</MainSection>
				</div>
				<div class="lg:ms-4 xl:ms-5 demo-toc hidden lg:flex col-auto-layout side-menu me-auto">
					<TOC />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.agnos-ui {
		width: 100vw;
		height: 100dvh;
		display: grid;
		grid-template-areas:
			'top'
			'mobileMenu'
			'main';
		grid-template-rows: 60px auto 1fr;
	}
	.demo-mobile-menu {
		grid-area: mobileMenu;
		position: sticky;
		top: 0;
		background-color: var(--color-base-100);
		z-index: 10;
	}

	.demo-nav-top {
		grid-area: top;
	}

	.demo-main {
		grid-area: main;
		overflow: auto;
		scrollbar-gutter: stable;
		@media (max-width: 991px) {
			scroll-padding-top: 43px;
		}
	}

	.demo-sidebar {
		position: sticky;
		top: 0;
		height: calc(100vh - 60px);
		overflow-y: auto;
		min-width: 250px;
		scrollbar-gutter: stable;
	}

	.demo-toc {
		position: sticky;
		top: 0;
		min-width: 250px;
		height: calc(100vh - 60px);
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
