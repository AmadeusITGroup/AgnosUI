<script lang="ts">
	import {page} from '$app/state';
	import {createTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {collapseVerticalTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/bootstrap';
	import {writable} from '@amadeus-it-group/tansu';
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
	const defaultVisible = isOnPage(page.url);
	const paramVisible$ = writable(defaultVisible);
	onMount(() => {
		paramAnimated$.set(true);
	});
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		page.url;
		if (paramVisible$() === false) {
			paramVisible$.set(isOnPage(page.url));
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

	function isOnPage(url: URL) {
		return path.some((p) => url.pathname?.includes(p.path));
	}
</script>

<div class="mb-2">
	<button class="btn p-1 flex items-center btn-header font-semibold w-full justify-content-between" aria-expanded={$visible$} onclick={() => toggle()}
		>{headerText}
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1">
			<rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
			<rect class={['vertical', {expanded: $visible$}]} x="45" y="20" width="10" height="60" fill="currentColor" />
		</svg>
	</button>
	<div class="contents" use:directive>
		{@render children()}
	</div>
</div>

<style>
	.btn-header:focus-visible,
	.btn-header:hover,
	.btn-header:focus-visible:active {
		background-color: var(--color-secondary);
		border-color: var(--color-secondary);
		color: var(--bs-secondary-color);
	}
	.btn-header {
		color: var(--color-primary);
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
