<script lang="ts">
	import '@agnos-ui/common/samples/slider/custom.scss';
	import type {SliderSlots} from '@agnos-ui/svelte-bootstrap/components/slider';
	type $$Props = SliderSlots['structure'];
	type $$Slots = SliderSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
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
<button class="coffee-indicator" use:widget.directives.handleDirective={{item: state.sortedHandles[0]}}>
	{'' + state.sortedHandles[0].value}
</button>
