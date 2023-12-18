const e=`import type { WidgetsCommonPropsAndState } from '../commonProps';
import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext } from '../../types';
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
export declare const modalOutsideClick: unique symbol;
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
export declare const modalCloseButtonClick: unique symbol;
/**
 * Context of the modal slots.
 */
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;
/**
 * Properties of the modal widget that are also in the state of the modal.
 */
export interface ModalCommonPropsAndState<Data> extends WidgetsCommonPropsAndState {
    /**
     * Value of the aria-label attribute to put on the close button.
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     */
    container: HTMLElement | null;
    /**
     * Body of the modal.
     */
    slotDefault: SlotContent<ModalContext<Data>>;
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
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.
     */
    slotStructure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    slotTitle: SlotContent<ModalContext<Data>>;
    /**
     * Whether the modal should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Data to use in content slots
     */
    contentData: Data;
}
/**
 * Type of the parameter of {@link ModalProps.onBeforeClose|onBeforeClose}.
 */
export interface ModalBeforeCloseEvent {
    /**
     * Result of the modal, which is the value passed to the {@link ModalApi.close|close} method
     * and later resolved by the promise returned by the {@link ModalApi.open|open} method.
     * If needed, it can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
     */
    result: any;
    /**
     * Whether to cancel the close of the modal.
     * It can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
     */
    cancel: boolean;
}
/**
 * Properties of the modal widget.
 */
export interface ModalProps<Data> extends ModalCommonPropsAndState<Data> {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     */
    animation: boolean;
    /**
     * Whether a backdrop should be created behind the modal.
     */
    backdrop: boolean;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     */
    backdropTransition: TransitionFn;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     */
    closeOnOutsideClick: boolean;
    /**
     * The transition to use for the modal.
     */
    modalTransition: TransitionFn;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     */
    onShown: () => void;
}
/**
 * State of the modal widget.
 */
export interface ModalState<Data> extends ModalCommonPropsAndState<Data> {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or
     * because {@link ModalCommonPropsAndState.visible|visible} is false and there is no current transition.
     */
    backdropHidden: boolean;
    /**
     * Whether the modal is fully hidden.
     */
    hidden: boolean;
    /**
     * Whether there is an active transition to either display or hide the modal.
     */
    transitioning: boolean;
    /**
     * DOM element of the modal.
     */
    modalElement: HTMLElement | null;
}
/**
 * API of the modal widget.
 */
export interface ModalApi<Data> {
    /**
     * Closes the modal with the given result.
     *
     * @param result - result of the modal, as passed in the {@link ModalBeforeCloseEvent.result|result} property of the event passed to the
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler (and possibly changed by it) and resolved by the promise returned by the {@link ModalApi.open|open} method.
     */
    close(result?: any): void;
    /**
     * Opens the modal and returns a promise that is resolved when the modal is closed.
     * The resolved value is the result passed to the {@link ModalApi.close|close} method and possibly changed by the
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler
     */
    open(): Promise<any>;
    /**
     * Method to change some modal properties.
     */
    patch: ModalWidget<Data>['patch'];
}
/**
 * Actions of the modal widget.
 */
export interface ModalActions {
    /**
     * Action to be called when the user clicks on the close button. It closes the modal with the {@link modalCloseButtonClick} result.
     * @param event - mouse event
     */
    closeButtonClick(event: Pick<MouseEvent, never>): void;
    /**
     * Action to be called when the user clicks on the modal DOM element (which is supposed to have the size of the full viewport).
     * If the click is not done on a descendant of the modal DOM element, it is considered to be done outside the modal
     * and, depending on the value of the {@link ModalProps.closeOnOutsideClick|closeOnOutsideClick} prop, the modal is or isn't closed
     * (with the {@link modalOutsideClick} result).
     * @param event - mouse event
     */
    modalClick(event: Pick<MouseEvent, 'target' | 'currentTarget'>): void;
}
/**
 * Directives of the modal widget.
 */
export interface ModalDirectives {
    /**
     * Directive to put on the modal DOM element.
     */
    modalDirective: Directive;
    /**
     * Directive to put on the backdrop DOM element.
     */
    backdropDirective: Directive;
    /**
     * Portal directive to put on the modal DOM element.
     */
    modalPortalDirective: Directive;
    /**
     * Portal directive to put on the backdrop DOM element.
     */
    backdropPortalDirective: Directive;
}
/**
 * Modal widget.
 */
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalActions, ModalDirectives>;
/**
 * Returns a copy of the default modal config.
 * @returns a copy of the default modal config
 */
export declare function getModalDefaultConfig(): {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     */
    animation: boolean;
    /**
     * Whether a backdrop should be created behind the modal.
     */
    backdrop: boolean;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     */
    backdropTransition: TransitionFn;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     */
    closeOnOutsideClick: boolean;
    /**
     * The transition to use for the modal.
     */
    modalTransition: TransitionFn;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     */
    onShown: () => void;
    /**
     * Value of the aria-label attribute to put on the close button.
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     */
    container: HTMLElement | null;
    /**
     * Body of the modal.
     */
    slotDefault: SlotContent<ModalContext<any>>;
    /**
     * Footer of the modal.
     */
    slotFooter: SlotContent<ModalContext<any>>;
    /**
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.
     */
    slotHeader: SlotContent<ModalContext<any>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.
     */
    slotStructure: SlotContent<ModalContext<any>>;
    /**
     * Title of the modal.
     */
    slotTitle: SlotContent<ModalContext<any>>;
    /**
     * Whether the modal should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Data to use in content slots
     */
    contentData: any;
    className: string;
};
/**
 * Creates a new modal widget instance.
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export declare function createModal<Data>(config$?: PropsConfig<ModalProps<Data>>): ModalWidget<Data>;
`;export{e as default};
