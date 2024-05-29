const t=`<script lang="ts">
	import {type AccordionItemProps, type AccordionItemWidget} from '@agnos-ui/svelte-headless/components/accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount} from 'svelte';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {getAccordionApi} from './accordion';

	type $$Props = Partial<
		Pick<AccordionItemProps, 'itemClass' | 'itemDestroyOnHide' | 'onItemVisibleChange' | 'itemVisible' | 'onItemHidden' | 'onItemShown' | 'itemId'>
	>;

	const itemTransition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});

	const {registerItem} = getAccordionApi();
	export let itemVisible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		$$slots: {},
		$$props,
		events: {
			onItemVisibleChange: (event) => {
				itemVisible = event;
			},
		},
		defaultConfig: {
			itemTransition,
		},
	});
	const {
		stores: {shouldBeInDOM$},
		directives: {accordionItemDirective, toggleDirective, transitionDirective, bodyContainerAttrsDirective},
		api: {toggle},
	} = widget;
	$: widget.patchChangedProps($$props);

	const onEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			toggle();
		}
	};
	onMount(widget.api.initDone);
<\/script>

<div class="collapse collapse-arrow bg-base-200" use:accordionItemDirective use:transitionDirective>
	<div role="button" tabindex="0" class="collapse-title text-xl font-medium focus-visible:outline-none" use:toggleDirective on:keydown={onEnter}>
		<slot name="header"></slot>
	</div>
	<div class="collapse-content" use:bodyContainerAttrsDirective>
		{#if $shouldBeInDOM$}
			<slot name="body"></slot>
		{/if}
	</div>
</div>
`;export{t as default};
