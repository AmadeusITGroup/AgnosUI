<script lang="ts">
	import type {PaginationApi, PaginationProps} from './pagination';
	import {createPagination} from './pagination';
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
			slotStructure,
			slotPages,
			slotNumberLabel,
		},
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

	$effect(() => widget.patchChangedProps({...props, page}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
</script>

{#snippet slotStructure(props)}
	<PaginationDefaultStructure {...props} />
{/snippet}
{#snippet slotPages(props)}
	<PaginationDefaultPages {...props} />
{/snippet}
{#snippet slotNumberLabel({displayedPage})}
	{displayedPage}
{/snippet}

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<Slot content={$slotStructure$} props={slotContext} />
</nav>
