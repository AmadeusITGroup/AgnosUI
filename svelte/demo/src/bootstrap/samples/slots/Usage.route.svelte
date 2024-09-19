<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
</script>

<Alert type="primary" dismissible={false}>Label provided by slot</Alert>
<Alert type="secondary" dismissible={false} children="Label provided by property" />
<p>Trying to set children through snippet and property at the same time will result in an error.</p>
