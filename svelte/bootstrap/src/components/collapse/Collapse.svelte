<script lang="ts">
	import type {CollapseProps, CollapseApi} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	let {children, ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const widget = callWidgetFactory({
		factory: createCollapse,
		widgetName: 'collapse',
		props,
	});
	export const api: CollapseApi = widget.api;

	const {
		directives: {transitionDirective},
	} = widget;

	$effect(() => widget.patchChangedProps({...props}));
</script>

<div use:transitionDirective>
	{@render children()}
</div>
