<script lang="ts">
	import type {Snippet} from 'svelte';

	let {component, children, ...restProps}: {component: () => Promise<any>; children: Snippet; [key: string]: any} = $props();
	let promise = $derived(component());
</script>

{#await promise}
	{@render children()}
{:then resolvedComponent}
	{@const ResolvedComponent = resolvedComponent.default}
	<ResolvedComponent {...restProps} />
{/await}
