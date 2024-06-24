const t=`import type { ModalProps as CoreProps, ModalState as CoreState, ModalActions, ModalApi as CoreApi, ModalDirectives } from '@agnos-ui/core/components/modal';
import type { PropsConfig, SlotContent, Widget, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/modal';
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;
interface ModalExtraProps<Data> {
    /**
     * Data to use in content slots
     */
    contentData: Data;
    /**
     * Body of the modal.
     */
    children: SlotContent<ModalContext<Data>>;
    /**
     * Footer of the modal.
     */
    slotFooter: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.
     */
    slotHeader: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.children|children} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.
     */
    slotStructure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    slotTitle: SlotContent<ModalContext<Data>>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     */
    fullscreen: boolean;
}
export interface ModalState<Data> extends CoreState, ModalExtraProps<Data> {
}
export interface ModalProps<Data> extends CoreProps, ModalExtraProps<Data> {
}
export interface ModalApi<Data> extends Omit<CoreApi, 'patch'> {
    /**
     * Method to change some modal properties.
     */
    patch: ModalWidget<Data>['patch'];
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
