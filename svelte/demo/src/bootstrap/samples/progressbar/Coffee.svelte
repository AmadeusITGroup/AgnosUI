<script lang="ts">
	import type {ProgressbarContext} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import '@agnos-ui/common/samples/progressbar/custom.scss';

	let {state}: ProgressbarContext = $props();
</script>

<div class="position-relative" style="height: 300px">
	<div class="cup">
		<div class="cup-fill-parent">
			<div class="cup-fill" style={`height: ${1.7 * state.percentage}px;`}>
				{#if state.percentage >= 50}
					<div class="bubble bubble-1"></div>
					<div class="bubble bubble-2"></div>
					<div class="bubble bubble-3"></div>
				{/if}
			</div>
		</div>
	</div>
</div>
