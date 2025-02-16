<script lang="ts">
	import {page} from '$app/stores';
	import {writable} from '@amadeus-it-group/tansu';
	import type {Page} from '@sveltejs/kit';
	import {onMount, type Snippet} from 'svelte';
	import {get} from 'svelte/store';

	interface Props {
		headerText: string;
		path: {
			path: string;
			subpath: string;
			label: string;
		}[];
		children: Snippet;
	}

	let {headerText, path, children}: Props = $props();

	const defaultVisible = isOnPage(get(page));
	const isOpen$ = writable(defaultVisible);
	onMount(() => {
		return page.subscribe((p) => {
			if (isOpen$() === false) {
				isOpen$.set(isOnPage(p));
			}
		});
	});

	function isOnPage(page: Page<Record<string, string>, string | null>) {
		return path.some((p) => page.url.pathname?.includes(p.path));
	}

	const onmousedown = (event: MouseEvent) => {
		event.preventDefault();
	};

	const toggle = (event: (MouseEvent & {currentTarget: EventTarget & HTMLElement}) | undefined) => {
		isOpen$.update((v) => !v);
		event?.preventDefault();
	};
</script>

<li>
	<button
		{onmousedown}
		onclick={(e) => toggle(e)}
		class={['menu-dropdown-toggle', 'hover:bg-secondary-subtle!', 'focus-visible:bg-secondary-subtle!', {'menu-dropdown-show': $isOpen$}]}
		>{headerText}</button
	>
	<ul class={['menu-dropdown', {'menu-dropdown-show': $isOpen$}]}>
		{@render children()}
	</ul>
</li>
