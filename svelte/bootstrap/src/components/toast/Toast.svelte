<script lang="ts">
	import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast.gen';
	import {callWidgetFactory} from '../../config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ToastProps> = $props();

	const {
		widget: {
			directives: {transitionDirective, autoHideDirective, bodyDirective},
			state,
			api: toastApi,
		},
		slotContext,
	} = callWidgetFactory({
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
	export const api: ToastApi = toastApi;
</script>

{#snippet structure(props: ToastContext)}
	<ToastDefaultStructure {...props} />
{/snippet}

{#if !state.hidden}
	<div
		class="toast"
		class:toast-dismissible={state.dismissible}
		class:d-flex={!state.header}
		use:transitionDirective
		use:autoHideDirective
		use:bodyDirective
	>
		<Slot content={state.structure} props={slotContext} />
	</div>
{/if}
