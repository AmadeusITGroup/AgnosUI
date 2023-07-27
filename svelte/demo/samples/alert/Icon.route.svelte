<script lang="ts">
	import {Alert, createWidgetsDefaultConfig} from '@agnos-ui/svelte';
	import Icon from './Icon.svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const widgetsConfig$ = createWidgetsDefaultConfig();
	$widgetsConfig$.alert = {...$widgetsConfig$.alert, dismissible: false, slotStructure: Icon};
</script>

<Alert type="success">Alert success with a customisable icon</Alert>
<Alert type="warning">Alert warning with a customisable icon</Alert>
<Alert type="danger">Alert danger with a customisable icon</Alert>
<Alert type="info">Alert info with a customisable icon</Alert>
<Alert type="light">Alert light with a customisable icon</Alert>
