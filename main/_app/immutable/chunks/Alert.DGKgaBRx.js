const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {type AlertContext, createAlert, type AlertApi, type AlertProps} from './alert.gen';
	import {callWidgetFactory} from '../../config';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<AlertProps> = $props();

	const widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		props: {...props, visible},
		defaultConfig: {structure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: AlertApi = widget.api;

	const {
		stores: {structure$, hidden$},
		directives: {transitionDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget, state: $state$});
<\/script>

{#snippet structure(props: AlertContext)}
	<AlertDefaultStructure {...props} />
{/snippet}

{#if !$hidden$}
	<div
		role="alert"
		use:__AgnosUISveltePreprocess__classDirective={"au-alert alert alert-"+($state$.type)+" "+($state$.className)+" "+($state$.dismissible ? 'alert-dismissible' : '')}
		use:transitionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(transitionDirective, [__AgnosUISveltePreprocess__classDirective, "au-alert alert alert-"+($state$.type)+" "+($state$.className)+" "+($state$.dismissible ? 'alert-dismissible' : '')])}
	>
		<Slot content={$structure$} props={slotContext} />
	</div>
{/if}
`;export{t as default};
