import type {WidgetFactory, WidgetPropsSlots} from '@agnos-ui/svelte-headless/types';
import {
	createAccordion as coreCreateAccordion,
	getAccordionDefaultConfig as coreGetAccordionDefaultConfig,
	createAccordionItem as coreCreateAccordionItem,
} from '@agnos-ui/core-bootstrap/components/accordion';
import type {AccordionWidget, AccordionApi, AccordionProps, AccordionItemProps, AccordionItemWidget} from './accordion.gen';

export type * from './accordion.gen';
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;
export const getAccordionDefaultConfig: () => AccordionProps = coreGetAccordionDefaultConfig as any;
export const createAccordionItem: WidgetFactory<AccordionItemWidget> = coreCreateAccordionItem as any;

export interface AccordionSlots extends WidgetPropsSlots<AccordionProps> {}
export interface AccordionItemSlots extends WidgetPropsSlots<AccordionItemProps> {}

// context
import {getContext, setContext} from 'svelte';

const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionApi {
	return getContext(contextInjectionKey);
}
