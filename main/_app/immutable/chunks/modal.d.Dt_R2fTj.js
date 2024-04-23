const t=`export * from '@agnos-ui/core-bootstrap/components/modal';
import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetPropsSlots, PropsConfig, WidgetProps, WidgetState, PropType } from '@agnos-ui/svelte-headless/types';
import type { ModalWidget as CoreWidget, ModalContext as CoreContext } from '@agnos-ui/core-bootstrap/components/modal';
export interface ModalWidget<Data> extends AdaptWidgetSlots<CoreWidget<Data>> {
}
export interface ModalProps<Data> extends WidgetProps<ModalWidget<Data>> {
}
export interface ModalState<Data> extends WidgetState<ModalWidget<Data>> {
}
export interface ModalApi<Data> extends PropType<ModalWidget<Data>, 'api'> {
}
export interface ModalSlots<Data> extends WidgetPropsSlots<ModalProps<Data>> {
}
export interface ModalContext<Data> extends AdaptSlotContentProps<CoreContext<Data>> {
}
export declare const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
`;export{t as default};
