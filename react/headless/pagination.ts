import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './slotTypes';

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core/pagination').PaginationNumberContext>;
import {createPagination as coreCreatePagination} from '@agnos-ui/core/pagination';
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
