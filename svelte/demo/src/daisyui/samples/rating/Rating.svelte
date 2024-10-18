<script lang="ts">
	import {createRating, type RatingProps} from '@agnos-ui/svelte-headless/components/rating';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	// You can choose here the props (form the core) you want as input
	let {
		rating = $bindable(),
		...props
	}: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'onLeave' | 'ariaLabel'> = $props();

	const {
		state,
		actions: {hover, click, leave},
	} = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		get props() {
			return {...props, rating};
		},
		enablePatchChanged: true,
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});
</script>

<div class="rating {state.className}">
	{#each state.stars as { index } (index)}
		<input
			onmouseleave={leave}
			onmouseenter={() => hover(index + 1)}
			onclick={() => click(index + 1)}
			type="radio"
			name="rating-1"
			class="mask mask-star"
			aria-label={`${state.ariaLabel} star ${index + 1}`}
			checked={index + 1 === state.visibleRating}
		/>
	{/each}
</div>
