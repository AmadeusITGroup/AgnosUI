const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$:
  slotContext = { widget, state };
$:
  sizeClass = state.size ? \`pagination-\${state.size}\` : "";
<\/script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageFirst {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageFirst, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.slotFirst} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="first" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
								><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
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
					<Slot slotContent={state.slotPrevious} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="previous" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
								><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
						</svelte:component>
					</Slot>
				</span>
			</a>
		</li>
	{/if}
	<Slot slotContent={state.slotPages} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="pages" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
				><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
			>
			<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a use:__AgnosUISveltePreprocess__classDirective={"page-link"} use:widget.directives.pageNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.pageNext, [__AgnosUISveltePreprocess__classDirective, "page-link"])}>
				<span aria-hidden="true">
					<Slot slotContent={state.slotNext} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="next" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
								><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
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
					<Slot slotContent={state.slotLast} props={slotContext} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="last" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="ellipsis" let:state let:widget><slot name="ellipsis" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="first" let:state let:widget><slot name="first" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="last" let:state let:widget><slot name="last" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="next" let:state let:widget><slot name="next" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
								><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="pages" let:state let:widget><slot name="pages" {state} {widget} /></svelte:fragment>
							<svelte:fragment slot="previous" let:state let:widget><slot name="previous" {state} {widget} /></svelte:fragment>
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
