<script lang="ts">
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
</script>

{#snippet structure(props: AlertContext)}
	<AlertDefaultStructure {...props} />
{/snippet}

{#if !$hidden$}
	<div
		role="alert"
		class="au-alert alert alert-{$state$.type} {$state$.className} {$state$.dismissible ? 'alert-dismissible' : ''}"
		use:transitionDirective
	>
		<Slot content={$structure$} props={slotContext} />
	</div>
{/if}
