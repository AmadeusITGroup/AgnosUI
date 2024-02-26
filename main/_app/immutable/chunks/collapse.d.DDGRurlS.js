const e=`import type { TransitionFn } from './baseTransitions';
export interface CollapseContext {
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
/**
 * Create a collapse transition.
 *
 * The transition attaches / removes classes during the different states of the collapse transition.
 * It also updates the dimension value when reaching a non-pending state.
 *
 * @param config - the collapse config
 * @param config.dimension - the dimension, \`height\` or \`width\`, on which the collapse applies
 * @param config.showClasses - the classes to attach when the element is fully visible
 * @param config.hideClasses - the classes to attach when the element is fully collapsed
 * @param config.animationPendingClasses - the classes to attach when the transition is pending
 * @returns the collapse transition
 */
export declare const createCollapseTransition: ({ dimension, showClasses, hideClasses, animationPendingClasses, }?: CollapseConfig) => TransitionFn;
`;export{e as default};
