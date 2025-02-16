const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, directives}: TreeSlotItemContext = $props();
<\/script>

<span class="au-tree-item">
	<Slot content={state.itemToggle} props={{item, state, api, directives}} />
	{item.label}
</span>
`;export{t as default};
