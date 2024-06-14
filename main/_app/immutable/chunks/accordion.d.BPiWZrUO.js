const o=`import type { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from 'react';
import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { AccordionWidget, AccordionApi, AccordionItemProps, AccordionProps, AccordionItemApi } from './accordion.gen';
export type * from './accordion.gen';
export declare const createAccordion: WidgetFactory<AccordionWidget>;
export declare const AccordionItem: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionItemProps>> & RefAttributes<AccordionItemApi>>;
export declare const Accordion: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionProps>> & RefAttributes<AccordionApi>>;
`;export{o as default};
