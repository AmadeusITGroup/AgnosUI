<script lang="ts">
	import {createProgressbar, type ProgressbarProps as Props} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<Pick<Props, 'max' | 'ariaLabel' | 'value' | 'className' | 'ariaValueTextFn'>>;

	const widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', $$slots: {}, $$props, events: {}});
	export const api = widget.api;
	const {
		stores: {value$, max$, className$},
		directives: {ariaDirective},
	} = widget;
	$: widget.patchChangedProps($$props);
</script>

<progress use:ariaDirective class="progress {$className$}" value={$value$} max={$max$} />
