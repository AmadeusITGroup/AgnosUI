<script lang="ts">
	import type {RatingApi, RatingProps, RatingSlots} from './rating';
	import {createRating} from './rating';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = Partial<RatingProps>;
	type $$Slots = RatingSlots;

	export let rating: number | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		$$slots,
		$$props,
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});
	export const api: RatingApi = widget.api;

	const {
		stores: {visibleRating$, stars$, slotStar$},
		directives: {containerDirective, starDirective},
	} = widget;

	$: widget.patchChangedProps($$props);
</script>

<div use:containerDirective class="d-inline-flex">
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}}>
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="star" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
