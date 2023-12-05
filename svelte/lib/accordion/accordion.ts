import type {AccordionApi} from '@agnos-ui/svelte-headless/accordion';
import {getContext, setContext} from 'svelte';

// Context specific part
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi: AccordionApi) {
	setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi(): AccordionApi {
	return getContext(contextInjectionKey);
}
