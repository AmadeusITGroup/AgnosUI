<script lang="ts">
	import {aboveMd$} from './stores';
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
</script>

<div class="mb-2">Resize the window to see the message below updated.</div>
<Alert dismissible={false} type="info">
	<!-- eslint-disable-next-line svelte/valid-compile -->
	Window is above 768 px ? <strong>{$aboveMd$ ? 'YES' : 'NO'}</strong>
</Alert>
