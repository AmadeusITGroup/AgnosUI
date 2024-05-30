<script lang="ts">
	import {createProgressbar, type ProgressbarProps, type ProgressbarApi} from './progressbar';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';

	let {...props}: Partial<ProgressbarProps> = $props();

	const widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		props,
		defaultConfig: {
			slotStructure,
		},
		events: {},
	});
	const {
		stores: {slotStructure$, className$},
		state$,
		directives: {ariaDirective},
	} = widget;
	export const api: ProgressbarApi = widget.api;

	$effect(() => widget.patchChangedProps({...props}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet slotStructure(props)}
	<ProgressbarDefaultStructure {...props} />
{/snippet}

<div use:ariaDirective class={$className$ || undefined}>
	<Slot content={$slotStructure$} props={slotContext} />
</div>
