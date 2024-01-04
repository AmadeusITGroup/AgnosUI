<script lang="ts">
	import {Toast} from '@agnos-ui/svelte/components/toast';
	import type {ToastProps} from '@agnos-ui/svelte/components/toast';
	import {writable} from 'svelte/store';

	enum ToastPositions {
		topLeft = 'top-0 start-0',
		topCenter = 'top-0 start-50 translate-middle-x',
		topRight = 'top-0 end-0',
		middleLeft = 'top-50 start-0 translate-middle-y',
		middleCenter = 'top-50 start-50 translate-middle',
		middleRight = 'top-50 end-0 translate-middle-y',
		bottomLeft = 'bottom-0 start-0',
		bottomCenter = 'bottom-0 start-50 translate-middle-x',
		bottomRight = 'bottom-0 end-0',
	}

	const positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	let position = ToastPositions.topLeft;

	function createToasts() {
		const {subscribe, set, update} = writable([] as Partial<ToastProps>[]);

		return {
			subscribe,
			add: (toast: Partial<ToastProps>) => update((toasts) => [...toasts, toast]),
			remove: (toast: Partial<ToastProps>) => update((toasts) => toasts.filter((t) => t !== toast)),
			reset: () => set([]),
		};
	}

	export const toasts$ = createToasts();
</script>

<div class="d-flex justify-content-between">
	<div class="d-flex form-group">
		<label class="align-self-center me-3" for="positionSelect">Toast position: </label>
		<select id="positionSelect" class="form-select w-auto" bind:value={position}>
			{#each positions as { value, label }}
				<option {value}> {label}</option>
			{/each}
		</select>
	</div>
	<button
		class="btn btn-primary addToast me-1"
		on:click={() => toasts$.add({autohide: false, delay: 1000, className: position, slotDefault: 'Simple toast', slotHeader: 'I am header'})}
		>Show toast</button
	>
</div>
<div class="toastCount mb-3">Toasts in the service: {$toasts$.length}</div>

<div class="d-flex position-relative" aria-live="polite" aria-atomic="true" style="height: 500px; width: 600px; background-color: gray;">
	{#each $toasts$ as toast (toast)}
		{@const {dismissible, animationOnInit, animation, slotDefault, slotHeader, className} = toast}
		<div class={`toast-container p-3 ${className}`}>
			<Toast {dismissible} {animationOnInit} {animation} {slotDefault} {slotHeader} onHidden={() => toasts$.remove(toast)} />
		</div>
	{/each}
</div>
