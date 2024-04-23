<script lang="ts" context="module">
	import type {PaginationApi, PaginationProps, PaginationSlots} from './pagination';
	import {createPagination} from './pagination';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import PaginationDefaultPages from './PaginationDefaultPages.svelte';
	import PaginationDefaultStructure from './PaginationDefaultStructure.svelte';

	const defaultConfig: Partial<PaginationProps> = {
		slotStructure: PaginationDefaultStructure,
		slotPages: PaginationDefaultPages,
	};
</script>

<script lang="ts">
	type $$Props = Partial<PaginationProps>;
	type $$Slots = PaginationSlots;

	/**
	 *  The current page.
	 *
	 *  Page numbers start with `1`.
	 */
	export let page: $$Props['page'] = undefined;

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});
	export const api: PaginationApi = widget.api;

	const {
		stores: {slotStructure$, ariaLabel$},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};
</script>

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
				><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
			>
			<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</nav>
