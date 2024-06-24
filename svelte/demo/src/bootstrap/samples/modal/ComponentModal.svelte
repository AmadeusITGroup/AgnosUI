<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte-bootstrap/components/modal';
	type $$Props = ModalSlots['default'];
	type $$Slots = ModalSlots;
	export let widget: $$Props['widget'];
	export let state: $$Props['state'];
</script>

<p>Hello, {state.contentData.name}!</p>
<button type="button" class="btn btn-outline-primary" on:click={() => widget.api.close()}>Close</button>
