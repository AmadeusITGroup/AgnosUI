<script lang="ts">
	import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast.gen';
	import {callWidgetFactory} from '../../config';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ToastProps> = $props();

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		props: {...props, visible},
		defaultConfig: {structure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ToastApi = widget.api;

	const {
		stores: {structure$, hidden$, header$, dismissible$},
		directives: {transitionDirective, autoHideDirective, bodyDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet structure(props: ToastContext)}
	<ToastDefaultStructure {...props} />
{/snippet}

{#if !$hidden$}
	<div class="toast" class:toast-dismissible={$dismissible$} class:d-flex={!$header$} use:transitionDirective use:autoHideDirective use:bodyDirective>
		<Slot content={$structure$} props={slotContext} />
	</div>
{/if}
