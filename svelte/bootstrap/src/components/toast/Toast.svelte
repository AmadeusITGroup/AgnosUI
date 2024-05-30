<script lang="ts">
	import type {ToastApi, ToastProps} from './toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast';
	import {callWidgetFactory} from '../../config';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ToastProps> = $props();

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		props: {...props, visible},
		defaultConfig: {slotStructure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ToastApi = widget.api;

	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective, autoHideDirective, bodyDirective},
		state$: wState,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $wState});
</script>

{#snippet slotStructure(props)}
	<ToastDefaultStructure {...props} />
{/snippet}

{#if !$hidden$}
	<div
		class="toast"
		class:toast-dismissible={$wState.dismissible}
		class:d-flex={!$wState.slotHeader}
		use:transitionDirective
		use:autoHideDirective
		use:bodyDirective
	>
		<Slot content={$slotStructure$} props={slotContext} />
	</div>
{/if}
