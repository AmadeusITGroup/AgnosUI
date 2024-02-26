const t=`<script lang="ts">
	import type {ToastSlots} from '@agnos-ui/svelte-headless/components/toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ToastSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ToastSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
<\/script>

{#if state.slotHeader}
	<div class="toast-header">
		<Slot slotContent={state.slotHeader} props={slotContext} let:component let:props>
			<slot slot="slot" name="header" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="header" slot="header" let:state let:widget {state} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
		{#if state.dismissible}
			<button type="button" class="btn-close me-0 ms-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<slot slot="slot" let:props {...props} />
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<slot name="header" slot="header" let:state let:widget {state} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible && !state.slotHeader}
	<button type="button" class="btn-close btn-close-white me-2 m-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
{/if}
`;export{t as default};
