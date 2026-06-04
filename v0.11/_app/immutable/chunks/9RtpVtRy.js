const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: PaginationContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);

	let sizeClass = $derived(state.size ? \`pagination-\${state.size}\` : '');
<\/script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:directives.pageFirst {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.pageFirst, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.firstPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.previousDisabled}]}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:directives.pagePrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.pagePrev, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.previousPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	<Slot content={state.pagesDisplay} props={widget} />
	{#if state.directionLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:directives.pageNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.pageNext, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.nextPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class={['page-item', {disabled: state.nextDisabled}]}>
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:directives.pageLast {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.pageLast, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot content={state.lastPageLabel} props={widget} />
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{\`\${state.ariaLiveLabelText}\`}
</div>
`;export{t as default};
