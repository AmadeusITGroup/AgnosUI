<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getModalDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/modal';
	import sample from '@agnos-ui/samples/bootstrap/modal/playground';
	import doc from '@agnos-ui/generated/doc/api.json?modal&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	interface Props {
		listPropsValues?: {[key in keyof ReturnType<typeof getModalDefaultConfig>]?: PropsValues[]};
	}

	let {
		listPropsValues = {
			backdropTransition: ['fade'],
			modalTransition: ['fade'],
			onBeforeClose: ['noop', 'log'],
			onHidden: ['noop', 'log'],
			onShown: ['noop', 'log'],
			onVisibleChange: ['noop', 'log'],
		},
	}: Props = $props();
</script>

<Playground {sample} config={getModalDefaultConfig()} height={250} noresize {doc} {listPropsValues} />
