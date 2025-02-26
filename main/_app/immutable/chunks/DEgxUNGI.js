const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderContext, SliderProps, SliderSlotHandleContext, SliderSlotLabelContext, SliderSlotTickContext} from './slider.gen';
	import {createSlider} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';
	import SliderDefaultTick from './SliderDefaultTick.svelte';

	let {values = $bindable(), ...props}: Partial<SliderProps> = $props();

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		get props() {
			return {...props, values};
		},
		enablePatchChanged: true,
		defaultConfig: {structure, handle, tick, label},
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});
	const {
		directives: {sliderDirective},
		state,
	} = widget;
<\/script>

{#snippet structure(props: SliderContext)}
	<SliderDefaultStructure {...props} />
{/snippet}
{#snippet handle(props: SliderSlotHandleContext)}
	<SliderDefaultHandle {...props} />
{/snippet}
{#snippet tick(props: SliderSlotTickContext)}
	<SliderDefaultTick {...props} />
{/snippet}
{#snippet label({value}: SliderSlotLabelContext)}
	{value}
{/snippet}

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(sliderDirective)}>
	<Slot content={state.structure} props={widget} />
</div>
`;export{t as default};
