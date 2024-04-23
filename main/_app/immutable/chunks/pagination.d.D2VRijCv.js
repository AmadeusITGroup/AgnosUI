const t=`export * from '@agnos-ui/core-bootstrap/components/pagination';
import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState, PropType } from '@agnos-ui/svelte-headless/types';
import type { PaginationWidget as CoreWidget, PaginationContext as CoreContext, PaginationNumberContext as CoreNumberContext } from '@agnos-ui/core-bootstrap/components/pagination';
export interface PaginationWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface PaginationProps extends WidgetProps<PaginationWidget> {
}
export interface PaginationState extends WidgetState<PaginationWidget> {
}
export interface PaginationApi extends PropType<PaginationWidget, 'api'> {
}
export interface PaginationSlots extends WidgetPropsSlots<PaginationProps> {
}
export interface PaginationContext extends AdaptSlotContentProps<CoreContext> {
}
export interface PaginationNumberContext extends AdaptSlotContentProps<CoreNumberContext> {
}
export declare const createPagination: WidgetFactory<PaginationWidget>;
`;export{t as default};
