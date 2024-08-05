import type {WidgetPropsSlots} from '@agnos-ui/svelte-headless/types';
import type {AccordionApi, AccordionItemProps, AccordionProps} from './accordion.gen';

export * from './accordion.gen';

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
