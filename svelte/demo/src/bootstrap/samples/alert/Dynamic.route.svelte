<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {AlertService} from './alert-service.svelte';

	const alertService = new AlertService();
</script>

<button class="btn btn-primary addError me-1" onclick={() => alertService.add({type: 'danger', children: 'Error', dismissible: true, animated: true})}
	>Add error</button
>

<button class="btn btn-primary addInfo me-1" onclick={() => alertService.add({type: 'info', children: 'Info', dismissible: true, animated: true})}
	>Add info</button
>

<button
	class="btn btn-primary addWarning me-1"
	onclick={() => alertService.add({type: 'warning', children: 'Warning', dismissible: true, animated: true})}>Add warning</button
>

<br />
<div class="alertCount mb-3">Alerts in the service: {alertService.alerts.length}</div>
{#each alertService.alerts as alert (alert)}
	<Alert {...alert} onHidden={() => alertService.remove(alert)} />
{/each}
