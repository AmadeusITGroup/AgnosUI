const e=`import type { WidgetSlotContext, SlotContent, TransitionFn, Widget, Directive } from '@agnos-ui/angular-headless';
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;
export interface ModalState<Data> {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdropbackdrop} is false or
     * because {@link ModalCommonPropsAndState.visiblevisible} is false and there is no current transition.
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
     * Whether the modal should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Data to use in content slots
     */
    contentData: Data;
    /**
     * Body of the modal.
     */
    slotDefault: SlotContent<ModalContext<Data>>;
    /**
     * Footer of the modal.
     */
    slotFooter: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle slotTitle}.
     */
    slotHeader: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader slotHeader}, {@link ModalCommonPropsAndState.slotDefault slotDefault} and {@link ModalCommonPropsAndState.slotFooter slotFooter}.
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
export interface ModalProps<Data> {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     */
    animated: boolean;
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
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.closeclose} method was called).
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
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
     * Whether the modal should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Data to use in content slots
     */
    contentData: Data;
    /**
     * Body of the modal.
     */
    slotDefault: SlotContent<ModalContext<Data>>;
    /**
     * Footer of the modal.
     */
    slotFooter: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle slotTitle}.
     */
    slotHeader: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader slotHeader}, {@link ModalCommonPropsAndState.slotDefault slotDefault} and {@link ModalCommonPropsAndState.slotFooter slotFooter}.
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
export interface ModalApi<Data> {
    /**
     * Method to change some modal properties.
     */
    patch: ModalWidget<Data>['patch'];
    /**
     * Closes the modal with the given result.
     */
    close(result?: any): void;
    /**
     * Opens the modal and returns a promise that is resolved when the modal is closed.
     * The resolved value is the result passed to the {@link ModalApi.closeclose} method and possibly changed by the
     * {@link ModalProps.onBeforeCloseonBeforeClose} event handler
     */
    open(): Promise<any>;
}
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalActions, ModalDirectives>;
export interface ModalBeforeCloseEvent {
    /**
     * Result of the modal, which is the value passed to the {@link ModalApi.closeclose} method
     * and later resolved by the promise returned by the {@link ModalApi.openopen} method.
     * If needed, it can be changed from the {@link ModalProps.onBeforeCloseonBeforeClose} event handler.
     */
    result: any;
    /**
     * Whether to cancel the close of the modal.
     * It can be changed from the {@link ModalProps.onBeforeCloseonBeforeClose} event handler.
     */
    cancel: boolean;
}
export interface ModalActions {
    /**
     * Action to be called when the user clicks on the close button. It closes the modal with the {@link modalCloseButtonClick} result.
     */
    closeButtonClick(event: Pick<MouseEvent, never>): void;
    /**
     * Action to be called when the user clicks on the modal DOM element (which is supposed to have the size of the full viewport).
     * If the click is not done on a descendant of the modal DOM element, it is considered to be done outside the modal
     * and, depending on the value of the {@link ModalProps.closeOnOutsideClickcloseOnOutsideClick} prop, the modal is or isn't closed
     * (with the {@link modalOutsideClick} result).
     */
    modalClick(event: Pick<MouseEvent, 'target' | 'currentTarget'>): void;
}
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
`;export{e as default};
