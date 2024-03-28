<script lang="ts">
	import type {SliderSlots} from '@agnos-ui/svelte-headless/components/slider';

	type $$Props = SliderSlots['handle'];
	type $$Slots = SliderSlots;

	export let item: $$Props['item'];
	export let widget: $$Props['widget'];
</script>

<button use:widget.directives.handleDirective={{item}}> &nbsp; </button>
