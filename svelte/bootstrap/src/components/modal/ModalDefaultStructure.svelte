<script lang="ts">
	import type {ModalContext} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type Data = $$Generic; // eslint-disable-line no-undef

	let {state, widget}: ModalContext<Data> = $props();
	let slotContext = $derived({widget, state});
</script>

{#if state.slotTitle}
	<div class="modal-header">
		<Slot content={state.slotHeader} props={slotContext} />
	</div>
{/if}

<div class="modal-body">
	<Slot content={state.children} props={slotContext} />
</div>
{#if state.slotFooter}
	<div class="modal-footer">
		<Slot content={state.slotFooter} props={slotContext} />
	</div>
{/if}
