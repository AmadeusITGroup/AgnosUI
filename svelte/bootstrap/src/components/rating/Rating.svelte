<script lang="ts">
	import type {RatingApi, RatingProps, StarContext} from './rating.gen';
	import {createRating} from './rating.gen';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {rating = $bindable(), ...props}: Partial<RatingProps> = $props();

	const {
		state,
		directives: {containerDirective, starDirective},
		api: ratingApi,
	} = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		get props() {
			return {...props, rating};
		},
		enablePatchChanged: true,
		defaultConfig: {star},
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});
	export const api: RatingApi = ratingApi;
</script>

{#snippet star({fill}: StarContext)}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div use:containerDirective class="d-inline-flex">
	<!-- on:blur={onTouched} ?? -->
	{#each state.stars as { fill, index }}
		<span class="visually-hidden">({index < state.visibleRating ? '*' : ' '})</span>
		<span use:starDirective={{index}}>
			<Slot content={state.star} props={{fill, index}} />
		</span>
	{/each}
</div>
