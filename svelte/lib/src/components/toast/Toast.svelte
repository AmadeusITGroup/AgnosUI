<script lang="ts" context="module">
	import type {ToastProps as Props, ToastSlots as Slots} from '@agnos-ui/svelte-headless/components/toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from '@agnos-ui/svelte-headless/components/toast';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: ToastDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<Props>;
	type $$Slots = Slots;

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
	export const api = widget.api;

	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective, autoHideDirective, bodyDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

{#if !$hidden$}
	<div
		class="toast"
		class:toast-dismissible={$state$.dismissible}
		class:d-flex={!$state$.slotHeader}
		use:transitionDirective
		use:autoHideDirective
		use:bodyDirective
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
