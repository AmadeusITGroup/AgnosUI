<script lang="ts">
	import {page} from '$app/stores';
	import 'bootstrap/dist/css/bootstrap.css';
	import {pathToRoot$, selectedFramework$, intersectionApi} from '../../lib/stores';
	import {menu} from '../navigation';
	import MainSection from '$lib/layout/MainSection.svelte';

	const {elements$, visibleElements$} = intersectionApi;
	function getElementProperties(element: HTMLElement, isVisible: boolean) {
		const header = element.querySelector('h1,h2,h3') as HTMLElement;
		if (header) {
			const classnames = [`toc-link d-inline-block toc-${header.tagName.toLowerCase()}`];

			const firstSubSection = element.querySelector('section');
			if ((firstSubSection && visibleElements$().has(firstSubSection)) || (!firstSubSection && isVisible)) {
				classnames.push('active');
			}

			return {
				label: header.innerText,
				href: header.querySelector('a')?.getAttribute('href') ?? '',
				classname: classnames.join(' '),
			};
		} else {
			return {
				label: '',
				href: '',
				classname: '',
			};
		}
	}
</script>

<div class="container-xxl">
	<div class="row flex-wrap flex-sm-nowrap align-content-between">
		<aside class="demo-sidebar col-12 col-sm-auto d-flex flex-column flex-shrink-0 align-items-center align-items-sm-start">
			<ul class="list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list d-flex flex-column">
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
		</aside>
		<div class="pb-4 col">
			<MainSection>
				<slot />
			</MainSection>
		</div>
		<div class="demo-toc col-auto d-none d-lg-flex">
			{#if $elements$.length}
				<div class="toc-content ms-2 border-start-1">
					<div class="toc-title fw-bold pb-2 mb-1">On this page</div>
					<ul class="list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list small">
						{#each $elements$ as element}
							{@const isVisible = $visibleElements$.has(element)}
							{@const {label, classname, href} = getElementProperties(element, isVisible)}
							<li>
								<a class={classname} aria-current={isVisible ? 'page' : undefined} {href}>
									{label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../../common/variables';

	@include media-breakpoint-up(md) {
		.demo-sidebar {
			position: sticky;
			top: 0;
			height: calc(100vh - 6rem);
		}

		.demo-toc {
			position: sticky;
			top: 0;
			display: block !important;
			height: calc(100vh - 6rem);
			overflow-y: auto;
		}
	}

	.toc {
		&-link:hover,
		&-link:focus {
			color: var(--bs-emphasis-color);
			background-color: var(--demo-sidebar-link-bg);
		}
		&-link {
			padding: 0.1875rem 0.5rem;
			color: var(--bs-body-color);
			text-decoration: none;
			border-left: 3px solid transparent;
			transition: border-color 0.25s;

			&.active {
				color: var(--bs-emphasis-color);
				border-left-color: var(--bs-primary);
				transition: none;
			}
		}

		&-h2 {
			padding-left: 0.5rem;
		}
		&-h3 {
			padding-left: 1rem;
		}
	}
</style>
