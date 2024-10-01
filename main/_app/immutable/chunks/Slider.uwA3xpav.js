const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderContext, SliderProps, SliderSlotHandleContext, SliderSlotLabelContext} from './slider.gen';
	import {createSlider} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';

	let {values = $bindable(), ...props}: Partial<SliderProps> = $props();

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		props: {...props, values},
		defaultConfig: {structure, handle, label},
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});

	const {
		stores: {structure$},
		directives: {sliderDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, values}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
<\/script>

{#snippet structure(props: SliderContext)}
	<SliderDefaultStructure {...props} />
{/snippet}
{#snippet handle(props: SliderSlotHandleContext)}
	<SliderDefaultHandle {...props} />
{/snippet}
{#snippet label({value}: SliderSlotLabelContext)}
	{value}
{/snippet}

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(sliderDirective)}>
	<Slot content={$structure$} props={slotContext} />
</div>
`;export{t as default};
