<script lang="ts">
	import threeDots from 'bootstrap-icons/icons/three-dots-vertical.svg?raw';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import MobileDialog from './MobileDialog.svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import {pathToRoot$} from '$lib/stores';
	import {page} from '$app/stores';
	import Theme from './Theme.svelte';

	let open = false;

	function onClose() {
		open = false;
	}
</script>

<Theme />
<button
	class="btn d-flex align-items-center pe-0"
	aria-expanded={open}
	on:click={() => {
		open = true;
	}}
	aria-label="open the mobile menu"
>
	<Svg svg={threeDots} className="icon-20 me-1" />
</button>

<MobileDialog title="AgnosUI" {open} on:close={onClose}>
	<nav class="navbar navbar-light flex-column align-items-stretch">
		<a
			class="nav-item nav-link"
			href="{$pathToRoot$}docs/angular/getting-started/introduction"
			class:active={$page.route.id?.startsWith('/docs/')}
			aria-current={$page.route.id?.startsWith('/docs/') ? 'page' : undefined}
		>
			Documentation
		</a>
		<hr />
		<a
			class="nav-item nav-link"
			href="{$pathToRoot$}blog/2024-02-01"
			class:active={$page.route.id?.startsWith('/blog/')}
			aria-current={$page.route.id?.startsWith('/blog/') ? 'page' : undefined}
		>
			Blog
		</a>
		<hr />
	</nav>

	<div class="d-flex justify-content-center">
		<a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank">
			<Svg className="icon-24 align-middle" svg={github} />
		</a>
		<a class="nav-link ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank">
			<Svg className="icon-24 align-middle" svg={twitter} />
		</a>
		<div class="ms-3 align-self-center">
			<span class="mt-4">v{import.meta.env.AGNOSUI_VERSION}</span>
		</div>
	</div>
</MobileDialog>

<style lang="scss">
	.nav-link.active {
		font-weight: 600;
	}
</style>
