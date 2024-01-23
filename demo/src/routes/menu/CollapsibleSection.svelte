<script lang="ts">
	import {collapseVerticalTransition} from '@agnos-ui/core/services/transitions/bootstrap';
	import {createTransition} from '@agnos-ui/core/services/transitions/baseTransitions';
	import {writable} from '@amadeus-it-group/tansu';

	export let headerText: string;
	export let defaultVisible: boolean;

	const paramTransition$ = writable(collapseVerticalTransition);
	const paramAnimation$ = writable(true);
	const paramVisible$ = writable(defaultVisible);

	const {
		stores: {visible$},
		api: {toggle},
		directives: {directive},
	} = createTransition({
		props: {
			animation: paramAnimation$,
			visible: paramVisible$,
		},
	});
</script>

<div class="mb-2">
	<button
		class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between"
		aria-expanded={$visible$}
		on:click={() => toggle()}
		>{headerText}
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1">
			<rect class="horizontal" x="20" y="45" width="60" height="10" fill="black" />
			<rect class="vertical" class:expanded={$visible$} x="45" y="20" width="10" height="60" fill="black" />
		</svg>
	</button>
	<div class="contents" class:collapse={!defaultVisible} use:directive={{transition: $paramTransition$, animation: $paramAnimation$}}>
		<slot />
	</div>
</div>

<style lang="scss">
	.btn-header:focus,
	.btn-header:hover,
	.btn-header:focus:active {
		background-color: var(--bs-secondary-bg);
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
