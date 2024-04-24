const t=`import type { ModalProps as CoreProps, ModalState as CoreState, ModalActions, ModalApi, ModalDirectives } from '@agnos-ui/core/components/modal';
import type { PropsConfig, Widget, WidgetSlotContext } from '@agnos-ui/core/types';
import type { ExtendWidgetAdaptSlotWidgetProps } from '@agnos-ui/core/services/extendWidget';
export * from '@agnos-ui/core/components/modal';
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;
interface ModalExtraProps {
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     */
    fullscreen: boolean;
}
export interface ModalState<Data> extends ExtendWidgetAdaptSlotWidgetProps<CoreState<Data>, ModalExtraProps, object> {
}
export interface ModalProps<Data> extends ExtendWidgetAdaptSlotWidgetProps<CoreProps<Data>, ModalExtraProps, object> {
}
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalActions, ModalDirectives>;
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
`;export{t as default};
