const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderSlotHandleContext} from './slider.gen';

	let {item, directives}: SliderSlotHandleContext = $props();
<\/script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button use:directives.handleDirective={{item}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.handleDirective, {item}])}> &nbsp; </button>
`;export{e as default};
