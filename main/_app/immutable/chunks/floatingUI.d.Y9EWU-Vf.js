const e=`import type { ArrowOptions, AutoUpdateOptions, ComputePositionConfig, Derivable } from '@floating-ui/dom';
import type { PropsConfig } from '../types';
export interface FloatingUIProps {
    /**
     * Options to use when calling computePosition from Floating UI
     */
    computePositionOptions: ComputePositionConfig;
    /**
     * Options to use when calling autoUpdate from Floating UI
     */
    autoUpdateOptions: AutoUpdateOptions;
    /**
     * Options to use when calling the arrow middleware from Floating UI
     */
    arrowOptions: Omit<ArrowOptions, 'element'> | Derivable<Omit<ArrowOptions, 'element'>>;
}
export type FloatingUI = ReturnType<typeof createFloatingUI>;
/**
 * Create a floating UI service.
 *
 * The returned service includes the patch method to patch the states, the stores to track the states and directives to apply.
 *
 * @param propsConfig - the props config for the floating UI service
 * @returns the floating UI service
 */
export declare const createFloatingUI: (propsConfig?: PropsConfig<FloatingUIProps>) => {
    directives: {
        /**
         * Directive to be used on the reference element from where the floating element will be positioned
         */
        referenceDirective: import("../types").Directive;
        /**
         * Directive to be used on the floating element
         */
        floatingDirective: import("../types").Directive<void>;
        /**
         * Directive to be used on the arrow element, if any
         */
        arrowDirective: import("../types").Directive<void>;
    };
    state$: import("@amadeus-it-group/tansu").ReadableSignal<import("../utils/stores").ToState<{
        x$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        y$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        strategy$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/utils").Strategy | undefined>;
        placement$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/utils").Placement | undefined>;
        middlewareData$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/core").MiddlewareData | undefined>;
    }>>;
    stores: {
        x$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        y$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        strategy$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/utils").Strategy | undefined>;
        placement$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/utils").Placement | undefined>;
        middlewareData$: import("@amadeus-it-group/tansu").ReadableSignal<import("@floating-ui/core").MiddlewareData | undefined>;
    };
    patch: <U extends Partial<FloatingUIProps>>(storesValues?: void | U | undefined) => void;
};
`;export{e as default};
