const t=`<script lang="ts" context="module">
	import {createRating} from '@agnos-ui/core';
	import Slot from '../slot/Slot.svelte';
	import type {WidgetPropsEvents, WidgetPropsProps} from '../utils';
	import {callWidgetFactory, createEventDispatcher} from '../utils';
	import type {RatingProps as Props, RatingSlots as Slots} from './rating';
<\/script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let rating: number | undefined = undefined;

	const widget = callWidgetFactory(createRating, 'rating', $$slots);
	widget.patch({
		onHover: (value: number) => dispatch('hover', value),
		onLeave: (value: number) => dispatch('leave', value),
		onRatingChange: (value: number) => {
			rating = value;
			dispatch('ratingChange', value);
		},
	});

	const {
		stores: {
			tabindex$,
			maxRating$,
			visibleRating$,
			ariaValueText$,
			readonly$,
			disabled$,
			isInteractive$,
			stars$,
			className$,
			slotStar$,
			ariaLabel$,
			ariaLabelledBy$,
		},
		actions: {handleKey, leave, hover, click},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);
<\/script>

<div
	role="slider"
	class="d-inline-flex au-rating {$className$}"
	tabindex={$tabindex$}
	aria-valuemin={0}
	aria-valuemax={$maxRating$}
	aria-valuenow={$visibleRating$}
	aria-valuetext={$ariaValueText$}
	aria-readonly={$readonly$ || undefined}
	aria-disabled={$disabled$ || undefined}
	aria-label={$ariaLabel$ || undefined}
	aria-labelledby={$ariaLabelledBy$ || undefined}
	on:keydown={handleKey}
	on:mouseleave={leave}
>
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="au-rating-star"
			style:cursor={$isInteractive$ ? 'pointer' : 'default'}
			on:mouseenter={() => hover(index + 1)}
			on:click={() => click(index + 1)}
		>
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<slot slot="slot" name="star" let:props {...props} />
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
`;export{t as default};
