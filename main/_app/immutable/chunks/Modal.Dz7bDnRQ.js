const t=`<script lang="ts" context="module">
	import type {ModalWidget, ModalProps as Props, ModalSlots as Slots} from '@agnos-ui/svelte-headless/components/modal';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {createModal} from '@agnos-ui/svelte-headless/components/modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
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
		stores: {backdropClass$, backdropHidden$, hidden$, className$, slotStructure$},
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
	<div class="modal d-block {$className$}" use:modalPortalDirective use:modalDirective on:click={widget.actions.modalClick}>
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
