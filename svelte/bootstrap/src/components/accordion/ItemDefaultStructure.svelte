<script lang="ts">
	import type {AccordionItemContext} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: AccordionItemContext = $props();
	const {
		state,
		attachments: {headerDirective, buttonDirective, bodyContainerDirective, bodyDirective},
	} = widget;

	const re = new RegExp('^h[1-6]$');

	let headingTag = $derived(re.test(state.headingTag) ? state.headingTag : 'h2');
</script>

<svelte:element this={headingTag} class="accordion-header" {@attach headerDirective()}>
	<button {@attach buttonDirective()} class="accordion-button">
		<Slot content={state.header} props={widget} />
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse" {@attach bodyContainerDirective()}>
		<div class="accordion-body" {@attach bodyDirective()}>
			<Slot content={state.children} props={widget} />
		</div>
	</div>
{/if}
