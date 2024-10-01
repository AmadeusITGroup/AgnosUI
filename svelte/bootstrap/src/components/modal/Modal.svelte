<script lang="ts" generics="Data">
	import type {ModalWidget, ModalProps, ModalApi, ModalContext} from './modal.gen';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {createModal} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ModalProps<Data>> = $props();

	const widget = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		props: {...props, visible},
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
		stores: {backdropHidden$, hidden$, structure$},
		directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet structure(props: ModalContext<Data>)}
	<ModalDefaultStructure {...props} />
{/snippet}
{#snippet header(props: ModalContext<Data>)}
	<ModalDefaultHeader {...props} />
{/snippet}

{#if !$backdropHidden$}
	<div class="modal-backdrop" use:backdropPortalDirective use:backdropDirective></div>
{/if}

{#if !$hidden$}
	<div class="modal d-block" use:modalPortalDirective use:modalDirective>
		<div class="modal-dialog {$state$.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot content={$structure$} props={slotContext} />
			</div>
		</div>
	</div>
{/if}
