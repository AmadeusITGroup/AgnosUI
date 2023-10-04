<script lang="ts">
	import {page} from '$app/stores';
	import {menu} from '../../navigation';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';

	import './menu.scss';
</script>

<nav class="w-100 mt-1">
	{#each menu as { title, submenu }}
		<strong class="d-flex w-100 align-items-center fw-semibold">{title}</strong>
		<div class="my-2">
			{#each submenu as { label, path }}
				{@const isCurrent = $page.route.id?.startsWith(`/[framework]${path}`)}
				<a
					class="menu-item menu-item-sidenav"
					class:active={isCurrent}
					aria-current={isCurrent ? 'page' : undefined}
					href="{$pathToRoot$}{$selectedFramework$}{path}"
				>
					{label}
				</a>
			{/each}
		</div>
	{/each}
</nav>
