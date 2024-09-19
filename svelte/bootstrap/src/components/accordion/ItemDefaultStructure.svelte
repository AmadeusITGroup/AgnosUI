<script lang="ts">
	import type {AccordionItemContext} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: AccordionItemContext = $props();

	const re = new RegExp('^h[1-6]$');

	let slotContext = $derived({widget, state});
	let headingTag = $derived(re.test(state.headingTag) ? state.headingTag : 'h2');
</script>

<svelte:element this={headingTag} class="accordion-header" use:slotContext.widget.directives.headerDirective>
	<button use:slotContext.widget.directives.buttonDirective class="accordion-button">
		<Slot content={state.header} props={slotContext} />
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
		<div class="accordion-body" use:widget.directives.bodyDirective>
			<Slot content={state.children} props={slotContext} />
		</div>
	</div>
{/if}
