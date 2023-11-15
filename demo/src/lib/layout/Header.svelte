<script lang="ts">
	import {pathToRoot$, frameworkLessUrl$, selectedFramework$} from '../stores';

	export let title: string;
	export let tabs: {title: string; key: string; path: string}[];
	export let tab = '';

	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';
</script>

<header class="bg-light pt-4 pb-5 px-4 px-lg-5 d-flex mb-4 align-items-center title">
	<div class="row mb-4 align-items-center w-100">
		<h1 class="col-auto me-auto me-md-none mb-0 p-3">{title}</h1>
		<div class="col flex-grow-0">
			<div class="btn-group btn-group-sm me-2 bg-white" role="group" aria-label="Basic radio toggle button group">
				<a
					href={`${$pathToRoot$}angular/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isAngular}
					aria-current={!isAngular || 'page'}>Angular</a
				>
				<a
					href={`${$pathToRoot$}react/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isReact}
					aria-current={!isReact || 'page'}>React</a
				>
				<a
					href={`${$pathToRoot$}svelte/${$frameworkLessUrl$}`}
					class="btn btn-outline-primary"
					class:active={isSvelte}
					aria-current={!isSvelte || 'page'}>Svelte</a
				>
			</div>
		</div>
	</div>
	<ul class="nav-tabs px-4 px-lg-5 content-tabset justify-content-start nav" role="tablist">
		{#each tabs as { title, key, path }}
			{@const isActive = tab === key}
			<li class="nav-item" role="presentation">
				<a
					href={`${$pathToRoot$}${$selectedFramework$}${path}`}
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
</header>
