<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	createWidgetsDefaultConfig().set({toast: {autoHide: false, dismissible: false}});

	let visible = $state(true);
</script>

<p class="mb-2">
	Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code>
</p>
<Toast className="text-bg-primary" header="I am header" autoHide={false} dismissible bind:visible>Simple primary toast</Toast>

<button class="btn btn-primary my-2" onclick={() => (visible = true)}>Reset</button>

<h3>Variations</h3>
<div class="row gy-2 gx-3">
	<div class="col-auto">
		<Toast className="text-bg-success">This is a success toast</Toast>
	</div>
	<div class="col-auto">
		<Toast className="text-bg-danger">This is an error toast</Toast>
	</div>
	<div class="col-auto">
		<Toast className="text-bg-info">This is an info toast</Toast>
	</div>
	<div class="col-auto">
		<Toast className="text-bg-warning">This is a warning toast</Toast>
	</div>
</div>
