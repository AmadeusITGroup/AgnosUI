<script lang="ts">
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

	export const alerts$ = createAlerts();
</script>

<button class="btn btn-primary addError me-1" on:click={() => alerts$.add({type: 'danger', children: 'Error', dismissible: true, animated: true})}
	>Add error</button
>

<button class="btn btn-primary addInfo me-1" on:click={() => alerts$.add({type: 'info', children: 'Info', dismissible: true, animated: true})}
	>Add info</button
>

<button
	class="btn btn-primary addWarning me-1"
	on:click={() => alerts$.add({type: 'warning', children: 'Warning', dismissible: true, animated: true})}>Add warning</button
>

<br />
<div class="alertCount mb-3">Alerts in the service: {$alerts$.length}</div>
{#each $alerts$ as alert (alert)}
	{@const {dismissible, animatedOnInit, animated, type, children} = alert}

	<Alert {dismissible} {animatedOnInit} {animated} {type} {children} onHidden={() => alerts$.remove(alert)} />
{/each}
