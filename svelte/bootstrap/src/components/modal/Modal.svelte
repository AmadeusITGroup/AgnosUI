<script lang="ts">
	import type {ModalWidget, ModalProps, ModalApi} from './modal';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {createModal} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	type Data = $$Generic; // eslint-disable-line no-undef

	let {visible = $bindable(), ...props}: Partial<ModalProps<Data>> = $props();

	const widget = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		props: {...props, visible},
		defaultConfig: {
			slotHeader,
			slotStructure,
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ModalApi<Data> = widget.api;

	const {
		stores: {backdropHidden$, hidden$, slotStructure$},
		directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet slotStructure(props)}
	<ModalDefaultStructure {...props} />
{/snippet}
{#snippet slotHeader(props)}
	<ModalDefaultHeader {...props} />
{/snippet}

{#if !$backdropHidden$}
	<div class="modal-backdrop" use:backdropPortalDirective use:backdropDirective></div>
{/if}

{#if !$hidden$}
	<div class="modal d-block" use:modalPortalDirective use:modalDirective>
		<div class="modal-dialog {$state$.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot content={$slotStructure$} props={slotContext} />
			</div>
		</div>
	</div>
{/if}
