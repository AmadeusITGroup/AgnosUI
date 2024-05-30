<script lang="ts">
	import type {SliderSlotHandleContext} from './slider';

	let {item, widget}: SliderSlotHandleContext = $props();
</script>

<button use:widget.directives.handleDirective={{item}}> &nbsp; </button>
