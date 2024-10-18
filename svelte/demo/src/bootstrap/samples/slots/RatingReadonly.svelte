<script lang="ts">
	import {createRating, type StarContext, type RatingProps} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-bootstrap/config';

	let props: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'star'> = $props();

	const {state, api: ratingApi} = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		defaultConfig: {star},
		get props() {
			return {
				...props,
				readonly: true,
			};
		},
		enablePatchChanged: true,
	});
	export const api = ratingApi;
</script>

{#snippet star({fill}: StarContext)}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div class="d-inline-flex au-rating {state.className}">
	{#each state.stars as { fill, index }}
		<span class="au-rating-star">
			<!-- 
                Simply use the Slot component from @agnos-ui/svelte-headless.
                The api is currently a bit tricky, until Svelte 5 arrives with snippets.
            -->
			<Slot content={state.star} props={{fill, index}} />
		</span>
	{/each}
</div>
