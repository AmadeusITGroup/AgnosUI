<script lang="ts">
	import InnerComponent from './InnerComponent.svelte';

	let showComponent = true;
</script>

<h2>Transition example</h2>
<div class="demo-transition mb-3">
	<button id="toggle-component" class="btn btn-outline-secondary" on:click={() => (showComponent = !showComponent)}>Toggle component</button>
	{#if showComponent}
		<InnerComponent />
	{/if}
</div>
