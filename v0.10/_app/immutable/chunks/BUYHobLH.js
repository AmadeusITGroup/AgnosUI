const t=`<script lang="ts">
	import {createModal} from '@agnos-ui/svelte-headless/components/modal';
	import type {DaisyModalProps} from './modal';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {children, closeOnOutsideClick, visible = $bindable(), ...props}: DaisyModalProps = $props();

	const {
		state,
		directives: {closeButtonDirective, dialogDirective},
		api: modalApi,
	} = callWidgetFactory(createModal, {
		get props() {
			return {visible, closeOnOutsideClick, ...props};
		},
		defaultConfig: {closeButton: true},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api = modalApi;
<\/script>

<dialog class="modal modal-bottom sm:modal-middle" onclose={api.close} use:dialogDirective>
	<div class="modal-box">
		{@render children()}
		{#if state.closeButton}
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" use:closeButtonDirective> ✕ </button>
		{/if}
	</div>
	{#if closeOnOutsideClick}
		<div class="modal-backdrop">
			<button type="button" onclick={api.close}>Close</button>
		</div>
	{/if}
</dialog>
`;export{t as default};
