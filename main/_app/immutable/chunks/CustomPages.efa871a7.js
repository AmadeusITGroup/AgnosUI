const t=`<script lang="ts">
	import type {PaginationSlots} from '@agnos-ui/svelte';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = PaginationSlots['pages']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = PaginationSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const FILTER_PAG_REGEX = /[^0-9]/g;
	let inputRef: HTMLInputElement;
	function handleKeyDownEnter(e: KeyboardEvent & {currentTarget: EventTarget & HTMLInputElement}) {
		if (e.key === 'Enter') {
			handleTheChange(e);
		}
	}
	function handleTheChange(e: (FocusEvent | KeyboardEvent) & {currentTarget: EventTarget & HTMLInputElement}) {
		const value = e.currentTarget.value;
		const intValue = parseInt(value);
		widget.actions.select(intValue);
		inputRef.value = widget.stores.page$().toString();
	}
	function formatInput(e: Event & {currentTarget: EventTarget & HTMLInputElement}) {
		e.currentTarget.value = e.currentTarget.value.replace(FILTER_PAG_REGEX, '');
	}
<\/script>

{#if state.pages.length > 0}
	<li class="au-custom-pages-item">
		<div class="mb-3 d-flex flex-nowrap px-2">
			<label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label>
			<input
				value={state.page}
				bind:this={inputRef}
				type="text"
				inputmode="numeric"
				pattern="[0-9]*"
				class="form-control custom-pages-input"
				id="paginationInput"
				on:keydown={handleKeyDownEnter}
				on:blur={handleTheChange}
				on:input={formatInput}
				aria-labelledby="paginationInputLabel paginationDescription"
				style="width: 2.5rem"
			/>
			<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {state.pages.length}</span>
		</div>
	</li>
{/if}
`;export{t as default};