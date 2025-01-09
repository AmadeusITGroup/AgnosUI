<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import {page} from '$app/state';
	import Svg from './Svg.svelte';
	import {untrack} from 'svelte';

	const regex = /\/(components|services)\/([^/]+)/;

	let {
		componentType,
	}: {
		componentType: string;
	} = $props();
	let alert: ReturnType<typeof Alert>;

	let componentName = $derived(page.url.pathname.match(regex)?.[2]);
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		componentName;
		// FIXME untrack was required to fix an unexpected bug, see https://github.com/AmadeusITGroup/AgnosUI/issues/964
		untrack(() => alert!.api.open());
	});
</script>

<Alert bind:this={alert} type={'info'} className="p-0 border-0 border-start border-5 border-info">
	<div class="alert-container p-3 border border-info rounded-end">
		<div class="d-flex align-items-center">
			<span class="d-flex me-2">
				<Svg svg={biInfoCircleFill} className="icon-16" />
			</span>
			<span class="me-4">
				This component is a <strong>{componentType}</strong> component and can be used <strong>without</strong> the Bootstrap CSS.
			</span>
		</div>
		<hr />
		Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.
	</div>
</Alert>
