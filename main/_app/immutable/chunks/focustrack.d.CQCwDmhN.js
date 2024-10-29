const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive } from '../types';
/**
 * A readable store that tracks the currently active (focused) element in the document.
 *
 * This store is only active in a browser environment. When not in a browser environment,
 * it will be a readable store with a \`null\` value.
 *
 * @example
 * \`\`\`typescript
 * import { activeElement$ } from './focustrack';
 *
 * activeElement$.subscribe((element) => {
 *   console.log('Active element:', element);
 * });
 * \`\`\`
 *
 * The store updates whenever the active element changes, such as when the user focuses
 * on a different input field or clicks on a different part of the document.
 */
export declare const activeElement$: ReadableSignal<Element | null>;
/**
 * Interface representing an element that can have focus tracking.
 */
export interface HasFocus {
    /**
     * Directive to put on some elements.
     */
    directive: Directive;
    /**
     * Store that contains true if the activeElement is one of the elements which has the directive,
     * or any of their descendants.
     */
    hasFocus$: ReadableSignal<boolean>;
}
/**
 * Create a HasFocus
 * @returns a HasFocus
 */
export declare function createHasFocus(): HasFocus;
`;export{e as default};
