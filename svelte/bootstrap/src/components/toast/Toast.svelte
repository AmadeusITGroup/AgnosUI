<script lang="ts">
	import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast.gen';
	import {callWidgetFactory} from '../../config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ToastProps> = $props();

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {structure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ToastApi = widget.api;

	const {
		state,
		directives: {transitionDirective, autoHideDirective, bodyDirective},
	} = widget;
</script>

{#snippet structure(props: ToastContext)}
	<ToastDefaultStructure {...props} />
{/snippet}

{#if !state.hidden}
	<div class={{'toast-dismissible': state.dismissible, 'd-flex': !state.header}} use:transitionDirective use:autoHideDirective use:bodyDirective>
		<Slot content={state.structure} props={widget} />
	</div>
{/if}
