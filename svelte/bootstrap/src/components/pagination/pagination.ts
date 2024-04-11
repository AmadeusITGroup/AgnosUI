import type {
	AdaptSlotContentProps,
	AdaptWidgetSlots,
	WidgetPropsSlots,
	WidgetFactory,
	WidgetProps,
	WidgetState,
} from '@agnos-ui/svelte-headless/types';
import {createPagination as coreCreatePagination} from '@agnos-ui/core-bootstrap/components/pagination';

export * from '@agnos-ui/core-bootstrap/components/pagination';

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/pagination').PaginationNumberContext>;
export type PaginationSlots = WidgetPropsSlots<PaginationProps>;
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
