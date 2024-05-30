<script lang="ts">
	import type {PaginationContext} from './pagination';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: PaginationContext = $props();

	let slotContext = $derived({widget, state});
	let sizeClass = $derived(state.size ? `pagination-${state.size}` : '');
</script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pageFirst>
				<span aria-hidden="true">
					<Slot content={state.slotFirst} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pagePrev>
				<span aria-hidden="true">
					<Slot content={state.slotPrevious} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.slotPages} props={slotContext} />
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pageNext>
				<span aria-hidden="true">
					<Slot content={state.slotNext} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" use:widget.directives.pageLast>
				<span aria-hidden="true">
					<Slot content={state.slotLast} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{`${state.ariaLiveLabelText}`}
</div>
