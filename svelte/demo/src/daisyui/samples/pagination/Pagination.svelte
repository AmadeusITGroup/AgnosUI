<script lang="ts">
	import type {PaginationProps} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<PaginationProps>;

	/**
	 *  The current page.
	 *
	 *  Page numbers start with `1`.
	 */
	export let page: $$Props['page'] = undefined;

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		$$props,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});
	export const api = widget.api;

	const {
		stores: {
			boundaryLinks$,
			directionLinks$,
			nextDisabled$,
			previousDisabled$,
			ariaLabel$,
			ariaFirstLabel$,
			ariaPreviousLabel$,
			ariaNextLabel$,
			ariaLastLabel$,
			ariaLiveLabelText$,
			className$,
		},
		state$,
		actions: {first, previous, next, last},
	} = widget;
	$: widget.patchChangedProps($$props);
</script>

<nav aria-label={$ariaLabel$}>
	<div class="join {$className$}">
		{#if $boundaryLinks$}
			<button
				class="join-item btn btn-outline"
				aria-label={$ariaFirstLabel$}
				on:click={() => first()}
				disabled={$previousDisabled$}
				aria-disabled={$previousDisabled$ ? 'true' : null}
				tabindex={$previousDisabled$ ? -1 : undefined}
			>
				<span aria-hidden="true"> « </span>
			</button>
		{/if}
		{#if $directionLinks$}
			<button
				class="join-item btn btn-outline"
				disabled={$previousDisabled$}
				aria-label={$ariaPreviousLabel$}
				on:click={() => previous()}
				tabindex={$previousDisabled$ ? -1 : undefined}
				aria-disabled={$previousDisabled$ ? 'true' : null}
			>
				<span aria-hidden="true"> ‹ </span>
			</button>
		{/if}
		{#each $state$.pages as page, i}
			<button
				class="join-item btn btn-outline"
				class:btn-active={page === $state$.page}
				aria-current={page === $state$.page ? 'page' : null}
				tabindex={page === -1 ? -1 : $state$.disabled ? -1 : undefined}
				on:click={page === -1 ? () => {} : () => widget.actions.select(page)}
				disabled={page === -1 || $state$.disabled}
				>{page}
				{#if $state$.page === page}<span class="sr-only">{$state$.activeLabel}</span>{/if}
			</button>
		{/each}
		{#if $directionLinks$}
			<button
				class="join-item btn btn-outline"
				disabled={$nextDisabled$}
				aria-label={$ariaNextLabel$}
				on:click={() => next()}
				tabindex={$nextDisabled$ ? -1 : undefined}
				aria-disabled={$nextDisabled$ ? 'true' : null}
			>
				<span aria-hidden="true"> › </span>
			</button>
		{/if}
		{#if $boundaryLinks$}
			<button
				class="join-item btn btn-outline"
				aria-label={$ariaLastLabel$}
				on:click={() => last()}
				disabled={$nextDisabled$}
				tabindex={$nextDisabled$ ? -1 : undefined}
				aria-disabled={$nextDisabled$ ? 'true' : null}
			>
				<span aria-hidden="true"> » </span>
			</button>
		{/if}
	</div>
	<div aria-live="polite" class="sr-only">
		{`${$ariaLiveLabelText$}`}
	</div>
</nav>
