const t=`import * as i0 from '@angular/core';
import { InjectionToken, inject, Injector, runInInjectionContext, SkipSelf, Optional, createComponent, EnvironmentInjector, TemplateRef, reflectComponentType, ViewContainerRef, Directive, Input, ElementRef, Component, ChangeDetectionStrategy, ViewChild, EventEmitter, effect, ContentChild, Output, ViewEncapsulation, forwardRef, HostBinding, NgModule, ApplicationRef, Injectable } from '@angular/core';
import { readable, writable, computed } from '@amadeus-it-group/tansu';
import { createWidgetsConfig, createModal, toSlotContextWidget, mergeDirectives, createPagination, createRating, createSelect, createAlert, createAccordion } from '@agnos-ui/core';
import * as i1 from '@angular/common';
import { DOCUMENT, NgIf, NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
const widgetsConfigInjectionToken = new InjectionToken('widgetsConfig');
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
const callWidgetFactory = (factory, widgetName, defaultConfig = {}) => {
    const defaultConfigStore = typeof defaultConfig !== 'function' ? readable(defaultConfig) : defaultConfig;
    const slots$ = writable({});
    const widgetsConfig = widgetName ? inject(widgetsConfigInjectionToken, { optional: true }) : undefined;
    return {
        ...factory(computed(() => ({ ...defaultConfigStore(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined), ...slots$() }))),
        patchSlots: createPatchSlots(slots$.set),
    };
};
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SlotDirective, isStandalone: true, selector: "[auSlot]", inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SlotDefaultDirective, isStandalone: true, selector: "[auSlotDefault]", inputs: { auSlotDefault: "auSlotDefault" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[auSlotDefault]', standalone: true }]
        }], propDecorators: { auSlotDefault: [{
                type: Input
            }] } });

class UseDirective {
    constructor() {
        this._ref = inject(ElementRef);
    }
    async ngOnChanges(changes) {
        if (this.use !== this._directive) {
            this._directiveInstance?.destroy?.();
            this._directiveInstance = undefined;
            const directive = this.use;
            this._directive = directive;
            if (directive) {
                // waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
                // in case calling the directive changes variables used in the template
                await Promise.resolve();
                // checks that the directive did not change while waiting:
                if (directive === this._directive && !this._directiveInstance) {
                    this._directiveInstance = directive(this._ref.nativeElement, this.params);
                }
            }
        }
        else if (changes['params']) {
            // waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
            // in case calling the directive changes variables used in the template
            await Promise.resolve();
            this._directiveInstance?.update?.(this.params);
        }
    }
    ngOnDestroy() {
        this._directiveInstance?.destroy?.();
        this._directiveInstance = undefined;
        this._directive = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: UseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: UseDirective, isStandalone: true, selector: "[auUse]", inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: UseDirective, decorators: [{
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
 * Directive to provide the slot structure for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalStructureDirective, isStandalone: true, selector: "ng-template[auModalStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalStructure]', standalone: true }]
        }] });
/**
 * Directive to provide the slot header for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalHeaderDirective, isStandalone: true, selector: "ng-template[auModalHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalHeader]', standalone: true }]
        }] });
/**
 * Directive to provide the slot title for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalTitleDirective, isStandalone: true, selector: "ng-template[auModalTitle]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalTitleDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalTitle]', standalone: true }]
        }] });
/**
 * Directive to provide the default slot for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalBodyDirective, isStandalone: true, selector: "ng-template[auModalBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalBody]', standalone: true }]
        }] });
/**
 * Directive to provide the slot footer for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalFooterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalFooterDirective, isStandalone: true, selector: "ng-template[auModalFooter]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalFooterDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalFooter]', standalone: true }]
        }] });
/**
 * Component containing the default slots for the modal.
 */
class ModalDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ModalDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true, static: true }, { propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			<button
				*ngIf="state.closeButton"
				type="button"
				class="btn-close"
				[attr.aria-label]="state.ariaCloseButtonLabel"
				(click)="widget.actions.closeButtonClick($event)"
			></button>
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			<div class="modal-header" *ngIf="state.slotTitle">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-footer" *ngIf="state.slotFooter">
				<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
			</div>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: ModalHeaderDirective, selector: "ng-template[auModalHeader]" }, { kind: "directive", type: ModalStructureDirective, selector: "ng-template[auModalStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, ModalHeaderDirective, ModalStructureDirective],
                    template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			<button
				*ngIf="state.closeButton"
				type="button"
				class="btn-close"
				[attr.aria-label]="state.ariaCloseButtonLabel"
				(click)="widget.actions.closeButtonClick($event)"
			></button>
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			<div class="modal-header" *ngIf="state.slotTitle">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-footer" *ngIf="state.slotFooter">
				<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
			</div>
		</ng-template>
	\`,
                }]
        }], propDecorators: { header: [{
                type: ViewChild,
                args: ['header', { static: true }]
            }], structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
/**
 * Default slot for modal header.
 */
const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
const defaultConfig$3 = {
    slotHeader: modalDefaultSlotHeader,
    slotStructure: modalDefaultSlotStructure,
};
/**
 * Modal component.
 */
class ModalComponent {
    constructor() {
        /**
         * Event to be triggered when the visible property changes.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event to be triggered when the modal is about to be closed (i.e. the close method was called).
         */
        this.beforeClose = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is not visible.
         */
        this.hidden = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is visible.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig$3);
        this._widget = callWidgetFactory(createModal, 'modal', this.defaultSlots);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.modalDirective = mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
        this.backdropDirective = mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onShown: () => this.shown.emit(),
            onHidden: () => this.hidden.emit(),
            onBeforeClose: (event) => this.beforeClose.emit(event),
            onVisibleChange: (event) => this.visibleChange.emit(event),
        });
        effect(() => {
            // TODO: workaround to be removed when https://github.com/angular/angular/issues/50320 is fixed
            this.state();
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotFooter: this.slotFooterFromContent?.templateRef,
            slotHeader: this.slotHeaderFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotTitle: this.slotTitleFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ModalComponent, isStandalone: true, selector: "au-modal", inputs: { animation: "animation", backdropTransition: "backdropTransition", modalTransition: "modalTransition", visible: "visible", backdrop: "backdrop", closeOnOutsideClick: "closeOnOutsideClick", container: "container", ariaCloseButtonLabel: "ariaCloseButtonLabel", backdropClass: "backdropClass", closeButton: "closeButton", modalClass: "modalClass", slotStructure: "slotStructure", slotHeader: "slotHeader", slotTitle: "slotTitle", slotDefault: "slotDefault", slotFooter: "slotFooter" }, outputs: { visibleChange: "visibleChange", beforeClose: "beforeClose", hidden: "hidden", shown: "shown" }, queries: [{ propertyName: "slotStructureFromContent", first: true, predicate: ModalStructureDirective, descendants: true }, { propertyName: "slotHeaderFromContent", first: true, predicate: ModalHeaderDirective, descendants: true }, { propertyName: "slotTitleFromContent", first: true, predicate: ModalTitleDirective, descendants: true }, { propertyName: "slotDefaultFromContent", first: true, predicate: ModalBodyDirective, descendants: true }, { propertyName: "slotFooterFromContent", first: true, predicate: ModalFooterDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().modalClass }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-modal',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, NgIf, SlotDirective, SlotDefaultDirective],
                    template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().modalClass }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { animation: [{
                type: Input
            }], backdropTransition: [{
                type: Input
            }], modalTransition: [{
                type: Input
            }], visible: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], closeOnOutsideClick: [{
                type: Input
            }], container: [{
                type: Input
            }], ariaCloseButtonLabel: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], closeButton: [{
                type: Input
            }], modalClass: [{
                type: Input
            }], slotStructure: [{
                type: Input
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [ModalStructureDirective, { static: false }]
            }], slotHeader: [{
                type: Input
            }], slotHeaderFromContent: [{
                type: ContentChild,
                args: [ModalHeaderDirective, { static: false }]
            }], slotTitle: [{
                type: Input
            }], slotTitleFromContent: [{
                type: ContentChild,
                args: [ModalTitleDirective, { static: false }]
            }], slotDefault: [{
                type: Input
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [ModalBodyDirective, { static: false }]
            }], slotFooter: [{
                type: Input
            }], slotFooterFromContent: [{
                type: ContentChild,
                args: [ModalFooterDirective, { static: false }]
            }], visibleChange: [{
                type: Output
            }], beforeClose: [{
                type: Output
            }], hidden: [{
                type: Output
            }], shown: [{
                type: Output
            }] } });

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationEllipsisDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationEllipsisDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationEllipsisDirective, isStandalone: true, selector: "ng-template[auPaginationEllipsis]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationEllipsisDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationEllipsis]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'first' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationFirstDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationFirstDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationFirstDirective, isStandalone: true, selector: "ng-template[auPaginationFirst]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationFirstDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationFirst]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'last' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationLastDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationLastDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationLastDirective, isStandalone: true, selector: "ng-template[auPaginationLast]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationLastDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationLast]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'next' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationNextDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationNextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationNextDirective, isStandalone: true, selector: "ng-template[auPaginationNext]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationNextDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationNext]', standalone: true }]
        }] });
/**
 * A directive to use to give the page 'number' template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationNumberDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationNumberDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationNumberDirective, isStandalone: true, selector: "ng-template[auPaginationNumber]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationNumberDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationNumber]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationPreviousDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationPreviousDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationPreviousDirective, isStandalone: true, selector: "ng-template[auPaginationPrevious]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationPreviousDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPrevious]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
// eslint-disable-next-line @angular-eslint/directive-selector
class PaginationPagesDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationPagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: PaginationPagesDirective, isStandalone: true, selector: "ng-template[auPaginationPages]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationPagesDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPages]', standalone: true }]
        }] });
class PaginationDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: PaginationDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "pages", first: true, predicate: ["pages"], descendants: true, static: true }], ngImport: i0, template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		<li
			*ngFor="let page of state.pages; index as i"
			class="page-item"
			[class.active]="page === state.page"
			[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
			[attr.aria-current]="page === state.page ? 'page' : null"
		>
			<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
				<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
			</a>
			<a
				*ngIf="!widget.api.isEllipsis(page)"
				[attr.aria-label]="state.pagesLabel[i]"
				class="page-link au-page"
				href="#"
				(click)="widget.actions.select(page); $event.preventDefault()"
				[attr.tabindex]="state.disabled ? '-1' : null"
				[attr.aria-disabled]="state.disabled ? 'true' : null"
			>
				<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
				<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
			</a>
		</li>
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: PaginationPagesDirective, selector: "ng-template[auPaginationPages]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [NgForOf, NgIf, SlotDirective, PaginationPagesDirective],
                    template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		<li
			*ngFor="let page of state.pages; index as i"
			class="page-item"
			[class.active]="page === state.page"
			[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
			[attr.aria-current]="page === state.page ? 'page' : null"
		>
			<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
				<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
			</a>
			<a
				*ngIf="!widget.api.isEllipsis(page)"
				[attr.aria-label]="state.pagesLabel[i]"
				class="page-link au-page"
				href="#"
				(click)="widget.actions.select(page); $event.preventDefault()"
				[attr.tabindex]="state.disabled ? '-1' : null"
				[attr.aria-disabled]="state.disabled ? 'true' : null"
			>
				<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
				<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
			</a>
		</li>
	</ng-template>\`,
                }]
        }], propDecorators: { pages: [{
                type: ViewChild,
                args: ['pages', { static: true }]
            }] } });
/**
 * The default slot for the pages
 */
const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
const defaultConfig$2 = {
    slotPages: paginationDefaultSlotPages,
};
class PaginationComponent {
    constructor() {
        this._widget = callWidgetFactory(createPagination, 'pagination', defaultConfig$2);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        /**
         * An event fired when the page is changed.
         *
         * Event payload is the number of the newly selected page.
         *
         * Page numbers start with \`1\`.
         */
        this.pageChange = new EventEmitter(true);
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onPageChange: (page) => this.pageChange.emit(page),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotEllipsis: this.slotEllipsisFromContent?.templateRef,
            slotFirst: this.slotFirstFromContent?.templateRef,
            slotLast: this.slotLastFromContent?.templateRef,
            slotNext: this.slotNextFromContent?.templateRef,
            slotNumberLabel: this.slotNumberLabelFromContent?.templateRef,
            slotPages: this.slotPagesFromContent?.templateRef,
            slotPrevious: this.slotPreviousFromContent?.templateRef,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: PaginationComponent, isStandalone: true, selector: "nav[au-pagination]", inputs: { ariaPageLabel: "ariaPageLabel", ariaLabel: "ariaLabel", activeLabel: "activeLabel", ariaFirstLabel: "ariaFirstLabel", ariaPreviousLabel: "ariaPreviousLabel", ariaNextLabel: "ariaNextLabel", ariaLastLabel: "ariaLastLabel", slotEllipsis: "slotEllipsis", slotFirst: "slotFirst", slotPrevious: "slotPrevious", slotNext: "slotNext", slotLast: "slotLast", slotPages: "slotPages", slotNumberLabel: "slotNumberLabel", disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", collectionSize: "collectionSize", page: "page", pageSize: "pageSize", size: "size", pagesFactory: "pagesFactory", className: "className" }, outputs: { pageChange: "pageChange" }, host: { properties: { "attr.aria-label": "state$().ariaLabel" } }, queries: [{ propertyName: "slotEllipsisFromContent", first: true, predicate: PaginationEllipsisDirective, descendants: true }, { propertyName: "slotFirstFromContent", first: true, predicate: PaginationFirstDirective, descendants: true }, { propertyName: "slotPreviousFromContent", first: true, predicate: PaginationPreviousDirective, descendants: true }, { propertyName: "slotNextFromContent", first: true, predicate: PaginationNextDirective, descendants: true }, { propertyName: "slotLastFromContent", first: true, predicate: PaginationLastDirective, descendants: true }, { propertyName: "slotPagesFromContent", first: true, predicate: PaginationPagesDirective, descendants: true }, { propertyName: "slotNumberLabelFromContent", first: true, predicate: PaginationNumberDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-container *ngIf="widget.state$ | async as state">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaFirstLabel"
						class="page-link au-first"
						href="#"
						(click)="widget.actions.first(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaPreviousLabel"
						class="page-link au-previous"
						href="#"
						(click)="widget.actions.previous(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaNextLabel"
						class="page-link au-next"
						href="#"
						(click)="widget.actions.next(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaLastLabel"
						class="page-link au-last"
						href="#"
						(click)="widget.actions.last(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-container>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'nav[au-pagination]',
                    standalone: true,
                    imports: [NgIf, AsyncPipe, SlotDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.aria-label]': 'state$().ariaLabel',
                    },
                    encapsulation: ViewEncapsulation.None,
                    template: \`
		<ng-container *ngIf="widget.state$ | async as state">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaFirstLabel"
						class="page-link au-first"
						href="#"
						(click)="widget.actions.first(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaPreviousLabel"
						class="page-link au-previous"
						href="#"
						(click)="widget.actions.previous(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaNextLabel"
						class="page-link au-next"
						href="#"
						(click)="widget.actions.next(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaLastLabel"
						class="page-link au-last"
						href="#"
						(click)="widget.actions.last(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-container>
	\`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { ariaPageLabel: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], activeLabel: [{
                type: Input
            }], ariaFirstLabel: [{
                type: Input
            }], ariaPreviousLabel: [{
                type: Input
            }], ariaNextLabel: [{
                type: Input
            }], ariaLastLabel: [{
                type: Input
            }], slotEllipsis: [{
                type: Input
            }], slotEllipsisFromContent: [{
                type: ContentChild,
                args: [PaginationEllipsisDirective, { static: false }]
            }], slotFirst: [{
                type: Input
            }], slotFirstFromContent: [{
                type: ContentChild,
                args: [PaginationFirstDirective, { static: false }]
            }], slotPrevious: [{
                type: Input
            }], slotPreviousFromContent: [{
                type: ContentChild,
                args: [PaginationPreviousDirective, { static: false }]
            }], slotNext: [{
                type: Input
            }], slotNextFromContent: [{
                type: ContentChild,
                args: [PaginationNextDirective, { static: false }]
            }], slotLast: [{
                type: Input
            }], slotLastFromContent: [{
                type: ContentChild,
                args: [PaginationLastDirective, { static: false }]
            }], slotPages: [{
                type: Input
            }], slotPagesFromContent: [{
                type: ContentChild,
                args: [PaginationPagesDirective, { static: false }]
            }], slotNumberLabel: [{
                type: Input
            }], slotNumberLabelFromContent: [{
                type: ContentChild,
                args: [PaginationNumberDirective, { static: false }]
            }], disabled: [{
                type: Input
            }], boundaryLinks: [{
                type: Input
            }], directionLinks: [{
                type: Input
            }], collectionSize: [{
                type: Input
            }], page: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], size: [{
                type: Input
            }], pagesFactory: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], className: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/directive-selector
class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: RatingStarDirective, isStandalone: true, selector: "ng-template[auRatingStar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
        }] });
class RatingComponent {
    // TODO angular is failing when adding this host binding in decorator part
    get hostAriaLabelledBy() {
        return this.state$().ariaLabelledBy || null;
    }
    constructor() {
        this._widget = callWidgetFactory(createRating, 'rating');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this.onChange = (_) => { };
        this.onTouched = () => { };
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload is equal to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         */
        this.ratingChange = new EventEmitter();
        this._widget.patch({
            onHover: (event) => this.hover.emit(event),
            onLeave: (event) => this.leave.emit(event),
            onRatingChange: (rating) => {
                this.ratingChange.emit(rating);
                this.onChange(rating);
            },
        });
    }
    writeValue(value) {
        this._widget.patch({ rating: value });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._widget.patch({ disabled });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStar: this.slotStarFromContent?.templateRef,
        });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: RatingComponent, isStandalone: true, selector: "au-rating", inputs: { ariaValueTextFn: "ariaValueTextFn", disabled: "disabled", maxRating: "maxRating", rating: "rating", readonly: "readonly", resettable: "resettable", slotStar: "slotStar", tabindex: "tabindex", className: "className", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy" }, outputs: { hover: "hover", leave: "leave", ratingChange: "ratingChange" }, host: { attributes: { "role": "slider", "aria-valuemin": "0" }, listeners: { "blur": "onTouched()", "keydown": "_widget.actions.handleKey($event)", "mouseleave": "_widget.actions.leave()" }, properties: { "tabindex": "state$().tabindex", "attr.aria-valuemax": "state$().maxRating", "attr.aria-valuenow": "state$().visibleRating", "attr.aria-valuetext": "state$().ariaValueText", "attr.aria-disabled": "state$().disabled ? true : null", "attr.aria-readonly": "state$().readonly ? true : null", "attr.aria-label": "state$().ariaLabel || null", "class": "state$().className", "[attr.aria-labelledby]": "this.hostAriaLabelledBy" }, classAttribute: "d-inline-flex au-rating" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }], queries: [{ propertyName: "slotStarFromContent", first: true, predicate: RatingStarDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-rating',
                    standalone: true,
                    imports: [NgForOf, SlotDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'd-inline-flex au-rating',
                        '[tabindex]': 'state$().tabindex',
                        role: 'slider',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'state$().maxRating',
                        '[attr.aria-valuenow]': 'state$().visibleRating',
                        '[attr.aria-valuetext]': 'state$().ariaValueText',
                        '[attr.aria-disabled]': 'state$().disabled ? true : null',
                        '[attr.aria-readonly]': 'state$().readonly ? true : null',
                        '[attr.aria-label]': 'state$().ariaLabel || null',
                        '(blur)': 'onTouched()',
                        '(keydown)': '_widget.actions.handleKey($event)',
                        '(mouseleave)': '_widget.actions.leave()',
                        '[class]': 'state$().className',
                    },
                    template: \`
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`,
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostAriaLabelledBy: [{
                type: HostBinding,
                args: ['[attr.aria-labelledby]']
            }], ariaValueTextFn: [{
                type: Input
            }], disabled: [{
                type: Input
            }], maxRating: [{
                type: Input
            }], rating: [{
                type: Input
            }], readonly: [{
                type: Input
            }], resettable: [{
                type: Input
            }], slotStar: [{
                type: Input
            }], slotStarFromContent: [{
                type: ContentChild,
                args: [RatingStarDirective, { static: false }]
            }], tabindex: [{
                type: Input
            }], className: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], hover: [{
                type: Output
            }], leave: [{
                type: Output
            }], ratingChange: [{
                type: Output
            }] } });

