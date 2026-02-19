const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderContext} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: SliderContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
<\/script>

{#each state.progressDisplayOptions as option (option.id)}
	<div use:directives.progressDisplayDirective={{option}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.progressDisplayDirective, {option}])}></div>
{/each}
<div use:directives.clickableAreaDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.clickableAreaDirective)}></div>
{#if state.showMinMaxLabels}
	<div use:directives.minLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.minLabelDirective)}>
		<Slot content={state.label} props={{value: state.min, ...widget}} />
	</div>
	<div use:directives.maxLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.maxLabelDirective)}>
		<Slot content={state.label} props={{value: state.max, ...widget}} />
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:directives.combinedHandleLabelDisplayDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.combinedHandleLabelDisplayDirective)}>
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
		<div use:directives.handleLabelDisplayDirective={{index: i}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.handleLabelDisplayDirective, {index: i}])}>
			<Slot content={state.label} props={{value: state.values[i], ...widget}} />
		</div>
	{/if}
{/each}
`;export{e as default};
