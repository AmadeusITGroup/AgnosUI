<script lang="ts">
	import {openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import ComponentModal from './ComponentModal.svelte';
	const launch = () => openModal({slotTitle: 'Hi there!', children, contentData: {name: 'World'}});
</script>

{#snippet children(props)}
	<ComponentModal {...props} />
{/snippet}

<button type="button" class="btn btn-primary" onclick={() => launch()}>Launch demo modal</button>
