import type {WidgetPropsSlots, PropsConfig} from '@agnos-ui/svelte-headless/types';
import {createModal as coreCreateModal, getModalDefaultConfig as coreGetModalDefaultConfig} from '@agnos-ui/core-bootstrap/components/modal';
import type {ModalProps, ModalWidget} from './modal.gen';

export type * from './modal.gen';
export const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;
export {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/core-bootstrap/components/modal';
export const getModalDefaultConfig: () => ModalProps<any> = coreGetModalDefaultConfig as any;

export interface ModalSlots extends WidgetPropsSlots<ModalProps<any>> {}
