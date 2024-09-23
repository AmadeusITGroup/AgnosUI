<script lang="ts">
	import {type AccordionProps, createAccordion} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {setAccordionApi} from './accordion';

	type $$Props = Partial<Pick<AccordionProps, 'closeOthers' | 'onItemShown' | 'onItemHidden' | 'itemDestroyOnHide' | 'className'>>;

	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		$$props,
	});
	setAccordionApi(widget.api);
	$: widget.patchChangedProps($$props);
</script>

<div class="flex flex-col gap-2" use:widget.directives.accordionDirective>
	<slot />
</div>
