import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './slotTypes';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core/accordion').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core/accordion').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core/accordion').AccordionItemContext>;
export type AccordionItemApi = AccordionItemWidget['api'];
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core/accordion';
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;
