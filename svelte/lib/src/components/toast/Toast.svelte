<script lang="ts">
	import {createToast, type ToastProps, type ToastSlots} from '@agnos-ui/svelte-headless/components/toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	type $$Props = Partial<ToastProps>;
	type $$Slots = ToastSlots;

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		$$slots,
		$$props,
		defaultConfig: {
			slotStructure: ToastDefaultStructure,
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export let visible: boolean | undefined = undefined;
	export const api = widget.api;

	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective, autoHideDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

{#if !$hidden$}
	<div
		class="au-toast toast {$state$.className}"
		class:toast-dismissible={$state$.dismissible}
		class:d-flex={!$state$.slotHeader}
		role="alert"
		aria-atomic="true"
		use:transitionDirective
		use:autoHideDirective
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
