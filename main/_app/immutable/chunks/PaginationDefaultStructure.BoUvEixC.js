const t=`<script lang="ts">
	import type {PaginationSlots} from '@agnos-ui/svelte-headless/components/pagination';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = PaginationSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = PaginationSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};

	$: sizeClass = state.size ? \`pagination-\${state.size}\` : ''; // $size$ === 'sm' ? 'pagination-sm' : $size$ === 'lg' ? 'pagination-lg' : '';
<\/script>

<ul class="au-pagination pagination {sizeClass} {state.className}">
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a
				aria-label={state.ariaFirstLabel}
				class="page-link au-first"
				href={state.pagesHrefs[0]}
				on:click={(event) => widget.actions.first(event)}
				tabindex={state.previousDisabled ? -1 : undefined}
				aria-disabled={state.previousDisabled ? 'true' : null}
			>
				<span aria-hidden="true">
					<Slot slotContent={state.slotFirst} props={slotContext} let:component let:props>
						<slot slot="slot" name="first" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
							<slot name="first" slot="first" let:state let:widget {state} {widget} />
							<slot name="last" slot="last" let:state let:widget {state} {widget} />
							<slot name="next" slot="next" let:state let:widget {state} {widget} />
							<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
							<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
							<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
						</svelte:component>
					</Slot>
				</span>
			</a>
		</li>
	{/if}
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.previousDisabled}>
			<a
				aria-label={state.ariaPreviousLabel}
				class="page-link au-previous"
				href={state.directionsHrefs.previous}
				on:click={(event) => widget.actions.previous(event)}
				tabindex={state.previousDisabled ? -1 : undefined}
				aria-disabled={state.previousDisabled ? 'true' : null}
			>
				<span aria-hidden="true">
					<Slot slotContent={state.slotPrevious} props={slotContext} let:component let:props>
						<slot slot="slot" name="previous" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
							<slot name="first" slot="first" let:state let:widget {state} {widget} />
							<slot name="last" slot="last" let:state let:widget {state} {widget} />
							<slot name="next" slot="next" let:state let:widget {state} {widget} />
							<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
							<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
							<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
						</svelte:component>
					</Slot>
				</span>
			</a>
		</li>
	{/if}
	<Slot slotContent={state.slotPages} props={slotContext} let:component let:props>
		<slot slot="slot" name="pages" let:props {...props} />
		<svelte:component this={component} {...props}>
			<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
			<slot name="first" slot="first" let:state let:widget {state} {widget} />
			<slot name="last" slot="last" let:state let:widget {state} {widget} />
			<slot name="next" slot="next" let:state let:widget {state} {widget} />
			<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
			<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
			<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
	{#if state.directionLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a
				aria-label={state.ariaNextLabel}
				class="page-link au-next"
				href={state.directionsHrefs.next}
				on:click={(event) => widget.actions.next(event)}
				tabindex={state.nextDisabled ? -1 : undefined}
				aria-disabled={state.nextDisabled ? 'true' : null}
			>
				<span aria-hidden="true">
					<Slot slotContent={state.slotNext} props={slotContext} let:component let:props>
						<slot slot="slot" name="next" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
							<slot name="first" slot="first" let:state let:widget {state} {widget} />
							<slot name="last" slot="last" let:state let:widget {state} {widget} />
							<slot name="next" slot="next" let:state let:widget {state} {widget} />
							<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
							<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
							<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
						</svelte:component>
					</Slot>
				</span>
			</a>
		</li>
	{/if}
	{#if state.boundaryLinks}
		<li class="page-item" class:disabled={state.nextDisabled}>
			<a
				aria-label={state.ariaLastLabel}
				class="page-link au-last"
				href={state.pagesHrefs.at(-1)}
				on:click={(event) => widget.actions.last(event)}
				tabindex={state.nextDisabled ? -1 : undefined}
				aria-disabled={state.nextDisabled ? 'true' : null}
			>
				<span aria-hidden="true">
					<Slot slotContent={state.slotLast} props={slotContext} let:component let:props>
						<slot slot="slot" name="last" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
							<slot name="first" slot="first" let:state let:widget {state} {widget} />
							<slot name="last" slot="last" let:state let:widget {state} {widget} />
							<slot name="next" slot="next" let:state let:widget {state} {widget} />
							<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
							<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
							<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
							<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
						</svelte:component>
					</Slot>
				</span>
			</a>
		</li>
	{/if}
</ul>
<div aria-live="polite" class="visually-hidden">
	{\`Current page is \${state.page}\`}
</div>
`;export{t as default};
