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

	const {
		stores: {className$, dismissible$, ariaCloseButtonLabel$, hidden$},
		patchChangedProps,
		api,
	} = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		props: {...props, visible},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	$effect(() => patchChangedProps({...props, visible}));
</script>

{#if !$hidden$}
	<div class="alert {$className$} flex">
		{@render children()}
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost" onclick={api.close} aria-label={$ariaCloseButtonLabel$}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
