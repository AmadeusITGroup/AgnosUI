<script lang="ts">
	import type {PaginationSlots} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';

	type $$Props = PaginationSlots['pagesDisplay'];
	type $$Slots = PaginationSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const {
		stores: {page$, ellipsisLabel$, numberLabel$},
	} = widget;
</script>

{#each state.pages as page, i}
	<li class="page-item" class:active={page === state.page} class:disabled={page === -1 || state.disabled}>
		{#if page === -1}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true" on:click|preventDefault|stopPropagation href="#">
				<Slot slotContent={$ellipsisLabel$} props={{state, widget}} let:component let:props>
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
			</a>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="page-link" use:widget.directives.pageLink={{page}}>
				<Slot slotContent={$numberLabel$} props={{state, widget, displayedPage: page}} let:component let:props>
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
				</Slot>
				{#if $page$ === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
