const e=`import type { WidgetSlotContext, SlotContent, Widget, WidgetFactory, Directive } from '@agnos-ui/react-headless/types';
import type { TransitionFn } from '@agnos-ui/react-headless/services/transitions/baseTransitions';
/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
declare const export_getToastDefaultConfig: () => ToastProps;
export { export_getToastDefaultConfig as getToastDefaultConfig };
export type ToastContext = WidgetSlotContext<ToastWidget>;
export interface ToastState {
    /**
     * Is \`true\` when the alert is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number;
    /**
     * Global template for the toast component
     */
    structure: SlotContent<ToastContext>;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    /**
     * Header template for the toast component
     */
    header: SlotContent<ToastContext>;
}
export interface ToastProps {
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    transition: TransitionFn;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number;
    /**
     * Global template for the toast component
     */
    structure: SlotContent<ToastContext>;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    /**
     * Header template for the toast component
     */
    header: SlotContent<ToastContext>;
}
export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, object, ToastDirectives>;
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
declare const export_createToast: WidgetFactory<ToastWidget>;
export { export_createToast as createToast };
export interface ToastApi {
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     */
    close(): void;
    /**
     * Triggers the alert to be displayed for the user.
     */
    open(): void;
}
export interface ToastDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
    /**
     * Directive that handles the autohide of the toast component
     */
    autoHideDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the body
     */
    bodyDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the close button depending on the presence of the header
     */
    closeButtonDirective: Directive;
}
`;export{e as default};
