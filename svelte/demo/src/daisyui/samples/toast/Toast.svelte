<script lang="ts">
	import {createToast, type ToastProps as Props} from '@agnos-ui/svelte-headless/components/toast';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import closeIconSvg from '@agnos-ui/common/samples/common/close_icon.svg?raw';
	import type {Snippet} from 'svelte';

	let {
		visible = $bindable(),
		children,
		...props
	}: Partial<Pick<Props, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>> & {children: Snippet} = $props();

	const {state, api} = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
</script>

{#if !state.hidden}
	<div class="alert {state.className} flex">
		{@render children()}
		{#if state.dismissible}
			<button class="btn btn-sm btn-circle btn-ghost" onclick={api.close} aria-label={state.ariaCloseButtonLabel}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
