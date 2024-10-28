<script lang="ts">
	import {Collapse} from '@agnos-ui/svelte-bootstrap/components/collapse';

	let visible = $state(true);
</script>

<button class="btn btn-primary mb-2" type="button" aria-controls="auId-0" aria-expanded={visible} onclick={() => (visible = !visible)}
	>Toggle collapse</button
>
<Collapse {visible} onHidden={() => console.log('Hidden')} id="auId-0"><div class="card card-body">Visible content</div></Collapse>
