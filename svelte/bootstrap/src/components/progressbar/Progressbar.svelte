<script lang="ts">
	import {createProgressbar, type ProgressbarContext, type ProgressbarProps} from './progressbar.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';

	let props: Partial<ProgressbarProps> = $props();

	const widget = callWidgetFactory(createProgressbar, {
		props,
		defaultConfig: {
			structure,
		},
	});
	const {
		state,
		attachments: {ariaDirective},
	} = widget;
</script>

{#snippet structure(props: ProgressbarContext)}
	<ProgressbarDefaultStructure {...props} />
{/snippet}

<div {@attach ariaDirective()} class={state.className || undefined}>
	<Slot content={state.structure} props={widget} />
</div>
