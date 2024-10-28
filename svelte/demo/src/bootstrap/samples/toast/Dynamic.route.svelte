<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {ToastPositions} from '@agnos-ui/common/samples/toast/toast-positions.enum';
	import {ToastService} from './toast-service.svelte';

	const positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	let position = $state(ToastPositions.topLeft);

	const toastService = new ToastService();
</script>

<p class="mb-2">To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.</p>
<p class="mb-2">To <strong>stack</strong> toasts vertically, put them in the same container.</p>
<div class="d-flex justify-content-between">
	<div class="d-flex form-group align-items-center">
		<label class="me-3" for="positionSelect">Position: </label>
		<select id="positionSelect" class="form-select w-auto" bind:value={position}>
			{#each positions as { value, label }}
				<option {value}> {label}</option>
			{/each}
		</select>
		<button
			class="btn btn-primary addToast ms-2"
			onclick={() => toastService.add({autoHide: true, delay: 3000, className: position, children: 'Simple toast', header: 'I am header'})}
			>Show toast</button
		>
	</div>
</div>

<div class="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style="height: 500px; background-color: gray;">
	{#each Object.entries(toastService.toasts) as [position, toasts]}
		<div class={`toast-container p-3 ${position}`}>
			{#each toasts as toast}
				{@const {dismissible, animatedOnInit, animated, children, header} = toast}
				<Toast {dismissible} {animatedOnInit} {animated} {children} {header} onHidden={() => toastService.remove(toast)} />
			{/each}
		</div>
	{/each}
</div>
