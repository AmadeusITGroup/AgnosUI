<script lang="ts">
	import type {PaginationContext} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';

	let {state, directives, ...restProps}: PaginationContext = $props();
	let slotContext = $derived({state, directives, ...restProps});
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
				<Slot content={state.ellipsisLabel} props={slotContext} />
			</a>
		{:else}
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:directives.pageLink={{page}}>
				<Slot content={state.numberLabel} props={{...slotContext, displayedPage: page}} />
				{#if state.page === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
