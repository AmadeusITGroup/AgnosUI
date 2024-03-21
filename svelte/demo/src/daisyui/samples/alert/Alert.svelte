<script lang="ts">
	import {createAlert} from '@agnos-ui/svelte-headless/components/alert';
	import type {AlertProps} from '@agnos-ui/svelte-headless/components/alert';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	type $$Props = Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>>;
	export const {
		stores: {className$, dismissible$, ariaCloseButtonLabel$, hidden$},
		patchChangedProps,
		api,
	} = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
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
	<div role="alert" class="alert {$className$}">
		<slot />
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost justify-self-end" on:click={api.close} aria-label={$ariaCloseButtonLabel$}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg
				>
			</button>
		{/if}
	</div>
{/if}
