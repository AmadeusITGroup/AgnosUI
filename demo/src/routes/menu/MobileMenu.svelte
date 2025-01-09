<script lang="ts">
	import threeDots from 'bootstrap-icons/icons/three-dots-vertical.svg?raw';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import bluesky from '$resources/bluesky.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import MobileDialog from './MobileDialog.svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import {routing} from '$lib/routing.svelte';
	import {page} from '$app/state';

	let open = $state(false);

	function onclose() {
		open = false;
	}
	let isApi = $derived(page.route.id?.startsWith('/api/'));
</script>

<button
	class="btn d-flex align-items-center px-0"
	aria-expanded={open}
	onclick={() => {
		open = true;
	}}
	aria-label="open the mobile menu"
>
	<Svg svg={threeDots} className="icon-20 me-1" />
</button>

<MobileDialog title="AgnosUI" {open} {onclose}>
	<nav class="navbar navbar-light flex-column align-items-stretch">
		<a
			class="nav-item nav-link"
			href="{routing.pathToRoot}docs/{routing.selectedFramework}/getting-started/introduction"
			class:active={page.route.id?.startsWith('/docs/')}
			aria-current={page.route.id?.startsWith('/docs/') ? 'page' : undefined}
		>
			Documentation
		</a>
		{#if import.meta.env.API}
			<hr />
			<a
				class="nav-link"
				href="{routing.pathToRoot}api/{routing.selectedApiFramework}/bootstrap/types"
				class:active={isApi}
				aria-current={isApi ? 'page' : undefined}>API</a
			>
		{/if}
		<hr />
		<a
			class="nav-item nav-link"
			href="{routing.pathToRoot}blog/2024-12-06"
			class:active={page.route.id?.startsWith('/blog/')}
			aria-current={page.route.id?.startsWith('/blog/') ? 'page' : undefined}
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
		<a class="nav-link ms-3" href="https://bsky.app/profile/agnosui.bsky.social" aria-label="link to bluesky profile" target="_blank">
			<Svg className="icon-24 align-middle" svg={bluesky} />
		</a>
	</div>
</MobileDialog>

<style lang="scss">
	.nav-link.active {
		font-weight: 600;
	}
</style>
