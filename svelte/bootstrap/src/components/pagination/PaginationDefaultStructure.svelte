<script lang="ts">
	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, directives, ...restProps}: PaginationContext = $props();

	let slotContext = $derived({state, directives, ...restProps});
	let sizeClass = $derived(state.size ? `pagination-${state.size}` : '');
</script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a class="page-link" use:directives.pageFirst>
				<span aria-hidden="true">
					<Slot content={state.firstPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a class="page-link" use:directives.pagePrev>
				<span aria-hidden="true">
					<Slot content={state.previousPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.pagesDisplay} props={slotContext} />
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a class="page-link" use:directives.pageNext>
				<span aria-hidden="true">
					<Slot content={state.nextPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a class="page-link" use:directives.pageLast>
				<span aria-hidden="true">
					<Slot content={state.lastPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{`${state.ariaLiveLabelText}`}
</div>
