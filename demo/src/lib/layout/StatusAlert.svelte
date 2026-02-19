<script lang="ts">
	import Alert from '../../../../svelte/demo/src/daisyui/samples/alert/Alert.svelte';
	import {type AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import {page} from '$app/state';
	import Svg from './Svg.svelte';

	const regex = /\/(components|services|daisyUI)\/([^/]+)/;
	const typeIcon: Record<string, string> = {
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
	};

	let {status}: {status: string} = $props();

	let type = $derived((status === 'inprogress' ? 'warning' : 'info') as AlertProps['type']);
	let typeClass = $derived(status === 'inprogress' ? 'alert-warning' : 'alert-info');
	let statusText = $derived(status === 'inprogress' ? 'In progress' : 'Beta');
	let statusTextBody = $derived(
		status === 'inprogress'
			? 'This component is still under active development. More features will be added in the near future.'
			: 'This component has all the basic functionalities implemented. More polishing features might be added in the near future.',
	);
	let componentName = $derived(page.url.pathname.match(regex)?.[2]);
	let visible = $state(true);
	let issueUrl = $derived(`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${componentName}%22`);
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		componentName;
		visible = true;
	});
</script>

<Alert className="{typeClass} mb-4" bind:visible>
	<div>
		<div class="flex items-center mb-2 gap-2">
			<Svg svg={typeIcon[type]} className="icon-20" />
			<div class="text-lg">Status of component is <strong>{statusText}</strong></div>
		</div>
		{statusTextBody}
		<div>
			If you want to contribute, please visit <a href={issueUrl} target="_blank">the issues on GitHub</a>.
		</div>
	</div>
</Alert>
