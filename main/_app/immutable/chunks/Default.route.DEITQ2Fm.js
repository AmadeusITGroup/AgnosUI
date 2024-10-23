const t=`<script lang="ts">
	import {Collapse} from '@agnos-ui/svelte-bootstrap/components/collapse';

	let collapse: Collapse;
<\/script>

<p class="d-inline-flex gap-1">
	<button class="btn btn-primary" type="button" onclick={() => collapse.api.open()}>Open collapse</button>
	<button class="btn btn-primary" type="button" onclick={() => collapse.api.close()}>Close collapse</button>
	<button class="btn btn-primary" type="button" onclick={() => collapse.api.toggle()}>Toggle collapse</button>
</p>
<Collapse bind:this={collapse} onHidden={() => console.log('Hidden')}><div class="card card-body">Visible content</div></Collapse>
`;export{t as default};
