<script lang="ts">
	import {type AccordionItemProps, type AccordionItemWidget} from '@agnos-ui/svelte-headless/components/accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {getAccordionApi} from './accordion';
	import type {Snippet} from 'svelte';

	let {
		header,
		children,
		itemVisible = $bindable(),
		...props
	}: Partial<
		Pick<AccordionItemProps, 'itemClass' | 'itemDestroyOnHide' | 'onItemVisibleChange' | 'itemVisible' | 'onItemHidden' | 'onItemShown' | 'itemId'>
	> & {header: Snippet; children: Snippet} = $props();

	const itemTransition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});

	const {registerItem} = getAccordionApi();
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		props: {itemVisible, ...props},
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
	$effect(() => widget.patchChangedProps({itemVisible, ...props}));

	const onkeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			toggle();
		}
	};
	$effect(widget.api.initDone);
</script>

<div class="collapse collapse-arrow bg-base-200" use:accordionItemDirective use:transitionDirective>
	<div role="button" tabindex="0" class="collapse-title text-xl font-medium focus-visible:outline-none" use:toggleDirective {onkeydown}>
		{@render header()}
	</div>
	<div class="collapse-content" use:bodyContainerAttrsDirective>
		{#if $shouldBeInDOM$}
			{@render children()}
		{/if}
	</div>
</div>
