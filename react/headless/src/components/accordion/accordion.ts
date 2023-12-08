export * from '@agnos-ui/core/components/accordion';

import {createAccordion as coreCreateAccordion} from '@agnos-ui/core/components/accordion';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/accordion').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/accordion').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core/components/accordion').AccordionItemContext>;
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;
