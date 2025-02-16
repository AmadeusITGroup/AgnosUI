const e=`import { modalOutsideClick, modalCloseButtonClick } from '@agnos-ui/core-bootstrap/components/modal';
import type { WidgetSlotContext, SlotContent, Widget, PropsConfig, Directive } from '@agnos-ui/svelte-headless/types';
import type { TransitionFn } from '@agnos-ui/svelte-headless/services/transitions/baseTransitions';
/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
declare const export_getModalDefaultConfig: () => ModalProps<any>;
export { export_getModalDefaultConfig as getModalDefaultConfig };
/**
 * Represents the context for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
export interface ModalContext<Data> extends WidgetSlotContext<ModalWidget<Data>> {
}
/**
 * Represents the state of a modal component.
 *
 * @template Data - The type of the data associated with the modal.
 */
export interface ModalState<Data> {
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
    footer: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    header: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    structure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    title: SlotContent<ModalContext<Data>>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    fullscreen: boolean;
}
/**
 * Interface representing the properties for a modal component.
 *
 * @template Data - The type of data that the modal will handle.
 */
export interface ModalProps<Data> {
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    backdropTransition: TransitionFn;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue \`fadeTransition\`
     */
    modalTransition: TransitionFn;
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
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    closeOnOutsideClick: boolean;
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
    footer: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    header: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    structure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    title: SlotContent<ModalContext<Data>>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    fullscreen: boolean;
}
/**
 * Interface representing the API for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
export interface ModalApi<Data> {
    /**
     * Method to change some modal properties.
     */
    patch: ModalWidget<Data>['patch'];
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
}
/**
 * Represents a modal widget with specific data type.
 *
 * @template Data - The type of data that the modal widget will handle.
 */
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalDirectives>;
/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
declare const export_createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
export { export_createModal as createModal };
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
declare const export_modalOutsideClick: typeof modalOutsideClick;
export { export_modalOutsideClick as modalOutsideClick };
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
declare const export_modalCloseButtonClick: typeof modalCloseButtonClick;
export { export_modalCloseButtonClick as modalCloseButtonClick };
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
     * Directive to apply to the dialog element when using the native {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement | HTMLDialogElement}
     */
    dialogDirective: Directive;
}
`;export{e as default};
