const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CollapseProps, CollapseApi} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	let {children, ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const {
		directives: {transitionDirective},
		api: collapseApi,
	} = callWidgetFactory({
		factory: createCollapse,
		widgetName: 'collapse',
		props,
		enablePatchChanged: true,
	});
	export const api: CollapseApi = collapseApi;
<\/script>

<div use:transitionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(transitionDirective)}>
	{@render children()}
</div>
`;export{t as default};
