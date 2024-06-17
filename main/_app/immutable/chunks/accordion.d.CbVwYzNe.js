const o=`import type { WidgetFactory } from '@agnos-ui/angular-headless';
import type { AccordionItemWidget, AccordionProps, AccordionWidget } from './accordion.gen';
export type * from './accordion.gen';
export declare const createAccordion: WidgetFactory<AccordionWidget>;
export declare const getAccordionDefaultConfig: () => AccordionProps;
export declare const createAccordionItem: WidgetFactory<AccordionItemWidget>;
`;export{o as default};
