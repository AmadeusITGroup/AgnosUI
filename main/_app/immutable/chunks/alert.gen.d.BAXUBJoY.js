const e=`import type { WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/svelte-headless/types';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
import type { TransitionFn } from '@agnos-ui/svelte-headless/services/transitions/baseTransitions';
export type AlertContext = WidgetSlotContext<AlertWidget>;
export interface AlertState {
    /**
     * Is \`true\` when the alert is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     */
    visible: boolean;
    /**
     * Accessibility close button label
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Global template for the alert component
     */
    slotStructure: SlotContent<AlertContext>;
    /**
     * Template for the alert content
     */
    slotDefault: SlotContent<AlertContext>;
    /**
     * Type of the alert, following bootstrap types.
     */
    type: BSContextualClass;
}
export interface AlertProps {
    /**
     * Callback called when the alert visibility changed.
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the alert is hidden.
     */
    onHidden: () => void;
    /**
     * Callback called when the alert is shown.
     */
    onShown: () => void;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     */
    transition: TransitionFn;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     */
    animated: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     */
    visible: boolean;
    /**
     * Accessibility close button label
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Global template for the alert component
     */
    slotStructure: SlotContent<AlertContext>;
    /**
     * Template for the alert content
     */
    slotDefault: SlotContent<AlertContext>;
    /**
     * Type of the alert, following bootstrap types.
     */
    type: BSContextualClass;
}
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;
export interface AlertApi {
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     */
    close(): void;
    /**
     * Triggers the alert to be displayed for the user.
     */
    open(): void;
}
export interface AlertDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
}
`;export{e as default};
