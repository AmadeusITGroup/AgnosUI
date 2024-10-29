const n=`export * from './accordion.gen';
// context
import { getContext, setContext } from 'svelte';
const contextInjectionKey = Symbol('accordion-api');
/**
 * Sets the Accordion API in the context.
 *
 * @param accordionApi - The Accordion API to be set in the context.
 */
export function setAccordionApi(accordionApi) {
    setContext(contextInjectionKey, accordionApi);
}
/**
 * Retrieves the Accordion API from the Svelte context.
 *
 * @returns {AccordionApi} The Accordion API instance.
 */
export function getAccordionApi() {
    return getContext(contextInjectionKey);
}
`;export{n as default};
