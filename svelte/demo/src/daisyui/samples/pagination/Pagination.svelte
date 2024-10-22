<script lang="ts">
	import type {PaginationProps} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {page = $bindable(), ...props}: Partial<PaginationProps> = $props();

	const {
		state,
		api: {first, previous, next, last, select},
	} = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		get props() {
			return {...props, page};
		},
		enablePatchChanged: true,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});
</script>

<nav aria-label={state.ariaLabel}>
	<div class="join {state.className}">
		{#if state.boundaryLinks}
			<button
				class="join-item btn btn-outline"
				aria-label={state.ariaFirstLabel}
				onclick={() => first()}
				disabled={state.previousDisabled}
				aria-disabled={state.previousDisabled ? 'true' : null}
				tabindex={state.previousDisabled ? -1 : undefined}
			>
				<span aria-hidden="true"> « </span>
			</button>
		{/if}
		{#if state.directionLinks}
			<button
				class="join-item btn btn-outline"
				disabled={state.previousDisabled}
				aria-label={state.ariaPreviousLabel}
				onclick={() => previous()}
				tabindex={state.previousDisabled ? -1 : undefined}
				aria-disabled={state.previousDisabled ? 'true' : null}
			>
				<span aria-hidden="true"> ‹ </span>
			</button>
		{/if}
		{#each state.pages as page}
			<button
				class="join-item btn btn-outline"
				class:btn-active={page === state.page}
				aria-current={page === state.page ? 'page' : null}
				tabindex={page === -1 ? -1 : state.disabled ? -1 : undefined}
				onclick={page === -1 ? () => {} : () => select(page)}
				disabled={page === -1 || state.disabled}
				>{page}
				{#if state.page === page}<span class="sr-only">{state.activeLabel}</span>{/if}
			</button>
		{/each}
		{#if state.directionLinks}
			<button
				class="join-item btn btn-outline"
				disabled={state.nextDisabled}
				aria-label={state.ariaNextLabel}
				onclick={() => next()}
				tabindex={state.nextDisabled ? -1 : undefined}
				aria-disabled={state.nextDisabled ? 'true' : null}
			>
				<span aria-hidden="true"> › </span>
			</button>
		{/if}
		{#if state.boundaryLinks}
			<button
				class="join-item btn btn-outline"
				aria-label={state.ariaLastLabel}
				onclick={() => last()}
				disabled={state.nextDisabled}
				tabindex={state.nextDisabled ? -1 : undefined}
				aria-disabled={state.nextDisabled ? 'true' : null}
			>
				<span aria-hidden="true"> » </span>
			</button>
		{/if}
	</div>
	<div aria-live="polite" class="sr-only">
		{`${state.ariaLiveLabelText}`}
	</div>
</nav>
