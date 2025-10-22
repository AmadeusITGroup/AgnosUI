<script lang="ts">
	import {Modal, modalCloseButtonClick, modalOutsideClick, modalCloseEscape} from '@agnos-ui/svelte-bootstrap/components/modal';

	let modal: Modal<unknown>;
	let message = $state('');
	let fullscreen = $state(false);
</script>

<Modal bind:this={modal} title="Save changes" {fullscreen}>
	Do you want to save your changes?
	{#snippet footer()}
		<button type="button" class="btn btn-outline-primary" onclick={() => modal.api.close(true)}>Yes</button>
		<button type="button" class="btn btn-outline-danger" onclick={() => modal.api.close(false)}>No</button>
	{/snippet}
</Modal>
<button
	type="button"
	class="btn btn-primary"
	onclick={async () => {
		message = '';
		const result = await modal.api.open();
		switch (result) {
			case modalCloseButtonClick:
				message = 'You clicked on the close button.';
				break;
			case modalOutsideClick:
				message = 'You clicked outside the modal.';
				break;
			case modalCloseEscape:
				message = 'You pressed the Escape key.';
				break;
			default:
				message = `You answered the question with "${result ? 'Yes' : 'No'}".`;
		}
	}}>Launch demo modal</button
>
<div class="form-check form-switch mt-3">
	<input class="form-check-input" type="checkbox" role="switch" id="fullscreen" bind:checked={fullscreen} />
	<label class="form-check-label" for="fullscreen">Fullscreen</label>
</div>
<hr />
<div data-testid="message">{message}</div>
