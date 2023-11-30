<script lang="ts">
	import {Alert} from '@agnos-ui/svelte';
	import type {AlertProps} from '@agnos-ui/svelte';
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

<button class="btn btn-primary addError me-1" on:click={() => alerts$.add({type: 'danger', slotDefault: 'Error', dismissible: true, animation: true})}
	>Add error</button
>

<button class="btn btn-primary addInfo me-1" on:click={() => alerts$.add({type: 'info', slotDefault: 'Info', dismissible: true, animation: true})}
	>Add info</button
>

<button
	class="btn btn-primary addWarning me-1"
	on:click={() => alerts$.add({type: 'warning', slotDefault: 'Warning', dismissible: true, animation: true})}>Add warning</button
>

<br />
<div class="alertCount mb-3">Alerts in the service: {$alerts$.length}</div>
{#each $alerts$ as alert (alert)}
	{@const {dismissible, animationOnInit, animation, type, slotDefault} = alert}

	<Alert {dismissible} {animationOnInit} {animation} {type} {slotDefault} onHidden={() => alerts$.remove(alert)} />
{/each}
