const t=`export * from '@agnos-ui/core/components/pagination';
import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState } from '../../types';
export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationNumberContext>;
export declare const createPagination: WidgetFactory<PaginationWidget>;
`;export{t as default};
