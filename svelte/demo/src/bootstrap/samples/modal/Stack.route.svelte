<script lang="ts">
	import {type ModalContext, openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import StackModal from './StackModal.svelte';
</script>

{#snippet children(props: ModalContext<void>)}
	<StackModal {...props} />
{/snippet}

<button class="btn btn-primary" onclick={() => openModal({title: 'First modal', className: 'modal-sm', children})}>Launch demo modal</button>
