<script module lang="ts">
	import {writable} from '@amadeus-it-group/tansu';
	import type {TransitionFn} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {createTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {collapseHorizontalTransition, collapseVerticalTransition, fadeTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/bootstrap';

	const paramTransition$ = writable(collapseVerticalTransition);
	const paramAnimated$ = writable(true);
	const paramAnimatedOnInit$ = writable(false);
	const paramVisible$ = writable(true);
	const paramRemoveFromDom$ = writable(true);
</script>

<script lang="ts">
	const {
		stores: {visible$, transitioning$, shown$, hidden$},
		api: {toggle},
		directives: {directive},
		patch,
	} = createTransition({
		props: {
			animatedOnInit: paramAnimatedOnInit$,
			animated: paramAnimated$,
			visible: paramVisible$,
			transition: paramTransition$,
		},
	});

	const checkBoxVisible$ = {
		subscribe: visible$.subscribe,
		set: (value: boolean) => patch({visible: value}),
	};

	const changeTransition = (newTransition: TransitionFn) => {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		void toggle(false, false);
		$paramRemoveFromDom$ = true;
		$paramTransition$ = newTransition;
	};
</script>

<div class="transition-inner">
	<div class="h6 mt-2">Transition:</div>
	<div class="d-flex flex-wrap gap-2">
		<button
			type="button"
			class="btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === collapseVerticalTransition}
			onclick={() => changeTransition(collapseVerticalTransition)}>Vertical collapse</button
		>
		<button
			type="button"
			class="btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === collapseHorizontalTransition}
			onclick={() => changeTransition(collapseHorizontalTransition)}>Horizontal collapse</button
		>
		<button
			type="button"
			class="btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === fadeTransition}
			onclick={() => changeTransition(fadeTransition)}>Fade</button
		>
	</div>
	<div class="h6 mt-2">Other properties:</div>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramAnimated$} />Animated</label>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramAnimatedOnInit$} />Animated on init</label>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramRemoveFromDom$} />Remove from DOM</label>
	<label class="form-check mb-2"><input type="checkbox" class="form-check-input" bind:checked={$checkBoxVisible$} />Visible</label>

	<div class="d-flex flex-wrap gap-2">
		<button type="button" class="btn btn-outline-primary" onclick={() => toggle()}>Toggle</button>
		<button type="button" class="btn btn-outline-primary" onclick={() => toggle(undefined, true)}>Toggle with animation</button>
		<button type="button" class="btn btn-outline-primary" onclick={() => toggle(undefined, false)}>Toggle without animation</button>
	</div>

	<ul class="mt-2">
		<li>visible = {$visible$}</li>
		<li>transitioning = {$transitioning$}</li>
		<li>shown = {$shown$}</li>
		<li>hidden = {$hidden$}</li>
	</ul>

	{#if !$paramRemoveFromDom$ || !$hidden$}
		<div use:directive style="max-width: 300px;">
			<div class="card" style="width: 300px;">
				<div class="card-body">You can collapse this card by clicking Toggle</div>
			</div>
		</div>
	{/if}
</div>
