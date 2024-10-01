const t=`<script lang="ts">
	import {createModal} from '@agnos-ui/svelte-headless/components/modal';
	import type {DaisyModalProps} from './modal';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {children, closeOnOutsideClick, visible = $bindable(), ...props}: DaisyModalProps = $props();

	const widget = callWidgetFactory({
		factory: createModal,
		widgetName: 'modal',
		props: {visible, closeOnOutsideClick, ...props},
		defaultConfig: {closeButton: true},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api = widget.api;
	const {
		stores: {closeButton$},
		directives: {closeButtonDirective, dialogDirective},
		patchChangedProps,
	} = widget;

	$effect(() => patchChangedProps({visible, closeOnOutsideClick, ...props}));
<\/script>

<dialog class="modal modal-bottom sm:modal-middle" onclose={api.close} use:dialogDirective>
	<div class="modal-box">
		{@render children()}
		{#if $closeButton$}
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
`;export{t as default};
