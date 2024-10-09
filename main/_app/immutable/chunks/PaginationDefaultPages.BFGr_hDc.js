const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: PaginationContext = $props();
<\/script>

{#each state.pages as page}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<div class="page-link au-ellipsis" aria-hidden="true">
				<Slot content={state.ellipsisLabel} props={{state, widget}} />
			</div>
			<span class="visually-hidden">{state.ariaEllipsisLabel}</span>
		{:else}
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageLink={{page}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.pageLink, {page}], [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<Slot content={state.numberLabel} props={{state, widget, displayedPage: page}} />{#if state.page === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
`;export{t as default};