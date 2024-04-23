<script lang="ts">
	import {createProgressbar, type ProgressbarProps} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<Omit<ProgressbarProps, 'min'>>;

	const {
		stores: {value$, max$, className$},
		directives: {ariaDirective},
		patchChangedProps,
	} = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', $$props});
	$: patchChangedProps($$props);
</script>

<progress use:ariaDirective class="progress {$className$}" value={$value$} max={$max$} />
