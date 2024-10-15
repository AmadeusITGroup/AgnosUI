<script lang="ts" generics="Data">
	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, directives, ...restProps}: ModalContext<Data> = $props();
	let slotContext = $derived({state, directives, ...restProps});
</script>

<h5 class="modal-title">
	<Slot content={state.title} props={slotContext} />
</h5>
{#if state.closeButton}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="btn-close" use:directives.closeButtonDirective></button>
{/if}
