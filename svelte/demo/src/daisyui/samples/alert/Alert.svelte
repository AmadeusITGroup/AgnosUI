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

	export const {
		stores: {className$, dismissible$, ariaCloseButtonLabel$, hidden$},
		directives: {transitionDirective},
		patchChangedProps,
		api,
	} = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		props: {...props, visible},
		defaultConfig: {transition},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});

	$effect(() => patchChangedProps({...props, visible}));
</script>

{#if !$hidden$}
	<div role="alert" class="flex alert {$className$}" use:transitionDirective>
		{@render children()}
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost ms-auto" onclick={api.close} aria-label={$ariaCloseButtonLabel$}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
