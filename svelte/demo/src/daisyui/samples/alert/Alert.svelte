<script lang="ts">
	import {createAlert} from '@agnos-ui/svelte-headless/components/alert';
	import type {AlertProps} from '@agnos-ui/svelte-headless/components/alert';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import closeIconSvg from '@agnos-ui/common/samples/common/close_icon.svg?raw';
	import type {Snippet} from 'svelte';

	let {
		visible = $bindable(),
		children,
		...props
	}: Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>> & {children: Snippet} = $props();

	const transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	const {
		state,
		directives: {transitionDirective},
		api,
	} = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {transition},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
</script>

{#if !state.hidden}
	<div role="alert" class="flex alert {state.className}" use:transitionDirective>
		{@render children()}
		{#if state.dismissible}
			<button class="btn btn-sm btn-circle btn-ghost ms-auto" onclick={api.close} aria-label={state.ariaCloseButtonLabel}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
