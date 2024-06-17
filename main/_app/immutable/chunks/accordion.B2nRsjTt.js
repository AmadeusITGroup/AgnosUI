const o=`import { createAccordion as coreCreateAccordion, getAccordionDefaultConfig as coreGetAccordionDefaultConfig, createAccordionItem as coreCreateAccordionItem, } from '@agnos-ui/core-bootstrap/components/accordion';
export const createAccordion = coreCreateAccordion;
export const getAccordionDefaultConfig = coreGetAccordionDefaultConfig;
export const createAccordionItem = coreCreateAccordionItem;
// context
import { getContext, setContext } from 'svelte';
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi) {
    setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi() {
    return getContext(contextInjectionKey);
}
`;export{o as default};
