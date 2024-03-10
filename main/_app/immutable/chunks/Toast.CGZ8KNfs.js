const t=`<script lang="ts" context="module">
	import type {ToastProps as Props, ToastSlots as Slots} from '@agnos-ui/svelte-headless/components/toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from '@agnos-ui/svelte-headless/components/toast';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: ToastDefaultStructure,
	};
<\/script>

<script lang="ts">
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export let visible: boolean | undefined = undefined;
	export const api = widget.api;

	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective, autoHideDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);

	$: slotContext = {widget, state: $state$};
<\/script>

{#if !$hidden$}
	<div
		class="au-toast toast {$state$.className}"
		class:toast-dismissible={$state$.dismissible}
		class:d-flex={!$state$.slotHeader}
		role="alert"
		aria-atomic="true"
		use:transitionDirective
		use:autoHideDirective
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<slot slot="slot" name="structure" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="header" slot="header" let:state let:widget {state} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
`;export{t as default};
