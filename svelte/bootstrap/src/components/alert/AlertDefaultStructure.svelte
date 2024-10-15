<script lang="ts">
	import type {AlertContext} from './alert.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, api, ...restProps}: AlertContext = $props();
	let slotContext = $derived({state, api, ...restProps});
</script>

<div class="alert-body">
	<Slot content={state.children} props={slotContext} />
</div>
{#if state.dismissible}
	<button type="button" class="btn-close" onclick={() => api.close()} aria-label={state.ariaCloseButtonLabel}></button>
{/if}
