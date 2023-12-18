<script lang="ts">
	import {activeElement$, createHasFocus} from '@agnos-ui/svelte/services/focustrack';

	const {hasFocus$, directive} = createHasFocus();

	let activeElements: {tagName: string | undefined; id: string | undefined}[] = [];
	$: activeElements = [...activeElements, {tagName: $activeElement$?.tagName.toLowerCase(), id: $activeElement$?.id || undefined}];
</script>

<div class="demo-focustrack">
	<div use:directive class="my-2 p-2 border">
		<h5>Container</h5>
		<input class="form-control" type="text" placeholder="Focusable input" id="focusableInput" /><br />
		<input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
	</div>
	<input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled /><br />
	<div class="form-check mb-2">
		<input class="form-check-input" type="checkbox" id="containerHasFocus" checked={$hasFocus$} disabled />
		<label class="form-check-label" for="containerHasFocus">Focus in container</label>
	</div>
	<label for="activeElement" class="form-label">Active element history:</label>
	<textarea class="form-control mb-2" id="activeElementHistory" readonly>{JSON.stringify(activeElements)}</textarea>
	<button class="btn btn-primary" on:click={() => (activeElements = [])}>Clear</button>
</div>
