const o=`import type { WidgetPropsSlots, PropsConfig } from '@agnos-ui/svelte-headless/types';
import type { ModalProps, ModalWidget } from './modal.gen';
export type * from './modal.gen';
export declare const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
export { modalCloseButtonClick, modalOutsideClick } from '@agnos-ui/core-bootstrap/components/modal';
export declare const getModalDefaultConfig: () => ModalProps<any>;
export interface ModalSlots extends WidgetPropsSlots<ModalProps<any>> {
}
`;export{o as default};
