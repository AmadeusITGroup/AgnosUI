<script lang="ts" context="module">
	import type {ModalWidget, ModalProps as Props, ModalSlots as Slots, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {Slot, callWidgetFactory, createModal, toSlotContextWidget} from '@agnos-ui/svelte-headless';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	const defaultConfig: Partial<Props<any>> = {
		slotStructure: ModalDefaultStructure,
		slotHeader: ModalDefaultHeader,
	};
</script>

<script lang="ts">
	type Data = $$Generic; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props<Data>>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots<Data>; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let visible: boolean | undefined = undefined;

	const widget = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		$$slots,
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
</script>

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
