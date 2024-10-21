<script lang="ts">
	import type {AccordionItemContext} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: AccordionItemContext = $props();
	const {state, directives} = widget;

	const re = new RegExp('^h[1-6]$');

	let headingTag = $derived(re.test(state.headingTag) ? state.headingTag : 'h2');
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
