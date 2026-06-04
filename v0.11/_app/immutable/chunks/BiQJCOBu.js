const e=`import type { Directive } from '../types';
/**
 * Directive to focus an element and manage focus stack.
 * When the element is destroyed, focus returns to the previous focusable element in the stack.
 *
 * @param element - The HTML element to focus.
 * @returns An object with a destroy method to remove the element from the focus stack.
 */
export declare const focusElement: Directive;
`;export{e as default};
