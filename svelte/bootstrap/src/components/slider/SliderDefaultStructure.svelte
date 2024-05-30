<script lang="ts">
	import type {SliderContext} from './slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: SliderContext = $props();
	let slotContext = $derived({widget, state});
</script>

{#each state.progressDisplayOptions as option}
	<div use:widget.directives.progressDisplayDirective={{option}}></div>
{/each}
<div use:widget.directives.clickableAreaDirective></div>
{#if state.showMinMaxLabels}
	<div use:widget.directives.minLabelDirective>
		<Slot content={state.slotLabel} props={{value: state.min, ...slotContext}} />
	</div>
	<div use:widget.directives.maxLabelDirective>
		<Slot content={state.slotLabel} props={{value: state.max, ...slotContext}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:widget.directives.combinedHandleLabelDisplayDirective>
		{#if state.rtl}
			<Slot content={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} /> -
			<Slot content={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} />
		{:else}
			<Slot content={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} /> -
			<Slot content={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} />
		{/if}
	</div>
{/if}
{#each state.sortedHandles as item, i (item.id)}
	<Slot content={state.slotHandle} props={{item, ...slotContext}} />
	{#if state.showValueLabels && !state.combinedLabelDisplay}
		<div use:widget.directives.handleLabelDisplayDirective={{index: i}}>
			<Slot content={state.slotLabel} props={{value: state.values[i], ...slotContext}} />
		</div>
	{/if}
{/each}
