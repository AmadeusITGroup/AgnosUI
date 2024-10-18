<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {type AlertContext, createAlert, type AlertApi, type AlertProps} from './alert.gen';
	import {callWidgetFactory} from '../../config';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<AlertProps> = $props();

	const widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
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
	export const api: AlertApi = widget.api;

	const {
		state,
		directives: {transitionDirective},
	} = widget;
</script>

{#snippet structure(props: AlertContext)}
	<AlertDefaultStructure {...props} />
{/snippet}

{#if !state.hidden}
	<div
		role="alert"
		class="au-alert alert alert-{state.type} {state.className} {state.dismissible ? 'alert-dismissible' : ''}"
		use:transitionDirective
	>
		<Slot content={state.structure} props={widget} />
	</div>
{/if}
