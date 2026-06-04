const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {SliderSlotTickContext} from './slider.gen';

	let {tick, directives, state}: SliderSlotTickContext = $props();
<\/script>

{#if tick.displayLabel}
	<span use:directives.tickLabelDirective={{tick}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.tickLabelDirective, {tick}])}>
		{tick.value}
	</span>
{/if}
<span use:directives.tickDirective={{tick}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.tickDirective, {tick}])}>
	<svg xmlns="http://www.w3.org/2000/svg">
		<circle class="au-slider-tick-outer" class:au-slider-tick-disabled={state.disabled} class:au-slider-tick-selected={tick.selected} />
		{#if tick.selected}
			<circle class="au-slider-tick-inner au-slider-tick-selected" />
		{/if}
	</svg>
</span>
`;export{e as default};
