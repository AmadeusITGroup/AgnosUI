const n=`import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { WidgetsCommonPropsAndState } from '../commonProps';
import type { ConfigValidator, Directive, PropsConfig, Widget } from '../../types';
export interface CommonAlertCommonPropsAndState extends WidgetsCommonPropsAndState {
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
}
export interface CommonAlertState extends CommonAlertCommonPropsAndState {
    /**
     * Is \`true\` when the alert is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
}
export interface CommonAlertProps extends CommonAlertCommonPropsAndState {
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
     * Depending on the value of {@link CommonAlertProps.animatedOnInit}, the animation can be optionally skipped during the showing process.
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
}
export interface CommonAlertApi {
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     */
    close(): void;
    /**
     * Triggers the alert to be displayed for the user.
     */
    open(): void;
}
export interface CommonAlertDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
}
export type CommonAlertWidget = Widget<CommonAlertProps, CommonAlertState, CommonAlertApi, object, CommonAlertDirectives>;
export declare const defaultCommonAlertConfig: CommonAlertProps;
/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export declare function getCommonAlertDefaultConfig(): CommonAlertProps;
export declare const commonAlertConfigValidator: ConfigValidator<CommonAlertProps>;
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export declare function createCommonAlert(config?: PropsConfig<CommonAlertProps>): CommonAlertWidget;
`;export{n as default};
