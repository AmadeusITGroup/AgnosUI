<script lang="ts">
	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: PaginationContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);

	let sizeClass = $derived(state.size ? `pagination-${state.size}` : '');
</script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<a class="page-link" use:directives.pageFirst>
				<span aria-hidden="true">
					<Slot content={state.firstPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<a class="page-link" use:directives.pagePrev>
				<span aria-hidden="true">
					<Slot content={state.previousPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.pagesDisplay} props={widget} />
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<a class="page-link" use:directives.pageNext>
				<span aria-hidden="true">
					<Slot content={state.nextPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<a class="page-link" use:directives.pageLast>
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
