<script lang="ts" context="module">
	import {createAlert} from '@agnos-ui/core';

	import Slot from '../slot/Slot.svelte';
	import type {WidgetPropsEvents, WidgetPropsProps} from '../utils';
	import {callWidgetFactory, createEventDispatcher} from '../utils';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';
	import type {AlertProps, AlertSlots} from './alert';

	const defaultConfig: Partial<AlertProps> = {
		slotStructure: AlertDefaultStructure,
	};
</script>

<script lang="ts">
	type $$props = WidgetPropsProps<AlertProps>;
	type $$Events = WidgetPropsEvents<AlertProps>;
	type $$Slots = AlertSlots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();
	export const widget = callWidgetFactory(createAlert, 'alert', $$slots, defaultConfig);
	export let visible: boolean | undefined = undefined;
	export const api = widget.api;

	widget.patch({
		onShown: () => dispatch('shown'),
		onHidden: () => dispatch('hidden'),
		onVisibleChange: (event) => {
			visible = event;
			dispatch('visibleChange', event);
		},
	});
	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);

	$: slotContext = {widget, state: $state$};
</script>

{#if !$hidden$}
	<div class="au-alert d-flex alert w-100 alert-{$state$.type}" role="alert" use:transitionDirective>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<slot slot="slot" name="structure" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
