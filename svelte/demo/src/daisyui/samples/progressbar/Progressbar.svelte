<script lang="ts">
	import {createProgressbar, type ProgressbarProps} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let props: Partial<Omit<ProgressbarProps, 'min'>> = $props();

	const {
		state,
		attachments: {ariaDirective},
	} = callWidgetFactory(createProgressbar, {
		props,
	});
</script>

<progress {@attach ariaDirective()} class="progress {state.className}" value={state.value} max={state.max}></progress>
