const t=`import { getContext, setContext } from 'svelte';
// Context specific part
const contextInjectionKey = Symbol('accordion-api');
export function setAccordionApi(accordionApi) {
    setContext(contextInjectionKey, accordionApi);
}
export function getAccordionApi() {
    return getContext(contextInjectionKey);
}
`;export{t as default};
