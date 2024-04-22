const t=`<script lang="ts">
	import {createToast, type ToastProps as Props} from '@agnos-ui/svelte-headless/components/toast';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import closeIconSvg from './close_icon.svg?raw';
	type $$Props = Partial<Pick<Props, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>>;
	export const {
		stores: {className$, dismissible$, ariaCloseButtonLabel$, hidden$},
		patchChangedProps,
		api,
	} = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		$$props,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export let visible: boolean | undefined = undefined;

	$: patchChangedProps($$props);
<\/script>

{#if !$hidden$}
	<div class="alert {$className$} flex">
		<slot />
		{#if $dismissible$}
			<button class="btn btn-sm btn-circle btn-ghost" on:click={api.close} aria-label={$ariaCloseButtonLabel$}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
`;export{t as default};
