<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAccordionDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/accordion/playground';
	import doc from '../../../../../../../core/dist/api.json?accordion&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	export let listPropsValues: {[key in keyof ReturnType<typeof getAccordionDefaultConfig>]?: PropsValues[]} = {
		onShown: ['noop', 'log'],
		onHidden: ['noop', 'log'],
		itemTransition: ['collapse', 'fade'],
		onItemShown: ['noop', 'log'],
		onItemHidden: ['noop', 'log'],
		onItemVisibleChange: ['noop', 'log'],
	};
</script>

<Playground {sample} config={getAccordionDefaultConfig()} {doc} {listPropsValues} />
