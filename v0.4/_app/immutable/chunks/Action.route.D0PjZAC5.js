const t=`<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';
	import ActionStructure from './ActionStructure.svelte';

	createWidgetsDefaultConfig().set({toast: {autoHide: false, dismissible: true, className: 'text-bg-success', structure: ActionStructure}});
	export let visible = true;

	function reset() {
		visible = true;
	}
<\/script>

<p>To put the action in the toast simply create custom contents.</p>
<p><strong>Note:</strong> When header is not present default display is <code>flex</code></p>
<div class="col-auto col-md-6">
	<Toast bind:visible>This is a toast with action</Toast>
</div>
<button class="btn btn-primary mt-2" on:click={() => reset()}>Reset</button>
`;export{t as default};
