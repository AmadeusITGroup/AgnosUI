<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	createWidgetsDefaultConfig().set({alert: {type: 'success'}});
</script>

<Alert>Alert not dismissible and of type success, type overriden by child config</Alert>
