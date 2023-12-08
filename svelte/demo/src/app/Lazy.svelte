<script lang="ts">
	export let component: () => Promise<{default: any}>;
	$: promise = component();
</script>

{#await promise}
	<slot />
{:then resolvedComponent}
	<svelte:component this={resolvedComponent.default} {...$$restProps} />
{:catch}
	<slot name="error" />
{/await}
