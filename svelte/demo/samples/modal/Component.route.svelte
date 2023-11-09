<script lang="ts">
	import {openModal} from '@agnos-ui/svelte';
	import ComponentModal from './ComponentModal.svelte';
	const launch = () => openModal({slotTitle: 'Hi there!', slotDefault: ComponentModal, contentData: {name: 'World'}});
</script>

<button type="button" class="btn btn-primary" on:click={() => launch()}>Launch demo modal</button>
