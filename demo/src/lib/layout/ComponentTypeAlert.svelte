<script lang="ts">
	import {Alert, type AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import {page} from '$app/stores';
	import Svg from './Svg.svelte';

	const regex = /\/(components|services)\/([^/]+)/;
	const typeIcon: Record<string, string> = {
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
	};

	export let componentType: string;
	let alert: Alert;

	$: type = 'info' as AlertProps['type'];
	// eslint-disable-next-line svelte/valid-compile
	$: componentName = $page.url.pathname.match(regex)?.[2];
	$: {
		componentName;
		alert?.api?.open();
	}
</script>

<Alert bind:this={alert} {type} className="p-0 border-0 border-start border-5 border-{type}">
	<div class="alert-container p-3 border border-{type} rounded-end">
		<div class="d-flex align-items-center">
			<span class="d-flex me-2">
				<Svg svg={typeIcon[type]} />
			</span>
			This component is a <strong class="m-1">{componentType}</strong> component and can be used <strong class="m-1">without</strong> the Bootstrap CSS.
		</div>
		<hr />
		Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.
	</div>
</Alert>
