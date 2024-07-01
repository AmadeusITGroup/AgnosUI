const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
<\/script>

{#each state.pages as page, i}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<div class="page-link au-ellipsis" aria-hidden="true">
				<Slot slotContent={state.ellipsisLabel} props={{state, widget}} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="ellipsisLabel" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment slot="ellipsisLabel" let:state let:widget><slot name="ellipsisLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="firstPageLabel" let:state let:widget><slot name="firstPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="lastPageLabel" let:state let:widget><slot name="lastPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="nextPageLabel" let:state let:widget><slot name="nextPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
							><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
						>
						<svelte:fragment slot="pagesDisplay" let:state let:widget><slot name="pagesDisplay" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="previousPageLabel" let:state let:widget><slot name="previousPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
					</svelte:component>
				</Slot>
			</div>
			<span class="visually-hidden">{state.ariaEllipsisLabel}</span>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageLink={{page}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.pageLink, {page}], [__AgnosUISveltePreprocess__classDirective, "page-link"])}
				><!-- Remove the strange formatting with https://github.com/sveltejs/svelte/issues/3080
				 --><Slot
					slotContent={state.numberLabel}
					props={{state, widget, displayedPage: page}}
					let:component
					let:props
				>
					<svelte:fragment slot="slot" let:props><slot name="numberLabel" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment slot="ellipsisLabel" let:state let:widget><slot name="ellipsisLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="firstPageLabel" let:state let:widget><slot name="firstPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="lastPageLabel" let:state let:widget><slot name="lastPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="nextPageLabel" let:state let:widget><slot name="nextPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
							><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
						>
						<svelte:fragment slot="pagesDisplay" let:state let:widget><slot name="pagesDisplay" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="previousPageLabel" let:state let:widget><slot name="previousPageLabel" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
					</svelte:component>
				</Slot>{#if state.page === page}<span class="visually-hidden">{state.activeLabel}</span>{/if}
			</a>
		{/if}
	</li>
{/each}
`;export{t as default};
