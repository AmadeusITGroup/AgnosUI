export * from '@agnos-ui/core/components/pagination';

import {createPagination as coreCreatePagination} from '@agnos-ui/core/components/pagination';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core/components/pagination').PaginationNumberContext>;
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
