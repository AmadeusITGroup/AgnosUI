const t=`<script lang="ts" context="module">
	import {createModal, toSlotContextWidget} from '@agnos-ui/core';
	import Slot from '../slot/Slot.svelte';
	import type {WidgetPropsEvents, WidgetPropsProps} from '../utils';
	import {callWidgetFactory, createEventDispatcher} from '../utils';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';
	import type {ModalProps, ModalSlots} from './modal';

	const defaultConfig: Partial<ModalProps> = {
		slotStructure: ModalDefaultStructure,
		slotHeader: ModalDefaultHeader,
	};
<\/script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<ModalProps>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<ModalProps>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ModalSlots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let visible: boolean | undefined = undefined;

	const widget = callWidgetFactory(createModal, 'modal', $$slots, defaultConfig);
	export const api = widget.api;
	widget.patch({
		onShown: () => dispatch('shown'),
		onHidden: () => dispatch('hidden'),
		onBeforeClose: (event) => {
			const shouldContinue = dispatch('beforeClose', event, {
				cancelable: true,
			});
			if (!shouldContinue) {
				event.cancel = true;
			}
		},
		onVisibleChange: (event) => {
			visible = event;
			dispatch('visibleChange', event);
		},
	});

	const {
		stores: {backdropClass$, backdropHidden$, hidden$, modalClass$, slotStructure$},
		directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);

	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};
<\/script>

{#if !$backdropHidden$}
	<div class="modal-backdrop {$backdropClass$}" use:backdropPortalDirective use:backdropDirective />
{/if}

{#if !$hidden$}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal d-block {$modalClass$}" use:modalPortalDirective use:modalDirective on:click={widget.actions.modalClick}>
		<div class="modal-dialog">
			<div class="modal-content">
				<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
					<slot slot="slot" name="structure" let:props {...props} />
					<svelte:component this={component} {...props}>
						<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
						<slot name="footer" slot="footer" let:state let:widget {state} {widget} />
						<slot name="header" slot="header" let:state let:widget {state} {widget} />
						<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
						<slot name="title" slot="title" let:state let:widget {state} {widget} />
					</svelte:component>
				</Slot>
			</div>
		</div>
	</div>
{/if}
`;export{t as default};
