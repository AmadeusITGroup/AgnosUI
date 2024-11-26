const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {TreeContext, TreeProps, TreeSlotItemContext} from './tree.gen';
	import {createTree} from './tree.gen';
	import TreeDefaultItemContent from './TreeDefaultItemContent.svelte';
	import TreeDefaultItem from './TreeDefaultItem.svelte';
	import TreeDefaultStructure from './TreeDefaultStructure.svelte';
	import TreeDefaultItemToggle from './TreeDefaultItemToggle.svelte';

	let props: Partial<TreeProps> = $props();

	const widget = callWidgetFactory({
		factory: createTree,
		widgetName: 'tree',
		props,
		enablePatchChanged: true,
		defaultConfig: {structure, item, itemContent, itemToggle},
	});
	const {state} = widget;
<\/script>

{#snippet structure(props: TreeContext)}
	<TreeDefaultStructure {...props} />
{/snippet}
{#snippet item(props: TreeSlotItemContext)}
	<TreeDefaultItem {...props} />
{/snippet}
{#snippet itemContent(props: TreeSlotItemContext)}
	<TreeDefaultItemContent {...props} />
{/snippet}
{#snippet itemToggle(props: TreeSlotItemContext)}
	<TreeDefaultItemToggle {...props} />
{/snippet}

<Slot content={state.structure} props={widget} />
`;export{t as default};
