<script lang="ts">
	import Modal from './Modal.svelte';

	let visible = false;
</script>

<Modal bind:visible closeOnOutsideClick>
	<h3 class="font-bold text-lg">A simple modal</h3>
	<p class="py-4">Press ESC key, click on ✕ button or click outside the modal to close</p>
</Modal>
<button class="btn" aria-haspopup="dialog" on:click={() => (visible = true)}> Open modal </button>
