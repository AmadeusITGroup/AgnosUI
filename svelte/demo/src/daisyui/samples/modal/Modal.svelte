<script lang="ts">
	import {createModal} from '@agnos-ui/svelte-headless/components/modal';
	import type {ModalProps} from '@agnos-ui/svelte-headless/components/modal';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton' | 'visible' | 'onVisibleChange'>>;

	export const {
		stores: {visible$, closeButton$},
		directives: {closeButtonDirective, dialogDirective},
		patchChangedProps,
		patch,
		api,
	} = callWidgetFactory({
		factory: createModal,
		widgetName: 'modal',
		$$props,
		defaultConfig: {closeButton: true},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export let visible: boolean | undefined = undefined;
	export let closeOnOutsideClick: boolean | undefined = undefined;

	$: patchChangedProps($$props);
</script>

<dialog class="modal modal-bottom sm:modal-middle" on:close={api.close} use:dialogDirective>
	<div class="modal-box">
		<slot />
		{#if $closeButton$}
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" use:closeButtonDirective> ✕ </button>
			</form>
		{/if}
	</div>
	{#if closeOnOutsideClick}
		<form method="dialog" class="modal-backdrop">
			<button on:click={api.close}>Close</button>
		</form>
	{/if}
</dialog>
