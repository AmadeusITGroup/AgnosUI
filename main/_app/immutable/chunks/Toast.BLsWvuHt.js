const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createToast} from './toast.gen';
	import {callWidgetFactory} from '../../config';
	import ToastDefaultStructure from './ToastDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ToastProps> = $props();

	const widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {structure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ToastApi = widget.api;

	const {
		state,
		directives: {transitionDirective, autoHideDirective, bodyDirective},
	} = widget;
<\/script>

{#snippet structure(props: ToastContext)}
	<ToastDefaultStructure {...props} />
{/snippet}

{#if !state.hidden}
	<div
		use:__AgnosUISveltePreprocess__classDirective={"toast"}
		class:toast-dismissible={state.dismissible}
		class:d-flex={!state.header}
		use:transitionDirective
		use:autoHideDirective
		use:bodyDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(transitionDirective, autoHideDirective, bodyDirective, [__AgnosUISveltePreprocess__classDirective, "toast"])}
	>
		<Slot content={state.structure} props={widget} />
	</div>
{/if}
`;export{t as default};
