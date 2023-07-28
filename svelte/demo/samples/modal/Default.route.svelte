<script lang="ts">
	import {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/core';
	import {Modal} from '@agnos-ui/svelte';

	let modal: Modal;
	let message = '';
</script>

<Modal bind:this={modal} slotTitle="Save changes">
	Do you want to save your changes?
	<svelte:fragment slot="footer">
		<button type="button" class="btn btn-outline-primary" on:click={() => modal.api.close(true)}>Yes</button>
		<button type="button" class="btn btn-outline-danger" on:click={() => modal.api.close(false)}>No</button>
	</svelte:fragment>
</Modal>
<button
	type="button"
	class="btn btn-primary"
	on:click={async () => {
		message = '';
		const result = await modal.api.open();
		if (result === modalCloseButtonClick) {
			message = 'You clicked on the close button';
		} else if (result === modalOutsideClick) {
			message = 'You clicked outside the modal';
		} else {
			message = `You answered the question with "${result ? 'Yes' : 'No'}"`;
		}
	}}>Launch demo modal</button
>
<div class="mt-3" data-testid="message">{message}</div>
