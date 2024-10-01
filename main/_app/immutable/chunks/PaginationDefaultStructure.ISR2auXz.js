const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: PaginationContext = $props();

	let slotContext = $derived({widget, state});
	let sizeClass = $derived(state.size ? \`pagination-\${state.size}\` : '');
<\/script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageFirst {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageFirst, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.firstPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pagePrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pagePrev, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.previousPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.pagesDisplay} props={slotContext} />
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageNext, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.nextPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageLast {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageLast, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.lastPageLabel} props={slotContext} />
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{\`\${state.ariaLiveLabelText}\`}
</div>
`;export{t as default};
