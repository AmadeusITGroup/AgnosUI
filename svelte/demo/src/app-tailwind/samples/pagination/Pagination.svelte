<script lang="ts" context="module">
	import type {PaginationProps as Props} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
</script>

<script lang="ts">
	// // cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars

	/**
	 *  The current page.
	 *
	 *  Page numbers start with `1`.
	 */
	export let page: Props['page'] | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		$$slots,
		$$props,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});
	const {
		stores: {
			page$,
			boundaryLinks$,
			directionLinks$,
			nextDisabled$,
			previousDisabled$,
			ariaLabel$,
			ariaFirstLabel$,
			ariaPreviousLabel$,
			ariaNextLabel$,
			ariaLastLabel$,
			className$,
		},
		state$,
		actions: {first, previous, next, last},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);
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
				tabindex={widget.api.isEllipsis(page) ? -1 : $state$.disabled ? -1 : undefined}
				on:click={widget.api.isEllipsis(page) ? () => {} : () => widget.actions.select(page)}
				disabled={widget.api.isEllipsis(page) || $state$.disabled}
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
		{`Current page is ${$page$}`}
	</div>
</nav>
