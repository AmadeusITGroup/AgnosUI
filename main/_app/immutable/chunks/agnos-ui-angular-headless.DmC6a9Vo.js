const e=`import { createAccordion as createAccordion$1 } from '@agnos-ui/core/components/accordion';
export * from '@agnos-ui/core/components/accordion';
import { createAlert as createAlert$1 } from '@agnos-ui/core/components/alert';
export * from '@agnos-ui/core/components/alert';
import { createModal as createModal$1 } from '@agnos-ui/core/components/modal';
export * from '@agnos-ui/core/components/modal';
import { createPagination as createPagination$1 } from '@agnos-ui/core/components/pagination';
export * from '@agnos-ui/core/components/pagination';
import { createProgressbar as createProgressbar$1 } from '@agnos-ui/core/components/progressbar';
export * from '@agnos-ui/core/components/progressbar';
import { createRating as createRating$1 } from '@agnos-ui/core/components/rating';
export * from '@agnos-ui/core/components/rating';
import { createSelect as createSelect$1 } from '@agnos-ui/core/components/select';
export * from '@agnos-ui/core/components/select';
import { createSlider as createSlider$1 } from '@agnos-ui/core/components/slider';
export * from '@agnos-ui/core/components/slider';
import { createToast as createToast$1 } from '@agnos-ui/core/components/toast';
export * from '@agnos-ui/core/components/toast';
export * from '@agnos-ui/core/services/siblingsInert';
export * from '@agnos-ui/core/services/resizeObserver';
export * from '@agnos-ui/core/services/portal';
export * from '@agnos-ui/core/services/navManager';
export * from '@agnos-ui/core/services/matchMedia';
export * from '@agnos-ui/core/services/intersection';
export * from '@agnos-ui/core/services/hash';
export * from '@agnos-ui/core/services/focustrack';
export * from '@agnos-ui/core/services/floatingUI';
export * from '@agnos-ui/core/services/extendWidget';
export * from '@agnos-ui/core/services/transitions/simpleClassTransition';
export * from '@agnos-ui/core/services/transitions/cssTransitions';
export * from '@agnos-ui/core/services/transitions/collapse';
export * from '@agnos-ui/core/services/transitions/baseTransitions';
export * from '@agnos-ui/core/utils/writables';
import * as i0 from '@angular/core';
import { inject, NgZone, Injectable, signal, DestroyRef, Injector, ElementRef, PLATFORM_ID, runInInjectionContext, afterNextRender, Directive, Input, SkipSelf, Optional, InjectionToken, booleanAttribute, numberAttribute, TemplateRef, Component, ViewChild, createComponent, EnvironmentInjector, reflectComponentType, ViewContainerRef } from '@angular/core';
import { toReadableStore } from '@agnos-ui/core/utils/stores';
export * from '@agnos-ui/core/utils/stores';
import { multiDirective } from '@agnos-ui/core/utils/directive';
export * from '@agnos-ui/core/utils/directive';
import { isPlatformServer } from '@angular/common';
import { toSlotContextWidget } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/types';
import { createWidgetsConfig } from '@agnos-ui/core/config';
export * from '@agnos-ui/core/config';
import { writable, computed } from '@amadeus-it-group/tansu';

const createAccordion = createAccordion$1;

const createAlert = createAlert$1;

const createModal = createModal$1;

const createPagination = createPagination$1;

const createProgressbar = createProgressbar$1;

const createRating = createRating$1;

const createSelect = createSelect$1;

const createSlider = createSlider$1;

const createToast = createToast$1;

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
                            await 0;
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
    static { this.ɵfac = function ZoneWrapper_Factory(t) { return new (t || ZoneWrapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZoneWrapper, factory: ZoneWrapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoneWrapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/**
 * Convert a tansu readable signal into an Angular signal.
 *
 * @param tansuSignal - a tansu readable signal
 * @returns an angular signal
 *
 * @remarks
 * Note that as it uses Angular's \`inject\`, this can only be called at component construction time.
 */
const toAngularSignal = (tansuSignal) => {
    const zoneWrapper = inject(ZoneWrapper);
    // The equality of objects from 2 sequential emissions is already checked in tansu signal.
    // Here we'll always emit the value received from tansu signal, therefor the equality function
    const res = signal(undefined, { equal: () => false });
    const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
        res.set(value);
        zoneWrapper.planNgZoneRun();
    });
    inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
    return res;
};

/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
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
class UseDirective {
    #useDirective = useDirectiveForHost();
    /** @inheritdoc */
    ngOnChanges() {
        const use = this.use;
        const [directive, param] = Array.isArray(use) ? use : [use];
        this.#useDirective.update(directive, param);
    }
    static { this.ɵfac = function UseDirective_Factory(t) { return new (t || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: [i0.ɵɵInputFlags.None, "auUse", "use"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseDirective, [{
        type: Directive,
        args: [{
                standalone: true,
                selector: '[auUse]',
            }]
    }], null, { use: [{
            type: Input,
            args: ['auUse']
        }] }); })();
class UseMultiDirective {
    #useDirective = useDirectiveForHost();
    /** @inheritdoc */
    ngOnChanges() {
        this.#useDirective.update(multiDirective, this.useMulti);
    }
    static { this.ɵfac = function UseMultiDirective_Factory(t) { return new (t || UseMultiDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseMultiDirective, selectors: [["", "auUseMulti", ""]], inputs: { useMulti: [i0.ɵɵInputFlags.None, "auUseMulti", "useMulti"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseMultiDirective, [{
        type: Directive,
        args: [{
                standalone: true,
                selector: '[auUseMulti]',
            }]
    }], null, { useMulti: [{
            type: Input,
            args: ['auUseMulti']
        }] }); })();

class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
class SlotComponent {
    static { this.ɵfac = function SlotComponent_Factory(t) { return new (t || SlotComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotComponent, inputs: { state: "state", widget: "widget" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotComponent, [{
        type: Directive
    }], null, { state: [{
            type: Input
        }], widget: [{
            type: Input
        }] }); })();

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
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.afterInit - a callback to call after successful setup of the widget
 * @returns the widget
 */
const callWidgetFactoryWithConfig = ({ factory, defaultConfig, widgetConfig, events, afterInit, }) => {
    const injector = inject(Injector);
    const slots$ = writable({});
    const props = {};
    let initDone;
    const res = {
        initialized: new Promise((resolve) => {
            initDone = resolve;
        }),
        patchSlots: createPatchSlots(slots$.set),
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
                    config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...events })),
                    props,
                });
                const wrappedWidget = {
                    ...widget,
                    patch: zoneWrapper.outsideNgZone(widget.patch),
                    directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
                    actions: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.actions),
                    api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
                };
                Object.assign(res, wrappedWidget, {
                    widget: toSlotContextWidget(wrappedWidget),
                    ngState: toAngularSignal(wrappedWidget.state$),
                });
                afterInit?.();
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
 * Stores the result of the first call to the getter and returns that result directly for subsequent calls
 *
 * Applies to: class getters
 *
 * @param target - the target
 * @param property - the property
 * @param descriptor - the property descriptor
 */
const CachedProperty = (target, property, descriptor) => {
    const originalGet = descriptor.get;
    descriptor.get = function () {
        const value = originalGet?.call(this);
        Object.defineProperty(this, property, { value, writable: false });
        return value;
    };
};
class BaseWidgetDirective {
    get api() {
        return this._widget.api;
    }
    get state() {
        return this._widget.ngState;
    }
    get widget() {
        return this._widget.widget;
    }
    /** @inheritdoc */
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    /** @inheritdoc */
    ngOnInit() {
        this._widget.ngInit();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(t) { return new (t || BaseWidgetDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], null, null); })();

/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
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
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    const callWidgetFactory = ({ factory, widgetName = null, defaultConfig = {}, events, afterInit, }) => callWidgetFactoryWithConfig({
        factory,
        widgetConfig: widgetName ? injectWidgetConfig(widgetName) : null,
        defaultConfig,
        events,
        afterInit,
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
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * \`\`\`@Input({ transform: auBooleanAttribute }) status: boolean | undefined;\`\`\`
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
 *  \`\`\`@Input({ transform: auNumberAttribute }) id: number | undefined;\`\`\`
 * @returns the value transformed
 */
function auNumberAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return numberAttribute(value);
}

class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    /** @inheritdoc */
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = function SlotDefaultDirective_Factory(t) { return new (t || SlotDefaultDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDefaultDirective, selectors: [["", "auSlotDefault", ""]], inputs: { auSlotDefault: "auSlotDefault" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotDefaultDirective, [{
        type: Directive,
        args: [{ selector: '[auSlotDefault]', standalone: true }]
    }], null, { auSlotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }] }); })();

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
    slotChange(slot, props) { }
    propsChange(slot, props) { }
    destroy() { }
}
class StringSlotComponent {
    static { this.ɵfac = function StringSlotComponent_Factory(t) { return new (t || StringSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StringSlotComponent, selectors: [["ng-component"]], viewQuery: function StringSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.text = _t.first);
        } }, decls: 2, vars: 0, consts: [["text", ""]], template: function StringSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StringSlotComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StringSlotComponent, [{
        type: Component,
        args: [{
                template: \`<ng-template #text let-content="content">{{ content }}</ng-template>\`,
            }]
    }], null, { text: [{
            type: ViewChild,
            args: ['text', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StringSlotComponent, { className: "StringSlotComponent", filePath: "slot.directive.ts", lineNumber: 27 }); })();
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
    propsChange(slot, props) {
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
    propsChange(slot, props) {
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
        this.#templateSlotHandler.slotChange(this.#templateRef, props);
    }
    propsChange(slot, props) {
        this.#templateSlotHandler.propsChange(this.#templateRef, props);
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
class SlotDirective {
    constructor() {
        this._viewContainerRef = inject(ViewContainerRef);
    }
    /** @inheritdoc */
    ngOnChanges(changes) {
        const slotChange = changes['slot'];
        const propsChange = changes['props'];
        const slot = this.slot;
        if (slotChange) {
            const newSlotType = getSlotType(slot);
            if (newSlotType !== this._slotType) {
                this._slotHandler?.destroy();
                this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef) : undefined;
                this._slotType = newSlotType;
            }
            this._slotHandler?.slotChange(slot, this.props);
        }
        else if (propsChange) {
            this._slotHandler?.propsChange(slot, this.props);
        }
    }
    /** @inheritdoc */
    ngOnDestroy() {
        this._slotHandler?.destroy();
        this._slotHandler = undefined;
    }
    static { this.ɵfac = function SlotDirective_Factory(t) { return new (t || SlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDirective, selectors: [["", "auSlot", ""]], inputs: { slot: [i0.ɵɵInputFlags.None, "auSlot", "slot"], props: [i0.ɵɵInputFlags.None, "auSlotProps", "props"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotDirective, [{
        type: Directive,
        args: [{
                selector: '[auSlot]',
                standalone: true,
            }]
    }], null, { slot: [{
            type: Input,
            args: ['auSlot']
        }], props: [{
            type: Input,
            args: ['auSlotProps']
        }] }); })();

/*
 * Public API Surface of @agnos-ui/angular-headless
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseWidgetDirective, CachedProperty, ComponentTemplate, SlotComponent, SlotDefaultDirective, SlotDirective, UseDirective, UseMultiDirective, ZoneWrapper, auBooleanAttribute, auNumberAttribute, callWidgetFactory, callWidgetFactoryWithConfig, createAccordion, createAlert, createModal, createPagination, createProgressbar, createRating, createSelect, createSlider, createToast, injectWidgetConfig, injectWidgetsConfig, provideWidgetsConfig, toAngularSignal, useDirectiveForHost, widgetsConfigFactory, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular-headless.mjs.map
`;export{e as default};
