<script lang="ts">
	import {Select, createWidgetsDefaultConfig} from '@agnos-ui/svelte';

	const items = ['Action 1', 'Action 2', 'Action 3', 'Other 1', 'Other 2', 'Other 3'];

	const widgetsConfig$ = createWidgetsDefaultConfig();
	const params = location.hash.split('?')[1];
	const url = new URL(params ? `?${params}` : '', location.href);
	let defaultFilterText = url.searchParams.get('filterText') ?? '';
	$: $widgetsConfig$.select = {filterText: defaultFilterText};

	let filterText: string | undefined;
</script>

<h2>Multiselect example</h2>
<div class="mb-3">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="form-label">Multiselect</label>
	<Select {items} bind:filterText />
</div>
<div class="demo-select-config">
	<strong>Default config</strong><br />
	<label>
		Default filterText:
		<input type="text" class="form-control" bind:value={defaultFilterText} />
	</label>
	<br />
	<button type="button" class="mt-3 btn btn-outline-secondary" on:click={() => (filterText = undefined)}> Reset widget filterText </button>
</div>
