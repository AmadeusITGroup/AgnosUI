const t=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import type {AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {writable} from 'svelte/store';

	function createAlerts() {
		const {subscribe, set, update} = writable([] as Partial<AlertProps>[]);

		return {
			subscribe,
			add: (alert: Partial<AlertProps>) => update((alerts) => [...alerts, alert]),
			remove: (alert: Partial<AlertProps>) => update((alerts) => alerts.filter((a) => a !== alert)),
			reset: () => set([]),
		};
	}

	const alerts$ = createAlerts();
<\/script>

<button class="btn btn-primary addError me-1" onclick={() => alerts$.add({type: 'danger', children: 'Error', dismissible: true, animated: true})}
	>Add error</button
>

<button class="btn btn-primary addInfo me-1" onclick={() => alerts$.add({type: 'info', children: 'Info', dismissible: true, animated: true})}
	>Add info</button
>

<button class="btn btn-primary addWarning me-1" onclick={() => alerts$.add({type: 'warning', children: 'Warning', dismissible: true, animated: true})}
	>Add warning</button
>

<br />
<div class="alertCount mb-3">Alerts in the service: {$alerts$.length}</div>
{#each $alerts$ as alert (alert)}
	<Alert {...alert} onHidden={() => alerts$.remove(alert)} />
{/each}
`;export{t as default};
