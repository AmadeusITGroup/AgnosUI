const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {DrawerContext} from './drawer.gen';

	let widget: DrawerContext = $props();
	let {state, directives} = widget;
<\/script>

<div class="au-drawer-header">
	<Slot content={state.header} props={widget} />
</div>
<div class="au-drawer-body">
	<Slot content={state.children} props={widget} />
</div>
{#if state.resizable}
	<div use:directives.splitterDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.splitterDirective)}></div>
{/if}
`;export{e as default};
