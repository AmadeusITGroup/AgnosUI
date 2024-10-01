const t=`<script lang="ts" generics="Data">
	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: ModalContext<Data> = $props();
	let slotContext = $derived({widget, state});
<\/script>

{#if state.title}
	<div class="modal-header">
		<Slot content={state.header} props={slotContext} />
	</div>
{/if}

<div class="modal-body">
	<Slot content={state.children} props={slotContext} />
</div>
{#if state.footer}
	<div class="modal-footer">
		<Slot content={state.footer} props={slotContext} />
	</div>
{/if}
`;export{t as default};
