<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	createWidgetsDefaultConfig().set({alert: {dismissible: false}});
</script>

<Alert type="primary">Simple primary alert</Alert>
<Alert type="secondary">Simple secondary alert</Alert>
<Alert type="success">Simple success alert</Alert>
<Alert type="danger">Simple danger alert</Alert>
<Alert type="warning">Simple warning alert</Alert>
<Alert type="info">Simple info alert</Alert>
<Alert type="light">Simple light alert</Alert>
<Alert type="dark">Simple dark alert</Alert>
