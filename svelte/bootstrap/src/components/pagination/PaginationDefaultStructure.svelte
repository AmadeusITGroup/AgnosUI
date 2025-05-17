<script lang="ts">
	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: PaginationContext = $props();
	let {state, attachments} = widget;

	let sizeClass = $derived(state.size ? `pagination-${state.size}` : '');
</script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" {@attach attachments.pageFirst()}>
				<span aria-hidden="true">
					<Slot content={state.firstPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" {@attach attachments.pagePrev()}>
				<span aria-hidden="true">
					<Slot content={state.previousPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.pagesDisplay} props={widget} />
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" {@attach attachments.pageNext()}>
				<span aria-hidden="true">
					<Slot content={state.nextPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="page-link" {@attach attachments.pageLast()}>
				<span aria-hidden="true">
					<Slot content={state.lastPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{`${state.ariaLiveLabelText}`}
</div>
