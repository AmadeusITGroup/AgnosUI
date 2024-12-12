const e=`import type { ArrowOptions, AutoUpdateOptions, ComputePositionConfig, Derivable, MiddlewareData, Placement, Strategy } from '@floating-ui/dom';
import type { Directive, PropsConfig, SSRHTMLElement, Widget } from '../types';
/**
 * Interface representing the properties for configuring Floating UI.
 */
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
/**
 * Represents the state of a floating UI element.
 */
export interface FloatingUIState {
    /**
     * The x coordinate of the floating ui
     */
    x: number | undefined;
    /**
     * The y coordinate of the floating ui
     */
    y: number | undefined;
    /**
     * The strategy used to position the floating element
     */
    strategy: Strategy | undefined;
    /**
     * The final chosen placement of the floating element
     */
    placement: Placement | undefined;
    /**
     * Object containing data returned from all middleware, keyed by their name
     */
    middlewareData: MiddlewareData | undefined;
}
/**
 * Interface representing the directives used to enable floating ui.
 */
export interface FloatingUIDirectives {
    /**
     * Directive to attach to the reference element
     */
    referenceDirective: Directive<void, SSRHTMLElement>;
    /**
     * Directive to attach to the floating element
     */
    floatingDirective: Directive<void, SSRHTMLElement>;
    /**
     * Directive to attach to the arrow element
     */
    arrowDirective: Directive<void, SSRHTMLElement>;
}
/**
 * Represents the type returned by the \`createFloatingUI\` function.
 *
 * This type is used to define the structure and behavior of the Floating UI component.
 */
export type FloatingUI = Widget<FloatingUIProps, FloatingUIState, object, FloatingUIDirectives>;
/**
 * Create a floating UI service.
 *
 * The returned service includes the patch method to patch the states, the stores to track the states and directives to apply.
 *
 * @param propsConfig - the props config for the floating UI service
 * @returns the floating UI service
 */
export declare const createFloatingUI: (propsConfig?: PropsConfig<FloatingUIProps>) => FloatingUI;
`;export{e as default};