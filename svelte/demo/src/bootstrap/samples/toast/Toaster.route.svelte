<script lang="ts">
	import {addToast, Toaster} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {defaultToasterProps, ToastPositions} from '@agnos-ui/svelte-bootstrap/services/toaster';
	const positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	let index = 0;
	const options = $state(defaultToasterProps);
	$effect(() => {
		if (options.duration === 0) {
			options.dismissible = true;
		}
	});
</script>

<p class="mb-2">Similar to dynamic stacking, we expose a service to ease the usage of Toasts</p>
<div class="d-flex flex-column justify-content-between gap-2">
	<div class="d-flex form-group align-items-center gap-3">
		<label class="me-3" for="positionSelect">Position: </label>
		<select id="positionSelect" class="form-select w-auto" bind:value={options.position}>
			{#each positions as { value, label }}
				<option {value}> {label}</option>
			{/each}
		</select>
		<label class="me-3" for="dismissible">Dismissible: </label>
		<input type="checkbox" class="form-check-input" id="dismissible" disabled={options.duration === 0} bind:checked={options.dismissible} />
		<label class="me-3" for="duration">Duration: </label>
		<input id="duration" type="number" class="form-control w-auto" bind:value={options.duration} />
		<label class="me-3" for="limit">Max # of toasts: </label>
		<input id="limit" type="number" class="form-control w-auto" bind:value={options.limit} />
	</div>
	<div class="d-flex form-group align-items-center gap-3">
		<label class="me-3" for="pause">Pause timer on hover: </label>
		<input type="checkbox" class="form-check-input" id="pause" bind:checked={options.pauseOnHover} />
		<label class="me-3" for="closeAll">Close all toasts button</label>
		<input type="checkbox" class="form-check-input" id="closeAll" bind:checked={options.closeAll} />
		<button class="btn btn-primary addToast ms-2" onclick={() => addToast({children: `Simple toast ${index++}`, header: 'I am header'})}
			>Show toast</button
		>
		<button
			class="btn btn-primary addToast ms-2"
			onclick={() => addToast({children: `Simple toast ${index++}`, className: 'text-bg-danger', dismissible: true, autoHide: true, delay: 10000})}
			>Show error toast</button
		>
	</div>
</div>

<div style="height: 500px; background-color: gray;">
	<Toaster
		duration={options.duration}
		position={options.position}
		dismissible={options.dismissible}
		limit={options.limit}
		pauseOnHover={options.pauseOnHover}
		closeAll={options.closeAll}
	/>
</div>
