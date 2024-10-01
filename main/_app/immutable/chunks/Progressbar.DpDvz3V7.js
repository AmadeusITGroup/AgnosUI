const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {createProgressbar, type ProgressbarContext, type ProgressbarProps} from './progressbar.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';

	let props: Partial<ProgressbarProps> = $props();

	const widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		props,
		defaultConfig: {
			structure,
		},
	});
	const {
		stores: {structure$, className$},
		state$,
		directives: {ariaDirective},
	} = widget;

	$effect(() => widget.patchChangedProps({...props}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});
<\/script>

{#snippet structure(props: ProgressbarContext)}
	<ProgressbarDefaultStructure {...props} />
{/snippet}

<div use:ariaDirective use:__AgnosUISveltePreprocess__classDirective={($className$ || undefined)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(ariaDirective, [__AgnosUISveltePreprocess__classDirective, ($className$ || undefined)])}>
	<Slot content={$structure$} props={slotContext} />
</div>
`;export{t as default};
