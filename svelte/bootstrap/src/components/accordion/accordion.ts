import type {
	AdaptSlotContentProps,
	AdaptWidgetSlots,
	WidgetFactory,
	WidgetProps,
	WidgetState,
	WidgetPropsSlots,
} from '@agnos-ui/svelte-headless/types';
export * from '@agnos-ui/core-bootstrap/components/accordion';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/accordion').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionSlots = WidgetPropsSlots<AccordionProps>;
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/accordion').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/accordion').AccordionItemContext>;
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core-bootstrap/components/accordion';
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;

import {getContext, setContext} from 'svelte';

// Context specific part
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionApi {
	return getContext(contextInjectionKey);
}
