const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$: slotContext = { widget, state };
$: sizeClass = state.size ? \`pagination-\${state.size}\` : "";
<\/script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageFirst {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageFirst, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.firstPageLabel} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="firstPageLabel" {...props} /></svelte:fragment>
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
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pagePrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pagePrev, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.previousPageLabel} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="previousPageLabel" {...props} /></svelte:fragment>
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
				</span>
			</a>
		</li>
	{/if}
	<Slot slotContent={state.pagesDisplay} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="pagesDisplay" {...props} /></svelte:fragment>
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
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageNext, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.nextPageLabel} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="nextPageLabel" {...props} /></svelte:fragment>
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
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageLast {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageLast, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.lastPageLabel} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="lastPageLabel" {...props} /></svelte:fragment>
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
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{\`\${state.ariaLiveLabelText}\`}
</div>
`;export{t as default};
