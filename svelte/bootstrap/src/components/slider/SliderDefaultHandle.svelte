<script lang="ts">
	import type {SliderSlotHandleContext} from './slider.gen';

	let {item, widget}: SliderSlotHandleContext = $props();
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button use:widget.directives.handleDirective={{item}}> &nbsp; </button>
