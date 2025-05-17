<script lang="ts" generics="Data">
	import type {ModalWidget, ModalProps, ModalApi, ModalContext} from './modal.gen';
	import {createModal} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ModalProps<Data>> = $props();

	const widget = callWidgetFactory<ModalWidget<Data>>(createModal, {
		get props() {
			return {...props, visible};
		},
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
	export const api: ModalApi<Data> = widget.api;

	const {
		attachments: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state,
	} = widget;
</script>

{#snippet structure(props: ModalContext<Data>)}
	<ModalDefaultStructure {...props} />
{/snippet}
{#snippet header(props: ModalContext<Data>)}
	<ModalDefaultHeader {...props} />
{/snippet}

{#if !state.backdropHidden}
	<div class="modal-backdrop" {@attach backdropPortalDirective()} {@attach backdropDirective()}></div>
{/if}

{#if !state.hidden}
	<div class="modal d-block" {@attach modalPortalDirective()} {@attach modalDirective()}>
		<div class="modal-dialog {state.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot content={state.structure} props={widget} />
			</div>
		</div>
	</div>
{/if}
