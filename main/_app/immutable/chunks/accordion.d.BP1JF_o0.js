const o=`import type { AccordionApi } from './accordion.gen';
export * from './accordion.gen';
/**
 * Sets the Accordion API in the context.
 *
 * @param accordionApi - The Accordion API to be set in the context.
 */
export declare function setAccordionApi(accordionApi: AccordionApi): void;
/**
 * Retrieves the Accordion API from the Svelte context.
 *
 * @returns {AccordionApi} The Accordion API instance.
 */
export declare function getAccordionApi(): AccordionApi;
`;export{o as default};
