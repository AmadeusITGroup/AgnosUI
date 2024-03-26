const t=`<script lang="ts">
	import {createRating, type RatingProps as Props, type RatingSlots as Slots} from '@agnos-ui/svelte/components/rating';
	import {Slot} from '@agnos-ui/svelte/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte/config';

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
	export const api = widget.api;

	const {
		stores: {stars$, className$, slotStar$},
	} = widget;
	$: widget.patchChangedProps($$props);
<\/script>

<div class="d-inline-flex au-rating {$className$}">
	{#each $stars$ as { fill, index }}
		<span class="au-rating-star">
			<!-- 
                Simply use the Slot component from @agnos-ui/svelte-headless.
                The api is currently a bit tricky, until Svelte 5 arrives with snippets.
            -->
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="star" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
`;export{t as default};
