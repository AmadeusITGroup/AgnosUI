const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive } from '../types';
export declare const activeElement$: ReadableSignal<Element | null>;
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
