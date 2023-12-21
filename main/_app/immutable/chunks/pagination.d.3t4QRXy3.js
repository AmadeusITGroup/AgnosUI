const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory } from '../../types';
export * from '@agnos-ui/core/components/pagination';
export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationNumberContext>;
export declare const createPagination: WidgetFactory<PaginationWidget>;
`;export{t as default};
