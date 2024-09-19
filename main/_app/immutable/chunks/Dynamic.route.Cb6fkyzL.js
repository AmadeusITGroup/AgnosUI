const t=`<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import type {ToastProps} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {writable} from 'svelte/store';
	import {ToastPositions} from './toast-positions.enum';

	const positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	let position = ToastPositions.topLeft;

	function createToasts() {
		const {subscribe, update} = writable(new Map(Object.values(ToastPositions).map((entry) => [entry as string, [] as Partial<ToastProps>[]])));
		return {
			subscribe,
			add: (toast: Partial<ToastProps>) =>
				update((toasts) => {
					toasts.get(toast.className!)?.push(toast);
					return toasts;
				}),
			remove: (toast: Partial<ToastProps>) =>
				update((toasts) => {
					toasts.set(
						toast.className!,
						toasts.get(toast.className!)!.filter((t) => t !== toast),
					);
					return toasts;
				}),
		};
	}

	export const toasts$ = createToasts();
<\/script>

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
			on:click={() => toasts$.add({autoHide: true, delay: 3000, className: position, children: 'Simple toast', header: 'I am header'})}
			>Show toast</button
		>
	</div>
</div>

<div class="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style="height: 500px; background-color: gray;">
	{#each $toasts$.entries() as [position, toasts]}
		<div class={\`toast-container p-3 \${position}\`}>
			{#each toasts as toast}
				{@const {dismissible, animatedOnInit, animated, children, header} = toast}
				<Toast {dismissible} {animatedOnInit} {animated} {children} {header} onHidden={() => toasts$.remove(toast)} />
			{/each}
		</div>
	{/each}
</div>
`;export{t as default};
