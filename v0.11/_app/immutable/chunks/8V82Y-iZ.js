const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {TreeContext} from './tree.gen';

	let widget: TreeContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
<\/script>

<ul role="tree" use:__AgnosUISveltePreprocess__classDirective={"au-tree "+(state.className)} use:directives.navigationDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.navigationDirective, [__AgnosUISveltePreprocess__classDirective, "au-tree "+(state.className)])}>
	{#each state.normalizedNodes as item, index (item.label + item.level + index)}
		<Slot content={state.item} props={{item, ...widget}} />
	{/each}
</ul>
`;export{e as default};
