const e=`import type { ArrowOptions, AutoUpdateOptions, ComputePositionConfig, Derivable } from '@floating-ui/dom';
import { type PropsConfig } from './stores';
import * as floatingUI from '@floating-ui/dom';
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
export declare const createFloatingUI: (propsConfig?: PropsConfig<FloatingUIProps>) => {
    directives: {
        referenceDirective: import("..").Directive;
        floatingDirective: import("..").Directive<void>;
        arrowDirective: import("..").Directive<void>;
    };
    state$: import("@amadeus-it-group/tansu").ReadableSignal<import("./stores").ToState<{
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
