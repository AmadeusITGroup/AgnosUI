<script lang="ts">
	import type {CollapseProps, CollapseApi} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	const id = $props.id();
	let {children, visible = $bindable(), ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const {
		directives: {collapseDirective},
		api: collapseApi,
	} = callWidgetFactory({
		factory: createCollapse,
		widgetName: 'collapse',
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
		enablePatchChanged: true,
	});
	export const api: CollapseApi = collapseApi;
</script>

<div use:collapseDirective>
	{@render children()}
</div>
