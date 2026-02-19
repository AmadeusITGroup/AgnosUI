<script lang="ts">
	import type {SliderContext} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: SliderContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
</script>

{#each state.progressDisplayOptions as option (option.id)}
	<div use:directives.progressDisplayDirective={{option}}></div>
{/each}
<div use:directives.clickableAreaDirective></div>
{#if state.showMinMaxLabels}
	<div use:directives.minLabelDirective>
		<Slot content={state.label} props={{value: state.min, ...widget}} />
	</div>
	<div use:directives.maxLabelDirective>
		<Slot content={state.label} props={{value: state.max, ...widget}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:directives.combinedHandleLabelDisplayDirective>
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
	{#if state.showValueLabels}
		<div use:directives.handleLabelDisplayDirective={{index: i}}>
			<Slot content={state.label} props={{value: state.values[i], ...widget}} />
		</div>
	{/if}
{/each}
