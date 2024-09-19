<script lang="ts">
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';

	let disabled = $state(false);
	let value = $state(0);
	let valueValid = $derived(value >= 1);
	let valid = $derived(!disabled && valueValid);
	let invalid = $derived(!disabled && !valueValid);
</script>

<div class="form-label" id="ratingLabel">Rating of your experience</div>
<br />
<Rating bind:rating={value} {disabled} ariaLabelledBy="ratingLabel" />
<div id="form-msg" class="form-text small">
	{#if valid}
		<div class="text-success">Thanks!</div>
	{/if}
	{#if invalid}
		<div class="text-danger-emphasis">Please rate us</div>
	{/if}
</div>
<pre>Model: <span id="form-model"><b>{value}</b></span></pre>
<div class="d-flex flex-wrap gap-2">
	<button id="form-btn-enable" class="btn btn-sm btn-outline-{disabled ? 'danger' : 'success'}" onclick={() => (disabled = !disabled)}>
		{disabled ? 'control disabled' : ' control enabled'}
	</button>
	<button id="form-btn-clear" class="btn btn-sm btn-outline-primary" onclick={() => (value = 0)}>Clear</button>
</div>
