<script lang="ts">
	import {intersectionApi} from '$lib/stores';
	import {fromStore} from 'svelte/store';

	import './menu.css';

	const {elements$, visibleElements$} = intersectionApi;
	const elements = fromStore(elements$);
	const visibleElements = fromStore(visibleElements$);

	const tocElements = $derived(
		elements.current.map((element) => {
			const isVisible = visibleElements.current.has(element);
			const header = element.querySelector('h1,h2,h3') as HTMLElement;
			if (header) {
				const classnames = [`menu-item menu-item-toc hover:bg-secondary-subtle! block rounded-end toc-${header.tagName.toLowerCase()}`];

				if (isVisible) {
					classnames.push('active');
				}

				return {
					label: header.innerText,
					href: header.querySelector('a')?.getAttribute('href') ?? '',
					classname: classnames.join(' '),
					isVisible,
				};
			} else {
				return {
					label: '',
					href: '',
					classname: '',
					isVisible,
				};
			}
		}),
	);
</script>

{#if elements.current.length}
	<div class="ms-2 mt-1 border-start-1">
		<div class="hidden lg:block font-bold pb-2 mb-1">On this page</div>
		<div>
			{#each tocElements as { label, classname, href, isVisible }}
				{#if label && href}
					<a class={classname} aria-current={isVisible ? 'page' : undefined} {href}>
						{label}
					</a>
				{/if}
			{/each}
		</div>
	</div>
{/if}
