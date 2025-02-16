const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, state, api, directives}: TreeSlotItemContext = $props();
<\/script>

<li use:directives.itemAttributesDirective={{item: item}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.itemAttributesDirective, {item: item}])}>
	<Slot content={state.itemContent} props={{item, state, api, directives}} />
	{#if state.expandedMap.get(item)}
		<ul role="group">
			{#each item.children as child, index (child.label + child.level + index)}
				<Slot content={state.item} props={{item: child, state, api, directives}} />
			{/each}
		</ul>
	{/if}
</li>
`;export{t as default};
