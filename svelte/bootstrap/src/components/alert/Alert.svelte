<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createAlert, type AlertApi, type AlertProps} from './alert';
	import {callWidgetFactory} from '../../config';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<AlertProps> = $props();

	const widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		props: {...props, visible},
		defaultConfig: {slotStructure},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: AlertApi = widget.api;

	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective},
		state$,
	} = widget;

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget, state: $state$});
</script>

{#snippet slotStructure(props)}
	<AlertDefaultStructure {...props} />
{/snippet}

{#if !$hidden$}
	<div
		role="alert"
		class="au-alert alert alert-{$state$.type} {$state$.className} {$state$.dismissible ? 'alert-dismissible' : ''}"
		use:transitionDirective
	>
		<Slot content={$slotStructure$} props={slotContext} />
	</div>
{/if}
