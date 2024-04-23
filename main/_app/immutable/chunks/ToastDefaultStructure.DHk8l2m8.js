const t=`<script lang="ts">
	import type {ToastContext, ToastSlots} from './toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = ToastContext;
	type $$Slots = ToastSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
<\/script>

{#if state.slotHeader}
	<div class="toast-header">
		<Slot slotContent={state.slotHeader} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
		{#if state.dismissible}
			<button class="btn-close me-0 ms-auto" use:widget.directives.closeButtonDirective />
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible && !state.slotHeader}
	<button class="btn-close btn-close-white me-2 m-auto" use:widget.directives.closeButtonDirective />
{/if}
`;export{t as default};
