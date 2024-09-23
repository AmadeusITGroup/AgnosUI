<script lang="ts">
	import {createProgressbar, type ProgressbarProps, type ProgressbarSlots} from './progressbar';
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
			structure: ProgressbarDefaultStructure,
		},
	});
	const {
		stores: {structure$, className$},
		state$,
		directives: {ariaDirective},
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

<div use:ariaDirective class={$className$ || undefined}>
	<Slot slotContent={$structure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
