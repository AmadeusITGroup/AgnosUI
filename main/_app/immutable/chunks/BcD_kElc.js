const t=`<script lang="ts">
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
	{#if tick.selected}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style="width: var(--bs-slider-tick-secondary-size); height: var(--bs-slider-tick-primary-size)"
			fill="none"
		>
			<circle cx="50%" cy="50%" r="50%" fill={state.disabled ? 'var(--bs-slider-tick-disabled-color)' : 'var(--bs-slider-tick-selected-color)'} />
			<circle cx="50%" cy="50%" r="25%" fill="white" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style="width: var(--bs-slider-tick-secondary-size); height: var(--bs-slider-tick-primary-size)"
			fill="none"
		>
			<circle
				cx="50%"
				cy="50%"
				r="45%"
				fill="white"
				stroke={state.disabled ? 'var(--bs-slider-tick-disabled-color)' : 'var(--bs-slider-tick-neutral-color)'}
				stroke-width="1.5"
			/>
		</svg>
	{/if}
</span>
`;export{t as default};
