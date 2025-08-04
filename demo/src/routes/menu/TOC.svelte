<script lang="ts">
	import {intersectionApi} from '$lib/stores';
	import {fromStore} from 'svelte/store';

	import './menu.css';

	const {elements$, visibleElements$} = intersectionApi;
	const elements = fromStore(elements$);
	const visibleElements = fromStore(visibleElements$);

	type TOC = {
		href: string;
		label: string;
		isVisible: boolean;
		submenu: {
			href: string;
			label: string;
			isVisible: boolean;
		}[];
	};

	const tocElements = $derived.by(() => {
		const tocs: TOC[] = [];
		elements.current.forEach((element) => {
			const isVisible = visibleElements.current.has(element);
			const header = element.querySelector('h2,h3') as HTMLHeadingElement;
			if (header) {
				if (header.tagName.toLowerCase() === 'h2') {
					tocs.push({
						label: header.innerText,
						href: header.querySelector('a')?.getAttribute('href') ?? '',
						isVisible,
						submenu: [],
					});
				} else {
					const last = tocs[tocs.length - 1];
					last.submenu.push({
						label: header.innerText,
						href: header.querySelector('a')?.getAttribute('href') ?? '',
						isVisible,
					});
				}
			}
		});
		return tocs;
	});
</script>

{#if elements.current.length}
	<div class="ms-2 mt-1 border-start-1">
		<div class="hidden lg:block font-bold mb-1">On this page</div>
		<ul class="menu ps-0">
			{#each tocElements as { label, href, isVisible, submenu }}
				<li class="mb-0!">
					<a
						class={[
							'menu-item menu-item-toc hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle! block rounded-none rounded-end',
							isVisible && 'active',
						]}
						aria-current={isVisible ? 'page' : undefined}
						{href}
					>
						{label}
					</a>
					{#if submenu.length}
						<ul class="ps-0">
							{#each submenu as { label, href, isVisible } (href)}
								<li class="mb-0!">
									<a
										class={[
											'menu-item menu-item-toc hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle! block rounded-none rounded-end',
											isVisible && 'active',
										]}
										aria-current={isVisible ? 'page' : undefined}
										{href}
									>
										{label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}
