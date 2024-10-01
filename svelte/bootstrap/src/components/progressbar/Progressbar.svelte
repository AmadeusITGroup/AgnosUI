<script lang="ts">
	import {createProgressbar, type ProgressbarContext, type ProgressbarProps} from './progressbar.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';

	let props: Partial<ProgressbarProps> = $props();

	const widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		props,
		defaultConfig: {
			structure,
		},
	});
	const {
		stores: {structure$, className$},
		state$,
		directives: {ariaDirective},
	} = widget;

	$effect(() => widget.patchChangedProps({...props}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet structure(props: ProgressbarContext)}
	<ProgressbarDefaultStructure {...props} />
{/snippet}

<div use:ariaDirective class={$className$ || undefined}>
	<Slot content={$structure$} props={slotContext} />
</div>
