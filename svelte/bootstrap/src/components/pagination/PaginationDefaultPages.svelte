<script lang="ts">
	import type {PaginationContext} from './pagination';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: PaginationContext = $props();
</script>

{#each state.pages as page, i}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<div class="page-link au-ellipsis" aria-hidden="true">
				<Slot content={state.slotEllipsis} props={{state, widget}} />
			</div>
			<span class="visually-hidden">{state.ariaEllipsisLabel}</span>
		{:else}
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pageLink={{page}}>
				<Slot content={state.slotNumberLabel} props={{state, widget, displayedPage: page}} />{#if state.page === page}<span class="visually-hidden"
						>{state.activeLabel}</span
					>{/if}
			</a>
		{/if}
	</li>
{/each}
