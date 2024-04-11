<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	createWidgetsDefaultConfig().set({alert: {dismissible: false}});
</script>

<Alert type="primary">Simple primary alert</Alert>
<Alert type="secondary">Simple secondary alert</Alert>
