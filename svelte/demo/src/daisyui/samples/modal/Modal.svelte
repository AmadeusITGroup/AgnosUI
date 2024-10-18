<script lang="ts">
	import {createModal} from '@agnos-ui/svelte-headless/components/modal';
	import type {DaisyModalProps} from './modal';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {children, closeOnOutsideClick, visible = $bindable(), ...props}: DaisyModalProps = $props();

	const {
		state,
		directives: {closeButtonDirective, dialogDirective},
		api: modalApi,
	} = callWidgetFactory({
		factory: createModal,
		widgetName: 'modal',
		get props() {
			return {visible, closeOnOutsideClick, ...props};
		},
		enablePatchChanged: true,
		defaultConfig: {closeButton: true},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api = modalApi;
</script>

<dialog class="modal modal-bottom sm:modal-middle" onclose={api.close} use:dialogDirective>
	<div class="modal-box">
		{@render children()}
		{#if state.closeButton}
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" use:closeButtonDirective> ✕ </button>
			</form>
		{/if}
	</div>
	{#if closeOnOutsideClick}
		<form method="dialog" class="modal-backdrop">
			<button onclick={api.close}>Close</button>
		</form>
	{/if}
</dialog>
