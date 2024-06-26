const t=`<script lang="ts">
	import {Modal, modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/svelte-bootstrap/components/modal';

	let modal: Modal<unknown>;
	let message = '';
	let fullscreen = false;
<\/script>

<Modal bind:this={modal} slotTitle="Save changes" {fullscreen}>
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
			message = 'You clicked on the close button.';
		} else if (result === modalOutsideClick) {
			message = 'You clicked outside the modal.';
		} else {
			message = \`You answered the question with "\${result ? 'Yes' : 'No'}".\`;
		}
	}}>Launch demo modal</button
>
<div class="form-check form-switch mt-3">
	<input class="form-check-input" type="checkbox" role="switch" id="fullscreen" bind:checked={fullscreen} />
	<label class="form-check-label" for="fullscreen">Fullscreen</label>
</div>
<hr />
<div data-testid="message">{message}</div>
`;export{t as default};
