const t=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte/components/accordion';
	import './custom.scss';
	import {writable} from 'svelte/store';
	import BODY from './body.txt?raw';
<\/script>

<script lang="ts">
	let accordion: Accordion;
	const thirdItemDisabled$ = writable(false);
<\/script>

<Accordion bind:this={accordion}>
	<AccordionItem>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				class="{state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between"
				class:collapsed={!state.itemVisible}
				role="heading"
				aria-level={2}
			>
				<p class="m-0">First panel - {state.itemVisible ? 'opened' : 'collapsed'}</p>
				<button
					type="button"
					id={state.itemId + '-toggle'}
					on:click={widget.actions.click}
					class="btn btn-link p-0 {state.itemButtonClass}"
					class:collapsed={!state.itemVisible}
					disabled={state.itemDisabled}
					aria-controls={state.itemId + '-collapse'}
					aria-disabled={state.itemDisabled}
					aria-expanded={state.itemVisible}>Toggle first</button
				>
			</div>
			{#if state.shouldBeInDOM}
				<div
					class="accordion-collapse {state.itemBodyContainerClass}"
					use:widget.directives.collapseDirective
					id={state.itemId + '-collapse'}
					aria-labelledby={state.itemId + '-toggle'}
				>
					<div class="accordion-body {state.itemBodyClass}">
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				class="{state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between"
				class:collapsed={!state.itemVisible}
				role="heading"
				aria-level={2}
			>
				<p class="m-0">Second panel</p>
				<div class="d-flex flex-wrap gap-2">
					<button
						type="button"
						class="btn btn-sm btn-outline-primary {state.itemButtonClass}"
						class:collapsed={!state.itemVisible}
						id={state.itemId + '-toggle'}
						on:click={widget.actions.click}
						disabled={state.itemDisabled}
						aria-controls={state.itemId + '-collapse'}
						aria-disabled={state.itemDisabled}
						aria-expanded={state.itemVisible}>Toggle second</button
					>
					<button type="button" class="btn btn-sm btn-outline-secondary" on:click={() => thirdItemDisabled$.update((disabled) => !disabled)}>
						{$thirdItemDisabled$ ? 'En' : 'Dis'}able third
					</button>
					<button type="button" class="btn btn-sm btn-outline-danger" on:click={() => accordion.api.collapseAll()}> Collapse all </button>
				</div>
			</div>
			{#if state.shouldBeInDOM}
				<div
					class="accordion-collapse {state.itemBodyContainerClass}"
					use:widget.directives.collapseDirective
					id={state.itemId + '-collapse'}
					aria-labelledby={state.itemId + '-toggle'}
				>
					<div class="accordion-body {state.itemBodyClass}">
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem itemDisabled={$thirdItemDisabled$}>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				class="accordion-header {state.itemHeaderClass} accordion-button custom-header justify-content-between"
				class:collapsed={!state.itemVisible}
				role="heading"
				aria-level={2}
			>
				<button
					type="button"
					class="p-0 btn btn-link container-fluid text-start {state.itemButtonClass}"
					class:collapsed={!state.itemVisible}
					id={state.itemId + '-toggle'}
					on:click={widget.actions.click}
					disabled={state.itemDisabled}
					aria-disabled={state.itemDisabled}
					aria-controls={state.itemId + '-collapse'}
					aria-expanded={state.itemVisible}>Third panel</button
				>
				{#if state.itemDisabled}<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>{/if}
			</div>
			{#if state.shouldBeInDOM}
				<div
					class="accordion-collapse {state.itemBodyContainerClass}"
					use:widget.directives.collapseDirective
					id={state.itemId + '-collapse'}
					aria-labelledby={state.itemId + '-toggle'}
				>
					<div class="accordion-body {state.itemBodyClass}">
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
</Accordion>
`;export{t as default};
