import type {PropsConfig} from '@agnos-ui/angular-headless';
import {createModal as coreCreateModal, getModalDefaultConfig as coreGetModalDefaultConfig} from '@agnos-ui/core-bootstrap/components/modal';
import type {ModalProps, ModalWidget} from './modal.gen';

export type * from './modal.gen';
export {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/angular-headless';
export const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;
export const getModalDefaultConfig: () => ModalProps<any> = coreGetModalDefaultConfig as any;
