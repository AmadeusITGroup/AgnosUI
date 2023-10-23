/*
 * Public API Surface of @agnos-ui/angular-headless
 */

export * from '@agnos-ui/core';
export * from './lib/config';
export type {WidgetsConfig} from './lib/config';
export * from './lib/slot.directive';
export * from './lib/slotDefault.directive';
export * from './lib/slotTypes';
export type {SlotContent} from './lib/slotTypes';
export * from './lib/use.directive';
export * from './lib/utils';

import type {PropsConfig, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core';
import {
	createAccordion as coreCreateAccordion,
	createAlert as coreCreateAlert,
	createModal as coreCreateModal,
	createPagination as coreCreatePagination,
	createProgressbar as coreCreateProgressbar,
	createRating as coreCreateRating,
	createSelect as coreCreateSelect,
} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './lib/slotTypes';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core').AccordionItemContext>;
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core').AlertContext>;
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;

export type ModalWidget = AdaptWidgetSlots<import('@agnos-ui/core').ModalWidget>;
export type ModalProps = WidgetProps<ModalWidget>;
export type ModalState = WidgetState<ModalWidget>;
export type ModalContext = AdaptSlotContentProps<import('@agnos-ui/core').ModalContext>;
export const createModal: WidgetFactory<ModalWidget> = coreCreateModal as any;

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationNumberContext>;
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;

export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core').ProgressbarContext>;
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
