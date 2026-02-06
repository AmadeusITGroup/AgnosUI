const e=`export * from '@agnos-ui/core/services/siblingsInert';
export * from '@agnos-ui/core/services/resizeObserver';
export * from '@agnos-ui/core/services/portal';
export * from '@agnos-ui/core/services/pointerdownPosition';
export * from '@agnos-ui/core/services/navManager';
export * from '@agnos-ui/core/services/matchMedia';
export * from '@agnos-ui/core/services/intersection';
export * from '@agnos-ui/core/services/hash';
export * from '@agnos-ui/core/services/focustrack';
export * from '@agnos-ui/core/services/focusElement';
export * from '@agnos-ui/core/services/floatingUI';
export * from '@agnos-ui/core/services/extendWidget';
export * from '@agnos-ui/core/services/transitions/simpleClassTransition';
export * from '@agnos-ui/core/services/transitions/cssTransitions';
export * from '@agnos-ui/core/services/transitions/collapse';
export * from '@agnos-ui/core/services/transitions/baseTransitions';
export * from '@agnos-ui/core/utils/writables';
import { ReadableSignal, WritableSignal } from '@amadeus-it-group/tansu';
import * as i0 from '@angular/core';
import { Signal, TemplateRef, Type, OnChanges, OnInit, AfterContentChecked, SimpleChanges, WritableSignal as WritableSignal$1, FactoryProvider, InjectionToken, OnDestroy } from '@angular/core';
import { Widget, WidgetState, Extends, SlotContent as SlotContent$1, WidgetFactory, WidgetProps, Directive, DirectiveAndParam, DirectivesAndOptParam } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/types';
export * from '@agnos-ui/core/utils/func';
import * as _agnos_ui_angular_headless from '@agnos-ui/angular-headless';
import { WidgetsConfig, Partial2Levels, WidgetsConfigStore } from '@agnos-ui/core/config';
export * from '@agnos-ui/core/config';
export * from '@agnos-ui/core/components/tree';
import { ToasterProps, ToastProps, ToasterToast } from '@agnos-ui/core/components/toast';
export * from '@agnos-ui/core/components/toast';
export * from '@agnos-ui/core/components/slider';
export * from '@agnos-ui/core/components/select';
export * from '@agnos-ui/core/components/rating';
export * from '@agnos-ui/core/components/progressbar';
export * from '@agnos-ui/core/components/pagination';
export * from '@agnos-ui/core/components/modal';
export * from '@agnos-ui/core/components/drawer';
export * from '@agnos-ui/core/components/collapse';
export * from '@agnos-ui/core/components/carousel';
export * from '@agnos-ui/core/components/alert';
export * from '@agnos-ui/core/components/accordion';
export * from '@agnos-ui/core/utils/directive';
export * from '@agnos-ui/core/utils/stores';
export * from '@agnos-ui/core/utils/widget';

/**
 * Represents a template for a component with specified properties.
 *
 * @template Props - The type of properties that the template accepts.
 * @template K - The key in the template object that maps to the template reference.
 * @template T - An object type where each key of type K maps to a TemplateRef of Props.
 *
 * @param component - The component type that contains the template.
 * @param templateProp - The key in the component that maps to the template reference.
 */
declare class ComponentTemplate<Props, K extends string, T extends {
    [key in K]: Signal<TemplateRef<Props>>;
}> {
    readonly component: Type<T>;
    readonly templateProp: K;
    constructor(component: Type<T>, templateProp: K);
}
/**
 * Represents the content that can be used in a slot.
 *
 * @template Props - The type of the properties that the slot content can accept.
 *
 * This type can be one of the following:
 * - \`undefined | null\`: Nullish value
 * - \`string\`: A static string
 * - \`(props: Props) => string\`: A function that takes props as input and returns a string template
 * - \`TemplateRef<Props>\`: A reference to an Angular template with the specified properties.
 * - \`Type<unknown>\`: A type representing an unknown component or directive.
 * - \`ComponentTemplate<Props, any, any>\`: A component template with the specified properties.
 */
type SlotContent<Props extends object = object> = SlotContent$1<Props> | TemplateRef<Props> | Type<unknown> | ComponentTemplate<Props, any, any>;
/**
 * A directive representing a slot component that can be used to manage the state and context of a widget.
 *
 * @template W - The type of the widget that this slot component manages.
 */
declare abstract class SlotComponent<W extends Widget> {
    /**
     * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
     */
    readonly state: i0.InputSignal<AngularState<W>>;
    /**
     * all the api functions to interact with the widget
     */
    readonly api: i0.InputSignal<W["api"]>;
    /**
     * directives to be used on html elements in the template of the slot
     */
    readonly directives: i0.InputSignal<W["directives"]>;
    /**
     * The slot context, to be used when the slot component uses other slots.
     */
    readonly slotContext: Signal<{
        state: AngularState<W>;
        api: W["api"];
        directives: W["directives"];
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotComponent<any>, never, never, { "state": { "alias": "state"; "required": true; "isSignal": true; }; "api": { "alias": "api"; "required": true; "isSignal": true; }; "directives": { "alias": "directives"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
/**
 * Type utility to determine if a given type \`T\` is or extends \`SlotContent<any>\`.
 *
 * This type alias uses conditional types to check if \`T\` extends \`SlotContent<any>\` or if \`SlotContent<any>\` extends \`T\`.
 * If either condition is true, it resolves to \`T\`, otherwise it resolves to \`0\`.
 *
 * @template T - The type to be checked.
 */
type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
/**
 * Represents the state of an Angular widget, where each key in the widget's state
 * is mapped to a Signal of the corresponding state value.
 *
 * @template W - The type of the widget.
 */
type AngularState<W extends Widget> = {
    [key in keyof WidgetState<W>]: Signal<WidgetState<W>[key]>;
};
/**
 * Represents an Angular widget that extends a base widget type.
 *
 * @template W - The type of the base widget.
 */
interface AngularWidget<W extends Widget> extends Pick<W, 'api' | 'directives' | 'patch'> {
    /**
     * A promise that resolves when the widget is initialized
     */
    initialized: Promise<void>;
    /**
     * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
     */
    state: AngularState<W>;
    /**
     * A function to initialize the Angular widget.
     */
    ngInit: () => void;
    /**
     * A utility function to update the slot properties.
     */
    updateSlots: () => void;
}
/**
 * Represents the context for a widget slot, providing access to the widget and its state.
 *
 * @template W - The type of the widget.
 */
interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
    /**
     * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
     */
    state: AngularState<W>;
}

/**
 * Call a widget factory using provided configs.
 *
 * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
 *
 * @param factory - the widget factory to call
 * @param options - the options
 * @param options.defaultConfig - the default config of the widget
 * @param options.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param options.events - the events of the widget
 * @param options.afterInit - a callback to call after successful setup of the widget
 * @param options.slotTemplates - a function to provide all slot templates using child queries
 * @param options.slotChildren - a function to provide the default children slot using a view query
 * @returns the widget
 */
declare const callWidgetFactoryWithConfig: <W extends Widget>(factory: WidgetFactory<W>, options?: {
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
    afterInit?: (widget: AngularWidget<W>) => void;
    slotTemplates?: () => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never; };
    slotChildren?: () => TemplateRef<void> | undefined;
}) => AngularWidget<W>;
/**
 * An abstract base class for widget directives, providing common functionality
 * for Angular components that interact with widgets.
 *
 * @template W - The type of the widget.
 */
declare abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit, AfterContentChecked {
    private readonly _widget;
    private readonly propRenames?;
    constructor(_widget: AngularWidget<W>, propRenames?: Record<string, string> | undefined);
    /**
     * Retrieves the widget api
     * @returns the widget api
     */
    get api(): W['api'];
    /**
     * Retrieves the widget state. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
     * @returns the widget state
     */
    get state(): AngularState<W>;
    /**
     * Retrieves the widget directives
     * @returns the widget directives
     */
    get directives(): W['directives'];
    /**
     * @inheritdoc
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, true, never>;
}

/**
 * Converts a Tansu \`ReadableSignal\` to an Angular \`Signal\`.
 *
 * This function wraps the provided Tansu signal in an Angular signal, ensuring that updates
 * are properly handled within Angular's zone. It subscribes to the Tansu signal and updates
 * the Angular signal with the received values. The equality function for the Angular signal
 * is set to always return false, ensuring that every new value from the Tansu signal triggers
 * an update.
 *
 * @template T - The type of the value emitted by the signals.
 * @param tansuSignal - The Tansu signal to convert.
 * @returns - The resulting Angular signal.
 */
declare const toAngularSignal: <T>(tansuSignal: ReadableSignal<T>) => Signal<T>;
/**
 * Converts a Tansu \`WritableSignal\` to an Angular \`WritableSignal\`.
 *
 * This function wraps the provided Tansu signal in an Angular signal, ensuring that updates
 * are properly handled within Angular's zone. It subscribes to the Tansu signal and updates
 * the Angular signal with the received values. The equality function for the Angular signal
 * is set to always return false, ensuring that every new value from the Tansu signal triggers
 * an update.
 *
 * @template T - The type of the value emitted by the signals.
 * @param tansuSignal - The Tansu signal to convert.
 * @returns - The resulting Angular signal.
 */
declare const toAngularWritableSignal: <T>(tansuSignal: WritableSignal<T>) => WritableSignal$1<T>;

/**
 * A utility function to manage the lifecycle of a directive for a host element.
 *
 * This function handles the creation, updating, and destruction of a directive instance
 * associated with a host element. It ensures that the directive is called appropriately
 * based on the platform (server or client) and manages the directive's lifecycle within
 * the Angular injection context.
 *
 * @template T - The type of parameters that the directive accepts.
 *
 * @param [directive] - The directive to be applied to the host element.
 * @param [params] - The parameters to be passed to the directive.
 *
 * @returns An object containing an \`update\` function to update the directive and its parameters.
 */
declare const useDirectiveForHost: <T>(directive?: Directive<T>, params?: T) => {
    update: (newDirective?: Directive<T>, newParams?: T) => void;
};
/**
 * A directive that allows the use of another directive with optional parameters.
 *
 * @template T - The type of the parameter that can be passed to the directive.
 *
 * @remarks
 * This directive uses a private instance of {@link useDirectiveForHost} to manage the directive and its parameter.
 */
declare class UseDirective<T> implements OnChanges {
    #private;
    readonly use: i0.InputSignal<Directive | DirectiveAndParam<T>>;
    /** @internal */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseDirective<any>, "[auUse]", never, { "use": { "alias": "auUse"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
/**
 * A directive that allows the use of multiple directives on a host element.
 *
 * @template T - A tuple type representing the directives and their optional parameters.
 */
declare class UseMultiDirective<T extends any[]> implements OnChanges {
    #private;
    /**
     * An input property that takes a tuple of directives and their optional parameters.
     */
    readonly useMulti: i0.InputSignal<DirectivesAndOptParam<T, _agnos_ui_angular_headless.SSRHTMLElement>>;
    /** @internal */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseMultiDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseMultiDirective<any>, "[auUseMulti]", never, { "useMulti": { "alias": "auUseMulti"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

type AdaptParentConfig<Config> = (config: Partial2Levels<Config>) => Partial2Levels<Config>;
type InjectWidgetsConfig<Config> = (config?: Partial2Levels<Config>) => WidgetsConfigStore<Config>;
/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @template Config - The type of the widgets configuration object.
 * @param widgetsConfigInjectionToken - the widgets config injection token
 * @returns the utilities to create / manage widgets and contexts
 */
declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsConfigInjectionToken?: InjectionToken<WidgetsConfigStore<Config>>) => {
    /**
     * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
     */
    widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<Config>>;
    provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig<Config>) => FactoryProvider;
    injectWidgetsConfig: InjectWidgetsConfig<Config>;
    injectWidgetConfig: <N extends keyof Config>(widgetName: N) => ReadableSignal<Partial<Config[N]> | undefined>;
    callWidgetFactory: <W extends Widget>(factory: WidgetFactory<W>, options?: {
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
        events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
        afterInit?: (widget: AngularWidget<W>) => void;
        slotTemplates?: () => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never; };
        slotChildren?: () => TemplateRef<void> | undefined;
    }) => AngularWidget<W>;
};
declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>;
declare const provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig<WidgetsConfig> | undefined) => FactoryProvider;
declare const injectWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
declare const injectWidgetsConfig: InjectWidgetsConfig<WidgetsConfig>;
declare const callWidgetFactory: <W extends Widget>(factory: WidgetFactory<W>, options?: {
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>> | undefined;
    afterInit?: ((widget: AngularWidget<W>) => void) | undefined;
    slotTemplates?: (() => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U extends object> ? TemplateRef<U> | undefined : never; }) | undefined;
    slotChildren?: (() => TemplateRef<void> | undefined) | undefined;
} | undefined) => AngularWidget<W>;

/**
 * Injection token used to provide configuration properties for the toaster service.
 *
 * This token is associated with the \`ToasterProps\` interface, which defines the
 * structure of the configuration object. It allows dependency injection to supply
 * custom properties for the toaster service, such as default settings or behavior.
 */
declare const ToastPropsToken: InjectionToken<ToasterProps>;
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
declare class ToasterService<Props extends Partial<ToastProps>> {
    #private;
    readonly optionsCore: ToasterProps | null;
    readonly toasts: Signal<ToasterToast<Props>[]>;
    readonly options: WritableSignal$1<ToasterProps>;
    readonly addToast: (props: Props) => number;
    readonly removeToast: (id: number) => void;
    readonly eventsDirective: _agnos_ui_angular_headless.Directive<number>;
    readonly closeAll: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToasterService<any>>;
}

type Wrapper = <T>(fn: T) => T;
/**
 * A utility class that provides methods to run functions inside or outside of Angular's NgZone.
 * This can be useful for optimizing performance by avoiding unnecessary change detection cycles.
 */
declare class ZoneWrapper {
    #private;
    planNgZoneRun: () => void;
    /**
     * Run the input function synchronously within the Angular zone
     *
     * @param fn - a function to run
     * @returns the value returned by the function
     */
    ngZoneRun<T>(fn: () => T): T;
    insideNgZone: Wrapper;
    insideNgZoneWrapFunctionsObject: Wrapper;
    outsideNgZone: Wrapper;
    outsideNgZoneWrapFunctionsObject: Wrapper;
    outsideNgZoneWrapDirective: Wrapper;
    outsideNgZoneWrapDirectivesObject: Wrapper;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZoneWrapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ZoneWrapper>;
}

/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * \`\`\`readonly status = input({ transform: auBooleanAttribute });\`\`\`
 * @param value - Value to be transformed.
 * @returns the value transformed
 */
declare function auBooleanAttribute(value: unknown): boolean | undefined;
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed.
 *
 * @example
 *  \`\`\`readonly id = input({ transform: auNumberAttribute });\`\`\`
 * @returns the value transformed
 */
declare function auNumberAttribute(value: unknown): number | undefined;
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed. \`null\` or \`undefined\`, returns the value unchanged.
 *
 * @example
 *  \`\`\`readonly id = input({ transform: auNumberOrNullAttribute });\`\`\`
 * @returns the value transformed
 */
declare function auNumberOrNullAttribute(value: unknown): number | null | undefined;

/**
 * A directive that manages slot content and its properties.
 *
 * @template Props - A record type representing the properties for the slot.
 *
 * @remarks
 * This directive handles changes to the slot content and its properties,
 * and manages the lifecycle of the slot handler.
 */
declare class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
    /**
     * The slot content to be managed.
     */
    readonly slot: i0.InputSignal<SlotContent<Props>>;
    /**
     * The properties for the slot content.
     */
    readonly props: i0.InputSignal<Props>;
    private readonly _viewContainerRef;
    private _slotType;
    private _slotHandler;
    /**
     * @param changes SimpleChanges from Angular
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDirective<any>, "[auSlot]", never, { "slot": { "alias": "auSlot"; "required": true; "isSignal": true; }; "props": { "alias": "auSlotProps"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { BaseWidgetDirective, ComponentTemplate, SlotComponent, SlotDirective, ToastPropsToken, ToasterService, UseDirective, UseMultiDirective, ZoneWrapper, auBooleanAttribute, auNumberAttribute, auNumberOrNullAttribute, callWidgetFactory, callWidgetFactoryWithConfig, injectWidgetConfig, injectWidgetsConfig, provideWidgetsConfig, toAngularSignal, toAngularWritableSignal, useDirectiveForHost, widgetsConfigFactory, widgetsConfigInjectionToken };
export type { AngularState, AngularWidget, IsSlotContent, SlotContent, WidgetSlotContext };
`;export{e as default};
