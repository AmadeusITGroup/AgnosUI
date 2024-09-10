<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAlertDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/alert';
	import sample from '@agnos-ui/samples/bootstrap/alert/playground';
	import doc from '@agnos-ui/generated/doc/api.json?alert&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';

	export let listPropsValues: {[key in keyof ReturnType<typeof getAlertDefaultConfig>]?: PropsValues[]} = {
		onVisibleChange: ['noop', 'log'],
		onShown: ['noop', 'log'],
		transition: ['fade'],
		onHidden: ['noop', 'log'],
	};
</script>

<Playground {sample} config={getAlertDefaultConfig()} {doc} {listPropsValues} />
