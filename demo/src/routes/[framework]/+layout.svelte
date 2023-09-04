<script lang="ts">
	import {page} from '$app/stores';
	import 'bootstrap/dist/css/bootstrap.css';
	import {pathToRoot$, selectedFramework$, intersectionApi} from '../../lib/stores';
	import {menu} from '../navigation';

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

<div class="demo-layout">
	<aside class="demo-sidebar">
		<nav class="w-100">
			<ul class="list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list">
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
	<div class="pb-4">
		<slot />
	</div>
	<div class="demo-toc d-none d-lg-block">
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

<style lang="scss">
	.main-nav-list {
		@media (max-width: 992px) {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
</style>
