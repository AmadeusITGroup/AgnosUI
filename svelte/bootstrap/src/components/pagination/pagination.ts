export * from '@agnos-ui/core-bootstrap/components/pagination';

import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState, PropType} from '@agnos-ui/svelte-headless/types';
import {createPagination as coreCreatePagination} from '@agnos-ui/core-bootstrap/components/pagination';
import type {
	PaginationWidget as CoreWidget,
	PaginationContext as CoreContext,
	PaginationNumberContext as CoreNumberContext,
} from '@agnos-ui/core-bootstrap/components/pagination';

// widget
export interface PaginationWidget extends AdaptWidgetSlots<CoreWidget> {}
export interface PaginationProps extends WidgetProps<PaginationWidget> {}
export interface PaginationState extends WidgetState<PaginationWidget> {}
export interface PaginationApi extends PropType<PaginationWidget, 'api'> {}
// slots
export interface PaginationContext extends AdaptSlotContentProps<CoreContext> {}
export interface PaginationNumberContext extends AdaptSlotContentProps<CoreNumberContext> {}
// factory
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
