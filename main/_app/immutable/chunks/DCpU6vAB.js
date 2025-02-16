const t=`<script lang="ts">
	import {createTree, type NormalizedTreeItem, type TreeProps} from '@agnos-ui/svelte-headless/components/tree';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {...props}: Partial<Pick<TreeProps, 'className' | 'nodes' | 'navSelector'>> = $props();

	const {
		state,
		directives: {navigationDirective, itemToggleDirective},
	} = callWidgetFactory({
		factory: createTree,
		widgetName: 'tree',
		props,
		enablePatchChanged: true,
		events: {},
	});
<\/script>

<ul role="tree" class="bg-base-200 rounded-lg menu w-[300px] {state.className}" use:navigationDirective>
	{#each state.normalizedNodes as item, index (item.label + item.level + index)}
		{@render treeItemSnippet(item)}
	{/each}
</ul>

{#snippet treeItemSnippet(treeItem: NormalizedTreeItem)}
	<!-- svelte-ignore a11y_role_has_required_aria_props -->
	<li role="treeitem">
		<span class="flex flex-wrap items-center" use:itemToggleDirective={{item: treeItem}}>
			<span class="me-1">
				{@render itemIconSnippet(treeItem)}
			</span>
			<span> {treeItem.label} </span>
			{#if treeItem.children.length > 0}
				<span class="ms-auto">
					<svg
						class="stroke-base-content transition transform delay-0 duration-300 [.au-tree-expand-icon.au-tree-expand-icon-expanded>span>&]:rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 10 10"><path d="M1 2 L5 7 L9 2" stroke-width="2" fill="none" /></svg
					>
				</span>
			{/if}
		</span>
		{#if state.expandedMap.get(treeItem)}
			<ul role="group">
				{#each treeItem.children as child, index (child.label + child.level + index)}
					{@render treeItemSnippet(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

{#snippet itemIconSnippet(treeItem: NormalizedTreeItem)}
	{#if treeItem.children.length > 0}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
			/>
		</svg>
	{:else if treeItem.label.includes('.pdf')}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			/>
		</svg>
	{:else if treeItem.label.includes('.png')}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
			/>
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			/>
		</svg>
	{/if}
{/snippet}
`;export{t as default};
