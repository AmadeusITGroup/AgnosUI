<script lang="ts">
	import type {RatingProps, StarContext} from './rating.gen';
	import {createRating} from './rating.gen';
	import {callWidgetFactory} from '../../config';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {rating = $bindable(), ...props}: Partial<RatingProps> = $props();

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		props: {...props, rating},
		defaultConfig: {star},
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});

	const {
		stores: {visibleRating$, stars$, star$},
		directives: {containerDirective, starDirective},
	} = widget;

	$effect(() => widget.patchChangedProps({...props, rating}));
</script>

{#snippet star({fill}: StarContext)}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div use:containerDirective class="d-inline-flex">
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}}>
			<Slot content={$star$} props={{fill, index}} />
		</span>
	{/each}
</div>
