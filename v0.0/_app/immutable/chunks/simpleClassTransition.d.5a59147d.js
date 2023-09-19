const n=`export interface SimpleClassTransitionConfig {
    /**
     * a list of classes to add to the collapsable element while transitioning
     */
    animationPendingClasses?: string[];
    /**
     * a list of classes to add to the collapsable element while transitioning towards the show state
     */
    animationPendingShowClasses?: string[];
    /**
     * a list of classes to add to the collapsable element while transitioning towards the hide state
     */
    animationPendingHideClasses?: string[];
    /**
     * the list of classes to add to the element when shown
     */
    showClasses?: string[];
    /**
     * the list of classes to add to the element when hidden
     */
    hideClasses?: string[];
}
export interface SimpleClassTransitionContext {
    /**
     * \`true\` is the transition has started
     */
    started?: boolean;
}
export declare const createSimpleClassTransition: ({ animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses, }: SimpleClassTransitionConfig) => import("./baseTransitions").TransitionFn;
`;export{n as default};
