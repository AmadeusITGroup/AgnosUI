const t=`<script lang="ts">
	import {createRating, type RatingProps} from '@agnos-ui/svelte-headless/components/rating';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	// You can choose here the props (form the core) you want as input
	let {rating = $bindable(), ...props}: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'ariaLabel'> = $props();

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		props: {...props, rating},
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});

	const {
		stores: {visibleRating$, stars$, className$, ariaLabel$},
		api: {setRating, setHoveredRating, leave},
	} = widget;
	$effect(() => widget.patchChangedProps({...props, rating}));
<\/script>

<div class="rating {$className$}">
	{#each $stars$ as { index } (index)}
		<input
			onmouseleave={leave}
			onmouseenter={() => setHoveredRating(index + 1)}
			onclick={() => setRating(index + 1)}
			type="radio"
			name="rating-1"
			class="mask mask-star"
			aria-label={\`\${$ariaLabel$} star \${index + 1}\`}
			checked={index + 1 === $visibleRating$}
		/>
	{/each}
</div>
`;export{t as default};
