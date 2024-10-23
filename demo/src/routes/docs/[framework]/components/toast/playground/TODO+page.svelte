<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getToastDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/toast';
	import sample from '@agnos-ui/samples/bootstrap/toast/playground';
	import doc from '@agnos-ui/generated/doc/api.json?toast&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';

	interface Props {
		listPropsValues?: {[key in keyof ReturnType<typeof getToastDefaultConfig>]?: PropsValues[]};
	}

	let {
		listPropsValues = {
			onVisibleChange: ['noop', 'log'],
			onShown: ['noop', 'log'],
			transition: ['fade'],
			onHidden: ['noop', 'log'],
		},
	}: Props = $props();
</script>

<Playground {sample} config={getToastDefaultConfig()} {doc} {listPropsValues} />
