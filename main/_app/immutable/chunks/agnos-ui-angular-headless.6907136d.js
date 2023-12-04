const e=`import { toReadableStore, createWidgetsConfig, createAccordion as createAccordion$1, createAlert as createAlert$1, createModal as createModal$1, createPagination as createPagination$1, createRating as createRating$1, createSelect as createSelect$1, createProgressbar as createProgressbar$1 } from '@agnos-ui/core';
export * from '@agnos-ui/core';
import { writable, computed } from '@amadeus-it-group/tansu';
import * as i0 from '@angular/core';
import { NgZone, inject, Injectable, signal, DestroyRef, Injector, runInInjectionContext, SkipSelf, Optional, InjectionToken, Directive, Input, EnvironmentInjector, createComponent, TemplateRef, reflectComponentType, ViewContainerRef, ElementRef, booleanAttribute, numberAttribute } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
                        (async () => {
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
    ngZoneRun(fn) {
        this.#runNeeded = false;
        return this.#zone.run(fn);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ZoneWrapper, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ZoneWrapper, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ZoneWrapper, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
const toAngularSignal = (tansuSignal) => {
    const zoneWrapper = inject(ZoneWrapper);
    const res = signal(undefined);
    const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
        res.set(value);
        zoneWrapper.planNgZoneRun();
    });
    inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
    return res;
};
const callWidgetFactoryWithConfig = ({ factory, defaultConfig, widgetConfig, events, }) => {
    const zoneWrapper = inject(ZoneWrapper);
    factory = zoneWrapper.outsideNgZone(factory);
    const defaultConfig$ = toReadableStore(defaultConfig);
    const slots$ = writable({});
    events = zoneWrapper.insideNgZoneWrapFunctionsObject(events);
    const widget = factory({
        config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...events })),
    });
    return {
        ...widget,
        patch: zoneWrapper.outsideNgZone(widget.patch),
        directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
        actions: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.actions),
        api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
        patchSlots: createPatchSlots(slots$.set),
    };
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
     * @remarks
     * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
     * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
     *
     * @returns the widgets default configuration store.
     */
    const injectWidgetsConfig = () => inject(widgetsConfigInjectionToken);
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    const callWidgetFactory = ({ factory, widgetName = null, defaultConfig = {}, events, }) => callWidgetFactoryWithConfig({
        factory,
        widgetConfig: widgetName ? injectWidgetConfig(widgetName) : null,
        defaultConfig,
        events,
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

class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
class SlotComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: SlotComponent, inputs: { state: "state", widget: "widget" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotComponent, decorators: [{
            type: Directive
        }], propDecorators: { state: [{
                type: Input
            }], widget: [{
                type: Input
            }] } });

class SlotHandler {
    constructor(viewContainerRef, document) {
        this.viewContainerRef = viewContainerRef;
        this.document = document;
    }
    slotChange(slot, props) { }
    propsChange(slot, props) { }
    destroy() { }
}
class StringSlotHandler extends SlotHandler {
    #nodeRef;
    #previousText = '';
    slotChange(slot) {
        if (slot === this.#previousText) {
            return;
        }
        this.#previousText = slot;
        if (this.#nodeRef) {
            this.#nodeRef.textContent = slot;
        }
        else {
            const viewContainerElement = this.viewContainerRef.element.nativeElement;
            if (this.document && viewContainerElement?.parentNode) {
                this.#nodeRef = viewContainerElement.parentNode.insertBefore(this.document.createTextNode(slot), viewContainerElement);
            }
        }
    }
    destroy() {
        this.#nodeRef?.parentNode?.removeChild(this.#nodeRef);
        this.#nodeRef = undefined;
    }
}
class FunctionSlotHandler extends SlotHandler {
    #stringSlotHandler = new StringSlotHandler(this.viewContainerRef, this.document);
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
    #templateSlotHandler = new TemplateRefSlotHandler(this.viewContainerRef, this.document);
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
        this._document = inject(DOCUMENT);
    }
    ngOnChanges(changes) {
        const slotChange = changes['slot'];
        const propsChange = changes['props'];
        const slot = this.slot;
        if (slotChange) {
            const newSlotType = getSlotType(slot);
            if (newSlotType !== this._slotType) {
                this._slotHandler?.destroy();
                this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef, this._document) : undefined;
                this._slotType = newSlotType;
            }
            this._slotHandler?.slotChange(slot, this.props);
        }
        else if (propsChange) {
            this._slotHandler?.propsChange(slot, this.props);
        }
    }
    ngOnDestroy() {
        this._slotHandler?.destroy();
        this._slotHandler = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: SlotDirective, isStandalone: true, selector: "[auSlot]", inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auSlot]',
                    standalone: true,
                }]
        }], propDecorators: { slot: [{
                type: Input,
                args: ['auSlot']
            }], props: [{
                type: Input,
                args: ['auSlotProps']
            }] } });

class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotDefaultDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: SlotDefaultDirective, isStandalone: true, selector: "[auSlotDefault]", inputs: { auSlotDefault: "auSlotDefault" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: SlotDefaultDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[auSlotDefault]', standalone: true }]
        }], propDecorators: { auSlotDefault: [{
                type: Input,
                args: ['auSlotDefault']
            }] } });

// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.
const useDirectiveForHost = (use, params) => {
    const ref = inject(ElementRef);
    let instance = use?.(ref.nativeElement, params);
    async function destroyDirectiveInstance() {
        const oldInstance = instance;
        instance = undefined;
        use = undefined;
        if (oldInstance?.destroy) {
            await 0;
            oldInstance.destroy?.();
        }
    }
    inject(DestroyRef).onDestroy(destroyDirectiveInstance);
    async function update(newUse, newParams) {
        if (newUse !== use) {
            destroyDirectiveInstance();
            use = newUse;
            params = newParams;
            if (newUse) {
                await 0;
                // checks that the directive did not change while waiting:
                if (use === newUse && !instance) {
                    instance = use(ref.nativeElement, params);
                }
            }
        }
        else if (newParams != params) {
            params = newParams;
            await 0;
            instance?.update?.(params);
        }
    }
    return { update };
};
class UseDirective {
    #useDirective = useDirectiveForHost();
    ngOnChanges() {
        this.#useDirective.update(this.use, this.params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: UseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: UseDirective, isStandalone: true, selector: "[auUse]", inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: UseDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[auUse]',
                }]
        }], propDecorators: { use: [{
                type: Input,
                args: ['auUse']
            }], params: [{
                type: Input,
                args: ['auUseParams']
            }] } });

/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auBooleanAttribute }) status: boolean | undefined;
 *  \`\`\`
 * @param value Value to be transformed.
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
 * @param value Value to be transformed.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auNumberAttribute }) id: number | undefined;
 *  \`\`\`
 */
function auNumberAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return numberAttribute(value);
}

/*
 * Public API Surface of @agnos-ui/angular-headless
 */
const createAccordion = createAccordion$1;
const createAlert = createAlert$1;
const createModal = createModal$1;
const createPagination = createPagination$1;
const createRating = createRating$1;
const createSelect = createSelect$1;
const createProgressbar = createProgressbar$1;

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentTemplate, SlotComponent, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, callWidgetFactoryWithConfig, createAccordion, createAlert, createModal, createPagination, createProgressbar, createRating, createSelect, injectWidgetConfig, injectWidgetsConfig, patchSimpleChanges, provideWidgetsConfig, toAngularSignal, useDirectiveForHost, widgetsConfigFactory, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular-headless.mjs.map
`;export{e as default};
