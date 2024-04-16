const t=`<script lang="ts">
	import type {ModalSlots} from './modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type Data = $$Generic; // eslint-disable-line no-undef
	type $$Props = ModalSlots<Data>['header'];
	type $$Slots = ModalSlots<Data>;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};
<\/script>

<h5 class="modal-title">
	<Slot slotContent={state.slotTitle} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="title" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</h5>
{#if state.closeButton}
	<button class="btn-close" use:widget.directives.closeButtonDirective />
{/if}
`;export{t as default};
