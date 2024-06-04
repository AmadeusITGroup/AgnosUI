const e=`export * from '@agnos-ui/core-bootstrap/components/accordion';
import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState, WidgetPropsSlots, PropType } from '@agnos-ui/svelte-headless/types';
import type { AccordionWidget as CoreWidget, AccordionItemWidget as CoreItemWidget, AccordionItemContext as CoreItemContext } from '@agnos-ui/core-bootstrap/components/accordion';
export interface AccordionWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface AccordionProps extends WidgetProps<AccordionWidget> {
}
export interface AccordionState extends WidgetState<AccordionWidget> {
}
export interface AccordionApi extends PropType<AccordionWidget, 'api'> {
}
export interface AccordionItemWidget extends AdaptWidgetSlots<CoreItemWidget> {
}
export interface AccordionItemProps extends WidgetProps<AccordionItemWidget> {
}
export interface AccordionItemState extends WidgetState<AccordionItemWidget> {
}
export interface AccordionItemApi extends PropType<AccordionItemWidget, 'api'> {
}
export interface AccordionSlots extends WidgetPropsSlots<AccordionProps> {
}
export interface AccordionItemSlots extends WidgetPropsSlots<AccordionItemProps> {
}
export interface AccordionItemContext extends AdaptSlotContentProps<CoreItemContext> {
}
export declare const createAccordion: WidgetFactory<AccordionWidget>;
export declare function setAccordionApi(accordionApi: AccordionApi): void;
export declare function getAccordionApi(): AccordionApi;
`;export{e as default};
