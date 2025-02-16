<script lang="ts">
	import Alert from '../../../../svelte/demo/src/daisyui/samples/alert/Alert.svelte';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import {page} from '$app/stores';
	import Svg from './Svg.svelte';

	const regex = /\/(components|services)\/([^/]+)/;

	let {
		componentType,
	}: {
		componentType: string;
	} = $props();
	let visible = $state(true);

	let componentName = $derived($page.url.pathname.match(regex)?.[2]);
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		componentName;
		visible = true;
	});
</script>

<Alert className="alert-info mb-4" bind:visible>
	<div>
		<div class="flex items-center mb-2 gap-2">
			<Svg svg={biInfoCircleFill} className="icon-16" />
			<div class="text-lg">Component is <strong>{componentType}</strong></div>
		</div>
		<div>This component does not require Bootstrap CSS to be used.</div>
		<div>
			Colors of the component use the Bootstrap CSS vars (along with a default color) to ensure that if you do include bootstrap, the component will
			take your color palette.
		</div>
	</div>
</Alert>
