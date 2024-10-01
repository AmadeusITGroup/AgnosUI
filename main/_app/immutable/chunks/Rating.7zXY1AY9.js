const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

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
<\/script>

{#snippet star({fill}: StarContext)}
	{String.fromCharCode(fill === 100 ? 9733 : 9734)}
{/snippet}

<div use:containerDirective use:__AgnosUISveltePreprocess__classDirective={"d-inline-flex"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(containerDirective, [__AgnosUISveltePreprocess__classDirective, "d-inline-flex"])}>
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([starDirective, {index}])}>
			<Slot content={$star$} props={{fill, index}} />
		</span>
	{/each}
</div>
`;export{t as default};
