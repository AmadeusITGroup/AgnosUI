const n=`import type { TransitionFn } from './baseTransitions';
/**
 * Check if the provided html element has a transition
 * @param element - the html element
 * @returns true if the element has a transition
 */
export declare function hasTransition(element: HTMLElement): boolean;
/**
 * Retrieve the transition duration of the provided html element in milli seconds
 * @param element - the html element
 * @returns transition duration in milli seconds
 */
export declare function getTransitionDurationMs(element: HTMLElement): number;
export type CSSTransitionFn = (element: HTMLElement, direction: 'show' | 'hide', animation: boolean, context: object) => void | (() => void);
/**
 * Create a simple css transition.
 *
 * @param start - a function that creates the css animation and returns a clean-up function
 * @returns the css transition
 */
export declare const createCSSTransition: (start: CSSTransitionFn) => TransitionFn;
`;export{n as default};
