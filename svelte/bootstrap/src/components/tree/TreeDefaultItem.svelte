<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, directives}: TreeSlotItemContext = $props();
</script>

<li use:directives.itemAttributesDirective={{item: item}}>
	<Slot content={state.itemContent} props={{item, state, api, directives}} />
	{#if state.expandedMap.get(item)}
		<ul role="group">
			{#each item.children as child, index (child.label + child.level + index)}
				<Slot content={state.item} props={{item: child, state, api, directives}} />
			{/each}
		</ul>
	{/if}
</li>
