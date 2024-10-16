const n=`import type { Directive, PropsConfig, SSRHTMLElement, Widget } from '../../types';
/**
 * Function that implements a transition.
 */
export type TransitionFn = (
/**
 * Element on which the transition should be applied.
 */
element: SSRHTMLElement, 
/**
 * Whether the element should be shown or hidden.
 */
direction: 'show' | 'hide', 
/**
 * Whether the transition should be animated.
 */
animated: boolean, 
/**
 * Signal allowing to stop the transition while running.
 */
signal: AbortSignal, 
/**
 * Context of the current transition. It is reused between calls if the previous transition was stopped while running on the same element.
 */
context: object) => Promise<void> | void;
export interface TransitionProps {
    /**
     * Transition to be called.
     */
    transition: TransitionFn;
    /**
     * Whether the element should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Whether the transition should be animated.
     */
    animated: boolean;
    /**
     * If the element is initially visible, whether the element should be animated when first displayed.
     */
    animatedOnInit: boolean;
    /**
     * Whether initialization is finished. It determines which setting between {@link TransitionProps.animated}
     * and {@link TransitionProps.animatedOnInit} is used to enable or disable animations.
     * @remarks
     * If it is \`true\`, initialization is considered finished, and {@link TransitionProps.animatedOnInit} is no longer used.
     * Otherwise, initialization is considered unfinished and {@link TransitionProps.animatedOnInit} is used instead of {@link TransitionProps.animated}.
     * If it is \`null\`, it will be set to \`true\` automatically when the directive is called with a DOM element.
     * If it is \`false\`, it will not be updated automatically.
     */
    initDone: boolean | null;
    /**
     * Function to be called when the transition is completed and the element is visible.
     */
    onShown: () => void;
    /**
     * Function to be called when the transition is completed and the element is not visible.
     */
    onHidden: () => void;
    /**
     * Function to be called when the visible property changes.
     *
     * @param visible - new value of the visible property
     */
    onVisibleChange: (visible: boolean) => void;
}
/**
 * Transition state.
 */
export interface TransitionState {
    /**
     * Whether the element is visible or will be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Whether the element to be animated is present in the DOM.
     */
    elementPresent: boolean;
    /**
     * Reference to the DOM element.
     */
    element: HTMLElement | null;
    /**
     * Whether a transition is currently running.
     */
    transitioning: boolean;
    /**
     * Equals: {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
     */
    shown: boolean;
    /**
     * Equals: ! {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
     */
    hidden: boolean;
}
export interface TransitionApi {
    /**
     * Runs the transition to show the element. It is equivalent to {@link TransitionApi.toggle | toggle} with true as the first parameter.
     *
     * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    show: (animated?: boolean) => Promise<void>;
    /**
     * Runs the transition to hide the element. It is equivalent to {@link TransitionApi.toggle | toggle} with false as the first parameter.
     *
     * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    hide: (animated?: boolean) => Promise<void>;
    /**
     * Runs the transition to show or hide the element depending on the first parameter.
     *
     * @param visible - whether the element should be made visible or not. If the parameter is not defined, the opposite of the current {@link TransitionProps.visible | visible } property is used.
     * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    toggle: (visible?: boolean, animated?: boolean) => Promise<void>;
}
export interface TransitionDirectives {
    /**
     * the transition directive
     */
    directive: Directive<void | Partial<TransitionProps>>;
}
export type TransitionWidget = Widget<TransitionProps, TransitionState, TransitionApi, object, TransitionDirectives>;
/**
 * A transition to show / hide an element without any animated. It uses the HTML \`display\` attribute.
 *
 * @param element - the element to animate
 * @param direction - the direction
 */
export declare const noAnimation: TransitionFn;
/**
 * Create a transition widget.
 *
 * The widget will include a patch function, stores to track the animation states and a directive to apply the animation to an element.
 *
 * @param config - the props config of the transition
 * @returns the transition widget
 */
export declare const createTransition: (config?: PropsConfig<TransitionProps>) => TransitionWidget;
`;export{n as default};
