const e=`import type { Directive } from '@agnos-ui/core/types';
import type { RefCallback } from 'react';
export * from '@agnos-ui/core/utils/directive';
export declare function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export declare function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
export declare function useDirectives(directives: Directive<void>[]): RefCallback<HTMLElement>;
export declare function useDirectives<T>(directives: Directive<T>[], args: T): RefCallback<HTMLElement>;
`;export{e as default};
