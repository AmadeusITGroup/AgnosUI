<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {ProgressbarContext} from './progressbar.gen';

	let {state, api, attachments}: ProgressbarContext = $props();
</script>

<div class="progress" style:height={state.height}>
	<div
		class={[
			'progress-bar',
			state.type ? `text-bg-${state.type}` : '',
			{'progress-bar-striped': state.striped, 'progress-bar-animated': state.animated},
		]}
		style:width={`${state.percentage}%`}
	>
		<Slot content={state.children} props={{state, api, attachments}} />
	</div>
</div>
