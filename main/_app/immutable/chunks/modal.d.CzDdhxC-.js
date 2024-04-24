const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, PropsConfig } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/core-bootstrap/components/modal';
export interface ModalWidget<Data> extends AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/modal').ModalWidget<Data>> {
}
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export interface ModalContext<Data> extends AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/modal').ModalContext<Data>> {
}
export declare const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
`;export{t as default};
