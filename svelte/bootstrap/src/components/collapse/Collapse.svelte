<script lang="ts">
	import type {CollapseProps, CollapseApi} from './collapse.gen';
	import {createCollapse} from './collapse.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	const id = $props.id();
	let {children, visible = $bindable(), ...props}: Partial<CollapseProps> & {children: Snippet} = $props();

	const {
		attachments: {collapseDirective},
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
</script>

<div {@attach collapseDirective()}>
	{@render children()}
</div>
