const t=`<script lang="ts" context="module">
	import type {PaginationProps as Props} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
<\/script>

<script lang="ts">
	// // cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars

	/**
	 *  The current page.
	 *
	 *  Page numbers start with \`1\`.
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
<\/script>

<nav aria-label={$ariaLabel$}>
	<ul class="au-pagination pagination {$className$} ">
		{#if $boundaryLinks$}
			<li class="page-item" class:disabled={$previousDisabled$}>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					aria-label={$ariaFirstLabel$}
					class="page-link au-first"
					href="#"
					on:click|preventDefault={() => first()}
					tabindex={$previousDisabled$ ? -1 : undefined}
					aria-disabled={$previousDisabled$ ? 'true' : null}
				>
					<span aria-hidden="true"> « </span>
				</a>
			</li>
		{/if}
		{#if $directionLinks$}
			<li class="page-item" class:disabled={$previousDisabled$}>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					aria-label={$ariaPreviousLabel$}
					class="page-link au-previous"
					href="#"
					on:click|preventDefault={() => previous()}
					tabindex={$previousDisabled$ ? -1 : undefined}
					aria-disabled={$previousDisabled$ ? 'true' : null}
				>
					<span aria-hidden="true"> ‹ </span>
				</a>
			</li>
		{/if}
		{#each $state$.pages as page, i}
			<li
				class="page-item"
				class:active={page === $state$.page}
				class:disabled={widget.api.isEllipsis(page) || $state$.disabled}
				aria-current={page === $state$.page ? 'page' : null}
			>
				{#if widget.api.isEllipsis(page)}
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true" on:click|preventDefault|stopPropagation href="#"> ... </a>
				{:else}
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="page-link au-page"
						aria-label={$state$.pagesLabel[i]}
						href="#"
						on:click|preventDefault={() => widget.actions.select(page)}
						tabindex={$state$.disabled ? -1 : undefined}
						aria-disabled={$state$.disabled ? 'true' : null}
					>
						{page}
						{#if $state$.page === page}<span class="visually-hidden">{$state$.activeLabel}</span>{/if}
					</a>
				{/if}
			</li>
		{/each}
		{#if $directionLinks$}
			<li class="page-item" class:disabled={$nextDisabled$}>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					aria-label={$ariaNextLabel$}
					class="page-link au-next"
					href="#"
					on:click|preventDefault={() => next()}
					tabindex={$nextDisabled$ ? -1 : undefined}
					aria-disabled={$nextDisabled$ ? 'true' : null}
				>
					<span aria-hidden="true"> › </span></a
				>
			</li>
		{/if}
		{#if $boundaryLinks$}
			<li class="page-item" class:disabled={$nextDisabled$}>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					aria-label={$ariaLastLabel$}
					class="page-link au-last"
					href="#"
					on:click|preventDefault={() => last()}
					tabindex={$nextDisabled$ ? -1 : undefined}
					aria-disabled={$nextDisabled$ ? 'true' : null}
				>
					<span aria-hidden="true"> » </span>
				</a>
			</li>
		{/if}
	</ul>
	<div aria-live="polite" class="visually-hidden">
		{\`Current page is \${$page$}\`}
	</div>
</nav>

<style lang="postcss">
	.pagination {
		& :where(.page-item) {
			border-start-end-radius: 0;
			border-end-end-radius: 0;
			border-end-start-radius: 0;
			border-start-start-radius: 0;
		}

		& :where(.page-item:first-child:not(:last-child)) {
			border-end-start-radius: inherit;
			border-start-start-radius: inherit;
		}

		& :where(.page-item:last-child:not(:first-child)) {
			border-start-end-radius: inherit;
			border-end-end-radius: inherit;
		}

		@apply inline-flex;
		@apply items-stretch;
		@apply rounded;
		&:where(*:not(:first-child)) {
			@apply my-0 -ms-px;
		}

		.page-item {
			&.disabled {
				pointer-events: none;
			}
			@apply size-8;
			@apply flex;
			@apply items-center;
			@apply justify-center;

			a.page-link {
				@apply text-neutral-900;
				&.au-previous,
				&.au-next,
				&.au-first,
				&.au-last {
					@apply pb-[0.4rem];
				}
			}
			a,
			a:hover {
				@apply no-underline;
				@apply py-1;
				@apply px-3;
			}
			@apply bg-neutral-100;
			&:has(a:active) {
				animation: button-pop 0s ease-out;
				transform: scale(var(--btn-focus-scale, 0.97));
			}
			&:hover {
				@apply bg-neutral-300;
			}

			&.active {
				@apply bg-neutral-400;
				&:hover {
					@apply bg-neutral-300;
				}
			}
		}
	}
	.visually-hidden {
		@apply hidden;
	}
	@keyframes button-pop {
		0% {
			transform: scale(var(--btn-focus-scale, 0.98));
		}
		40% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
`;export{t as default};
