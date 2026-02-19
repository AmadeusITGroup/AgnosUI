const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {createProgressbar, type ProgressbarContext, type ProgressbarProps} from './progressbar.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';

	let props: Partial<ProgressbarProps> = $props();

	const widget = callWidgetFactory(createProgressbar, {
		get props() {
			return props;
		},
		defaultConfig: {
			structure,
		},
	});
	const {
		state,
		directives: {ariaDirective},
	} = widget;
<\/script>

{#snippet structure(props: ProgressbarContext)}
	<ProgressbarDefaultStructure {...props} />
{/snippet}

<div use:ariaDirective use:__AgnosUISveltePreprocess__classDirective={(state.className || undefined)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(ariaDirective, [__AgnosUISveltePreprocess__classDirective, (state.className || undefined)])}>
	<Slot content={state.structure} props={widget} />
</div>
`;export{t as default};
