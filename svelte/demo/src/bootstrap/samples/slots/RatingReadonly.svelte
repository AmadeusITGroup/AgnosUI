<script lang="ts">
	import {createRating, type RatingProps} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-bootstrap/config';

	let {...props}: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'slotStar'> = $props();

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		defaultConfig: {slotStar},
		props: {
			...props,
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
	$effect(() => widget.patchChangedProps({...props}));
</script>

{#snippet slotStar({fill})}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div class="d-inline-flex au-rating {$className$}">
	{#each $stars$ as { fill, index }}
		<span class="au-rating-star">
			<!-- 
                Simply use the Slot component from @agnos-ui/svelte-headless.
            -->
			<Slot content={$slotStar$} props={{fill, index}} />
		</span>
	{/each}
</div>
