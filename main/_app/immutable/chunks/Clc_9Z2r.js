const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {TreeSlotItemContext} from './tree.gen';

	let {item, directives}: TreeSlotItemContext = $props();
<\/script>

{#if item.children.length > 0}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button use:directives.itemToggleDirective={{item: item}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.itemToggleDirective, {item: item}])}>
		<span class="au-tree-expand-icon-svg"></span>
	</button>
{:else}
	<span class="au-tree-expand-icon-placeholder"></span>
{/if}
`;export{e as default};
