<script lang="ts">
	import {openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import StackModal from './StackModal.svelte';
</script>

<button class="btn btn-primary" on:click={() => openModal({slotTitle: 'First modal', className: 'modal-sm', children: StackModal})}
	>Launch demo modal</button
>
