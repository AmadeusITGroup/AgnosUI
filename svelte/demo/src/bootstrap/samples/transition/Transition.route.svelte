<script lang="ts">
	import InnerComponent from './InnerComponent.svelte';

	let showComponent = $state(true);
</script>

<div class="demo-transition mb-3">
	<button id="toggle-component" class="btn btn-outline-secondary" onclick={() => (showComponent = !showComponent)}>Toggle component</button>
	{#if showComponent}
		<InnerComponent />
	{/if}
</div>
