import type {PropsConfig, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetPropsSlots} from './slotTypes';

export type ModalWidget<Data> = AdaptWidgetSlots<import('@agnos-ui/core/modal').ModalWidget<Data>>;
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export type ModalContext<Data> = AdaptSlotContentProps<import('@agnos-ui/core/modal').ModalContext<Data>>;
export type ModalSlots<Data> = WidgetPropsSlots<ModalProps<Data>>;
import {createModal as coreCreateModal} from '@agnos-ui/core/modal';
export const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;

export {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/core/modal';
