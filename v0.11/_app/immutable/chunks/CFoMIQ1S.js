const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CollapseProps, CollapseApi} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	const id = $props.id();
	let {children, visible = $bindable(), ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const {
		directives: {collapseDirective},
		api: collapseApi,
	} = callWidgetFactory(createCollapse, {
		get props() {
			return {...props, visible};
		},
		defaultConfig: {
			id,
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: CollapseApi = collapseApi;
<\/script>

<div use:collapseDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(collapseDirective)}>
	{@render children()}
</div>
`;export{t as default};
