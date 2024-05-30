<script lang="ts">
	import type {PaginationContext} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';

	let {state, widget}: PaginationContext = $props();

	const {
		stores: {page$, slotEllipsis$, slotNumberLabel$},
	} = widget;
	const onclick = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};
</script>

{#each state.pages as page, i}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true" {onclick} href="#">
				<Slot content={$slotEllipsis$} props={{state, widget}} />
			</a>
		{:else}
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pageLink={{page}}>
				<Slot content={$slotNumberLabel$} props={{state, widget, displayedPage: page}} />
				{#if $page$ === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
