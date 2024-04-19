const e=`import type { Directive, DirectiveAndParam } from '@agnos-ui/core/types';
import type { RefCallback } from 'react';
export * from '@agnos-ui/core/utils/directive';
/**
 * Returns a class directive.
 * @param className - class name to use
 * @returns a class directive, to be used with {@link useDirectives}.
 */
export declare const useClassDirective: (className: string) => Directive<void, import("@agnos-ui/core/types").SSRHTMLElement>;
/**
 * Returns an object with the key/value attributes for JSX, derived from a list of directives.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with key/value pairs to be applied on a JSX node.
 */
export declare function directiveAttributes<T extends any[]>(...directives: {
    [K in keyof T]: DirectiveAndParam<T[K]> | Directive<void>;
}): Record<string, any>;
/**
 * Same as {@link directiveAttributes}, but returns an empty object when run in a browser environement.
 *
 * @returns JSON object with name/value for the attributes
 */
export declare const ssrAttributes: typeof directiveAttributes;
/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
export declare const useDirective: {
    (directive: Directive): {
        ref: RefCallback<HTMLElement>;
    };
    <T>(directive: Directive<T>, args: T): {
        ref: RefCallback<HTMLElement>;
    };
};
/**
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @param args - the args to pass to the directives
 * @returns the ref callback
 */
export declare const useDirectives: {
    (directives: Directive[]): {
        ref: RefCallback<HTMLElement>;
    };
    <T>(directives: Directive<T>[], args: T): {
        ref: RefCallback<HTMLElement>;
    };
};
`;export{e as default};
