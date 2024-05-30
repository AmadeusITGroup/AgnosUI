<script lang="ts">
	import type {SliderApi, SliderProps} from './slider';
	import {createSlider} from './slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {callWidgetFactory} from '../../config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';

	let {values = $bindable(), ...props}: Partial<SliderProps> = $props();

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		props: {...props, values},
		defaultConfig: {slotStructure, slotHandle, slotLabel},
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});
	export const api: SliderApi = widget.api;

	const {
		stores: {slotStructure$},
		directives: {sliderDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, values}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet slotStructure(props)}
	<SliderDefaultStructure {...props} />
{/snippet}
{#snippet slotHandle(props)}
	<SliderDefaultHandle {...props} />
{/snippet}
{#snippet slotLabel({value})}
	{value}
{/snippet}

<div use:sliderDirective>
	<Slot content={$slotStructure$} props={slotContext} />
</div>
