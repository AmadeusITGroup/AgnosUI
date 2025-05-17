<script lang="ts">
	import type {SliderContext} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: SliderContext = $props();
	let {state, attachments} = widget;
</script>

{#each state.progressDisplayOptions as option (option.id)}
	<div {@attach attachments.progressDisplayDirective({option})}></div>
{/each}
<div {@attach attachments.clickableAreaDirective()}></div>
{#if state.showMinMaxLabels}
	<div {@attach attachments.minLabelDirective()}>
		<Slot content={state.label} props={{value: state.min, ...widget}} />
	</div>
	<div {@attach attachments.maxLabelDirective()}>
		<Slot content={state.label} props={{value: state.max, ...widget}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div {@attach attachments.combinedHandleLabelDisplayDirective()}>
		{#if state.rtl}
			<Slot content={state.label} props={{value: state.sortedValues[1], ...widget}} /> -
			<Slot content={state.label} props={{value: state.sortedValues[0], ...widget}} />
		{:else}
			<Slot content={state.label} props={{value: state.sortedValues[0], ...widget}} /> -
			<Slot content={state.label} props={{value: state.sortedValues[1], ...widget}} />
		{/if}
	</div>
{/if}
{#each state.ticks as tick (tick.position)}
	<Slot content={state.tick} props={{tick, ...widget}} />
{/each}
{#each state.sortedHandles as item, i (item.id)}
	<Slot content={state.handle} props={{item, ...widget}} />
	{#if state.showValueLabels && !state.combinedLabelDisplay}
		<div {@attach attachments.handleLabelDisplayDirective({index: i})}>
			<Slot content={state.label} props={{value: state.values[i], ...widget}} />
		</div>
	{/if}
{/each}
