const n=`export * from './accordion.gen';
// context
import { getContext, setContext } from 'svelte';
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi) {
    setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi() {
    return getContext(contextInjectionKey);
}
`;export{n as default};
