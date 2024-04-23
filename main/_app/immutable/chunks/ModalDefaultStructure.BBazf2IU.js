const t=`<script lang="ts">
	import type {ModalContext, ModalSlots} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type Data = $$Generic; // eslint-disable-line no-undef
	type $$Props = ModalContext<Data>;
	type $$Slots = ModalSlots<Data>;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};
<\/script>

{#if state.slotTitle}
	<div class="modal-header">
		<Slot slotContent={state.slotHeader} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}

<div class="modal-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.slotFooter}
	<div class="modal-footer">
		<Slot slotContent={state.slotFooter} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="footer" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
`;export{t as default};
