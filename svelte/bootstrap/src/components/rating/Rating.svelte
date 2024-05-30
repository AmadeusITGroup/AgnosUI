<script lang="ts">
	import type {RatingApi, RatingProps} from './rating';
	import {createRating} from './rating';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {rating = $bindable(), ...props}: Partial<RatingProps> = $props();

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		props: {...props, rating},
		defaultConfig: {slotStar},
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

	$effect(() => widget.patchChangedProps({...props, rating}));
</script>

{#snippet slotStar({fill})}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div use:containerDirective class="d-inline-flex">
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}}>
			<Slot content={$slotStar$} props={{fill, index}} />
		</span>
	{/each}
</div>
