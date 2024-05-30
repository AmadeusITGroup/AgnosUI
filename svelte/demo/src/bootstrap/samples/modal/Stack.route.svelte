<script lang="ts">
	import {openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import StackModal from './StackModal.svelte';
</script>

{#snippet children(props)}
	<StackModal {...props} />
{/snippet}

<button class="btn btn-primary" onclick={() => openModal({slotTitle: 'First modal', className: 'modal-sm', children})}>Launch demo modal</button>
