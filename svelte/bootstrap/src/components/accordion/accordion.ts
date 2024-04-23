export * from '@agnos-ui/core-bootstrap/components/accordion';

import type {
	AdaptSlotContentProps,
	AdaptWidgetSlots,
	WidgetFactory,
	WidgetProps,
	WidgetState,
	WidgetPropsSlots,
	PropType,
} from '@agnos-ui/svelte-headless/types';
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core-bootstrap/components/accordion';
import type {
	AccordionWidget as CoreWidget,
	AccordionItemWidget as CoreItemWidget,
	AccordionItemContext as CoreItemContext,
} from '@agnos-ui/core-bootstrap/components/accordion';

// widget
export interface AccordionWidget extends AdaptWidgetSlots<CoreWidget> {}
export interface AccordionProps extends WidgetProps<AccordionWidget> {}
export interface AccordionState extends WidgetState<AccordionWidget> {}
export interface AccordionApi extends PropType<AccordionWidget, 'api'> {}
export interface AccordionItemWidget extends AdaptWidgetSlots<CoreItemWidget> {}
export interface AccordionItemProps extends WidgetProps<AccordionItemWidget> {}
export interface AccordionItemState extends WidgetState<AccordionItemWidget> {}
export interface AccordionItemApi extends PropType<AccordionItemWidget, 'api'> {}
// slots
export interface AccordionSlots extends WidgetPropsSlots<AccordionProps> {}
export interface AccordionItemContext extends AdaptSlotContentProps<CoreItemContext> {}
// factory
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;

// context
import {getContext, setContext} from 'svelte';

const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionApi {
	return getContext(contextInjectionKey);
}
