const t=`<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte/components/modal';
	type ModalContent = {name: string};
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ModalSlots<ModalContent>['default']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ModalSlots<ModalContent>; // eslint-disable-line @typescript-eslint/no-unused-vars
	export let widget: $$Props['widget'];
	export let state: $$Props['state'];
<\/script>

<p>Hello, {state.contentData.name}!</p>
<button type="button" class="btn btn-outline-primary" on:click={() => widget.api.close()}>Close</button>
`;export{t as default};
