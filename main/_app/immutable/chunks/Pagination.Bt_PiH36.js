const t=`<script lang="ts">
	import type {PaginationApi, PaginationContext, PaginationNumberContext, PaginationProps} from './pagination.gen';
	import {createPagination} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import PaginationDefaultPages from './PaginationDefaultPages.svelte';
	import PaginationDefaultStructure from './PaginationDefaultStructure.svelte';

	let {page = $bindable(), ...props}: Partial<PaginationProps> = $props();

	const widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		get props() {
			return {...props, page};
		},
		enablePatchChanged: true,
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
	export const api: PaginationApi = widget.api;
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
<nav aria-label={widget.state.ariaLabel}>
	<Slot content={widget.state.structure} props={widget} />
</nav>
`;export{t as default};
