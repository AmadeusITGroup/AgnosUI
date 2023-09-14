<script lang="ts">
	import {getModulesContext} from '../../app';
	const modules$ = getModulesContext();
	export let name: string;
	$: component = $modules$[name];
</script>

{#if component}
	<svelte:component this={component} />
{/if}
