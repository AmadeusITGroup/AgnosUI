<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import coneStriped from 'bootstrap-icons/icons/cone-striped.svg?raw';
	import 'bootstrap/dist/css/bootstrap.css';
	import {/*canonicalURL$,*/ pathToRoot$, routeLevel$} from '$lib/stores';
	import './styles.scss';
	import {beforeNavigate, onNavigate} from '$app/navigation';
	import {updated} from '$app/stores';
	import {onMount} from 'svelte';
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
			<div class="d-flex align-items-center">
				<span class="badge bg-warning text-bg-warning d-none d-sm-block">Work In Progress</span>
				<span class="badge rounded-pill bg-warning text-bg-warning d-block d-sm-none" aria-label="Work In Progress">
					<Svg className="icon-20 align-middle" svg={coneStriped} />
				</span>
				<a class="nav-link text-white ms-3" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank">
					<Svg className="icon-24 align-middle" svg={github} />
				</a>
				<a class="nav-link text-white ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank">
					<Svg className="icon-24 align-middle" svg={twitter} />
				</a>
				<span class="ms-3 text-white">v{import.meta.env.AGNOSUI_VERSION}</span>
			</div>
		</div>
	</nav>
	<div class="demo-mobile-menu d-block d-md-none">
		<MobileMenu {isMainPage} />
	</div>
	<div class="demo-main d-flex flex-column">
		{#if isMainPage}
			<slot />
		{:else}
			<div class="container-xxl">
				<div class="row flex-wrap flex-sm-nowrap align-content-between">
					<aside class="demo-sidebar d-none d-md-flex col-auto flex-column flex-shrink-0 align-items-center align-items-sm-start">
						<SideMenu />
					</aside>
					<div class="pb-4 col">
						<MainSection>
							<slot />
						</MainSection>
					</div>
					<div class="demo-toc col-auto d-none d-lg-flex">
						<TOC />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '@agnos-ui/common/variables';

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
		height: calc(100vh - 6rem);
	}

	.demo-toc {
		position: sticky;
		top: 0;
		display: block !important;
		min-width: 250px;
		height: calc(100vh - 6rem);
		overflow-y: auto;
	}
</style>
