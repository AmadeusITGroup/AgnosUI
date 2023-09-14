<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter.svg?raw';
	import coneStriped from 'bootstrap-icons/icons/cone-striped.svg?raw';
	import 'bootstrap/dist/css/bootstrap.css';
	import {/*canonicalURL$,*/ pathToRoot$} from '$lib/stores';
	import './styles.scss';
	import {beforeNavigate} from '$app/navigation';
	import {updated} from '$app/stores';
	import {onMount} from 'svelte';
	import MobileMenu from './[framework]/menu/MobileMenu.svelte';

	const onServiceWorkerUpdate = () => {
		updated.check();
	};

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
				<a class="nav-link text-white ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter account" target="_blank">
					<Svg className="icon-24 align-middle" svg={twitter} />
				</a>
				<span class="ms-3 text-white">v{import.meta.env.AGNOSUI_VERSION}</span>
			</div>
		</div>
	</nav>
	<div class="demo-mobile-menu d-block d-md-none">
		<MobileMenu />
	</div>
	<div class="demo-main d-flex flex-column">
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../../../common/variables';

	.agnos-ui {
		width: 100vw;
		height: 100vh;
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
	}
</style>
