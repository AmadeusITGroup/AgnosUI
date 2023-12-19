const t=`<script lang="ts" context="module">
	import type {PaginationProps as Props, PaginationSlots as Slots} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import PaginationDefaultPages from './PaginationDefaultPages.svelte';

	const defaultConfig: Partial<Props> = {
		slotPages: PaginationDefaultPages,
	};
<\/script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars

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
		defaultConfig,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});

	const {
		stores: {
			size$,
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
			slotFirst$,
			slotPrevious$,
			slotNext$,
			slotLast$,
			slotPages$,
		},
		state$,
		actions: {first, previous, next, last},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);

	$: sizeClass = $size$ ? \`pagination-\${$size$}\` : ''; // $size$ === 'sm' ? 'pagination-sm' : $size$ === 'lg' ? 'pagination-lg' : '';
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};
<\/script>

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<ul class="au-pagination pagination {sizeClass} {$className$}">
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
					<span aria-hidden="true">
						<Slot slotContent={$slotFirst$} props={slotContext} let:component let:props>
							<slot slot="slot" name="first" let:props {...props} />
							<svelte:component this={component} {...props}>
								<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
								<slot name="first" slot="first" let:state let:widget {state} {widget} />
								<slot name="last" slot="last" let:state let:widget {state} {widget} />
								<slot name="next" slot="next" let:state let:widget {state} {widget} />
								<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
								<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
								<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							</svelte:component>
						</Slot>
					</span>
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
					<span aria-hidden="true">
						<Slot slotContent={$slotPrevious$} props={slotContext} let:component let:props>
							<slot slot="slot" name="previous" let:props {...props} />
							<svelte:component this={component} {...props}>
								<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
								<slot name="first" slot="first" let:state let:widget {state} {widget} />
								<slot name="last" slot="last" let:state let:widget {state} {widget} />
								<slot name="next" slot="next" let:state let:widget {state} {widget} />
								<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
								<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
								<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							</svelte:component>
						</Slot>
					</span>
				</a>
			</li>
		{/if}
		<Slot slotContent={$slotPages$} props={slotContext} let:component let:props>
			<slot slot="slot" name="pages" let:props {...props} />
			<svelte:component this={component} {...props}>
				<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
				<slot name="first" slot="first" let:state let:widget {state} {widget} />
				<slot name="last" slot="last" let:state let:widget {state} {widget} />
				<slot name="next" slot="next" let:state let:widget {state} {widget} />
				<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
				<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
				<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
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
					<span aria-hidden="true">
						<Slot slotContent={$slotNext$} props={slotContext} let:component let:props>
							<slot slot="slot" name="next" let:props {...props} />
							<svelte:component this={component} {...props}>
								<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
								<slot name="first" slot="first" let:state let:widget {state} {widget} />
								<slot name="last" slot="last" let:state let:widget {state} {widget} />
								<slot name="next" slot="next" let:state let:widget {state} {widget} />
								<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
								<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
								<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							</svelte:component>
						</Slot>
					</span>
				</a>
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
					<span aria-hidden="true">
						<Slot slotContent={$slotLast$} props={slotContext} let:component let:props>
							<slot slot="slot" name="last" let:props {...props} />
							<svelte:component this={component} {...props}>
								<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
								<slot name="first" slot="first" let:state let:widget {state} {widget} />
								<slot name="last" slot="last" let:state let:widget {state} {widget} />
								<slot name="next" slot="next" let:state let:widget {state} {widget} />
								<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
								<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
								<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							</svelte:component>
						</Slot>
					</span>
				</a>
			</li>
		{/if}
	</ul>
	<div aria-live="polite" class="visually-hidden">
		{\`Current page is \${$page$}\`}
	</div>
</nav>
`;export{t as default};
