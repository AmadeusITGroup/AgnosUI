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
		icon,
		...props
	}: Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>> & {children: Snippet; icon?: Snippet} = $props();

	const transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	const {
		state,
		directives: {transitionDirective},
		api,
	} = callWidgetFactory(createAlert, {
		get props() {
			return {...props, visible};
		},
		defaultConfig: {transition},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
</script>

{#if !state.hidden}
	<div role="alert" class="alert {state.className}" use:transitionDirective>
		{#if icon}
			{@render icon()}
		{:else}
			<div></div>
		{/if}
		{@render children()}
		{#if state.dismissible}
			<button class="btn btn-circle btn-ghost btn-xs self-start" onclick={api.close} aria-label={state.ariaCloseButtonLabel}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
