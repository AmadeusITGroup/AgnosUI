import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '../../types';
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core/components/accordion';
import type {
	AccordionWidget as CoreAccordionWidget,
	AccordionItemWidget as CoreAccordionItemWidget,
	AccordionItemContext as CoreAccordionItemContext,
} from '@agnos-ui/core/components/accordion';

export * from '@agnos-ui/core/components/accordion';

export type AccordionWidget = AdaptWidgetSlots<CoreAccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<CoreAccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<CoreAccordionItemContext>;
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;
