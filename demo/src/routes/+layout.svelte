<script lang="ts">
	import {page} from '$app/stores';
	import {menu} from './navigation';
	import 'bootstrap/dist/css/bootstrap.css';
	import './styles.scss';
	import {pathToRoot$, canonicalURL$} from '../lib/stores';
	import {selectedFramework$} from '../lib/stores';
	import Svg from '$lib/layout/Svg.svelte';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter.svg?raw';
</script>

<svelte:head>
	<link rel="canonical" href={$canonicalURL$} />
</svelte:head>

<div class="agnos-ui">
	<nav class="demo-nav-top navbar navbar-dark bg-primary bg-gradient">
		<div class="container-fluid">
			<a class="navbar-brand" href={$pathToRoot$}> AgnosUI </a>
			<div class="d-flex align-items-center">
				<a class="nav-link text-white" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank">
					<Svg className="icon-24 align-middle" svg={github} />
				</a>
				<a class="nav-link text-white ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter account" target="_blank">
					<Svg className="icon-24 align-middle" svg={twitter} />
				</a>
				<span class="ms-3 text-white">v{import.meta.env.AGNOSUI_VERSION}</span>
			</div>
		</div>
	</nav>
	<div class="demo-main">
		<div class="container-xxl">
			<div class="container-fluid demo-gutter demo-layout">
				<aside class="demo-sidebar">
					<nav class="w-100">
						<ul class="list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
							{#each menu as { title, submenu }}
								<li class="py-2" id="sidenav-{title}">
									<strong class="d-flex w-100 align-items-center fw-semibold">{title}</strong>
									<ul class="list-unstyled fw-normal pb-2 small">
										{#each submenu as { label, path }}
											{@const isCurrent = $page.route.id?.startsWith(`/[framework]${path}`)}
											<li>
												<a
													class="demo-links-link d-inline-block rounded"
													class:active={isCurrent}
													aria-current={isCurrent ? 'page' : undefined}
													href="{$pathToRoot$}{$selectedFramework$}{path}"
												>
													{label}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							{/each}
						</ul>
					</nav>
				</aside>
				<div>
					<slot />
				</div>
			</div>
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
		grid-area: main;
		overflow: auto;
	}
</style>
