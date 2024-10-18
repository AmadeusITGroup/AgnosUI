<script lang="ts">
	import '@agnos-ui/common/samples/slider/custom.scss';
	import type {SliderContext} from '@agnos-ui/svelte-bootstrap/components/slider';

	let {state, directives}: SliderContext = $props();
</script>

<div class="position-relative cup-container">
	<div class="cup">
		<div class="cup-fill-parent">
			<div class="cup-fill" style={`height: ${state.progressDisplayOptions[0].height}%;`}>
				{#if state.progressDisplayOptions[0].height >= 50}
					<div class="bubble bubble-1"></div>
					<div class="bubble bubble-2"></div>
					<div class="bubble bubble-3"></div>
				{/if}
			</div>
		</div>
	</div>
</div>
<button class="coffee-indicator" use:directives.handleDirective={{item: state.sortedHandles[0]}}>
	{'' + state.sortedHandles[0].value}
</button>
