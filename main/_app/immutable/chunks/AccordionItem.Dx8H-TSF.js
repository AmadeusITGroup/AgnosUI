const t=`<script lang="ts">
	import {type AccordionItemProps, type AccordionItemWidget} from '@agnos-ui/svelte-headless/components/accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount} from 'svelte';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {getAccordionApi} from './accordion';

	type $$Props = Partial<Pick<AccordionItemProps, 'className' | 'destroyOnHide' | 'onVisibleChange' | 'visible' | 'onHidden' | 'onShown' | 'id'>>;

	const transition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});

	const {registerItem} = getAccordionApi();
	export let visible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		$$slots: {},
		$$props,
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
		stores: {shouldBeInDOM$},
		directives: {itemDirective, toggleDirective, transitionDirective, bodyContainerAttrsDirective},
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

<div class="collapse collapse-arrow bg-base-200" use:itemDirective use:transitionDirective>
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
