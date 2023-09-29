/*
 * Public API Surface of @agnos-ui/angular-headless
 */

export * from '@agnos-ui/core';

export * from './lib/slot.directive';
export * from './lib/slotDefault.directive';
export * from './lib/use.directive';
export * from './lib/slotTypes';
export * from './lib/utils';
export * from './lib/config';

import type {PropsConfig, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './lib/slotTypes';

export type {SlotContent} from './lib/slotTypes';
export type {WidgetsConfig} from './lib/config';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core').AccordionItemContext>;
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core';
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core').AlertContext>;
import {createAlert as coreCreateAlert} from '@agnos-ui/core';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;

export type ModalWidget = AdaptWidgetSlots<import('@agnos-ui/core').ModalWidget>;
export type ModalProps = WidgetProps<ModalWidget>;
export type ModalState = WidgetState<ModalWidget>;
export type ModalContext = AdaptSlotContentProps<import('@agnos-ui/core').ModalContext>;
import {createModal as coreCreateModal} from '@agnos-ui/core';
export const createModal: WidgetFactory<ModalWidget> = coreCreateModal as any;

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationNumberContext>;
import {createPagination as coreCreatePagination} from '@agnos-ui/core';
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
import {createRating as coreCreateRating} from '@agnos-ui/core';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
import {createSelect as coreCreateSelect} from '@agnos-ui/core';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core').ProgressbarContext>;
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
