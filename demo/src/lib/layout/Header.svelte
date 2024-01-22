<script lang="ts">
	import {pathToRoot$, selectedFramework$, selectedTabName$} from '../stores';
	import {page} from '$app/stores';
	import {getTitle} from '../../app';

	export let title: string;

	$: tabs = $page.data.tabs ?? [];
</script>

<svelte:head>
	<title>{getTitle(title, $selectedFramework$)}</title>
</svelte:head>

<header class="bg-light pt-4 px-4 px-lg-5 d-flex mb-4 align-items-center title" class:pb-5={tabs.length} class:pb-4={!tabs.length}>
	<div class="row align-items-center w-100" class:pb-4={tabs.length}>
		<h1 class="col-auto me-auto me-md-none mb-0 p-0 p-md-3 text-center text-md-start w-100">{title}</h1>
	</div>
	{#if tabs.length}
		<ul class="nav-tabs px-4 px-lg-5 content-tabset justify-content-start nav" role="tablist">
			{#each tabs as { title, key, path }}
				{@const isActive = $selectedTabName$ === key}
				<li class="nav-item" role="presentation">
					<a
						href={`${$pathToRoot$}docs/${$selectedFramework$}${path}`}
						role="tab"
						class="nav-link link-body-emphasis"
						aria-selected={isActive}
						class:active={isActive}
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
