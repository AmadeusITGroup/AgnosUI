<script lang="ts">
	import {createProgressbar, type ProgressbarProps} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<ProgressbarProps>;

	const widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', $$props});
	export const api = widget.api;

	const {
		stores: {className$, percentage$},
		directives: {ariaDirective},
	} = widget;
	$: widget.patchChangedProps($$props);

	const percentFormat = new Intl.NumberFormat('default', {
		style: 'percent',
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	});
</script>

<div use:ariaDirective class="radial-progress {$className$}" style="--thickness: 0.4rem; --value:{$percentage$};">
	{percentFormat.format($percentage$ / 100)}
</div>
