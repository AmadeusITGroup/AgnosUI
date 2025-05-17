<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, attachments}: TreeSlotItemContext = $props();
</script>

<li {@attach attachments.itemAttributesDirective({item: item})}>
	<Slot content={state.itemContent} props={{item, state, api, attachments}} />
	{#if state.expandedMap.get(item)}
		<ul role="group">
			{#each item.children as child, index (child.label + child.level + index)}
				<Slot content={state.item} props={{item: child, state, api, attachments}} />
			{/each}
		</ul>
	{/if}
</li>
