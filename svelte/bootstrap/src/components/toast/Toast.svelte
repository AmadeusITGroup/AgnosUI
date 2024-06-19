<script lang="ts" context="module">
	import type {ToastApi, ToastProps, ToastSlots} from './toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast';
	import {callWidgetFactory} from '../../config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	const defaultConfig: Partial<ToastProps> = {
		structure: ToastDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<ToastProps>;
	type $$Slots = ToastSlots;

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export let visible: boolean | undefined = undefined;
	export const api: ToastApi = widget.api;

	const {
		stores: {structure$, hidden$, header$, dismissible$},
		directives: {transitionDirective, autoHideDirective, bodyDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

{#if !$hidden$}
	<div class="toast" class:toast-dismissible={$dismissible$} class:d-flex={!$header$} use:transitionDirective use:autoHideDirective use:bodyDirective>
		<Slot slotContent={$structure$} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
