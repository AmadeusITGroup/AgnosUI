import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, PropsConfig} from '@agnos-ui/angular-headless';
import {createModal as coreCreateModal} from '@agnos-ui/core-bootstrap/components/modal';

export * from '@agnos-ui/core-bootstrap/components/modal';

export type ModalWidget<Data> = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/modal').ModalWidget<Data>>;
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export type ModalContext<Data> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/modal').ModalContext<Data>>;
export const createModal: <Data>(props?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;
