const e=`export interface CollapseContext {
    /**
     * the maximum size of the collapseable content.
     */
    maxSize?: string;
    /**
     * the minimum size of the collapseable content
     */
    minSize?: string;
}
export interface CollapseConfig {
    /**
     * the direction in which the collapsing is performed
     */
    dimension?: 'width' | 'height';
    /**
     * the list of classes to add to the collapsable element when shown
     */
    showClasses?: string[];
    /**
     * the list of classes to add to the collapsable element when collapsed
     */
    hideClasses?: string[];
    /**
     * the list of classes to add to the collapsable element while transitioning
     */
    animationPendingClasses?: string[];
}
export declare const createCollapseTransition: ({ dimension, showClasses, hideClasses, animationPendingClasses }?: CollapseConfig) => import("./baseTransitions").TransitionFn;
`;export{e as default};
