<script lang="ts">
	import {createRating, type RatingProps, type RatingSlots} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-bootstrap/config';

	type $$Props = Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'star'>;
	type $$Slots = RatingSlots;

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		$$slots,
		$$props: {
			...$$props,
			readonly: true,
		},
	});
	export const api = widget.api;

	const {
		stores: {stars$, className$, star$},
	} = widget;
	$: widget.patchChangedProps($$props);
</script>

<div class="d-inline-flex au-rating {$className$}">
	{#each $stars$ as { fill, index }}
		<span class="au-rating-star">
			<!-- 
                Simply use the Slot component from @agnos-ui/svelte-headless.
                The api is currently a bit tricky, until Svelte 5 arrives with snippets.
            -->
			<Slot slotContent={$star$} props={{fill, index}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="star" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
