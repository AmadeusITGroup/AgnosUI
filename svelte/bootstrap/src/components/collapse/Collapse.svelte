<script lang="ts">
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
		get props() {
			return props;
		},
		enablePatchChanged: true,
	});
	export const api: CollapseApi = collapseApi;
</script>

<div use:transitionDirective>
	{@render children()}
</div>
