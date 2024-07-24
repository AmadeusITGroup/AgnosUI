const e=`import type { WidgetsCommonPropsAndState } from '../commonProps';
import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { Directive, PropsConfig, Widget } from '../../types';
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
 * Properties of the modal widget that are also in the state of the modal.
 */
interface ModalCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
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
export interface ModalProps extends ModalCommonPropsAndState {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * Whether a backdrop should be created behind the modal.
     *
     * @defaultValue \`true\`
     */
    backdrop: boolean;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue
     * \`\`\`ts
     * async () => {}
     * \`\`\`
     */
    backdropTransition: TransitionFn;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    closeOnOutsideClick: boolean;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue
     * \`\`\`ts
     * async () => {}
     * \`\`\`
     */
    modalTransition: TransitionFn;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
}
/**
 * State of the modal widget.
 */
export interface ModalState extends ModalCommonPropsAndState {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or
     * because {@link ModalProps.visible|visible} is false and there is no current transition.
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
export interface ModalApi {
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
    patch: ModalWidget['patch'];
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
    /**
     * Directive that adds all the necessary attributes to the close button
     */
    closeButtonDirective: Directive;
    /**
     * Directive to apply to the dialog element when using the native [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
     */
    dialogDirective: Directive;
}
/**
 * Modal widget.
 */
export type ModalWidget = Widget<ModalProps, ModalState, ModalApi, ModalActions, ModalDirectives>;
/**
 * Returns a copy of the default modal config.
 * @returns a copy of the default modal config
 */
export declare function getModalDefaultConfig(): {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * Whether a backdrop should be created behind the modal.
     *
     * @defaultValue \`true\`
     */
    backdrop: boolean;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue
     * \`\`\`ts
     * async () => {}
     * \`\`\`
     */
    backdropTransition: TransitionFn;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    closeOnOutsideClick: boolean;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue
     * \`\`\`ts
     * async () => {}
     * \`\`\`
     */
    modalTransition: TransitionFn;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    className: string;
};
/**
 * Creates a new modal widget instance.
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export declare function createModal(config$?: PropsConfig<ModalProps>): ModalWidget;
export {};
`;export{e as default};
