<script lang="ts">
	import type {PaginationSlots} from './pagination';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = PaginationSlots['pages'];
	type $$Slots = PaginationSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
</script>

{#each state.pages as page, i}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<div class="page-link au-ellipsis" aria-hidden="true">
				<Slot slotContent={state.slotEllipsis} props={{state, widget}} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="ellipsis" {...props} /></svelte:fragment>
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
			</div>
			<span class="visually-hidden">{state.ariaEllipsisLabel}</span>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="page-link" use:widget.directives.pageLink={{page}}
				><!-- Remove the strange formatting with https://github.com/sveltejs/svelte/issues/3080
				 --><Slot
					slotContent={state.slotNumberLabel}
					props={{state, widget, displayedPage: page}}
					let:component
					let:props
				>
					<svelte:fragment slot="slot" let:props><slot name="numberLabel" {...props} /></svelte:fragment>
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
				</Slot>{#if state.page === page}<span class="visually-hidden">{state.activeLabel}</span>{/if}
			</a>
		{/if}
	</li>
{/each}
