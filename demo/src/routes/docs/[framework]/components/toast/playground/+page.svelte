<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getToastDefaultConfig} from '@agnos-ui/core/components/toast';
	import sample from '@agnos-ui/samples/toast/playground';
	import doc from '@agnos-ui/generated/doc/api.json?toast&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';

	export let listPropsValues: {[key in keyof ReturnType<typeof getToastDefaultConfig>]?: PropsValues[]} = {
		onVisibleChange: ['noop', 'log'],
		onShown: ['noop', 'log'],
		transition: ['fade'],
		onHidden: ['noop', 'log'],
	};
</script>

<Playground {sample} config={getToastDefaultConfig()} {doc} {listPropsValues} />
