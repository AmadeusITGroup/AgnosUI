<script lang="ts">
	import {page} from '$app/state';
	import {writable} from '@amadeus-it-group/tansu';
	import {type Snippet} from 'svelte';

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

	const defaultVisible = isOnPage(page.url);
	const isOpen$ = writable(defaultVisible);

	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		page.url;
		if (isOpen$() === false) {
			isOpen$.set(isOnPage(page.url));
		}
	});

	function isOnPage(url: URL) {
		return path.some((p) => url.pathname?.includes(p.path));
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
