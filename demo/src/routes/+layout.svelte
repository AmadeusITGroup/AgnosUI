<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import {canonicalURL$, pathToRoot$, routeLevel$} from '$lib/stores';
	import './styles.scss';
	import {afterNavigate, beforeNavigate, onNavigate} from '$app/navigation';
	import {page, updated} from '$app/stores';
	import {onMount} from 'svelte';
	import MobileSubMenu from './menu/MobileSubMenu.svelte';
	import MobileMenu from './menu/MobileMenu.svelte';
	import MainSection from '$lib/layout/MainSection.svelte';
	import SideMenu from './menu/SideMenu.svelte';
	import TOC from './menu/TOC.svelte';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import type {Snapshot} from '@sveltejs/kit';
	import Theme from './menu/Theme.svelte';
	import Versions from './menu/Versions.svelte';
	import type {LayoutData} from './$types';

	const onServiceWorkerUpdate = () => {
		void updated.check();
	};

	$: isMainPage = $routeLevel$ === 0;

	onMount(() => {
		navigator.serviceWorker?.addEventListener('controllerchange', onServiceWorkerUpdate);
		return () => {
			navigator.serviceWorker?.removeEventListener('controllerchange', onServiceWorkerUpdate);
		};
	});

	beforeNavigate(({willUnload, to}) => {
		if ($updated && !willUnload && to?.url) {
			// force reload of the page on navigation when a new version of the site has been detected
			location.href = to.url.href;
		}
	});
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let container: HTMLElement;

	const regexFwkSubPath = /\/docs\/(angular|react|svelte)\/([^#?]*)([#?].*)?$/;

	afterNavigate((navigation) => {
		if (!navigation.to?.url?.hash) {
			const toFwkSubPath = navigation.to?.url?.href?.match(regexFwkSubPath)?.[2] as string | undefined;
			const fromFwkSubPath = navigation.from?.url?.href?.match(regexFwkSubPath)?.[2] as string | undefined;
			if (!toFwkSubPath || !fromFwkSubPath || toFwkSubPath !== fromFwkSubPath) {
				container.scrollTo(0, 0);
			}
		}
	});
	export const snapshot: Snapshot<number> = {
		capture: () => container.scrollTop,
		restore: (y) => container.scrollTo(0, y),
	};

	export let data: LayoutData;
</script>

<svelte:head>
	<link rel="canonical" href={$canonicalURL$} />
</svelte:head>

<div class="agnos-ui">
	<nav class="navbar-nav demo-nav-top navbar z-1">
		<div class="container-xxl">
			<a class="navbar-brand mx-lg-4 mx-xl-5 d-flex align-items-center" href={$pathToRoot$}
				><Svg svg={agnosUILogo} className="agnosui-logo-brand me-2" /> AgnosUI
			</a>
			<div class="align-items-center d-none d-md-flex gap-3">
				<div class="d-flex align-items-center"></div>
				<a
					class="nav-link"
					href="{$pathToRoot$}docs/angular/getting-started/introduction"
					class:active={$page.route.id?.startsWith('/docs/')}
					aria-current={$page.route.id?.startsWith('/docs/') ? 'page' : undefined}>Documentation</a
				>
				<a
					class="nav-link"
					href="{$pathToRoot$}blog/2024-02-01"
					class:active={$page.route.id?.startsWith('/blog/')}
					aria-current={$page.route.id?.startsWith('/blog/') ? 'page' : undefined}>Blog</a
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
			<slot />
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
							<slot />
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
	}
</style>
