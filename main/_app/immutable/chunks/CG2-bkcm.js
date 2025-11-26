const e=`export * from '@agnos-ui/core/services/siblingsInert';
export * from '@agnos-ui/core/services/resizeObserver';
export * from '@agnos-ui/core/services/portal';
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
import { writable, computed } from '@amadeus-it-group/tansu';
import * as i0 from '@angular/core';
import { inject, NgZone, Injectable, signal, DestroyRef, Injector, runInInjectionContext, Directive, ElementRef, PLATFORM_ID, afterNextRender, input, computed as computed$1, InjectionToken, SkipSelf, Optional, booleanAttribute, numberAttribute, viewChild, ChangeDetectionStrategy, Component, createComponent, EnvironmentInjector, TemplateRef, reflectComponentType, ViewContainerRef } from '@angular/core';
import { toReadableStore } from '@agnos-ui/core/utils/stores';
export * from '@agnos-ui/core/utils/stores';
export * from '@agnos-ui/core/utils/widget';
export * from '@agnos-ui/core/utils/func';
import { multiDirective } from '@agnos-ui/core/utils/directive';
export * from '@agnos-ui/core/utils/directive';
import { isPlatformServer } from '@angular/common';
import { FACTORY_WIDGET_NAME } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/types';
import { createWidgetsConfig } from '@agnos-ui/core/config';
export * from '@agnos-ui/core/config';
export * from '@agnos-ui/core/components/tree';
import { Toaster } from '@agnos-ui/core/components/toast';
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

const noop = () => { };
const identity = (a) => a;
const createObjectWrapper = (wrap) => (object) => {
    if (!object || typeof object !== 'object') {
        return object;
    }
    const res = {};
    for (const key of Object.keys(object)) {
        res[key] = wrap(object[key]);
    }
    return res;
};
const createReturnValueWrapper = (wrapReturnValue, wrapResult) => (fn) => wrapResult(typeof fn === 'function' ? ((...args) => wrapReturnValue(fn(...args))) : fn);
/**
 * A utility class that provides methods to run functions inside or outside of Angular's NgZone.
 * This can be useful for optimizing performance by avoiding unnecessary change detection cycles.
 */
class ZoneWrapper {
    constructor() {
        this.#zone = inject(NgZone);
        this.#hasZone = this.#zone.run(() => NgZone.isInAngularZone()); // check if zone is enabled (can be NoopZone, cf https://angular.io/guide/zone#noopzone)
        this.#runNeeded = false;
        this.#runPlanned = false;
        this.planNgZoneRun = this.#hasZone
            ? () => {
                if (this.#zone.isStable) {
                    this.#runNeeded = true;
                    if (!this.#runPlanned) {
                        this.#runPlanned = true;
                        void (async () => {
                            await Promise.resolve();
                            this.#runPlanned = false;
                            if (this.#runNeeded) {
                                this.ngZoneRun(noop);
                            }
                        })();
                    }
                }
            }
            : noop;
        this.insideNgZone = this.#hasZone
            ? (fn) => (typeof fn === 'function' ? ((...args) => this.ngZoneRun(() => fn(...args))) : fn)
            : identity;
        this.insideNgZoneWrapFunctionsObject = createObjectWrapper(this.insideNgZone);
        this.outsideNgZone = this.#hasZone
            ? (fn) => (typeof fn === 'function' ? ((...args) => this.#zone.runOutsideAngular(() => fn(...args))) : fn)
            : identity;
        this.outsideNgZoneWrapFunctionsObject = createObjectWrapper(this.outsideNgZone);
        this.outsideNgZoneWrapDirective = createReturnValueWrapper(this.outsideNgZoneWrapFunctionsObject, this.outsideNgZone);
        this.outsideNgZoneWrapDirectivesObject = createObjectWrapper(this.outsideNgZoneWrapDirective);
    }
    #zone;
    #hasZone; // check if zone is enabled (can be NoopZone, cf https://angular.io/guide/zone#noopzone)
    #runNeeded;
    #runPlanned;
    /**
     * Run the input function synchronously within the Angular zone
     *
     * @param fn - a function to run
     * @returns the value returned by the function
     */
    ngZoneRun(fn) {
        this.#runNeeded = false;
        return this.#zone.run(fn);
    }
    static { this.ɵfac = function ZoneWrapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ZoneWrapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZoneWrapper, factory: ZoneWrapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoneWrapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

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
const toAngularSignal = (tansuSignal) => {
    const zoneWrapper = inject(ZoneWrapper);
    // The equality of objects from 2 sequential emissions is already checked in tansu signal.
    // Here we'll always emit the value received from tansu signal, therefor the equality function
    const res = signal(undefined, ...(ngDevMode ? [{ debugName: "res", equal: () => false }] : [{ equal: () => false }]));
    const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
        res.set(value);
        zoneWrapper.planNgZoneRun();
    });
    inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
    return res.asReadonly();
};
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
const toAngularWritableSignal = (tansuSignal) => {
    const zoneWrapper = inject(ZoneWrapper);
    const res = signal(undefined, ...(ngDevMode ? [{ debugName: "res", equal: () => false }] : [{ equal: () => false }]));
    const set = res.set.bind(res);
    const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
        set(value);
        zoneWrapper.planNgZoneRun();
    });
    inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
    res.set = zoneWrapper.outsideNgZone(tansuSignal.set);
    res.update = zoneWrapper.outsideNgZone(tansuSignal.update);
    return res;
};

const createPatchSlots = (set) => {
    let lastValue = {};
    return (object) => {
        const newValue = {};
        let hasChange = false;
        for (const key of Object.keys(object)) {
            const objectKey = object[key];
            if (objectKey != null) {
                // only use defined slots
                newValue[key] = objectKey;
            }
            if (objectKey != lastValue[key]) {
                hasChange = true;
            }
        }
        if (hasChange) {
            lastValue = newValue;
            set(newValue);
        }
    };
};
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
const callWidgetFactoryWithConfig = (factory, options) => {
    let { defaultConfig, widgetConfig, events, afterInit, slotTemplates, slotChildren } = options ?? {};
    const injector = inject(Injector);
    const slots$ = writable({});
    const props = {};
    let initDone;
    const patchSlots = createPatchSlots(slots$.set);
    const res = {
        initialized: new Promise((resolve) => {
            initDone = resolve;
        }),
        updateSlots: () => {
            if (slotTemplates) {
                patchSlots(slotTemplates());
            }
        },
        patch(newProps) {
            // temporary function replaced in ngInit
            Object.assign(props, newProps);
        },
        ngInit() {
            runInInjectionContext(injector, () => {
                const zoneWrapper = inject(ZoneWrapper);
                factory = zoneWrapper.outsideNgZone(factory);
                const defaultConfig$ = toReadableStore(defaultConfig);
                events = zoneWrapper.insideNgZoneWrapFunctionsObject(events);
                const widget = factory({
                    config: computed(() => ({
                        ...defaultConfig$(),
                        children: slotChildren?.(),
                        ...widgetConfig?.(),
                        ...slots$(),
                        ...events,
                    })),
                    props,
                });
                Object.assign(res, {
                    patch: zoneWrapper.outsideNgZone(widget.patch),
                    directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
                    api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
                    state: Object.fromEntries(Object.entries(widget.stores).map(([key, val]) => [key.slice(0, -1), toAngularSignal(val)])),
                });
                afterInit?.(res);
                initDone();
            });
        },
    };
    return res;
};
function patchSimpleChanges(patchFn, changes) {
    const obj = {};
    for (const [key, simpleChange] of Object.entries(changes)) {
        if (simpleChange !== undefined) {
            obj[key] = simpleChange.currentValue;
        }
    }
    patchFn(obj);
}
/**
 * An abstract base class for widget directives, providing common functionality
 * for Angular components that interact with widgets.
 *
 * @template W - The type of the widget.
 */
class BaseWidgetDirective {
    constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    _widget, 
    // eslint-disable-next-line @angular-eslint/prefer-inject
    propRenames) {
        this._widget = _widget;
        this.propRenames = propRenames;
    }
    /**
     * Retrieves the widget api
     * @returns the widget api
     */
    get api() {
        return this._widget.api;
    }
    /**
     * Retrieves the widget state. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
     * @returns the widget state
     */
    get state() {
        return this._widget.state;
    }
    /**
     * Retrieves the widget directives
     * @returns the widget directives
     */
    get directives() {
        return this._widget.directives;
    }
    /**
     * @inheritdoc
     * @internal
     */
    ngOnChanges(changes) {
        const renamedChanges = {};
        if (this.propRenames) {
            for (const [key, simpleChange] of Object.entries(changes)) {
                const renamedKey = this.propRenames[key] ?? key;
                renamedChanges[renamedKey] = simpleChange;
            }
        }
        else {
            Object.assign(renamedChanges, changes);
        }
        patchSimpleChanges(this._widget.patch, renamedChanges);
    }
    /** @internal */
    ngOnInit() {
        this._widget.ngInit();
    }
    /** @internal */
    ngAfterContentChecked() {
        this._widget.updateSlots();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(__ngFactoryType__) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], () => [{ type: undefined }, { type: undefined }], null); })();

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
const useDirectiveForHost = (directive, params) => {
    const injector = inject(Injector);
    const ref = inject(ElementRef);
    const platform = inject(PLATFORM_ID);
    let instance;
    let plannedCallDirective = false;
    const callDirective = isPlatformServer(platform)
        ? () => {
            instance = directive?.(ref.nativeElement, params);
        }
        : () => {
            if (plannedCallDirective || !directive) {
                return;
            }
            plannedCallDirective = true;
            runInInjectionContext(injector, () => {
                afterNextRender(() => {
                    plannedCallDirective = false;
                    instance = directive?.(ref.nativeElement, params);
                });
            });
        };
    function destroyDirectiveInstance() {
        const oldInstance = instance;
        instance = undefined;
        directive = undefined;
        oldInstance?.destroy?.();
    }
    inject(DestroyRef).onDestroy(destroyDirectiveInstance);
    function update(newDirective, newParams) {
        if (newDirective !== directive) {
            void destroyDirectiveInstance();
            directive = newDirective;
            params = newParams;
            callDirective();
        }
        else if (newParams != params) {
            params = newParams;
            instance?.update?.(params);
        }
    }
    callDirective();
    return { update };
};
/**
 * A directive that allows the use of another directive with optional parameters.
 *
 * @template T - The type of the parameter that can be passed to the directive.
 *
 * @remarks
 * This directive uses a private instance of {@link useDirectiveForHost} to manage the directive and its parameter.
 */
class UseDirective {
    constructor() {
        this.use = input.required(...(ngDevMode ? [{ debugName: "use", alias: 'auUse' }] : [{ alias: 'auUse' }]));
        this.#useDirective = useDirectiveForHost();
    }
    #useDirective;
    /** @internal */
    ngOnChanges() {
        const use = this.use();
        const [directive, param] = Array.isArray(use) ? use : [use];
        this.#useDirective.update(directive, param);
    }
    static { this.ɵfac = function UseDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: [1, "auUse", "use"] }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseDirective, [{
        type: Directive,
        args: [{
                selector: '[auUse]',
            }]
    }], null, { use: [{ type: i0.Input, args: [{ isSignal: true, alias: "auUse", required: true }] }] }); })();
/**
 * A directive that allows the use of multiple directives on a host element.
 *
 * @template T - A tuple type representing the directives and their optional parameters.
 */
class UseMultiDirective {
    constructor() {
        /**
         * An input property that takes a tuple of directives and their optional parameters.
         */
        this.useMulti = input.required(...(ngDevMode ? [{ debugName: "useMulti", alias: 'auUseMulti' }] : [{ alias: 'auUseMulti' }]));
        this.#useDirective = useDirectiveForHost();
    }
    #useDirective;
    /** @internal */
    ngOnChanges() {
        this.#useDirective.update(multiDirective, this.useMulti());
    }
    static { this.ɵfac = function UseMultiDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UseMultiDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseMultiDirective, selectors: [["", "auUseMulti", ""]], inputs: { useMulti: [1, "auUseMulti", "useMulti"] }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseMultiDirective, [{
        type: Directive,
        args: [{
                selector: '[auUseMulti]',
            }]
    }], null, { useMulti: [{ type: i0.Input, args: [{ isSignal: true, alias: "auUseMulti", required: true }] }] }); })();

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
class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
/**
 * A directive representing a slot component that can be used to manage the state and context of a widget.
 *
 * @template W - The type of the widget that this slot component manages.
 */
class SlotComponent {
    constructor() {
        /**
         * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
         */
        this.state = input.required(...(ngDevMode ? [{ debugName: "state" }] : []));
        /**
         * all the api functions to interact with the widget
         */
        this.api = input.required(...(ngDevMode ? [{ debugName: "api" }] : []));
        /**
         * directives to be used on html elements in the template of the slot
         */
        this.directives = input.required(...(ngDevMode ? [{ debugName: "directives" }] : []));
        /**
         * The slot context, to be used when the slot component uses other slots.
         */
        this.slotContext = computed$1(() => ({ state: this.state(), api: this.api(), directives: this.directives() }), ...(ngDevMode ? [{ debugName: "slotContext" }] : []));
    }
    static { this.ɵfac = function SlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotComponent, inputs: { state: [1, "state"], api: [1, "api"], directives: [1, "directives"] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotComponent, [{
        type: Directive
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }], api: [{ type: i0.Input, args: [{ isSignal: true, alias: "api", required: true }] }], directives: [{ type: i0.Input, args: [{ isSignal: true, alias: "directives", required: true }] }] }); })();

/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @template Config - The type of the widgets configuration object.
 * @param widgetsConfigInjectionToken - the widgets config injection token
 * @returns the utilities to create / manage widgets and contexts
 */
const widgetsConfigFactory = (widgetsConfigInjectionToken = new InjectionToken('widgetsConfig')) => {
    /**
     * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
     * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
     * the parent configuration.
     *
     * @remarks
     * The configuration is computed from the parent configuration in two steps:
     * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
     * If adaptParentConfig is not specified, this step is skipped.
     * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
     * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
     * {@link injectWidgetsConfig}.
     *
     * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
     * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
     * default configuration to be used.
     * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
     * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
     * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
     * Angular dependency injection system.
     *
     * @returns DI provider to be included a list of \`providers\` (for example at a component level or
     * any other level of the Angular dependency injection system)
     *
     * @example
     * \`\`\`typescript
     * @Component({
     *   // ...
     *   providers: [
     *     provideWidgetsConfig((parentConfig) => {
     *       // first step configuration: transforms the parent configuration
     *       parentConfig.rating = parentConfig.rating ?? {};
     *       parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
     *       return parentConfig;
     *     })
     *   ]
     * })
     * class MyComponent {
     *   widgetsConfig = injectWidgetsConfig();
     *   constructor() {
     *     this.widgetsConfig.set({
     *       // second step configuration: overrides the parent configuration
     *       rating: {
     *         slotStar: MyCustomSlotStar
     *       }
     *     });
     *   }
     *   // ...
     * }
     * \`\`\`
     */
    const provideWidgetsConfig = (adaptParentConfig) => ({
        provide: widgetsConfigInjectionToken,
        useFactory: (parent) => {
            if (adaptParentConfig) {
                const injector = inject(Injector);
                const originalAdaptParentConfig = adaptParentConfig;
                adaptParentConfig = (value) => runInInjectionContext(injector, () => originalAdaptParentConfig(value));
            }
            return createWidgetsConfig(parent ?? undefined, adaptParentConfig);
        },
        deps: [[new SkipSelf(), new Optional(), widgetsConfigInjectionToken]],
    });
    /**
     * Returns the widgets default configuration store that was provided in the current injection context.
     * Throws if the no widgets default configuration store was provided.
     *
     * @param defaultConfig - values to set as soon as the config is injected
     * @remarks
     * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
     * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
     *
     * @returns the widgets default configuration store.
     */
    const injectWidgetsConfig = (defaultConfig) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken);
        if (defaultConfig) {
            widgetsConfig.set(defaultConfig);
        }
        return widgetsConfig;
    };
    /**
     * Injects the configuration for a specific widget.
     *
     * @template N - The key of the widget configuration in the \`Config\` type.
     * @param widgetName - The name of the widget whose configuration is to be injected.
     * @returns A \`ReadableSignal\` that provides a partial configuration of the specified widget or \`undefined\` if the configuration is not available.
     */
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    /**
     * Creates and initializes a widget using the provided factory and configuration options.
     *
     * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
     *
     * @template W - The type of the widget.
     * @param factory - The factory function to create the widget.
     * @param options - The options for creating the widget.
     * @param options.defaultConfig - The default configuration for the widget.
     * @param options.events - The event handlers for the widget.
     * @param options.slotTemplates - A function that returns the slot templates for the widget.
     * @param options.slotChildren - A function that returns the slot children for the widget.
     * @param options.afterInit - A callback function to be called after the widget is initialized.
     * @returns The initialized widget.
     */
    const callWidgetFactory = (factory, options) => callWidgetFactoryWithConfig(factory, {
        widgetConfig: factory[FACTORY_WIDGET_NAME] ? injectWidgetConfig(factory[FACTORY_WIDGET_NAME]) : undefined,
        defaultConfig: options?.defaultConfig,
        events: options?.events,
        afterInit: options?.afterInit,
        slotTemplates: options?.slotTemplates,
        slotChildren: options?.slotChildren,
    });
    return {
        /**
         * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
         */
        widgetsConfigInjectionToken,
        provideWidgetsConfig,
        injectWidgetsConfig,
        injectWidgetConfig,
        callWidgetFactory,
    };
};
const { widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory } = widgetsConfigFactory();

/**
 * Injection token used to provide configuration properties for the toaster service.
 *
 * This token is associated with the \`ToasterProps\` interface, which defines the
 * structure of the configuration object. It allows dependency injection to supply
 * custom properties for the toaster service, such as default settings or behavior.
 */
const ToastPropsToken = new InjectionToken('ToasterProps');
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
class ToasterService {
    constructor() {
        this.optionsCore = inject(ToastPropsToken, { optional: true });
        this.#toaster = new Toaster(this.optionsCore ?? undefined);
        this.toasts = toAngularSignal(this.#toaster.toasts);
        this.options = toAngularWritableSignal(this.#toaster.options);
        this.addToast = this.#toaster.addToast;
        this.removeToast = this.#toaster.removeToast;
        this.eventsDirective = this.#toaster.eventsDirective;
        this.closeAll = this.#toaster.closeAll;
    }
    #toaster;
    static { this.ɵfac = function ToasterService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToasterService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToasterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * \`\`\`readonly status = input({ transform: auBooleanAttribute });\`\`\`
 * @param value - Value to be transformed.
 * @returns the value transformed
 */
function auBooleanAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return booleanAttribute(value);
}
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed.
 *
 * @example
 *  \`\`\`readonly id = input({ transform: auNumberAttribute });\`\`\`
 * @returns the value transformed
 */
function auNumberAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return numberAttribute(value);
}

const _c0 = ["text"];
function StringSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const content_r1 = ctx.content;
    i0.ɵɵtextInterpolate(content_r1);
} }
class SlotHandler {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    slotChange(_slot, _props) { }
    propsChange(_slot, _props) { }
    destroy() { }
}
class StringSlotComponent {
    constructor() {
        this.text = viewChild.required('text');
    }
    static { this.ɵfac = function StringSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StringSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StringSlotComponent, selectors: [["ng-component"]], viewQuery: function StringSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.text, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["text", ""]], template: function StringSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomTemplate(0, StringSlotComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StringSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`<ng-template #text let-content="content">{{ content }}</ng-template>\`,
            }]
    }], null, { text: [{ type: i0.ViewChild, args: ['text', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StringSlotComponent, { className: "StringSlotComponent", filePath: "slot.directive.ts", lineNumber: 29 }); })();
const stringSlotComponentTemplate = new ComponentTemplate(StringSlotComponent, 'text');
class StringSlotHandler extends SlotHandler {
    #templateRefSlotHandler = new ComponentTemplateSlotHandler(this.viewContainerRef);
    #initialized = false;
    slotChange(content) {
        if (!this.#initialized) {
            this.#initialized = true;
            this.#templateRefSlotHandler.slotChange(stringSlotComponentTemplate, { content });
        }
        else {
            this.#templateRefSlotHandler.propsChange(stringSlotComponentTemplate, { content });
        }
    }
    destroy() {
        this.#templateRefSlotHandler.destroy();
    }
}
class FunctionSlotHandler extends SlotHandler {
    #stringSlotHandler = new StringSlotHandler(this.viewContainerRef);
    slotChange(slot, props) {
        this.#stringSlotHandler.slotChange(slot(props));
    }
    propsChange(slot, props) {
        this.#stringSlotHandler.slotChange(slot(props));
    }
    destroy() {
        this.#stringSlotHandler.destroy();
    }
}
class ComponentSlotHandler extends SlotHandler {
    #componentRef;
    #properties;
    slotChange(slot, props) {
        if (this.#componentRef) {
            this.destroy();
        }
        this.#componentRef = this.viewContainerRef.createComponent(slot);
        this.#applyProperties(props);
    }
    #applyProperties(props, oldProperties) {
        const properties = Object.keys(props);
        this.#properties = properties;
        const componentRef = this.#componentRef;
        for (const property of properties) {
            componentRef.setInput(property, props[property]);
            oldProperties?.delete(property);
        }
    }
    propsChange(_slot, props) {
        const oldProperties = new Set(this.#properties);
        this.#applyProperties(props, oldProperties);
        const componentRef = this.#componentRef;
        for (const property of oldProperties) {
            componentRef.setInput(property, undefined);
        }
    }
    destroy() {
        this.viewContainerRef.clear();
        this.#componentRef = undefined;
    }
}
class TemplateRefSlotHandler extends SlotHandler {
    #viewRef;
    #props;
    slotChange(slot, props) {
        if (this.#viewRef) {
            this.destroy();
        }
        props = { ...props };
        this.#props = props;
        this.#viewRef = this.viewContainerRef.createEmbeddedView(slot, props);
    }
    propsChange(_slot, props) {
        if (this.#viewRef) {
            const templateProps = this.#props;
            const oldProperties = new Set(Object.keys(templateProps));
            for (const property of Object.keys(props)) {
                templateProps[property] = props[property];
                oldProperties.delete(property);
            }
            for (const oldProperty of oldProperties) {
                delete templateProps[oldProperty];
            }
            this.#viewRef.markForCheck();
        }
    }
    destroy() {
        this.viewContainerRef.clear();
    }
}
class ComponentTemplateSlotHandler extends SlotHandler {
    #componentRef;
    #templateSlotHandler = new TemplateRefSlotHandler(this.viewContainerRef);
    #templateRef;
    slotChange(slot, props) {
        if (this.#componentRef) {
            this.destroy();
        }
        this.#componentRef = createComponent(slot.component, {
            elementInjector: this.viewContainerRef.injector,
            environmentInjector: this.viewContainerRef.injector.get(EnvironmentInjector),
        });
        this.#templateRef = this.#componentRef.instance[slot.templateProp];
        this.#templateSlotHandler.slotChange(this.#templateRef(), props);
    }
    propsChange(_slot, props) {
        this.#templateSlotHandler.propsChange(this.#templateRef(), props);
    }
    destroy() {
        this.#templateSlotHandler.destroy();
        this.#componentRef?.destroy();
        this.#componentRef = undefined;
    }
}
const getSlotType = (value) => {
    if (!value)
        return undefined;
    const type = typeof value;
    switch (type) {
        case 'string':
            return StringSlotHandler;
        case 'function':
            if (reflectComponentType(value)) {
                return ComponentSlotHandler;
            }
            return FunctionSlotHandler;
        case 'object':
            if (value instanceof TemplateRef) {
                return TemplateRefSlotHandler;
            }
            if (value instanceof ComponentTemplate) {
                return ComponentTemplateSlotHandler;
            }
            break;
    }
    return undefined;
};
/**
 * A directive that manages slot content and its properties.
 *
 * @template Props - A record type representing the properties for the slot.
 *
 * @remarks
 * This directive handles changes to the slot content and its properties,
 * and manages the lifecycle of the slot handler.
 */
