<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import 'bootstrap/dist/css/bootstrap.css';
	import {/*canonicalURL$,*/ pathToRoot$, routeLevel$} from '$lib/stores';
	import './styles.scss';
	import {beforeNavigate, onNavigate} from '$app/navigation';
	import {page, updated} from '$app/stores';
	import {onMount} from 'svelte';
	import MobileSubMenu from './menu/MobileSubMenu.svelte';
	import MobileMenu from './menu/MobileMenu.svelte';
	import MainSection from '$lib/layout/MainSection.svelte';
	import SideMenu from './menu/SideMenu.svelte';
	import TOC from './menu/TOC.svelte';

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
</script>

<!-- TODO: add canonical URL when noindex is removed
<svelte:head>
	<link rel="canonical" href={$canonicalURL$} />
</svelte:head>
-->

<div class="agnos-ui">
	<nav class="demo-nav-top navbar navbar-dark bg-primary bg-gradient">
		<div class="container-fluid">
			<a class="navbar-brand" href={$pathToRoot$}> AgnosUI </a>
			<div class="align-items-center d-none d-md-flex">
				<div class="d-flex align-items-center"></div>
				<a
					class="nav-link text-white ms-3"
					href="{$pathToRoot$}docs/angular/getting-started/installation"
					class:active={$page.route.id?.startsWith('/docs/')}
					aria-current={$page.route.id?.startsWith('/docs/') ? 'page' : undefined}>Documentation</a
				>
				<a
					class="nav-link text-white ms-3"
					href="{$pathToRoot$}blog/2024-01-12"
					class:active={$page.route.id?.startsWith('/blog/')}
					aria-current={$page.route.id?.startsWith('/blog/') ? 'page' : undefined}>Blog</a
				>
				<a class="nav-link text-white ms-3" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank">
					<Svg className="icon-24 align-middle" svg={github} />
				</a>
				<a class="nav-link text-white ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank">
					<Svg className="icon-24 align-middle" svg={twitter} />
				</a>
				<span class="ms-3 text-white">v{import.meta.env.AGNOSUI_VERSION}</span>
			</div>
			<div class="d-block d-md-none">
				<MobileMenu />
			</div>
		</div>
	</nav>
	{#if !isMainPage}
		<div class="demo-mobile-menu d-block d-md-none">
			<MobileSubMenu />
		</div>
	{/if}
	<div class="demo-main d-flex flex-column">
		{#if isMainPage}
			<slot />
		{:else}
			<div class="container-xxl">
				<div class="row flex-wrap flex-sm-nowrap align-content-between">
					<aside class="demo-sidebar d-none d-md-flex align-items-center align-items-sm-start col-auto side-menu me-3">
						<SideMenu />
					</aside>
					<div class="pb-4 col">
						<MainSection>
							<slot />
						</MainSection>
					</div>
					<div class="demo-toc d-none d-md-flex col-auto side-menu me-auto">
						<TOC />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '@agnos-ui/common/variables';

	.nav-link.active {
		font-weight: 600;
	}

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
		background-color: var(--bs-body-bg);
		box-shadow: $box-shadow;
		z-index: 10;
	}

	.demo-nav-top {
		grid-area: top;
		overflow: auto;
	}

	.demo-main {
		grid-area: main;
		overflow: auto;
		scrollbar-gutter: stable;
	}

	.demo-sidebar {
		position: sticky;
		top: 0;
		height: calc(100vh - 60px);
		overflow-y: auto;
		min-width: 220px;
	}

	.demo-toc {
		position: sticky;
		top: 0;
		min-width: 220px;
		height: calc(100vh - 60px);
		overflow-y: auto;
	}
</style>
