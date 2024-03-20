<script lang="ts">
	import {createToast, type ToastProps as Props} from '@agnos-ui/svelte-headless/components/toast';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	type $$Props = Partial<Pick<Props, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>>;
	export const {
		stores: {className$, dismissible$, ariaCloseButtonLabel$, hidden$},
		patchChangedProps,
		api,
	} = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		$$slots: {},
		$$props,
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
	<div class="alert {$className$}">
		<slot />
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost justify-self-end" on:click={() => api.close()} aria-label={$ariaCloseButtonLabel$}>✕</button>
		{/if}
	</div>
{/if}
