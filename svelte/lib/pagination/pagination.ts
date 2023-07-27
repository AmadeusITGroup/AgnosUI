import type {PaginationContext as PaginationCoreContext, WidgetProps, WidgetState, createPagination} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';

export type PaginationWidget = AdaptWidgetSlots<ReturnType<typeof createPagination>>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<PaginationCoreContext>;
export type PaginationSlots = WidgetPropsSlots<PaginationProps>;
