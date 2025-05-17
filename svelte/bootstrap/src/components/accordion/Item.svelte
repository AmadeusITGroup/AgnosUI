<script lang="ts">
	import type {AccordionItemApi, AccordionItemContext, AccordionItemProps} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;

	const id = $props.id();
	let {visible = $bindable(), ...props}: Partial<AccordionItemProps> = $props();
	const widget = callWidgetFactory(registerItem, {
		get props() {
			return {...props, visible};
		},
		defaultConfig: {structure, id},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	const {
		state,
		attachments: {itemDirective},
	} = widget;
	export const api: AccordionItemApi = widget.api;

	onMount(() => {
		widget.api.initDone();
	});
</script>

{#snippet structure(props: AccordionItemContext)}
	<ItemDefaultStructure {...props} />
{/snippet}

<div class="accordion-item" {@attach itemDirective()}>
	<Slot content={state.structure} props={widget} />
</div>
