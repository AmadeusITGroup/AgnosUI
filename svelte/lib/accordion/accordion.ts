import type {
	AccordionItemContext as AccordionItemCoreContext,
	WidgetProps,
	WidgetState,
	createAccordion,
	AccordionItemWidget as AccordionItemCoreWidget,
} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';
import type {AccordionApi as AccordionCoreApi} from '@agnos-ui/core';
import {getContext, setContext} from 'svelte';

export type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionSlots = WidgetPropsSlots<AccordionProps>;
export type AccordionItemWidget = AdaptWidgetSlots<AccordionItemCoreWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<AccordionItemCoreContext>;

// Context specific part
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionCoreApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionCoreApi {
	return getContext(contextInjectionKey);
}
