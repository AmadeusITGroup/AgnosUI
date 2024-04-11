<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';
	import Secondary from './Secondary.svelte';
	import Success from './Success.svelte';

	createWidgetsDefaultConfig().set({alert: {dismissible: false, type: 'secondary'}});
</script>

<Alert>Alert not dismissible and of type secondary</Alert>
<Secondary />
<Success />
