<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import '@agnos-ui/common/samples/accordion/custom.scss';
	import {writable} from 'svelte/store';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';
</script>

<script lang="ts">
	let accordion: Accordion;
	const thirdItemDisabled$ = writable(false);
</script>

<Accordion bind:this={accordion}>
	<AccordionItem>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				use:widget.directives.headerDirective
				class="accordion-button accordion-header custom-header justify-content-between"
				class:collapsed={!state.visible}
				role="heading"
				aria-level={2}
			>
				<p class="m-0">First panel - {state.visible ? 'opened' : 'collapsed'}</p>
				<button use:widget.directives.toggleDirective type="button" class="btn btn-link p-0 {state.buttonClassName} au-accordion-item-button"
					>Toggle first</button
				>
			</div>
			{#if state.shouldBeInDOM}
				<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
					<div class="accordion-body" use:widget.directives.bodyDirective>
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				use:widget.directives.headerDirective
				class="accordion-button accordion-header custom-header justify-content-between"
				class:collapsed={!state.visible}
				role="heading"
				aria-level={2}
			>
				<p class="m-0">Second panel</p>
				<div class="d-flex flex-wrap gap-2">
					<button
						use:widget.directives.toggleDirective
						type="button"
						class="btn btn-sm btn-outline-primary {state.buttonClassName} au-accordion-item-button">Toggle second</button
					>
					<button type="button" class="btn btn-sm btn-outline-secondary" on:click={() => thirdItemDisabled$.update((disabled) => !disabled)}>
						{$thirdItemDisabled$ ? 'En' : 'Dis'}able third
					</button>
					<button type="button" class="btn btn-sm btn-outline-danger" on:click={() => accordion.api.collapseAll()}> Collapse all </button>
				</div>
			</div>
			{#if state.shouldBeInDOM}
				<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
					<div class="accordion-body" use:widget.directives.bodyDirective>
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem disabled={$thirdItemDisabled$}>
		<svelte:fragment slot="itemStructure" let:state let:widget>
			<div
				use:widget.directives.headerDirective
				class="accordion-header accordion-button custom-header justify-content-between"
				class:collapsed={!state.visible}
				role="heading"
				aria-level={2}
			>
				<button
					use:widget.directives.toggleDirective
					type="button"
					class="p-0 btn btn-link container-fluid text-start {state.buttonClassName} au-accordion-item-button">Third panel</button
				>
				{#if state.disabled}<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>{/if}
			</div>
			{#if state.shouldBeInDOM}
				<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
					<div class="accordion-body" use:widget.directives.bodyDirective>
						{BODY}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
</Accordion>
