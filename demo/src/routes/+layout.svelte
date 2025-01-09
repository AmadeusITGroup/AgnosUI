<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import bluesky from '$resources/bluesky.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import {routing} from '$lib/routing.svelte';
	import './styles.scss';
	import {afterNavigate, beforeNavigate, onNavigate} from '$app/navigation';
	import {page, updated} from '$app/state';
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

	let isMainPage = $derived(routing.routeLevel === 0);
	let isApi = $derived(page.route.id?.startsWith('/api/'));

	beforeNavigate(({willUnload, to}) => {
		if (updated.current && !willUnload && to?.url) {
			// force reload of the page on navigation when a new version of the site has been detected
			location.href = to.url.href;
		}
	});
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
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
	<link rel="canonical" href={routing.canonicalURL} />
	<!-- Schema.org for Google -->
	<meta itemprop="name" content={page.data.pageMeta.title} />
	<meta itemprop="description" content={page.data.pageMeta.description} />
	<meta name="description" content={page.data.pageMeta.description} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={page.data.pageMeta.title} />
	<meta property="twitter:domain" content="www.agnosui.dev" />
	<meta property="twitter:url" content={page.data.pageMeta.shareUrl} />
	<meta name="twitter:image" content={page.data.pageMeta.socialImage} />
	<meta name="twitter:image:alt" content={page.data.pageMeta.socialImageAlt} />
	<meta name="twitter:description" content={page.data.pageMeta.description} />
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:title" content={page.data.pageMeta.title} />
	<meta name="og:description" content={page.data.pageMeta.description} />
	<meta name="og:url" content={page.data.pageMeta.shareUrl} />
	<meta name="og:site_name" content="AgnosUI" />
	<meta name="og:locale" content="en" />
	<meta name="og:type" content="website" />
	<meta property="og:image" content={page.data.pageMeta.socialImage} />
</svelte:head>

<div class="agnos-ui">
	<nav class="navbar-nav demo-nav-top navbar z-1">
		<div class="container-xxl">
			<a class="navbar-brand mx-lg-4 mx-xl-5 d-flex align-items-center" href={routing.pathToRoot}
				><Svg svg={agnosUILogo} className="agnosui-logo-brand me-2" /> AgnosUI
			</a>
			<div class="align-items-center d-flex">
				<div class="align-items-left d-flex gap-3">
					<Search />
					<div class="vr my-1 d-none d-md-inline-block"></div>
				</div>
				<div class="align-items-center d-none d-md-flex gap-3">
					<div class="d-flex align-items-center"></div>
					<a
						class="nav-link"
						href="{routing.pathToRoot}docs/{routing.selectedFramework}/getting-started/introduction"
						class:active={page.route.id?.startsWith('/docs/')}
						aria-current={page.route.id?.startsWith('/docs/') ? 'page' : undefined}>Documentation</a
					>
					{#if import.meta.env.API}
						<a
							class="nav-link"
							href="{routing.pathToRoot}api/{routing.selectedApiFramework}/bootstrap/types"
							class:active={isApi}
							aria-current={isApi ? 'page' : undefined}>API</a
						>
					{/if}
					<a
						class="nav-link"
						href="{routing.pathToRoot}blog/2024-12-06"
						class:active={page.route.id?.startsWith('/blog/')}
						aria-current={page.route.id?.startsWith('/blog/') ? 'page' : undefined}>Blog</a
					>
					<div class="vr my-1"></div>
					<Theme />
					<div class="vr my-1"></div>
					<Versions versions={data.versions} />
					<div class="vr my-1"></div>
					<a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank">
						<Svg className="icon-24 align-middle" svg={github} />
					</a>
					<a class="nav-link" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank">
						<Svg className="icon-24 align-middle" svg={twitter} />
					</a>
					<a class="nav-link" href="https://bsky.app/profile/agnosui.bsky.social" aria-label="link to bluesky profile" target="_blank">
						<Svg className="icon-24 align-middle" svg={bluesky} />
					</a>
				</div>
			</div>
			<div class="align-items-center d-flex d-md-none gap-3">
				<Theme />
				<Versions versions={data.versions} />
				<MobileMenu />
			</div>
		</div>
	</nav>
	<div class="demo-main d-flex flex-column z-0" bind:this={container}>
		{#if isMainPage}
			{@render children()}
		{:else}
			<div class="container-xxl">
				<div class="row flex-wrap flex-sm-nowrap align-content-between">
					<aside class="demo-sidebar mx-lg-4 mx-xl-5 d-none d-md-flex align-items-center align-items-sm-start col-auto side-menu me-3">
						<SideMenu />
					</aside>
					<div class="pb-4 col">
						<div class="demo-mobile-menu d-block d-lg-none">
							<MobileSubMenu />
						</div>
						<MainSection>
							{@render children()}
						</MainSection>
					</div>
					<div class="ms-lg-4 ms-xl-5 demo-toc d-none d-lg-flex col-auto side-menu me-auto">
						<TOC />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
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

	:global(.agnosui-logo-brand) {
		width: 25px;
	}

	.demo-mobile-menu {
		grid-area: mobileMenu;
		position: sticky;
		top: 0;
		background-color: var(--bs-body-bg);
		box-shadow: var(--bs-box-shadow);
		z-index: 10;
		margin-left: calc(var(--bs-gutter-x) * -0.5);
		margin-right: calc(var(--bs-gutter-x) * -0.5);
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
