<script lang="ts">
	import {type AccordionItemProps, type AccordionItemWidget} from '@agnos-ui/svelte-headless/components/accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount, type Snippet} from 'svelte';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {getAccordionApi} from './accordion';

	let {
		header,
		children,
		visible = $bindable(),
		...props
	}: Partial<Pick<AccordionItemProps, 'className' | 'destroyOnHide' | 'onVisibleChange' | 'visible' | 'onHidden' | 'onShown' | 'id'>> & {
		header: Snippet;
		children: Snippet;
	} = $props();

	const transition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});

	const {registerItem} = getAccordionApi();
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		get props() {
			return {visible, ...props};
		},
		enablePatchChanged: true,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
		defaultConfig: {
			transition,
		},
	});
	const {
		state,
		directives: {itemDirective, toggleDirective, transitionDirective, bodyContainerAttrsDirective},
		api: {toggle},
	} = widget;

	const onkeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			toggle();
		}
	};
	onMount(widget.api.initDone);
</script>

<div class="collapse collapse-arrow bg-base-200" use:itemDirective use:transitionDirective>
	<div role="button" tabindex="0" class="collapse-title text-xl font-medium focus-visible:outline-none" use:toggleDirective {onkeydown}>
		{@render header()}
	</div>
	<div class="collapse-content" use:bodyContainerAttrsDirective>
		{#if state.shouldBeInDOM}
			{@render children()}
		{/if}
	</div>
</div>
