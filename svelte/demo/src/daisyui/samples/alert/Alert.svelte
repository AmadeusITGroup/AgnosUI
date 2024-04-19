<script lang="ts">
	import {createAlert} from '@agnos-ui/svelte-headless/components/alert';
	import type {AlertProps} from '@agnos-ui/svelte-headless/components/alert';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import closeIconSvg from '@agnos-ui/common/samples/common/close_icon.svg?raw';
	type $$Props = Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>>;

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
		$$props,
		defaultConfig: {transition},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});

	export let visible: boolean | undefined = undefined;

	$: patchChangedProps($$props);
</script>

{#if !$hidden$}
	<div role="alert" class="flex alert {$className$}" use:transitionDirective>
		<slot />
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost ms-auto" on:click={api.close} aria-label={$ariaCloseButtonLabel$}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
