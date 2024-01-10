<script lang="ts">
	import {pathToRoot$, selectedFramework$} from '../stores';
	export let title: string;
	export let tabs: {title: string; key: string; path: string}[];
	export let tab = '';
</script>

<header class="bg-light pt-4 pb-5 px-4 px-lg-5 d-flex mb-4 align-items-center title">
	<div class="row mb-4 align-items-center w-100">
		<h1 class="col-auto me-auto me-md-none mb-0 p-3">{title}</h1>
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