class SelectComponent {
    constructor() {
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter();
        this._widget = callWidgetFactory(createSelect, 'select');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onFilterTextChange: (event) => this.filterTextChange.emit(event),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    itemCtxTrackBy(_, itemCtx) {
        return itemCtx.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: SelectComponent, isStandalone: true, selector: "au-select", inputs: { items: "items", opened: "opened", filterText: "filterText", className: "className", disabled: "disabled", matchFn: "matchFn", itemId: "itemId", selected: "selected", loading: "loading" }, outputs: { filterTextChange: "filterTextChange" }, host: { properties: { "class": "\\"au-select dropdown input-group input-group-sm mb-3 d-block\\" + state$().className" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n", styles: ["\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n"], dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [UseDirective, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, selector: 'au-select', host: {
                        '[class]': '"au-select dropdown input-group input-group-sm mb-3 d-block" + state$().className',
                    }, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n", styles: ["\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { items: [{
                type: Input
            }], opened: [{
                type: Input
            }], filterText: [{
                type: Input
            }], className: [{
                type: Input
            }], filterTextChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], matchFn: [{
                type: Input
            }], itemId: [{
                type: Input
            }], selected: [{
                type: Input
            }], loading: [{
                type: Input
            }] } });

class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AlertBodyDirective, isStandalone: true, selector: "ng-template[auAlertBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertBody]', standalone: true }]
        }] });
class AlertStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AlertStructureDirective, isStandalone: true, selector: "ng-template[auAlertStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
        }] });
class AlertDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AlertDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		<button
			*ngIf="state.dismissible"
			type="button"
			class="btn-close ms-auto"
			(click)="widget.api.close()"
			[attr.aria-label]="state.ariaCloseButtonLabel"
		></button>
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: AlertStructureDirective, selector: "ng-template[auAlertStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, AlertStructureDirective],
                    template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		<button
			*ngIf="state.dismissible"
			type="button"
			class="btn-close ms-auto"
			(click)="widget.api.close()"
			[attr.aria-label]="state.ariaCloseButtonLabel"
		></button>
	</ng-template>\`,
                }]
        }], propDecorators: { structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
const defaultConfig$1 = {
    slotStructure: alertDefaultSlotStructure,
};
class AlertComponent {
    constructor() {
        /**
         * Callback called when the alert visibility changed.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Callback called when the alert is hidden.
         */
        this.hidden = new EventEmitter();
        /**
         * Callback called when the alert is shown.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig$1);
        this._widget = callWidgetFactory(createAlert, 'alert', this.defaultSlots);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onVisibleChange: (event) => this.visibleChange.emit(event),
            onShown: () => this.shown.emit(),
            onHidden: () => this.hidden.emit(),
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AlertComponent, isStandalone: true, selector: "au-alert", inputs: { type: "type", dismissible: "dismissible", transition: "transition", visible: "visible", animationOnInit: "animationOnInit", animation: "animation", ariaCloseButtonLabel: "ariaCloseButtonLabel", slotDefault: "slotDefault", slotStructure: "slotStructure" }, outputs: { visibleChange: "visibleChange", hidden: "hidden", shown: "shown" }, queries: [{ propertyName: "slotDefaultFromContent", first: true, predicate: AlertBodyDirective, descendants: true }, { propertyName: "slotStructureFromContent", first: true, predicate: AlertStructureDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-alert',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, UseDirective, SlotDefaultDirective],
                    template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>\`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], transition: [{
                type: Input
            }], visible: [{
                type: Input
            }], animationOnInit: [{
                type: Input
            }], animation: [{
                type: Input
            }], ariaCloseButtonLabel: [{
                type: Input
            }], slotDefault: [{
                type: Input
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [AlertBodyDirective, { static: false }]
            }], slotStructure: [{
                type: Input
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [AlertStructureDirective, { static: false }]
            }], visibleChange: [{
                type: Output
            }], hidden: [{
                type: Output
            }], shown: [{
                type: Output
            }] } });

class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemBody]', standalone: true }]
        }] });
class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemHeader]', standalone: true }]
        }] });
class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="state.itemCollapsed"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="!state.itemCollapsed"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</h2>
			<div
				*ngIf="state.shouldBeInDOM"
				[auUse]="widget.directives.collapseDirective"
				attr.aria-labelledby="{{ state.itemId }}-toggle"
				id="{{ state.itemId }}-collapse"
				class="accordion-collapse {{ state.itemCollapseClass }}"
			>
				<div class="accordion-body {{ state.itemBodyClass }}">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
				</div>
			</div>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, SlotDirective, NgIf, AccordionHeaderDirective, AccordionBodyDirective],
                    template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="state.itemCollapsed"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="!state.itemCollapsed"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</h2>
			<div
				*ngIf="state.shouldBeInDOM"
				[auUse]="widget.directives.collapseDirective"
				attr.aria-labelledby="{{ state.itemId }}-toggle"
				id="{{ state.itemId }}-collapse"
				class="accordion-collapse {{ state.itemCollapseClass }}"
			>
				<div class="accordion-body {{ state.itemBodyClass }}">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
                }]
        }], propDecorators: { structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
const accordionItemDefaultslotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotItemStructure: accordionItemDefaultslotItemStructure,
};
class AccordionItemComponent {
    constructor() {
        /**
         * An event fired when an item is shown.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`collapsed\` value changes.
         *
         * Event payload is the new value of collapsed.
         */
        this.itemCollapsedChange = new EventEmitter();
        this.defaultSlots = writable(defaultConfig);
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory(this.ad.api.registerItem, null, defaultConfig);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.useDirective = inject(UseDirective);
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
            onItemHidden: () => this.itemHidden.emit(),
            onItemShown: () => this.itemShown.emit(),
        });
        effect(() => {
            // TODO: workaround to be removed when https://github.com/angular/angular/issues/50320 is fixed
            this.state();
        });
        this.useDirective.use = this._widget.directives.accordionItemDirective;
        this.useDirective.ngOnChanges({
            useDirective: {
                previousValue: undefined,
                currentValue: this.useDirective.use,
                firstChange: true,
                isFirstChange: () => true,
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotItemStructure: this.slotItemStructureFromContent?.templateRef,
            slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
            slotItemBody: this.slotItemBodyFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemComponent, isStandalone: true, selector: "[au-accordion-item]", inputs: { slotItemHeader: "slotItemHeader", slotItemBody: "slotItemBody", slotItemStructure: "slotItemStructure", itemId: "itemId", itemTransition: "itemTransition", itemClass: "itemClass", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, hostDirectives: [{ directive: UseDirective }], ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[au-accordion-item]',
                    exportAs: 'auAccordionItem',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': '"accordion-item " + state().itemClass',
                        '[id]': 'state().itemId',
                    },
                    hostDirectives: [
                        {
                            directive: UseDirective,
                        },
                    ],
                    imports: [SlotDirective, UseDirective],
                    template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { slotItemHeader: [{
                type: Input
            }], slotItemHeaderFromContent: [{
                type: ContentChild,
                args: [AccordionHeaderDirective, { static: false }]
            }], slotItemBody: [{
                type: Input
            }], slotItemBodyFromContent: [{
                type: ContentChild,
                args: [AccordionBodyDirective, { static: false }]
            }], slotItemStructure: [{
                type: Input
            }], slotItemStructureFromContent: [{
                type: ContentChild,
                args: [AccordionItemStructureDirective, { static: false }]
            }], itemId: [{
                type: Input
            }], itemTransition: [{
                type: Input
            }], itemClass: [{
                type: Input
            }], itemDestroyOnHide: [{
                type: Input
            }], itemDisabled: [{
                type: Input
            }], itemCollapsed: [{
                type: Input
            }], itemAnimation: [{
                type: Input
            }], itemHeaderClass: [{
                type: Input
            }], itemButtonClass: [{
                type: Input
            }], itemCollapseClass: [{
                type: Input
            }], itemBodyClass: [{
                type: Input
            }], itemShown: [{
                type: Output
            }], itemHidden: [{
                type: Output
            }], itemCollapsedChange: [{
                type: Output
            }] } });
class AccordionDirective {
    constructor() {
        this.useDirective = inject(UseDirective);
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         */
        this.shown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         */
        this.hidden = new EventEmitter();
        //should not be documented
        /**
         * An event fired when an item is shown.
         *
         * It is a prop of the accordion-item.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * It is a prop of the accordion-item.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`collapsed\` value changes.
         *
         * Event payload is the new value of collapsed.
         *
         * It is a prop of the accordion-item.
         */
        this.itemCollapsedChange = new EventEmitter();
        this._widget = callWidgetFactory(createAccordion, 'accordion', {});
        this.api = this._widget.api;
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this.useDirective.use = this._widget.directives.accordionDirective;
        this.useDirective.ngOnChanges({
            useDirective: {
                previousValue: undefined,
                currentValue: this.useDirective.use,
                firstChange: true,
                isFirstChange: () => true,
            },
        });
        this._widget.patch({
            onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
            onItemHidden: () => this.itemHidden.emit(),
            onItemShown: () => this.itemShown.emit(),
            onShown: (id) => this.shown.emit(id),
            onHidden: (id) => this.hidden.emit(id),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: "closeOthers", accordionClass: "accordionClass", itemId: "itemId", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemTransition: "itemTransition", slotItemStructure: "slotItemStructure", slotItemBody: "slotItemBody", slotItemHeader: "slotItemHeader", itemClass: "itemClass", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { shown: "shown", hidden: "hidden", itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion \\" + state$().accordionClass" } }, exportAs: ["auAccordion"], usesOnChanges: true, hostDirectives: [{ directive: UseDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auAccordion]',
                    exportAs: 'auAccordion',
                    standalone: true,
                    host: {
                        '[class]': '"accordion " + state$().accordionClass',
                    },
                    hostDirectives: [
                        {
                            directive: UseDirective,
                        },
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { closeOthers: [{
                type: Input
            }], accordionClass: [{
                type: Input
            }], shown: [{
                type: Output
            }], hidden: [{
                type: Output
            }], itemId: [{
                type: Input
            }], itemDestroyOnHide: [{
                type: Input
            }], itemDisabled: [{
                type: Input
            }], itemCollapsed: [{
                type: Input
            }], itemAnimation: [{
                type: Input
            }], itemTransition: [{
                type: Input
            }], slotItemStructure: [{
                type: Input
            }], slotItemBody: [{
                type: Input
            }], slotItemHeader: [{
                type: Input
            }], itemClass: [{
                type: Input
            }], itemHeaderClass: [{
                type: Input
            }], itemButtonClass: [{
                type: Input
            }], itemCollapseClass: [{
                type: Input
            }], itemBodyClass: [{
                type: Input
            }], itemShown: [{
                type: Output
            }], itemHidden: [{
                type: Output
            }], itemCollapsedChange: [{
                type: Output
            }] } });

/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
    UseDirective,
    RatingComponent,
    RatingStarDirective,
    PaginationComponent,
    PaginationEllipsisDirective,
    PaginationFirstDirective,
    PaginationLastDirective,
    PaginationNextDirective,
    PaginationNumberDirective,
    PaginationPreviousDirective,
    PaginationPagesDirective,
    ModalComponent,
    ModalStructureDirective,
    ModalHeaderDirective,
    ModalTitleDirective,
    ModalBodyDirective,
    ModalFooterDirective,
    AlertComponent,
    AccordionDirective,
    AccordionItemComponent,
    AccordionHeaderDirective,
    AccordionBodyDirective,
];
class AgnosUIAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, imports: [SlotDirective,
            SelectComponent,
            UseDirective,
            RatingComponent,
            RatingStarDirective,
            PaginationComponent,
            PaginationEllipsisDirective,
            PaginationFirstDirective,
            PaginationLastDirective,
            PaginationNextDirective,
            PaginationNumberDirective,
            PaginationPreviousDirective,
            PaginationPagesDirective,
            ModalComponent,
            ModalStructureDirective,
            ModalHeaderDirective,
            ModalTitleDirective,
            ModalBodyDirective,
            ModalFooterDirective,
            AlertComponent,
            AccordionDirective,
            AccordionItemComponent,
            AccordionHeaderDirective,
            AccordionBodyDirective], exports: [SlotDirective,
            SelectComponent,
            UseDirective,
            RatingComponent,
            RatingStarDirective,
            PaginationComponent,
            PaginationEllipsisDirective,
            PaginationFirstDirective,
            PaginationLastDirective,
            PaginationNextDirective,
            PaginationNumberDirective,
            PaginationPreviousDirective,
            PaginationPagesDirective,
            ModalComponent,
            ModalStructureDirective,
            ModalHeaderDirective,
            ModalTitleDirective,
            ModalBodyDirective,
            ModalFooterDirective,
            AlertComponent,
            AccordionDirective,
            AccordionItemComponent,
            AccordionHeaderDirective,
            AccordionBodyDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, imports: [SelectComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: components,
                    exports: components,
                }]
        }] });

class ModalService {
    constructor() {
        this._injector = inject(Injector);
        this._applicationRef = inject(ApplicationRef);
    }
    async open(options, { injector = this._injector } = {}) {
        const component = createComponent(ModalComponent, {
            environmentInjector: injector.get(EnvironmentInjector),
            elementInjector: injector,
        });
        const subscriptions = [];
        try {
            for (const prop of Object.keys(options)) {
                const value = options[prop];
                if (prop.startsWith('on')) {
                    const eventName = \`\${prop[2].toLowerCase()}\${prop.substring(3)}\`;
                    const eventEmitter = component.instance[eventName];
                    if (eventEmitter instanceof EventEmitter) {
                        subscriptions.push(eventEmitter.subscribe(value));
                    }
                }
                else {
                    component.setInput(prop, value);
                }
            }
            this._applicationRef.attachView(component.hostView);
            return await component.instance.api.open();
        }
        finally {
            component.destroy();
            for (const subscription of subscriptions) {
                subscription.unsubscribe();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/*
 * Public API Surface of agnos-ui-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionBodyDirective, AccordionDirective, AccordionHeaderDirective, AccordionItemComponent, AccordionItemDefaultSlotsComponent, AccordionItemStructureDirective, AgnosUIAngularModule, AlertBodyDirective, AlertComponent, AlertDefaultSlotsComponent, AlertStructureDirective, ComponentTemplate, ModalBodyDirective, ModalComponent, ModalDefaultSlotsComponent, ModalFooterDirective, ModalHeaderDirective, ModalService, ModalStructureDirective, ModalTitleDirective, PaginationComponent, PaginationDefaultSlotsComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, RatingComponent, RatingStarDirective, SelectComponent, SlotDirective, UseDirective, accordionItemDefaultslotItemStructure, alertDefaultSlotStructure, callWidgetFactory, injectWidgetsConfig, modalDefaultSlotHeader, modalDefaultSlotStructure, paginationDefaultSlotPages, provideWidgetsConfig, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular.mjs.map
`;export{t as default};
