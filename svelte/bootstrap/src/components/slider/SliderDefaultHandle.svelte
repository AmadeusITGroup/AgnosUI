<script lang="ts">
	import type {SliderSlotHandleContext} from './slider.gen';

	let {item, directives}: SliderSlotHandleContext = $props();
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button use:directives.handleDirective={{item}}> &nbsp; </button>
