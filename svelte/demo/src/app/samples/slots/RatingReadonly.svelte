<script lang="ts" context="module">
	import type {RatingProps as Props, RatingSlots as Slots} from '@agnos-ui/svelte/components/rating';
	import {createRating} from '@agnos-ui/svelte/components/rating';
	import {Slot} from '@agnos-ui/svelte/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte/config';
</script>

<script lang="ts">
	type $$Props = Pick<Partial<Props>, 'rating' | 'maxRating' | 'className' | 'slotStar'>;
	type $$Slots = Slots;

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		$$slots,
		$$props: {
			...$$props,
			readonly: true,
		},
		events: {
			onRatingChange: () => {},
		},
	});

	const {
		stores: {stars$, className$, slotStar$},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);
</script>

<div class="d-inline-flex au-rating {$className$}">
	{#each $stars$ as { fill, index }}
		<span class="au-rating-star">
			<!-- 
                Simply use the Slot component from @agnos-ui/svelte-headless.
                The api is currently a bit tricky, until Svelte 5 arrives with snippets.
            -->
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<slot slot="slot" name="star" let:props {...props} />
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
