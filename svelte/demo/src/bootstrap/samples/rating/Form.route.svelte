<script lang="ts">
	import {Rating} from '@agnos-ui/svelte/components/rating';

	let ctrl = {value: 0, valid: false, invalid: true, disabled: false};
	$: {
		const isValid = ctrl.value >= 1;
		const enabled = !ctrl.disabled;
		ctrl = Object.assign(ctrl, {valid: enabled && isValid, invalid: enabled && !isValid});
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="form-label" id="ratingLabel">Rating of your experience</label><br />
<Rating bind:rating={ctrl.value} disabled={ctrl.disabled} ariaLabelledBy="ratingLabel" />
<div id="form-msg" class="form-text small">
	{#if ctrl.valid}
		<div class="text-success">Thanks!</div>
	{/if}
	{#if ctrl.invalid}
		<div class="text-danger-emphasis">Please rate us</div>
	{/if}
</div>
<pre>Model: <span id="form-model"><b>{ctrl.value}</b></span></pre>
<div class="d-flex flex-wrap gap-2">
	<button
		id="form-btn-enable"
		class="btn btn-sm btn-outline-{ctrl.disabled ? 'danger' : 'success'}"
		on:click={() => (ctrl.disabled = !ctrl.disabled)}
	>
		{ctrl.disabled ? 'control disabled' : ' control enabled'}
	</button>
	<button id="form-btn-clear" class="btn btn-sm btn-outline-primary" on:click={() => (ctrl.value = 0)}>Clear</button>
</div>
