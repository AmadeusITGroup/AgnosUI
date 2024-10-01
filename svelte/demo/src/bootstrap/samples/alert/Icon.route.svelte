<script lang="ts">
	import {Alert, type AlertContext} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';
	import IconStructure from './IconStructure.svelte';

	createWidgetsDefaultConfig().set({alert: {dismissible: false, className: 'd-flex align-items-center', structure}});
</script>

{#snippet structure(props: AlertContext)}
	<IconStructure {...props} />
{/snippet}

<Alert type="success">Alert success with a customisable icon</Alert>
<Alert type="warning">Alert warning with a customisable icon</Alert>
<Alert type="danger">Alert danger with a customisable icon</Alert>
<Alert type="info">Alert info with a customisable icon</Alert>
<Alert type="light">Alert light with a customisable icon</Alert>
