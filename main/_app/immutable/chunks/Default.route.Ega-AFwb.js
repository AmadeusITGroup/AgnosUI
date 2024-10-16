const t=`<script lang="ts">
	import {Collapse} from '@agnos-ui/svelte-bootstrap/components/collapse';

	let collapse: Collapse;
<\/script>

<button class="btn btn-primary m-2" type="button" on:click={() => collapse.api.open()}>Open collapse</button>
<button class="btn btn-primary m-2" type="button" on:click={() => collapse.api.close()}>Close collapse</button>
<button class="btn btn-primary m-2" type="button" on:click={() => collapse.api.toggle()}>Toggle collapse</button>
<Collapse bind:this={collapse} onHidden={() => console.log('Hidden')}>Visible content</Collapse>
`;export{t as default};
