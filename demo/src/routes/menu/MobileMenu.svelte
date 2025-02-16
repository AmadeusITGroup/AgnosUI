<script lang="ts">
	import threeDots from 'bootstrap-icons/icons/three-dots-vertical.svg?raw';
	import github from 'bootstrap-icons/icons/github.svg?raw';
	import bluesky from '$resources/bluesky.svg?raw';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import MobileDialog from './MobileDialog.svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import {pathToRoot$, selectedFramework$, selectedApiFramework$} from '$lib/stores';
	import {page} from '$app/stores';

	let open = $state(false);
	let isDocActive = $derived($page.route.id?.startsWith('/docs/'));
	let isBlogActive = $derived($page.route.id?.startsWith('/blog/'));

	function onclose() {
		open = false;
	}
	let isApi = $derived($page.route.id?.startsWith('/api/'));
</script>

<li>
	<button
		class="btn btn-ghost btn-circle hover:bg-secondary-subtle"
		aria-expanded={open}
		onclick={() => {
			open = true;
		}}
		aria-label="open the mobile menu"
	>
		<Svg svg={threeDots} className="icon-20" />
	</button>
</li>

<MobileDialog title="AgnosUI" {open} {onclose}>
	<ul class="menu menu-xl bg-base-100 w-56">
		<li>
			<a
				class={[{active: isDocActive}, 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!']}
				href="{$pathToRoot$}docs/{$selectedFramework$}/getting-started/introduction"
				aria-current={isDocActive ? 'page' : undefined}
			>
				Documentation
			</a>
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
		<li>
			<a
				class={[{active: isBlogActive}, 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!']}
				href="{$pathToRoot$}blog/2024-12-06"
				aria-current={isBlogActive ? 'page' : undefined}
			>
				Blog
			</a>
		</li>
	</ul>

	<div class="flex justify-center gap-3">
		<a
			class="hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
			href="https://github.com/AmadeusITGroup/AgnosUI"
			aria-label="link to GitHub repository"
			target="_blank"
		>
			<Svg className="icon-24 align-middle" svg={github} />
		</a>
		<a
			class="hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
			href="https://twitter.com/AgnosUI"
			aria-label="link to twitter / x account"
			target="_blank"
		>
			<Svg className="icon-24 align-middle" svg={twitter} />
		</a>
		<a
			class="hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
			href="https://bsky.app/profile/agnosui.bsky.social"
			aria-label="link to bluesky profile"
			target="_blank"
		>
			<Svg className="icon-24 align-middle" svg={bluesky} />
		</a>
	</div>
</MobileDialog>
