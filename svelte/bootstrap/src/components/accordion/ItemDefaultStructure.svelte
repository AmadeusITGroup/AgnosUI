<script lang="ts">
	import type {AccordionItemContext} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: AccordionItemContext = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);

	let headingTag = $derived(`h${state.headingLevel}`);
</script>

<svelte:element this={headingTag} class="accordion-header" use:directives.headerDirective>
	<button use:directives.buttonDirective class="accordion-button">
		<Slot content={state.header} props={widget} />
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse" use:directives.bodyContainerDirective>
		<div class="accordion-body" use:directives.bodyDirective>
			<Slot content={state.children} props={widget} />
		</div>
	</div>
{/if}
