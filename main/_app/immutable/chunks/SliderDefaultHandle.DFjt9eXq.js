const e=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
export let item;
export let widget;
<\/script>

<button use:widget.directives.handleDirective={{item}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.handleDirective, {item}])}> &nbsp; </button>
`;export{e as default};
