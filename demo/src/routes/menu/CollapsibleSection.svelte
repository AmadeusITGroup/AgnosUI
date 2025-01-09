<script lang="ts">
	import {page} from '$app/state';
	import {createTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {collapseVerticalTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/bootstrap';
	import {writable} from '@amadeus-it-group/tansu';
	import type {Page} from '@sveltejs/kit';
	import {onMount, type Snippet} from 'svelte';

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

	const paramAnimated$ = writable(false);
	const defaultVisible = isOnPage(page);
	const paramVisible$ = writable(defaultVisible);
	onMount(() => {
		paramAnimated$.set(true);
	});
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		page;
		if (paramVisible$() === false) {
			paramVisible$.set(isOnPage(page));
		}
	});

	const {
		stores: {visible$},
		api: {toggle},
		directives: {directive},
	} = createTransition({
		props: {
			animated: paramAnimated$,
			animatedOnInit: paramAnimated$,
			visible: paramVisible$,
			transition: collapseVerticalTransition,
		},
	});

	function isOnPage(page: Page<Record<string, string>, string | null>) {
		return path.some((p) => page.url.pathname?.includes(p.path));
	}
</script>

<div class="mb-2">
	<button
		class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between"
		aria-expanded={$visible$}
		onclick={() => toggle()}
		>{headerText}
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1">
			<rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
			<rect class="vertical" class:expanded={$visible$} x="45" y="20" width="10" height="60" fill="currentColor" />
		</svg>
	</button>
	<div class="contents" use:directive>
		{@render children()}
	</div>
</div>

<style lang="scss">
	.btn-header:focus-visible,
	.btn-header:hover,
	.btn-header:focus-visible:active {
		background-color: var(--bs-secondary-bg-subtle);
		border-color: var(--bs-secondary-bg-subtle);
		color: var(--bs-secondary-color);
	}
	.btn-header {
		color: var(--bs-primary-text-emphasis);
	}

	svg {
		rect {
			transition: transform 0.35s ease-in-out;
		}

		.vertical {
			transform: rotate(0);
			transform-origin: center;
			&.expanded {
				transform: rotate(90deg);
			}
		}
	}
</style>
