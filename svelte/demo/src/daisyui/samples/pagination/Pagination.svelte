<script lang="ts">
	import type {PaginationProps} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {page = $bindable(), ...props}: Partial<PaginationProps> = $props();

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		props: {...props, page},
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});

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
		api: {first, previous, next, last, select},
	} = widget;

	$effect(() => widget.patchChangedProps({...props, page}));
</script>

<nav aria-label={$ariaLabel$}>
	<div class="join {$className$}">
		{#if $boundaryLinks$}
			<button
				class="join-item btn btn-outline"
				aria-label={$ariaFirstLabel$}
				onclick={() => first()}
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
				onclick={() => previous()}
				tabindex={$previousDisabled$ ? -1 : undefined}
				aria-disabled={$previousDisabled$ ? 'true' : null}
			>
				<span aria-hidden="true"> ‹ </span>
			</button>
		{/if}
		{#each $state$.pages as page}
			<button
				class="join-item btn btn-outline"
				class:btn-active={page === $state$.page}
				aria-current={page === $state$.page ? 'page' : null}
				tabindex={page === -1 ? -1 : $state$.disabled ? -1 : undefined}
				onclick={page === -1 ? () => {} : () => select(page)}
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
				onclick={() => next()}
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
				onclick={() => last()}
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
