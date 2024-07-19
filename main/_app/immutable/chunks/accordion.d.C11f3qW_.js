const o=`import type { WidgetPropsSlots } from '@agnos-ui/svelte-headless/types';
import type { AccordionApi, AccordionItemProps, AccordionProps } from './accordion.gen';
export * from './accordion.gen';
export interface AccordionSlots extends WidgetPropsSlots<AccordionProps> {
}
export interface AccordionItemSlots extends WidgetPropsSlots<AccordionItemProps> {
}
export declare function setAccordionApi(accordionApi: AccordionApi): void;
export declare function getAccordionApi(): AccordionApi;
`;export{o as default};
