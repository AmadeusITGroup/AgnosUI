<script lang="ts">
	import {type ModalContext, openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	const onclick = () => openModal({title: 'Hi there!', children, contentData: {name: 'World'}});
</script>

{#snippet children({state, api}: ModalContext<{name: string}>)}
	<p>Hello, {state.contentData.name}!</p>
	<button type="button" class="btn btn-outline-primary" onclick={() => api.close()}>Close</button>
{/snippet}

<button type="button" class="btn btn-primary" {onclick}>Launch demo modal</button>
