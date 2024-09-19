<script lang="ts">
	import type {AlertContext} from './alert.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: AlertContext = $props();
	let slotContext = $derived({widget, state});
</script>

<div class="alert-body">
	<Slot content={state.children} props={slotContext} />
</div>
{#if state.dismissible}
	<button type="button" class="btn-close" onclick={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel}></button>
{/if}
