const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive } from '../types';
/**
 * Binds the given directive to a store that provides its argument.
 *
 * @remarks
 *
 * The returned directive can be used without argument, it will ignore any argument passed to it
 * and will call the provided directive with the content of the provided store as its argument,
 * calling its update method when the content of the store changes.
 *
 * @param directive - directive to bind
 * @param directiveArg$ - store containing the argument of the directive
 * @returns The bound directive that can be used with no argument.
 */
export declare const bindDirective: <T>(directive: Directive<T>, directiveArg$: ReadableSignal<T>) => Directive;
/**
 * Returns a directive that ignores any argument passed to it and calls the provided directive without any
 * argument.
 *
 * @param directive - directive to wrap
 * @returns The resulting directive.
 */
export declare const bindDirectiveNoArg: <T>(directive: Directive<T | void>) => Directive;
/**
 * Maps the argument to another argument of a directive using a provided function.
 *
 * @param directive - The directive to be applied.
 * @param fn - The function to map the argument.
 * @returns A new directive that applies the mapping function to the argument.
 */
export declare const mapDirectiveArg: <T, U>(directive: Directive<U>, fn: (arg: T) => U) => Directive<T>;
/**
 * Returns a directive that subscribes to the given store while it is used on a DOM element,
 * and that unsubscribes from it when it is no longer used.
 *
 * @param store - store on which there will be an active subscription while the returned directive is used.
 * @param asyncUnsubscribe - true if unsubscribing from the store should be done asynchronously (which is the default), and
 * false if it should be done synchronously when the directive is destroyed
 * @returns The resulting directive.
 */
export declare const directiveSubscribe: (store: ReadableSignal<any>, asyncUnsubscribe?: boolean) => Directive;
/**
 * Returns a directive that calls the provided function with the arguments passed to the directive
 * on initialization and each time they are updated.
 *
 * @param update - Function called with the directive argument when the directive is initialized and when its argument is updated.
 * @returns The resulting directive.
 */
export declare const directiveUpdate: <T>(update: (arg: T) => void) => Directive<T>;
/**
 * Utility to create a store that contains an array of items.
 * @returns a store containing an array of items.
 */
export declare const registrationArray: <T>() => ReadableSignal<T[]> & {
    register: (element: T) => () => void;
};
/**
 * Returns a directive and a store. The store contains at any time the array of all the DOM elements on which the directive is
 * currently used.
 *
 * @remarks
 * If the directive is intended to be used on a single element element, it may be more appropriate to use
 * {@link createStoreDirective} instead.
 *
 * @returns An object with two properties: the \`directive\` property that is the directive to use on some DOM elements,
 * and the \`elements$\` property that is the store containing an array of all the elements on which the directive is currently
 * used.
 */
export declare const createStoreArrayDirective: () => {
    directive: Directive;
    elements$: ReadableSignal<HTMLElement[]>;
};
/**
 * Returns a directive and a store. When the directive is used on a DOM element, the store contains that DOM element.
 * When the directive is not used, the store contains null.
 *
 * @remarks
 * If the directive is used on more than one element, an error is displayed in the console and the element is ignored.
 * If the directive is intended to be used on more than one element, please use {@link createStoreArrayDirective} instead.
 *
 * @returns An object with two properties: the \`directive\` property that is the directive to use on one DOM element,
 * and the \`element$\` property that is the store containing the element on which the directive is currently used (or null
 * if the store is not currently used).
 */
export declare const createStoreDirective: () => {
    directive: Directive;
    element$: ReadableSignal<HTMLElement | null>;
};
/**
 * Merges multiple directives into a single directive that executes all of them when called.
 *
 * @remarks
 * All directives receive the same argument upon initialization and update.
 * Directives are created and updated in the same order as they appear in the arguments list,
 * they are destroyed in the reverse order.
 * All calls to the directives (to create, update and destroy them) are wrapped in a call to the
 * batch function of tansu
 *
 * @param args - directives to merge into a single directive.
 * @returns The resulting merged directive.
 */
export declare const mergeDirectives: <T>(...args: (Directive<T> | Directive)[]) => Directive<T>;
`;export{e as default};
