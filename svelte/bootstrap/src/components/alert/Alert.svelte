<script lang="ts" context="module">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createAlert, type AlertProps as Props, type AlertSlots as Slots} from './alert';
	import {callWidgetFactory} from '../../config';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: AlertDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<Props>;
	type $$Slots = Slots;

	const widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
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
		directives: {transitionDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

{#if !$hidden$}
	<div
		role="alert"
		class="au-alert alert alert-{$state$.type} {$state$.className} {$state$.dismissible ? 'alert-dismissible' : ''}"
		use:transitionDirective
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
