const t=`<script lang="ts">
	import {createRating, type RatingProps} from '@agnos-ui/svelte-headless/components/rating';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	// You can choose here the props (form the core) you want as input
	type $$Props = Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'onLeave' | 'ariaLabel'>;
	export let rating: number | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		$$props,
		events: {
			onRatingChange: (value: number) => {
				rating = value;
			},
		},
	});
	export const api = widget.api;

	const {
		stores: {visibleRating$, interactive$, stars$, className$, ariaLabel$},
		actions: {hover, click, leave},
	} = widget;
	$: widget.patchChangedProps($$props);
<\/script>

<div class="rating {$className$}">
	{#each $stars$ as { index } (index)}
		<input
			on:mouseleave={leave}
			on:mouseenter={() => hover(index + 1)}
			on:click={() => click(index + 1)}
			style:cursor={$interactive$ ? 'pointer' : 'default'}
			type="radio"
			name="rating-1"
			class="mask mask-star"
			aria-label={\`\${$ariaLabel$} star \${index + 1}\`}
			checked={index + 1 === $visibleRating$}
		/>
	{/each}
</div>
`;export{t as default};
