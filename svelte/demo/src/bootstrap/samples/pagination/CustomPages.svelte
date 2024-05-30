<script lang="ts">
	import type {PaginationContext} from '@agnos-ui/svelte-bootstrap/components/pagination';

	let {state: wState, widget}: PaginationContext = $props();

	const FILTER_PAG_REGEX = /[^0-9]/g;
	let inputRef = $state<HTMLInputElement>();
	function handleKeyDownEnter(e: KeyboardEvent & {currentTarget: EventTarget & HTMLInputElement}) {
		if (e.key === 'Enter') {
			handleTheChange(e);
		}
	}
	function handleTheChange(e: (FocusEvent | KeyboardEvent) & {currentTarget: EventTarget & HTMLInputElement}) {
		const value = e.currentTarget.value;
		const intValue = parseInt(value);
		widget.actions.select(intValue);
		inputRef!.value = widget.stores.page$().toString();
	}
	function formatInput(e: Event & {currentTarget: EventTarget & HTMLInputElement}) {
		e.currentTarget.value = e.currentTarget.value.replace(FILTER_PAG_REGEX, '');
	}
</script>

{#if wState.pages.length > 0}
	<li class="au-custom-pages-item">
		<div class="mb-3 d-flex flex-nowrap px-2">
			<label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label>
			<input
				value={wState.page}
				bind:this={inputRef}
				type="text"
				inputmode="numeric"
				pattern="[0-9]*"
				class="form-control custom-pages-input"
				id="paginationInput"
				onkeydown={handleKeyDownEnter}
				onblur={handleTheChange}
				oninput={formatInput}
				aria-labelledby="paginationInputLabel paginationDescription"
				style="width: 2.5rem"
			/>
			<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {wState.pages.length}</span>
		</div>
	</li>
{/if}
