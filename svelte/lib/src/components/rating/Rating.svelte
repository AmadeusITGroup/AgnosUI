<script lang="ts" context="module">
	import type {RatingProps as Props, RatingSlots as Slots} from '@agnos-ui/svelte-headless/components/rating';
	import {createRating} from '@agnos-ui/svelte-headless/components/rating';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createClassDirective, ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
</script>

<script lang="ts">
	type $$Props = Partial<Props>;
	type $$Slots = Slots;

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
	export const api = widget.api;

	const {
		stores: {visibleRating$, stars$, slotStar$},
		directives: {containerDirective, starDirective},
	} = widget;

	$: widget.patchChangedProps($$props);
</script>

<div use:containerDirective class="d-inline-flex" {...ssrAttributes(createClassDirective('d-inline-flex'), containerDirective)}>
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}} {...ssrAttributes([starDirective, {index}])}>
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="star" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
