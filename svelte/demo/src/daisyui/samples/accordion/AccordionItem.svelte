<script lang="ts">
	import {type AccordionItemProps} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount, type Snippet} from 'svelte';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {getAccordionApi} from './accordion';

	const id = $props.id();
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
	const widget = callWidgetFactory(registerItem, {
		get props() {
			return {visible, ...props};
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
		defaultConfig: {
			transition,
			id,
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

<div class="collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring" use:itemDirective use:transitionDirective>
	<div role="button" tabindex="0" class="collapse-title font-semibold focus-visible:outline-hidden" use:toggleDirective {onkeydown}>
		{@render header()}
	</div>
	<div class="collapse-content text-sm" use:bodyContainerAttrsDirective>
		{#if state.shouldBeInDOM}
			{@render children()}
		{/if}
	</div>
</div>
