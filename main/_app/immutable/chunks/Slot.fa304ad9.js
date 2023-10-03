const t=`<script lang="ts">
	import type {SlotContent, SlotSvelteComponent} from './slotTypes';
	import {isSvelteComponent} from './utils';
	import {useSvelteSlot} from './slotTypes';
	type Props = $$Generic<object>; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Slots = {
		default: {component: SlotSvelteComponent<Props>; props: Props};
		slot: {props: Props};
	};
	export let slotContent: SlotContent<Props> = null;
	export let props: Props;
<\/script>

{#if slotContent === useSvelteSlot}
	<slot name="slot" {props} />
{:else if typeof slotContent === 'string'}
	{slotContent}
{:else if slotContent && !isSvelteComponent(slotContent)}
	{slotContent(props)}
{:else if slotContent}
	<slot component={slotContent} {props} />
{/if}
`;export{t as default};
