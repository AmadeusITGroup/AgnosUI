import type {AccordionApi} from './accordion.gen';

export * from './accordion.gen';

// context
import {getContext, setContext} from 'svelte';

const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionApi {
	return getContext(contextInjectionKey);
}
