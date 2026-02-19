<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeContext} from './tree.gen';

	let widget: TreeContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
</script>

<ul role="tree" class="au-tree {state.className}" use:directives.navigationDirective>
	{#each state.normalizedNodes as item, index (item.label + item.level + index)}
		<Slot content={state.item} props={{item, ...widget}} />
	{/each}
</ul>
