<script lang="ts">
	import type {SliderContext} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, directives, ...restProps}: SliderContext = $props();
	let slotContext = $derived({state, directives, ...restProps});
</script>

{#each state.progressDisplayOptions as option}
	<div use:directives.progressDisplayDirective={{option}}></div>
{/each}
<div use:directives.clickableAreaDirective></div>
{#if state.showMinMaxLabels}
	<div use:directives.minLabelDirective>
		<Slot content={state.label} props={{value: state.min, ...slotContext}} />
	</div>
	<div use:directives.maxLabelDirective>
		<Slot content={state.label} props={{value: state.max, ...slotContext}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:directives.combinedHandleLabelDisplayDirective>
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
		<div use:directives.handleLabelDisplayDirective={{index: i}}>
			<Slot content={state.label} props={{value: state.values[i], ...slotContext}} />
		</div>
	{/if}
{/each}
