<script lang="ts">
	import type {SliderSlotHandleContext, SliderSlots} from './slider';

	type $$Props = SliderSlotHandleContext;
	type $$Slots = SliderSlots;

	export let item: $$Props['item'];
	export let widget: $$Props['widget'];
</script>

<button use:widget.directives.handleDirective={{item}}> &nbsp; </button>
