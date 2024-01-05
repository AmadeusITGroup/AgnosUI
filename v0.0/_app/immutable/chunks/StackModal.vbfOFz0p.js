const t=`<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte/components/modal';
	import {openModal} from '@agnos-ui/svelte/components/modal';
	import Self from './StackModal.svelte';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ModalSlots<void>['default']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ModalSlots<void>; // eslint-disable-line @typescript-eslint/no-unused-vars
	export let widget: $$Props['widget'];
	export let state: $$Props['state'];
<\/script>

This is a modal<br /><br />
<button class="btn btn-outline-primary m-1" on:click={() => openModal({slotTitle: 'Other modal', slotDefault: Self, container: state.modalElement})}>
	Launch other modal</button
><br />
<button class="btn btn-outline-secondary m-1" on:click={() => widget.api.patch({backdrop: true})}>Enable backdrop</button><button
	class="btn btn-outline-secondary m-1"
	on:click={() => widget.api.patch({backdrop: false})}>Disable backdrop</button
><br />
<button class="btn btn-outline-secondary m-1" on:click={() => widget.api.close()}>Close</button>
`;export{t as default};
