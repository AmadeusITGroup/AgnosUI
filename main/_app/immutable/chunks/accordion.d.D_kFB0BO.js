const o=`import type { WidgetFactory, WidgetPropsSlots } from '@agnos-ui/svelte-headless/types';
import type { AccordionWidget, AccordionApi, AccordionProps, AccordionItemProps, AccordionItemWidget } from './accordion.gen';
export type * from './accordion.gen';
export declare const createAccordion: WidgetFactory<AccordionWidget>;
export declare const getAccordionDefaultConfig: () => AccordionProps;
export declare const createAccordionItem: WidgetFactory<AccordionItemWidget>;
export interface AccordionSlots extends WidgetPropsSlots<AccordionProps> {
}
export interface AccordionItemSlots extends WidgetPropsSlots<AccordionItemProps> {
}
export declare function setAccordionApi(accordionApi: AccordionApi): void;
export declare function getAccordionApi(): AccordionApi;
`;export{o as default};
