<script lang="ts">
	import {openModal} from '@agnos-ui/svelte';
	import ComponentModal from './ComponentModal.svelte';
	import type {ModalContent} from './modal-content';
	const launch = () => openModal<ModalContent>({slotTitle: 'Hi there!', slotDefault: ComponentModal, contentData: {name: 'World'}});
</script>

<button type="button" class="btn btn-primary" on:click={() => launch()}>Launch demo modal</button>
