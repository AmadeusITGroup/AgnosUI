<script context="module" lang="ts">
	import {writable} from '@amadeus-it-group/tansu';
	import type {TransitionFn} from '@agnos-ui/core';
	import {bootstrap, createTransition} from '@agnos-ui/core';

	const paramTransition$ = writable(bootstrap.collapseVerticalTransition);
	const paramAnimation$ = writable(true);
	const paramAnimationOnInit$ = writable(false);
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
		animationOnInit: $paramAnimationOnInit$,
		animation: $paramAnimation$,
		visible: $paramVisible$,
	});

	const checkBoxVisible$ = {
		subscribe: visible$.subscribe,
		set: (value: boolean) => patch({visible: value}),
	};

	const changeTransition = (newTransition: TransitionFn) => {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		toggle(false, false);
		$paramRemoveFromDom$ = true;
		$paramTransition$ = newTransition;
	};

	$: $paramVisible$ = $visible$;
</script>

<div class="transition-inner">
	<p class="mt-2">
		Transition:
		<button
			type="button"
			class="ms-2 btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === bootstrap.collapseVerticalTransition}
			on:click={() => changeTransition(bootstrap.collapseVerticalTransition)}>Vertical collapse</button
		>
		<button
			type="button"
			class="ms-2 btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === bootstrap.collapseHorizontalTransition}
			on:click={() => changeTransition(bootstrap.collapseHorizontalTransition)}>Horizontal collapse</button
		>
		<button
			type="button"
			class="ms-2 btn btn-sm btn-outline-secondary"
			class:active={$paramTransition$ === bootstrap.fadeTransition}
			on:click={() => changeTransition(bootstrap.fadeTransition)}>Fade</button
		>
	</p>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramAnimation$} />Animation</label>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramAnimationOnInit$} />Animation on init</label>
	<label class="form-check"><input type="checkbox" class="form-check-input" bind:checked={$paramRemoveFromDom$} />Remove from DOM</label>
	<label class="form-check mb-2"><input type="checkbox" class="form-check-input" bind:checked={$checkBoxVisible$} />Visible</label>

	<button type="button" class="btn btn-outline-primary" on:click={() => toggle()}>Toggle</button>
	<button type="button" class="ms-2 btn btn-outline-primary" on:click={() => toggle(undefined, true)}>Toggle with animation</button>
	<button type="button" class="ms-2 btn btn-outline-primary" on:click={() => toggle(undefined, false)}>Toggle without animation</button>
	<div>
		<ul class="mt-2">
			<li>visible = {$visible$}</li>
			<li>transitioning = {$transitioning$}</li>
			<li>shown = {$shown$}</li>
			<li>hidden = {$hidden$}</li>
		</ul>

		{#if !$paramRemoveFromDom$ || !$hidden$}
			<div use:directive={{transition: $paramTransition$, animation: $paramAnimation$}} style="max-width: 300px;">
				<div class="card" style="width: 300px;">
					<div class="card-body">You can collapse this card by clicking Toggle</div>
				</div>
			</div>
		{/if}
	</div>
</div>
