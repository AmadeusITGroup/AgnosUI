<script lang="ts" context="module">
	import type {AlertProps as Props, AlertSlots as Slots} from '@agnos-ui/svelte-headless/components/alert';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createAlert} from '@agnos-ui/svelte-headless/components/alert';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: AlertDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
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
		class="au-alert alert alert-{$state$.type} {$state$.className} {$state$.dismissible ? 'alert-dismissible' : ''}"
		role="alert"
		use:transitionDirective
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<slot slot="slot" name="structure" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
