<script lang="ts">
	import type {PaginationSlots} from '@agnos-ui/svelte/components/pagination';
	import {Slot} from '@agnos-ui/svelte/slot';

	type $$Props = PaginationSlots['pages'];
	type $$Slots = PaginationSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const {
		stores: {page$, pagesLabel$, slotEllipsis$, slotNumberLabel$},
		actions: {select},
		api: {isEllipsis},
	} = widget;
</script>

{#each state.pages as page, i}
	<li
		class="page-item"
		class:active={page === state.page}
		class:disabled={isEllipsis(page) || state.disabled}
		aria-current={page === state.page ? 'page' : null}
	>
		{#if isEllipsis(page)}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true" on:click|preventDefault|stopPropagation href="#">
				<Slot slotContent={$slotEllipsis$} props={{state, widget}} let:component let:props>
					<slot slot="slot" name="ellipsis" let:props {...props} />
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
			</a>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				class="page-link au-page"
				aria-label={$pagesLabel$[i]}
				href="#"
				on:click|preventDefault={() => select(page)}
				tabindex={state.disabled ? -1 : undefined}
				aria-disabled={state.disabled ? 'true' : null}
			>
				<Slot slotContent={$slotNumberLabel$} props={{state, widget, displayedPage: page}} let:component let:props>
					<slot slot="slot" name="numberLabel" let:props {...props} />
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
				{#if $page$ === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
