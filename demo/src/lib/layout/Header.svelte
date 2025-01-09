<script lang="ts">
	import {routing} from '../routing.svelte';
	import {page} from '$app/state';
	import {getTitle} from '../../app';
	import Svg from '$lib/layout/Svg.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import typescriptLogo from '$resources/logo-typescript.svg?raw';
	import daisyUILogo from '$resources/logo-daisyUI.svg?raw';
	import bootstrapLogo from '$resources/bootstrap.svg?raw';

	interface Props {
		title: string;
		pageTitle?: string;
		status?: string;
		cssFramework?: string;
	}

	let {title, pageTitle = '', status = '', cssFramework = ''}: Props = $props();

	let tabs = $derived(page.data.tabs ?? []);
	let isBlog = $derived(page.route.id?.startsWith('/blog/'));
	let builtPageTitle = $derived(getTitle(pageTitle || title, isBlog ? '' : routing.selectedApiFramework, routing.selectedPackageType));
	let includesFwk = $derived(!!page.params.framework);
</script>

<svelte:head>
	<title>{builtPageTitle}</title>
</svelte:head>

<header
	class="au-header bg-light pt-3 px-4 px-lg-5 d-flex mb-4 align-items-center title"
	class:au-rounded={!tabs.length}
	class:au-rounded-header={tabs.length}
	class:pb-5={tabs.length}
	class:pb-3={!tabs.length}
>
	<div class="w-100 d-flex flex-wrap flex-row-reverse justify-content-between align-items-center" class:pb-3={tabs.length}>
		<div class="d-flex ms-auto gap-2 justify-content-center">
			{#if status === 'inprogress'}<span class="badge text-bg-warning">In progress</span>{/if}
			{#if status === 'beta'}<span class="badge text-bg-info">Beta</span>{/if}
			{#if includesFwk}
				{#if routing.selectedApiFramework === 'typescript'}<span class="d-block d-md-none p-0"
						><Svg svg={typescriptLogo} className="icon-24 d-flex position-relative" /></span
					>{/if}
				{#if routing.selectedApiFramework === 'react'}<span class="d-block d-md-none p-0"
						><Svg svg={reactLogo} className="icon-24 d-flex position-relative" /></span
					>{/if}
				{#if routing.selectedApiFramework === 'angular'}<span class="d-block d-md-none p-0"
						><Svg svg={angularLogo} className="icon-24 d-flex position-relative" /></span
					>{/if}
				{#if routing.selectedApiFramework === 'svelte'}<span class="d-block d-md-none p-0"
						><Svg svg={svelteLogo} className="icon-24 d-flex position-relative" /></span
					>{/if}
			{/if}
			{#if cssFramework === 'bootstrap'}<span class="d-block d-md-none p-0"
					><Svg svg={bootstrapLogo} className="icon-24 d-flex logo-bootstrap position-relative" /></span
				>{/if}
			{#if cssFramework === 'daisyUI'}<span class="d-block d-md-none p-0"><Svg svg={daisyUILogo} className="icon-24 d-flex position-relative" /></span
				>{/if}
			{#if cssFramework === 'headless'}<span class="d-block d-md-none badge rounded-pill text-bg-info">headless</span>{/if}
		</div>
		<h1 class="text-primary me-3 me-md-none mb-0 p-0 p-md-3 text-center text-md-start">
			{title}
		</h1>
	</div>
	{#if tabs.length}
		<ul class="nav-tabs overflow-x-auto overflow-y-hidden px-4 px-lg-5 d-flex flex-nowrap content-tabset justify-content-start nav" role="tablist">
			{#each tabs as { title, key, path }}
				{@const isActive = routing.selectedTabName === key}
				<li class="nav-item" role="presentation">
					<a
						href={`${routing.pathToRoot}docs/${routing.selectedApiFramework}${path}`}
						role="tab"
						class="nav-link au-nav-link-onlightbg"
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

<style lang="scss">
	.au-header {
		position: relative; // already because of title
		&:before {
			content: ' ';
			display: block;
			position: absolute;
			background-image: url("data:image/svg+xml,%3Csvg width='191.25' height='191.22' enable-background='new 0 0 595.28 841.89' version='1.1' viewBox='0 0 191.25 191.22' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m136.68 88.889 27.935 0.687c-1.118-12.791-5.735-24.55-12.874-34.393-31.886-5.798-60.51-0.785-60.51-0.785l2.277-27.81c-14.131 0.438-27.185 5.093-37.955 12.78-6.017 31.858-1.188 60.522-1.188 60.522l-27.817-2.476c0.319 12.909 4.16 24.915 10.61 35.139 31.456 7.829 60.355 4.656 60.355 4.656l-4.059 27.608c0.75 0.028 1.482 0.118 2.236 0.118 16.56 0 31.753-5.833 43.661-15.529 3.988-32.193-2.671-60.517-2.671-60.517z' fill='%239240CC'/%3E%3Cpath d='m151.74 55.183c11.332 2.063 23.061 5.451 34.073 10.964-21.637-59.963-90.122-66.147-90.122-66.147l-2.184 26.588c0.736-0.024 1.447-0.111 2.184-0.111 23.08 1e-3 43.474 11.34 56.049 28.706z' fill='%23FCE649'/%3E%3Cpath d='m151.74 55.183c-12.575-17.367-32.969-28.706-56.049-28.706-0.736 0-1.447 0.086-2.184 0.111l-2.277 27.81c0 1e-3 28.624-5.012 60.51 0.785z' fill='%23E9CF1C'/%3E%3Cpath d='m164.62 89.576c0.181 2.021 0.313 4.063 0.313 6.132 0 21.675-9.972 41.006-25.574 53.7-1.402 11.412-4.125 23.286-8.985 34.58 58.62-25.029 60.877-93.756 60.877-93.756z' fill='%23FCE649'/%3E%3Cpath d='m164.93 95.708c0-2.069-0.132-4.111-0.313-6.132l-27.935-0.687s6.658 28.324 2.673 60.519c15.604-12.694 25.575-32.025 25.575-53.7z' fill='%23E9CF1C'/%3E%3Cpath d='m37.163 132.56c-11.173-2.781-22.651-6.916-33.289-13.12 17.755 61.231 85.708 71.785 85.708 71.785l3.877-26.4c-23.736-0.758-44.415-13.43-56.296-32.265z' fill='%23FCE649'/%3E%3Cpath d='m37.163 132.56c11.881 18.835 32.56 31.507 56.296 32.264l4.059-27.608s-28.899 3.173-60.355-4.656z' fill='%23E9CF1C'/%3E%3Cpath d='m55.557 39.369c2.139-11.308 5.604-23.008 11.187-33.987-60.099 21.231-66.744 89.68-66.744 89.68l26.553 2.354c-0.014-0.573-0.083-1.132-0.083-1.708 0-23.255 11.502-43.781 29.087-56.339z' fill='%23FCE649'/%3E%3Cpath d='m55.557 39.369c-17.585 12.558-29.088 33.084-29.088 56.339 0 0.576 0.07 1.135 0.083 1.708l27.817 2.476c1e-3 -1e-3 -4.828-28.665 1.188-60.523z' fill='%23E9CF1C'/%3E%3C/svg%3E");
			background-repeat: no-repeat;
			width: 100%;
			height: 100%;
			opacity: 0.2;
			background-size: initial;
			background-position: 110% 138%;
			left: 0;
			top: 0;
		}
	}
	h1 {
		font-size: calc(1.375rem + 1.5vw);
	}
</style>
