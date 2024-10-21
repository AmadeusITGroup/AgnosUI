<script lang="ts">
	let {component}: {component: () => Promise<{default: any}>} = $props();
	let promise = $derived(component());
</script>

{#await promise then resolvedComponent}
	{@const ResolvedComponent = resolvedComponent.default}
	<ResolvedComponent />
{/await}
