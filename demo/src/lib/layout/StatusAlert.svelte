<script lang="ts">
	import {Alert, type AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import {page} from '$app/state';
	import Svg from './Svg.svelte';
	import {untrack} from 'svelte';

	const regex = /\/(components|services|daisyUI)\/([^/]+)/;
	const typeIcon: Record<string, string> = {
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
	};

	let {status}: {status: string} = $props();
	let alert: ReturnType<typeof Alert>;

	let type = $derived((status === 'inprogress' ? 'warning' : 'info') as AlertProps['type']);
	let statusText = $derived(status === 'inprogress' ? 'In progress' : 'Beta');
	let statusTextBody = $derived(
		status === 'inprogress'
			? 'This component is still under active development. More features will be added in the near future.'
			: 'This component has all the basic functionalities implemented. More polishing features might be added in the near future.',
	);
	let componentName = $derived(page.url.pathname.match(regex)?.[2]);
	let issueUrl = $derived(`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${componentName}%22`);
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		componentName;
		// FIXME untrack was required to fix an unexpected bug, see https://github.com/AmadeusITGroup/AgnosUI/issues/964
		untrack(() => alert!.api.open());
	});
</script>

<Alert bind:this={alert} {type} className="p-0 border-0 border-start border-5 border-{type}">
	<div class="alert-container p-3 border border-{type} rounded-end">
		<div class="d-flex align-items-center">
			<span class="d-flex me-2">
				<Svg svg={typeIcon[type]} className="icon-16" />
			</span>
			<span class="me-4">
				Warning: component is <strong>{statusText}</strong><br />
			</span>
		</div>
		<hr />
		{statusTextBody}
		<br />
		If you want to contribute, please visit
		<a href={issueUrl} target="_blank">the issues on GitHub</a>.
	</div>
</Alert>
