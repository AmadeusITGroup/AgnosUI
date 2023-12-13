const e=`import type { ArrowOptions, AutoUpdateOptions, ComputePositionConfig, Derivable } from '@floating-ui/dom';
import * as floatingUI from '@floating-ui/dom';
import type { PropsConfig } from '../types';
export { floatingUI };
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
        strategy$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.Strategy | undefined>;
        placement$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.Placement | undefined>;
        middlewareData$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.MiddlewareData | undefined>;
    }>>;
    stores: {
        x$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        y$: import("@amadeus-it-group/tansu").ReadableSignal<number | undefined>;
        strategy$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.Strategy | undefined>;
        placement$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.Placement | undefined>;
        middlewareData$: import("@amadeus-it-group/tansu").ReadableSignal<floatingUI.MiddlewareData | undefined>;
    };
    patch: <U extends Partial<FloatingUIProps>>(storesValues?: void | U | undefined) => void;
};
`;export{e as default};