class SlotDirective {
    constructor() {
        /**
         * The slot content to be managed.
         */
        this.slot = input.required(...(ngDevMode ? [{ debugName: "slot", alias: 'auSlot' }] : [{ alias: 'auSlot' }]));
        /**
         * The properties for the slot content.
         */
        this.props = input.required(...(ngDevMode ? [{ debugName: "props", alias: 'auSlotProps' }] : [{ alias: 'auSlotProps' }]));
        this._viewContainerRef = inject(ViewContainerRef);
    }
    /**
     * @param changes SimpleChanges from Angular
     * @internal
     */
    ngOnChanges(changes) {
        const slotChange = changes['slot'];
        const propsChange = changes['props'];
        const slot = this.slot();
        if (slotChange) {
            const newSlotType = getSlotType(slot);
            if (newSlotType !== this._slotType) {
                this._slotHandler?.destroy();
                this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef) : undefined;
                this._slotType = newSlotType;
            }
            this._slotHandler?.slotChange(slot, this.props());
        }
        else if (propsChange) {
            this._slotHandler?.propsChange(slot, this.props());
        }
    }
    /** @internal */
    ngOnDestroy() {
        this._slotHandler?.destroy();
        this._slotHandler = undefined;
    }
    static { this.ɵfac = function SlotDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDirective, selectors: [["", "auSlot", ""]], inputs: { slot: [1, "auSlot", "slot"], props: [1, "auSlotProps", "props"] }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotDirective, [{
        type: Directive,
        args: [{
                selector: '[auSlot]',
            }]
    }], null, { slot: [{ type: i0.Input, args: [{ isSignal: true, alias: "auSlot", required: true }] }], props: [{ type: i0.Input, args: [{ isSignal: true, alias: "auSlotProps", required: true }] }] }); })();

/*
 * Public API Surface of @agnos-ui/angular-headless
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseWidgetDirective, ComponentTemplate, SlotComponent, SlotDirective, ToastPropsToken, ToasterService, UseDirective, UseMultiDirective, ZoneWrapper, auBooleanAttribute, auNumberAttribute, callWidgetFactory, callWidgetFactoryWithConfig, injectWidgetConfig, injectWidgetsConfig, provideWidgetsConfig, toAngularSignal, toAngularWritableSignal, useDirectiveForHost, widgetsConfigFactory, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular-headless.mjs.map
`;export{e as default};
