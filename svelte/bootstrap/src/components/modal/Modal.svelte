<script lang="ts" generics="Data">
	import type {ModalWidget, ModalProps, ModalApi, ModalContext} from './modal.gen';
	import {createModal} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ModalProps<Data>> = $props();

	const {
		widget: {
			state,
			directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
			api: modalApi,
		},
		slotContext,
	} = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {
			header,
			structure,
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ModalApi<Data> = modalApi;
</script>

{#snippet structure(props: ModalContext<Data>)}
	<ModalDefaultStructure {...props} />
{/snippet}
{#snippet header(props: ModalContext<Data>)}
	<ModalDefaultHeader {...props} />
{/snippet}

{#if !state.backdropHidden}
	<div class="modal-backdrop" use:backdropPortalDirective use:backdropDirective></div>
{/if}

{#if !state.hidden}
	<div class="modal d-block" use:modalPortalDirective use:modalDirective>
		<div class="modal-dialog {state.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot content={state.structure} props={slotContext} />
			</div>
		</div>
	</div>
{/if}
