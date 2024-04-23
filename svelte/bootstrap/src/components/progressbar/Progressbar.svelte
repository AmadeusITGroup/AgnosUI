<script lang="ts">
	import {createProgressbar, type ProgressbarProps, type ProgressbarSlots, type ProgressbarApi} from './progressbar';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';

	type $$Props = Partial<ProgressbarProps>;
	type $$Slots = ProgressbarSlots;

	const widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		$$slots,
		$$props,
		defaultConfig: {
			slotStructure: ProgressbarDefaultStructure,
		},
		events: {},
	});
	const {
		stores: {slotStructure$, className$},
		state$,
		directives: {ariaDirective},
	} = widget;
	export const api: ProgressbarApi = widget.api;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

<div use:ariaDirective class={$className$ || undefined}>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
