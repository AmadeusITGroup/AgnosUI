<script lang="ts">
	import {Alert, type AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {AlertStatus} from '@agnos-ui/common/samples/alert/alert-status.enum';

	let alert: ReturnType<typeof Alert>;
	let animatedOnInit = $state(true);
	let animated = $state(true);
	let dismissible = $state(true);
	let type: AlertProps['type'] = $state('success');

	const styles = Object.entries(AlertStatus).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
</script>

<button class="btn btn-primary showAlert" onclick={() => alert.api.open()} type="button">Show alert</button>

<br />
<br />

<div class="d-flex flex-column">
	<div class="d-flex form-group">
		<label class="align-self-center me-3" for="typeSelect">Alert type: </label>
		<select id="typeSelect" class="form-select w-auto" bind:value={type}>
			{#each styles as { value, label }}
				<option {value}> {label}</option>
			{/each}
		</select>
	</div>

	<label><input class="form-check-input me-1" type="checkbox" bind:checked={animatedOnInit} />Animated on init</label>
	<label><input class="form-check-input me-1" type="checkbox" bind:checked={animated} />Animated</label>
	<label><input class="dismissibleInput form-check-input me-1" type="checkbox" bind:checked={dismissible} />Dismissible</label>
</div>

<br />
<br />
<Alert bind:this={alert} {dismissible} {animatedOnInit} {animated} {type}>
	<h4 class="alert-heading">Well done!</h4>
	<p>
		Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.
	</p>
	<hr />
	<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>
