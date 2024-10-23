<script lang="ts">
	import {activeElement$, createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	import {untrack} from 'svelte';
	import {fromStore} from 'svelte/store';

	const {hasFocus$, directive} = createHasFocus();
	const hasFocus = fromStore(hasFocus$);
	const activeElement = fromStore(activeElement$);

	let activeElements: {tagName: string | undefined; id: string | undefined}[] = $state([]);
	$effect(() => {
		activeElement.current;
		untrack(() => activeElements.push({tagName: activeElement.current?.tagName.toLowerCase(), id: activeElement.current?.id || undefined}));
	});
</script>

<div class="demo-focustrack">
	<div use:directive class="my-2 p-2 border">
		<h5>Container</h5>
		<input class="form-control" type="text" placeholder="Focusable input" id="focusableInput" /><br />
		<input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
	</div>
	<input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled /><br />
	<div class="form-check mb-2">
		<input class="form-check-input" type="checkbox" id="containerHasFocus" checked={hasFocus.current} disabled />
		<label class="form-check-label" for="containerHasFocus">Focus in container</label>
	</div>
	<div class="d-flex justify-content-between">
		<div>Active element history:</div>
		<button class="btn btn-sm btn-primary" onclick={() => (activeElements = [])}>Clear</button>
	</div>
	<div class="card my-2">
		<div class="card-body">
			<ul class="mb-0">
				{#each activeElements as { tagName, id }}
					<li>
						<strong>{tagName}</strong>
						{#if id}with id <strong>{id}</strong>{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
