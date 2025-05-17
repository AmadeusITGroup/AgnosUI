<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, attachments}: TreeSlotItemContext = $props();
</script>

<span class="au-tree-item">
	<Slot content={state.itemToggle} props={{item, state, api, attachments}} />
	{item.label}
</span>
