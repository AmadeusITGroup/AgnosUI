<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte-headless/components/modal';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	type Data = $$Generic; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ModalSlots<Data>['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ModalSlots<Data>; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};
</script>

{#if state.slotTitle}
	<div class="modal-header">
		<Slot slotContent={state.slotHeader} props={slotContext} let:component let:props>
			<slot slot="slot" name="header" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="footer" slot="footer" let:state let:widget {state} {widget} />
				<slot name="header" slot="header" let:state let:widget {state} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				<slot name="title" slot="title" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}

<div class="modal-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<slot slot="slot" let:props {...props} />
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<slot name="footer" slot="footer" let:state let:widget {state} {widget} />
			<slot name="header" slot="header" let:state let:widget {state} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			<slot name="title" slot="title" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
{#if state.slotFooter}
	<div class="modal-footer">
		<Slot slotContent={state.slotFooter} props={slotContext} let:component let:props>
			<slot slot="slot" name="footer" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="footer" slot="footer" let:state let:widget {state} {widget} />
				<slot name="header" slot="header" let:state let:widget {state} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				<slot name="title" slot="title" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
