<script lang="ts">
	import type {ModalContext} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type Data = $$Generic; // eslint-disable-line no-undef

	let {state, widget}: ModalContext<Data> = $props();
	let slotContext = $derived({widget, state});
</script>

<h5 class="modal-title">
	<Slot content={state.slotTitle} props={slotContext} />
</h5>
{#if state.closeButton}
	<button class="btn-close" use:widget.directives.closeButtonDirective></button>
{/if}
