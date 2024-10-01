const t=`<script lang="ts">
	import type {PaginationContext, PaginationNumberContext, PaginationProps} from './pagination.gen';
	import {createPagination} from './pagination.gen';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import PaginationDefaultPages from './PaginationDefaultPages.svelte';
	import PaginationDefaultStructure from './PaginationDefaultStructure.svelte';

	let {page = $bindable(), ...props}: Partial<PaginationProps> = $props();

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		props: {...props, page},
		defaultConfig: {
			structure,
			pagesDisplay,
			numberLabel,
		},
		events: {
			onPageChange: (value: number) => {
				page = value;
			},
		},
	});

	const {
		stores: {structure$, ariaLabel$},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, page}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
<\/script>

{#snippet structure(props: PaginationContext)}
	<PaginationDefaultStructure {...props} />
{/snippet}
{#snippet pagesDisplay(props: PaginationContext)}
	<PaginationDefaultPages {...props} />
{/snippet}
{#snippet numberLabel({displayedPage}: PaginationNumberContext)}
	{displayedPage}
{/snippet}

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<Slot content={$structure$} props={slotContext} />
</nav>
`;export{t as default};
