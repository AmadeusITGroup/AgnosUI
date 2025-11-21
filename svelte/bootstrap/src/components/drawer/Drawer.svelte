<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {DrawerApi, DrawerContext, DrawerProps} from './drawer.gen';
	import {createDrawer} from './drawer.gen';
	import DrawerDefaultStructure from './DrawerDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<DrawerProps> = $props();

	const widget = callWidgetFactory(createDrawer, {
		get props() {
			return {...props, visible};
		},
		defaultConfig: {structure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	const {
		directives: {backdropDirective, backdropPortalDirective, drawerDirective, drawerPortalDirective, containerDirective, splitterDirective},
		state,
	} = widget;

	export const api: DrawerApi = widget.api;
</script>

{#snippet structure(props: DrawerContext)}
	<DrawerDefaultStructure {...props} />
{/snippet}

{#if !state.hidden}
	<div use:drawerPortalDirective use:drawerDirective>
		<div use:containerDirective>
			<Slot content={state.structure} props={widget} />
		</div>
		{#if state.resizable}
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div use:splitterDirective tabindex="0"></div>
		{/if}
	</div>
{/if}
{#if !state.backdropHidden}
	<div use:backdropPortalDirective use:backdropDirective></div>
{/if}
