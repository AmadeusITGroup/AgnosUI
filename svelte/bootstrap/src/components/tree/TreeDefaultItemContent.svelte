<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, directives}: TreeSlotItemContext = $props();
</script>

<span style="width:100%; height:3px;" use:directives.draggableDirective={{item: item, filler: true}}></span>
<span class="au-tree-item" use:directives.draggableDirective={{item: item}}>
	<Slot content={state.itemToggle} props={{item, state, api, directives}} />
	{item.label}
</span>
