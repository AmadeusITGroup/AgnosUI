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
	<div class="flex flex-col">
		<div class="flex items-center">
			<span class="flex me-2">
				<Svg svg={biInfoCircleFill} className="icon-16" />
			</span>
			<div class="me-4">
				This component is a <strong>{componentType}</strong> component and can be used <strong>without</strong> the Bootstrap CSS.
			</div>
		</div>
		<div class="divider"></div>
		<div>
			Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take
			your color palette.
		</div>
	</div>
</Alert>
