const t=`import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetPropsSlots, PropsConfig, WidgetProps, WidgetState } from '@agnos-ui/svelte-headless/types';
export * from '@agnos-ui/core-bootstrap/components/modal';
export type ModalWidget<Data> = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/modal').ModalWidget<Data>>;
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export type ModalContext<Data> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/modal').ModalContext<Data>>;
export type ModalSlots<Data> = WidgetPropsSlots<ModalProps<Data>>;
export declare const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
`;export{t as default};
