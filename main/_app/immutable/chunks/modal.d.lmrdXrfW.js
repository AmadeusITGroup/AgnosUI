const o=`import type { ModalProps, ModalWidget } from '@agnos-ui/core/components/modal';
import type { PropsConfig } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/modal';
/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
export declare function getModalDefaultConfig(): ModalProps<any>;
/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export declare const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
`;export{o as default};
