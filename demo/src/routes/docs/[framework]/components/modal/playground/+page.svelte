<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getModalDefaultConfig} from '@agnos-ui/svelte/components/modal';
	import sample from '@agnos-ui/samples/modal/playground';
	import doc from '@agnos-ui/generated/doc/api.json?modal&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	export let listPropsValues: {[key in keyof ReturnType<typeof getModalDefaultConfig>]?: PropsValues[]} = {
		backdropTransition: ['fade'],
		modalTransition: ['fade'],
		onBeforeClose: ['noop', 'log'],
		onHidden: ['noop', 'log'],
		onShown: ['noop', 'log'],
		onVisibleChange: ['noop', 'log'],
	};
</script>

<Playground {sample} config={getModalDefaultConfig()} height={250} noresize {doc} {listPropsValues} />
