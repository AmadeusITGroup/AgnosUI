<script lang="ts" context="module">
	import type {PaginationProps as Props, PaginationSlots as Slots} from '@agnos-ui/svelte-headless/components/pagination';
	import {createPagination} from '@agnos-ui/svelte-headless/components/pagination';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import PaginationDefaultPages from './PaginationDefaultPages.svelte';
	import PaginationDefaultStructure from './PaginationDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: PaginationDefaultStructure,
		slotPages: PaginationDefaultPages,
	};
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars

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
		defaultConfig,
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});

	const {
		stores: {slotStructure$, ariaLabel$},
		state$,
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);

	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};
</script>

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<slot slot="slot" name="structure" let:props {...props} />
		<svelte:component this={component} {...props}>
			<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
			<slot name="first" slot="first" let:state let:widget {state} {widget} />
			<slot name="last" slot="last" let:state let:widget {state} {widget} />
			<slot name="next" slot="next" let:state let:widget {state} {widget} />
			<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
			<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
			<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</nav>
