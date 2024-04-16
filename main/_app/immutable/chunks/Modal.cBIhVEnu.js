const t=`<script lang="ts" context="module">
	import type {ModalWidget, ModalProps as Props, ModalSlots as Slots} from './modal';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {createModal} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	const defaultConfig: Partial<Props<any>> = {
		slotStructure: ModalDefaultStructure,
		slotHeader: ModalDefaultHeader,
	};
<\/script>

<script lang="ts">
	type Data = $$Generic; // eslint-disable-line no-undef
	type $$Props = Partial<Props<Data>>;
	type $$Slots = Slots<Data>;

	export let visible: boolean | undefined = undefined;

	const widget = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api = widget.api;

	const {
		stores: {backdropHidden$, hidden$, slotStructure$},
		directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};
<\/script>

{#if !$backdropHidden$}
	<div class="modal-backdrop" use:backdropPortalDirective use:backdropDirective />
{/if}

{#if !$hidden$}
	<div class="modal d-block" use:modalPortalDirective use:modalDirective>
		<div class="modal-dialog">
			<div class="modal-content">
				<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
					</svelte:component>
				</Slot>
			</div>
		</div>
	</div>
{/if}
`;export{t as default};
