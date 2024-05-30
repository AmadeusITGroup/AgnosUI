<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {ProgressbarContext} from './progressbar';

	let {state, widget}: ProgressbarContext = $props();
	let slotContext = $derived({widget, state});
</script>

<div class="progress" style:height={state.height}>
	<div
		class={`progress-bar ${state.type ? `text-bg-${state.type}` : ''}`}
		class:progress-bar-striped={state.striped}
		class:progress-bar-animated={state.animated}
		style:width={`${state.percentage}%`}
	>
		<Slot content={state.children} props={slotContext} />
	</div>
</div>
