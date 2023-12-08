<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getRatingDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/rating/playground';
	import doc from '@agnos-ui/generated/doc/api.json?rating&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	const listPropsValues: {[key in keyof ReturnType<typeof getRatingDefaultConfig>]?: PropsValues[]} = {
		ariaValueTextFn: ['ratingValueFunction', 'heartsRatingValue', 'starRatingValue'],
		onHover: ['noop', 'log'],
		onLeave: ['noop', 'log'],
		onRatingChange: ['noop', 'log'],
		slotStar: ['starIconRating', 'heartIconRating'],
	};
</script>

<Playground {sample} config={getRatingDefaultConfig()} {doc} {listPropsValues} />
