import type {WidgetFactory} from '@agnos-ui/angular-headless';
import {
	createAccordion as coreCreateAccordion,
	getAccordionDefaultConfig as coreGetAccordionDefaultConfig,
	createAccordionItem as coreCreateAccordionItem,
} from '@agnos-ui/core-bootstrap/components/accordion';
import type {AccordionItemWidget, AccordionProps, AccordionWidget} from './accordion.gen';

export type * from './accordion.gen';
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;
export const getAccordionDefaultConfig: () => AccordionProps = coreGetAccordionDefaultConfig as any;
export const createAccordionItem: WidgetFactory<AccordionItemWidget> = coreCreateAccordionItem as any;
