<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter.svg?raw';
	import 'bootstrap/dist/css/bootstrap.css';
	import {/*canonicalURL$,*/ pathToRoot$} from '../lib/stores';
	import './styles.scss';
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
				<span class="badge bg-warning text-bg-warning">Work In Progress</span>
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
	<div class="demo-main d-flex justify-content-center">
		<div class="container-xxl">
			<slot />
		</div>
	</div>
</div>

<style>
	.agnos-ui {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-areas:
			'top'
			'main';
		grid-template-rows: 60px 1fr;
	}

	.demo-nav-top {
		grid-area: top;
		overflow: auto;
	}

	.demo-main {
		overflow: auto;
	}
</style>
