<script lang="ts">
	import {aboveMd} from './runes.svelte';
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
</script>

<div class="mb-2">Resize the window to see the message below updated.</div>
<Alert dismissible={false} type="info">
	Window width is above 768 px ? <strong>{aboveMd.current ? 'YES' : 'NO'}</strong>
</Alert>
