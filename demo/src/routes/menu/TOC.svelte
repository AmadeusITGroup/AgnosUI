<script lang="ts">
	import {intersectionApi} from '$lib/stores';

	import './menu.scss';

	const {elements$, visibleElements$} = intersectionApi;
	function getElementProperties(element: HTMLElement, isVisible: boolean) {
		const header = element.querySelector('h1,h2,h3') as HTMLElement;
		if (header) {
			const classnames = [`menu-item menu-item-toc rounded-end toc-${header.tagName.toLowerCase()}`];

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

{#if $elements$.length}
	<div class="ms-2 mt-1 border-start-1">
		<div class="d-none d-lg-block fw-bold pb-2 mb-1">On this page</div>
		<div>
			{#each $elements$ as element}
				{@const isVisible = $visibleElements$.has(element)}
				{@const {label, classname, href} = getElementProperties(element, isVisible)}
				<a class={classname} aria-current={isVisible ? 'page' : undefined} {href}>
					{label}
				</a>
			{/each}
		</div>
	</div>
{/if}
