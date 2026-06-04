const t=`<script lang="ts" generics="Data">
	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: ModalContext<Data> = $props();
<\/script>

{#if widget.state.title}
	<div class="modal-header">
		<Slot content={widget.state.header} props={widget} />
	</div>
{/if}

<div class="modal-body">
	<Slot content={widget.state.children} props={widget} />
</div>
{#if widget.state.footer}
	<div class="modal-footer">
		<Slot content={widget.state.footer} props={widget} />
	</div>
{/if}
`;export{t as default};
