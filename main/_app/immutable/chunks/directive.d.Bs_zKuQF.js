const e=`import type { Directive, DirectiveAndParam } from '@agnos-ui/core/types';
import type { RefCallback } from 'react';
export * from '@agnos-ui/core/utils/directive';
export declare function useDirective(directive: Directive<void>): {
    ref: RefCallback<HTMLElement>;
};
export declare function useDirective<T>(directive: Directive<T>, args: T): {
    ref: RefCallback<HTMLElement>;
};
export declare function useDirectives(directives: Directive<void>[]): {
    ref: RefCallback<HTMLElement>;
};
export declare function useDirectives<T>(directives: Directive<T>[], args: T): {
    ref: RefCallback<HTMLElement>;
};
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
`;export{e as default};
