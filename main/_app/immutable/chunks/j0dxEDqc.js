const t=`<script lang="ts">
	import type {AlertContext} from './alert.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: AlertContext = $props();
	let state = widget.state;
<\/script>

<div class="alert-body">
	<Slot content={state.children} props={widget} />
</div>
{#if state.dismissible}
	<button type="button" class="btn-close" onclick={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel}></button>
{/if}
`;export{t as default};
