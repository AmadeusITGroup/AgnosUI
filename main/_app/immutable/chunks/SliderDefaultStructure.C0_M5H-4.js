const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderContext} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: SliderContext = $props();
	let slotContext = $derived({widget, state});
<\/script>

{#each state.progressDisplayOptions as option}
	<div use:widget.directives.progressDisplayDirective={{option}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.progressDisplayDirective, {option}])}></div>
{/each}
<div use:widget.directives.clickableAreaDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.clickableAreaDirective)}></div>
{#if state.showMinMaxLabels}
	<div use:widget.directives.minLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.minLabelDirective)}>
		<Slot content={state.label} props={{value: state.min, ...slotContext}} />
	</div>
	<div use:widget.directives.maxLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.maxLabelDirective)}>
		<Slot content={state.label} props={{value: state.max, ...slotContext}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:widget.directives.combinedHandleLabelDisplayDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.combinedHandleLabelDisplayDirective)}>
		{#if state.rtl}
			<Slot content={state.label} props={{value: state.sortedValues[1], ...slotContext}} /> -
			<Slot content={state.label} props={{value: state.sortedValues[0], ...slotContext}} />
		{:else}
			<Slot content={state.label} props={{value: state.sortedValues[0], ...slotContext}} /> -
			<Slot content={state.label} props={{value: state.sortedValues[1], ...slotContext}} />
		{/if}
	</div>
{/if}
{#each state.sortedHandles as item, i (item.id)}
	<Slot content={state.handle} props={{item, ...slotContext}} />
	{#if state.showValueLabels && !state.combinedLabelDisplay}
		<div use:widget.directives.handleLabelDisplayDirective={{index: i}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.handleLabelDisplayDirective, {index: i}])}>
			<Slot content={state.label} props={{value: state.values[i], ...slotContext}} />
		</div>
	{/if}
{/each}
`;export{e as default};
