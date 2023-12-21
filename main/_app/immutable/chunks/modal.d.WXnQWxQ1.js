const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, PropsConfig } from '../../types';
export * from '@agnos-ui/core/components/modal';
export type ModalWidget<Data> = AdaptWidgetSlots<import('@agnos-ui/core/components/modal').ModalWidget<Data>>;
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export type ModalContext<Data> = AdaptSlotContentProps<import('@agnos-ui/core/components/modal').ModalContext<Data>>;
export declare const createModal: <Data>(props?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
`;export{t as default};
