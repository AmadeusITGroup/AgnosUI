const t=`<script lang="ts">
	import {BROWSER} from 'esm-env';
	import type {SlotContent, SlotSvelteComponent} from './types';
	import {useSvelteSlot} from './types';
	import {isSvelteComponent} from './utils/widget';
	type Props = $$Generic<object>; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Slots = {
		default: {component: SlotSvelteComponent<Props>; props: Props};
		slot: {props: Props};
	};
	export let slotContent: SlotContent<Props> = null;
	export let props: Props;

	// Workaround for a svelte issue that prevents code generation for SSR/slot
	// To be removed when https://github.com/sveltejs/svelte/issues/9137 is fixed
	if (!BROWSER) {
		// @ts-expect-error Setting the global variable \`props\`, which is not defined in the SSR Svelte-kit compilation
		globalThis['props'] = props;
	}
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
