const o=`export * from '@agnos-ui/core-bootstrap/components/accordion';
import { createAccordion as coreCreateAccordion } from '@agnos-ui/core-bootstrap/components/accordion';
export const createAccordion = coreCreateAccordion;
import { getContext, setContext } from 'svelte';
// Context specific part
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi) {
    setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi() {
    return getContext(contextInjectionKey);
}
`;export{o as default};
