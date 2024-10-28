<script lang="ts">
	import type {CollapseProps, CollapseApi, CollapseState} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	let {children, id, ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const {
		directives: {transitionDirective},
		api: collapseApi,
		state: collapseState,
	} = callWidgetFactory({
		factory: createCollapse,
		widgetName: 'collapse',
		props: {
			...props,
			id,
		},
		enablePatchChanged: true,
	});
	export const api: CollapseApi = collapseApi;
	export const state: CollapseState = collapseState;
</script>

<div use:transitionDirective {id}>
	{@render children()}
</div>
