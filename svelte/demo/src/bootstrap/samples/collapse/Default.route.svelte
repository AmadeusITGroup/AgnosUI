<script lang="ts">
	import {Collapse} from '@agnos-ui/svelte-bootstrap/components/collapse';
	import type {CollapseApi} from '@agnos-ui/svelte-bootstrap/components/collapse';

	let collapse: {api: CollapseApi};
	let visible = $state(true);
</script>

<button class="btn btn-primary mb-2" type="button" aria-controls="auId-0" aria-expanded={visible} onclick={() => collapse.api.toggle()}
	>Toggle collapse</button
>
<Collapse bind:this={collapse} onVisibleChange={(newValue) => (visible = newValue)} onHidden={() => console.log('Hidden')} id={'auId-0'}
	><div class="card card-body">Visible content</div></Collapse
>
