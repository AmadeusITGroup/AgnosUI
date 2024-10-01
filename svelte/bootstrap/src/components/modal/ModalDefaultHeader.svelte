<script lang="ts" generics="Data">
	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: ModalContext<Data> = $props();
	let slotContext = $derived({widget, state});
</script>

<h5 class="modal-title">
	<Slot content={state.title} props={slotContext} />
</h5>
{#if state.closeButton}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="btn-close" use:widget.directives.closeButtonDirective></button>
{/if}
