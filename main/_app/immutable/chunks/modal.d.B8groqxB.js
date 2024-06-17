const o=`import type { PropsConfig } from '@agnos-ui/angular-headless';
import type { ModalProps, ModalWidget } from './modal.gen';
export type * from './modal.gen';
export { modalCloseButtonClick, modalOutsideClick } from '@agnos-ui/angular-headless';
export declare const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
export declare const getModalDefaultConfig: () => ModalProps<any>;
`;export{o as default};
