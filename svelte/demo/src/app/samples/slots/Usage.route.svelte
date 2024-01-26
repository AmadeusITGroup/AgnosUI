<script lang="ts">
	import {Alert} from '@agnos-ui/svelte/components/alert';
</script>

<Alert type="primary" dismissible={false}>Label provided by slot</Alert>
<Alert type="secondary" dismissible={false} slotDefault="Label provided by property" />
<Alert type="info" dismissible={false} slotDefault="When both prop and slot are provided, the prop's content will take precedence."
	>This content is ignored.</Alert
>
