const Q=`import { computed, readable, writable } from '@amadeus-it-group/tansu';
import { createWidgetsConfig } from '@agnos-ui/core';
import { DOCUMENT } from '@angular/common';
import { Directive, EnvironmentInjector, InjectionToken, Injector, Input, Optional, SkipSelf, TemplateRef, ViewContainerRef, createComponent, inject, reflectComponentType, runInInjectionContext, } from '@angular/core';
import * as i0 from "@angular/core";
export class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
export const widgetsConfigInjectionToken = new InjectionToken('widgetsConfig');
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
export const provideWidgetsConfig = (adaptParentConfig) => ({
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
export const injectWidgetsConfig = () => inject(widgetsConfigInjectionToken);
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
export const callWidgetFactory = (factory, widgetName, defaultConfig = {}) => {
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
export class SlotDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: SlotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: SlotDirective, isStandalone: true, selector: "[auSlot]", inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: SlotDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9zbG90LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQVlyRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUNOLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixNQUFNLEVBQ04sb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUNyQixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxPQUFPLGlCQUFpQjtJQUM3QixZQUE0QixTQUFrQixFQUFrQixZQUFlO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQVM7UUFBa0IsaUJBQVksR0FBWixZQUFZLENBQUc7SUFBRyxDQUFDO0NBQ25GO0FBNEJEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxjQUFjLENBQW9DLGVBQWUsQ0FBQyxDQUFDO0FBRWxIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtERztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ25DLGlCQUE0RixFQUMxRSxFQUFFLENBQUMsQ0FBQztJQUN0QixPQUFPLEVBQUUsMkJBQTJCO0lBQ3BDLFVBQVUsRUFBRSxDQUFDLE1BQWdELEVBQUUsRUFBRTtRQUNoRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFR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U2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQge2NvbXB1dGVkLCByZWFkYWJsZSwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtcblx0U2xvdENvbnRlbnQgYXMgQ29yZVNsb3RDb250ZW50LFxuXHRXaWRnZXRzQ29uZmlnIGFzIENvcmVXaWRnZXRzQ29uZmlnLFxuXHRQYXJ0aWFsMkxldmVscyxcblx0V2lkZ2V0LFxuXHRXaWRnZXRGYWN0b3J5LFxuXHRXaWRnZXRQcm9wcyxcblx0V2lkZ2V0U2xvdENvbnRleHQsXG5cdFdpZGdldFN0YXRlLFxuXHRXaWRnZXRzQ29uZmlnU3RvcmUsXG59IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7Y3JlYXRlV2lkZ2V0c0NvbmZpZ30gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgRmFjdG9yeVByb3ZpZGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdEVudmlyb25tZW50SW5qZWN0b3IsXG5cdEluamVjdGlvblRva2VuLFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRTa2lwU2VsZixcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdGNyZWF0ZUNvbXBvbmVudCxcblx0aW5qZWN0LFxuXHRyZWZsZWN0Q29tcG9uZW50VHlwZSxcblx0cnVuSW5JbmplY3Rpb25Db250ZXh0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn0+IHtcblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNvbXBvbmVudDogVHlwZTxUPiwgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlUHJvcDogSykge31cbn1cblxuZXhwb3J0IHR5cGUgU2xvdENvbnRlbnQ8UHJvcHMgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3Q+ID1cblx0fCBDb3JlU2xvdENvbnRlbnQ8UHJvcHM+XG5cdHwgVGVtcGxhdGVSZWY8UHJvcHM+XG5cdHwgVHlwZTx1bmtub3duPlxuXHR8IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBhbnksIGFueT47XG5cbmV4cG9ydCB0eXBlIEFkYXB0U2xvdENvbnRlbnRQcm9wczxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0gUHJvcHMgZXh0ZW5kcyBXaWRnZXRTbG90Q29udGV4dDxpbmZlciBVPlxuXHQ/IFdpZGdldFNsb3RDb250ZXh0PEFkYXB0V2lkZ2V0U2xvdHM8VT4+ICYgQWRhcHRQcm9wc1Nsb3RzPE9taXQ8UHJvcHMsIGtleW9mIFdpZGdldFNsb3RDb250ZXh0PGFueT4+PlxuXHQ6IEFkYXB0UHJvcHNTbG90czxQcm9wcz47XG5cbmV4cG9ydCB0eXBlIEFkYXB0UHJvcHNTbG90czxQcm9wcz4gPSBPbWl0PFByb3BzLCBgc2xvdCR7c3RyaW5nfWA+ICYge1xuXHRbSyBpbiBrZXlvZiBQcm9wcyAmIGBzbG90JHtzdHJpbmd9YF06IFByb3BzW0tdIGV4dGVuZHMgQ29yZVNsb3RDb250ZW50PGluZmVyIFU+ID8gU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPFU+PiA6IFByb3BzW0tdO1xufTtcblxuZXhwb3J0IHR5cGUgQWRhcHRXaWRnZXRTbG90czxXIGV4dGVuZHMgV2lkZ2V0PiA9IFdpZGdldDxcblx0QWRhcHRQcm9wc1Nsb3RzPFdpZGdldFByb3BzPFc+Pixcblx0QWRhcHRQcm9wc1Nsb3RzPFdpZGdldFN0YXRlPFc+Pixcblx0V1snYXBpJ10sXG5cdFdbJ2FjdGlvbnMnXSxcblx0V1snZGlyZWN0aXZlcyddXG4+O1xuXG5leHBvcnQgdHlwZSBXaWRnZXRzQ29uZmlnID0ge1xuXHRbV2lkZ2V0TmFtZSBpbiBrZXlvZiBDb3JlV2lkZ2V0c0NvbmZpZ106IEFkYXB0UHJvcHNTbG90czxDb3JlV2lkZ2V0c0NvbmZpZ1tXaWRnZXROYW1lXT47XG59O1xuXG4vKipcbiAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIHRva2VuIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgb3IgaW5qZWN0IHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRzQ29uZmlnU3RvcmU8V2lkZ2V0c0NvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHByb3ZpZGVyIG9mIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRoYXQgaW5oZXJpdHMgZnJvbSBhbnkgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gYWxyZWFkeSBkZWZpbmVkIGF0IGFuIHVwcGVyIGxldmVsXG4gKiBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uIEl0IGNvbnRhaW5zIGl0cyBvd24gc2V0IG9mIHdpZGdldHMgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgb3ZlcnJpZGUgdGhlIHNhbWUgcHJvcGVydGllcyBmb3JtXG4gKiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHJlbWFya3NcbiAqIFRoZSBjb25maWd1cmF0aW9uIGlzIGNvbXB1dGVkIGZyb20gdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGluIHR3byBzdGVwczpcbiAqIC0gZmlyc3Qgc3RlcDogdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGlzIHRyYW5zZm9ybWVkIGJ5IHRoZSBhZGFwdFBhcmVudENvbmZpZyBmdW5jdGlvbiAoaWYgc3BlY2lmaWVkKS5cbiAqIElmIGFkYXB0UGFyZW50Q29uZmlnIGlzIG5vdCBzcGVjaWZpZWQsIHRoaXMgc3RlcCBpcyBza2lwcGVkLlxuICogLSBzZWNvbmQgc3RlcDogdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSBzdGVwIDEgaXMgbWVyZ2VkICgyLWxldmVscyBkZWVwKSB3aXRoIHRoZSBvd24kIHN0b3JlLiBUaGUgb3duJCBzdG9yZSBpbml0aWFsbHkgY29udGFpbnNcbiAqIGFuIGVtcHR5IG9iamVjdCAoaS5lLiBubyBwcm9wZXJ0eSBmcm9tIHRoZSBwYXJlbnQgaXMgb3ZlcnJpZGRlbikuIEl0IGNhbiBiZSBjaGFuZ2VkIGJ5IGNhbGxpbmcgc2V0IG9uIHRoZSBzdG9yZSByZXR1cm5lZCBieVxuICoge0BsaW5rIGluamVjdFdpZGdldHNDb25maWd9LlxuICpcbiAqIEBwYXJhbSBhZGFwdFBhcmVudENvbmZpZyAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSAyLWxldmVscyBjb3B5IG9mIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICogZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbCBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0gKG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBub25lKSBhbmQgcmV0dXJucyB0aGUgd2lkZ2V0c1xuICogZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQuXG4gKiBJdCBpcyBjYWxsZWQgb25seSBpZiB0aGUgY29uZmlndXJhdGlvbiBpcyBuZWVkZWQsIGFuZCB3YXMgbm90IHlldCBjb21wdXRlZCBmb3IgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uLlxuICogSXQgaXMgY2FsbGVkIGluIGEgdGFuc3UgcmVhY3RpdmUgY29udGV4dCwgc28gaXQgY2FuIHVzZSBhbnkgdGFuc3Ugc3RvcmUgYW5kIHdpbGwgYmUgY2FsbGVkIGFnYWluIGlmIHRob3NlIHN0b3JlcyBjaGFuZ2UuXG4gKiBJdCBpcyBhbHNvIGNhbGxlZCBpbiBhbiBBbmd1bGFyIGluamVjdGlvbiBjb250ZXh0LCBzbyBpdCBjYW4gY2FsbCB0aGUgQW5ndWxhciBpbmplY3QgZnVuY3Rpb24gdG8gZ2V0IGFuZCB1c2UgZGVwZW5kZW5jaWVzIGZyb20gdGhlXG4gKiBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbS5cblxuICogQHJldHVybnMgREkgcHJvdmlkZXIgdG8gYmUgaW5jbHVkZWQgYSBsaXN0IG9mIGBwcm92aWRlcnNgIChmb3IgZXhhbXBsZSBhdCBhIGNvbXBvbmVudCBsZXZlbCBvclxuICogYW55IG90aGVyIGxldmVsIG9mIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIC8vIC4uLlxuICogICBwcm92aWRlcnM6IFtcbiAqICAgICBwcm92aWRlV2lkZ2V0c0NvbmZpZygocGFyZW50Q29uZmlnKSA9PiB7XG4gKiAgICAgICAvLyBmaXJzdCBzdGVwIGNvbmZpZ3VyYXRpb246IHRyYW5zZm9ybXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG4gKiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nID0gcGFyZW50Q29uZmlnLnJhdGluZyA/PyB7fTtcbiAqICAgICAgIHBhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID0gYCR7cGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPz8gJyd9IG15LXJhdGluZy1leHRyYS1jbGFzc2BcbiAqICAgICAgIHJldHVybiBwYXJlbnRDb25maWc7XG4gKiAgICAgfSlcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgd2lkZ2V0c0NvbmZpZyA9IGluamVjdFdpZGdldHNDb25maWcoKTtcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgdGhpcy53aWRnZXRzQ29uZmlnLnNldCh7XG4gKiAgICAgICAvLyBzZWNvbmQgc3RlcCBjb25maWd1cmF0aW9uOiBvdmVycmlkZXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG4gKiAgICAgICByYXRpbmc6IHtcbiAqICAgICAgICAgc2xvdFN0YXI6IE15Q3VzdG9tU2xvdFN0YXJcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqICAgfVxuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgcHJvdmlkZVdpZGdldHNDb25maWcgPSAoXG5cdGFkYXB0UGFyZW50Q29uZmlnPzogKGNvbmZpZzogUGFydGlhbDJMZXZlbHM8V2lkZ2V0c0NvbmZpZz4pID0+IFBhcnRpYWwyTGV2ZWxzPFdpZGdldHNDb25maWc+XG4pOiBGYWN0b3J5UHJvdmlkZXIgPT4gKHtcblx0cHJvdmlkZTogd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHR1c2VGYWN0b3J5OiAocGFyZW50OiBXaWRnZXRzQ29uZmlnU3RvcmU8V2lkZ2V0c0NvbmZpZz4gfCBudWxsKSA9PiB7XG5cdFx0aWYgKGFkYXB0UGFyZW50Q29uZmlnKSB7XG5cdFx0XHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnID0gYWRhcHRQYXJlbnRDb25maWc7XG5cdFx0XHRhZGFwdFBhcmVudENvbmZpZyA9ICh2YWx1ZSkgPT4gcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnKHZhbHVlKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjcmVhdGVXaWRnZXRzQ29uZmlnKHBhcmVudCA/PyB1bmRlZmluZWQsIGFkYXB0UGFyZW50Q29uZmlnKTtcblx0fSxcblx0ZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbl1dLFxufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgdGhhdCB3YXMgcHJvdmlkZWQgaW4gdGhlIGN1cnJlbnQgaW5qZWN0aW9uIGNvbnRleHQuXG4gKiBUaHJvd3MgaWYgdGhlIG5vIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlIHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcmVtYXJrc1xuICogVGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBmcm9tIGFuIGluamVjdGlvbiBjb250ZXh0LCBzdWNoIGFzIGEgY29uc3RydWN0b3IsIGEgZmFjdG9yeSBmdW5jdGlvbiwgYSBmaWVsZCBpbml0aWFsaXplciBvclxuICogYSBmdW5jdGlvbiB1c2VkIHdpdGgge0BsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9ydW5JbkluamVjdGlvbkNvbnRleHQgfCBydW5JbkluamVjdGlvbkNvbnRleHR9LlxuICpcbiAqIEByZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGluamVjdFdpZGdldHNDb25maWcgPSAoKSA9PiBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuKTtcblxuY29uc3QgY3JlYXRlUGF0Y2hTbG90cyA9IDxUIGV4dGVuZHMgb2JqZWN0PihzZXQ6IChvYmplY3Q6IFBhcnRpYWw8VD4pID0+IHZvaWQpID0+IHtcblx0bGV0IGxhc3RWYWx1ZTogUGFydGlhbDxUPiA9IHt9O1xuXHRyZXR1cm4gKG9iamVjdDogVCkgPT4ge1xuXHRcdGNvbnN0IG5ld1ZhbHVlOiBQYXJ0aWFsPFQ+ID0ge307XG5cdFx0bGV0IGhhc0NoYW5nZSA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkgYXMgKHN0cmluZyAmIGtleW9mIFQpW10pIHtcblx0XHRcdGNvbnN0IG9iamVjdEtleSA9IChvYmplY3QgYXMgYW55KVtrZXldO1xuXHRcdFx0aWYgKG9iamVjdEtleSAhPSBudWxsKSB7XG5cdFx0XHRcdC8vIG9ubHkgdXNlIGRlZmluZWQgc2xvdHNcblx0XHRcdFx0bmV3VmFsdWVba2V5XSA9IG9iamVjdEtleTtcblx0XHRcdH1cblx0XHRcdGlmIChvYmplY3RLZXkgIT0gbGFzdFZhbHVlW2tleV0pIHtcblx0XHRcdFx0aGFzQ2hhbmdlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGhhc0NoYW5nZSkge1xuXHRcdFx0bGFzdFZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHRzZXQobmV3VmFsdWUpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCB0eXBlIFdpdGhQYXRjaFNsb3RzPFcgZXh0ZW5kcyBXaWRnZXQ+ID0gQWRhcHRXaWRnZXRTbG90czxXPiAmIHtcblx0cGF0Y2hTbG90cyhzbG90czoge1xuXHRcdFtLIGluIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYHNsb3Qke3N0cmluZ31gXTogV2lkZ2V0UHJvcHM8Vz5bS10gZXh0ZW5kcyBDb3JlU2xvdENvbnRlbnQ8aW5mZXIgVT5cblx0XHRcdD8gVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFU+PiB8IHVuZGVmaW5lZFxuXHRcdFx0OiBuZXZlcjtcblx0fSk6IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsbFdpZGdldEZhY3RvcnkgPSA8VyBleHRlbmRzIFdpZGdldD4oXG5cdGZhY3Rvcnk6IFdpZGdldEZhY3Rvcnk8Vz4sXG5cdHdpZGdldE5hbWU6IGtleW9mIFdpZGdldHNDb25maWcgfCBudWxsLFxuXHRkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFkYXB0UHJvcHNTbG90czxXaWRnZXRQcm9wczxXPj4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxBZGFwdFByb3BzU2xvdHM8V2lkZ2V0UHJvcHM8Vz4+Pj4gPSB7fVxuKTogV2l0aFBhdGNoU2xvdHM8Vz4gPT4ge1xuXHRjb25zdCBkZWZhdWx0Q29uZmlnU3RvcmUgPSB0eXBlb2YgZGVmYXVsdENvbmZpZyAhPT0gJ2Z1bmN0aW9uJyA/IHJlYWRhYmxlKGRlZmF1bHRDb25maWcpIDogZGVmYXVsdENvbmZpZztcblx0Y29uc3Qgc2xvdHMkID0gd3JpdGFibGUoe30pO1xuXHRjb25zdCB3aWRnZXRzQ29uZmlnID0gd2lkZ2V0TmFtZSA/IGluamVjdCh3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHtvcHRpb25hbDogdHJ1ZX0pIDogdW5kZWZpbmVkO1xuXHRyZXR1cm4ge1xuXHRcdC4uLihmYWN0b3J5KFxuXHRcdFx0Y29tcHV0ZWQoKCkgPT4gKHsuLi4oZGVmYXVsdENvbmZpZ1N0b3JlKCkgYXMgYW55KSwgLi4uKHdpZGdldE5hbWUgPyB3aWRnZXRzQ29uZmlnPy4oKVt3aWRnZXROYW1lXSA6IHVuZGVmaW5lZCksIC4uLnNsb3RzJCgpfSkpXG5cdFx0KSBhcyBhbnkpLFxuXHRcdHBhdGNoU2xvdHM6IGNyZWF0ZVBhdGNoU2xvdHMoc2xvdHMkLnNldCksXG5cdH07XG59O1xuXG5hYnN0cmFjdCBjbGFzcyBTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIFNsb3QgZXh0ZW5kcyBTbG90Q29udGVudDxQcm9wcz4gPSBTbG90Q29udGVudDxQcm9wcz4+IHtcblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBkb2N1bWVudDogRG9jdW1lbnQpIHt9XG5cdHNsb3RDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRwcm9wc0NoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5jbGFzcyBTdHJpbmdTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIHN0cmluZz4ge1xuXHQjbm9kZVJlZjogVGV4dCB8IHVuZGVmaW5lZDtcblx0I3ByZXZpb3VzVGV4dCA9ICcnO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHNsb3QgPT09IHRoaXMuI3ByZXZpb3VzVGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiNwcmV2aW91c1RleHQgPSBzbG90O1xuXHRcdGlmICh0aGlzLiNub2RlUmVmKSB7XG5cdFx0XHR0aGlzLiNub2RlUmVmLnRleHRDb250ZW50ID0gc2xvdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgdmlld0NvbnRhaW5lckVsZW1lbnQ6IENvbW1lbnQgfCB1bmRlZmluZWQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnQgJiYgdmlld0NvbnRhaW5lckVsZW1lbnQ/LnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy4jbm9kZVJlZiA9IHZpZXdDb250YWluZXJFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2xvdCksIHZpZXdDb250YWluZXJFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI25vZGVSZWY/LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRoaXMuI25vZGVSZWYpO1xuXHRcdHRoaXMuI25vZGVSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgRnVuY3Rpb25TbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIChwcm9wczogUHJvcHMpID0+IHN0cmluZz4ge1xuXHQjc3RyaW5nU2xvdEhhbmRsZXIgPSBuZXcgU3RyaW5nU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmLCB0aGlzLmRvY3VtZW50KTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50U2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUeXBlPHVua25vd24+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcGVydGllczogc3RyaW5nW107XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChzbG90KTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMpO1xuXHR9XG5cblx0I2FwcGx5UHJvcGVydGllcyhwcm9wczogUHJvcHMsIG9sZFByb3BlcnRpZXM/OiBTZXQ8c3RyaW5nPikge1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0dGhpcy4jcHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgcHJvcHNbcHJvcGVydHldKTtcblx0XHRcdG9sZFByb3BlcnRpZXM/LmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQodGhpcy4jcHJvcGVydGllcyk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzLCBvbGRQcm9wZXJ0aWVzKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCB1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUZW1wbGF0ZVJlZjxQcm9wcz4+IHtcblx0I3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wczogUHJvcHM7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0cHJvcHMgPSB7Li4ucHJvcHN9O1xuXHRcdHRoaXMuI3Byb3BzID0gcHJvcHM7XG5cdFx0dGhpcy4jdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoc2xvdCwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQcm9wcyA9IHRoaXMuI3Byb3BzO1xuXHRcdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQ8a2V5b2YgUHJvcHM+KE9iamVjdC5rZXlzKHRlbXBsYXRlUHJvcHMpKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcHMpIGFzIChrZXlvZiBQcm9wcylbXSkge1xuXHRcdFx0XHR0ZW1wbGF0ZVByb3BzW3Byb3BlcnR5XSA9IHByb3BzW3Byb3BlcnR5XTtcblx0XHRcdFx0b2xkUHJvcGVydGllcy5kZWxldGUocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBvbGRQcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wbGF0ZVByb3BzW29sZFByb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuI3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPFxuXHRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdEsgZXh0ZW5kcyBzdHJpbmcsXG5cdFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fVxuPiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgdW5kZWZpbmVkO1xuXHQjdGVtcGxhdGVTbG90SGFuZGxlciA9IG5ldyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZiwgdGhpcy5kb2N1bWVudCk7XG5cdCN0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gY3JlYXRlQ29tcG9uZW50KHNsb3QuY29tcG9uZW50LCB7XG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvcixcblx0XHRcdGVudmlyb25tZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0fSk7XG5cdFx0dGhpcy4jdGVtcGxhdGVSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYuaW5zdGFuY2Vbc2xvdC50ZW1wbGF0ZVByb3BdO1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuc2xvdENoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnByb3BzQ2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmISwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWY/LmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY29uc3QgZ2V0U2xvdFR5cGUgPSAodmFsdWU6IGFueSk6IHVuZGVmaW5lZCB8IHtuZXcgKHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGRvY3VtZW50OiBEb2N1bWVudCk6IFNsb3RIYW5kbGVyPGFueT59ID0+IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiBTdHJpbmdTbG90SGFuZGxlcjtcblx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRpZiAocmVmbGVjdENvbXBvbmVudFR5cGUodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBGdW5jdGlvblNsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHRyZXR1cm4gVGVtcGxhdGVSZWZTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbXBvbmVudFRlbXBsYXRlKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdVNsb3RdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xvdERpcmVjdGl2ZTxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXHRASW5wdXQoJ2F1U2xvdCcpIHNsb3Q6IFNsb3RDb250ZW50PFByb3BzPjtcblx0QElucHV0KCdhdVNsb3RQcm9wcycpIHByb3BzOiBQcm9wcztcblxuXHRwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuXHRwcml2YXRlIF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG5cdHByaXZhdGUgX3Nsb3RUeXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTbG90VHlwZT47XG5cdHByaXZhdGUgX3Nsb3RIYW5kbGVyOiBTbG90SGFuZGxlcjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGNvbnN0IHNsb3RDaGFuZ2UgPSBjaGFuZ2VzWydzbG90J107XG5cdFx0Y29uc3QgcHJvcHNDaGFuZ2UgPSBjaGFuZ2VzWydwcm9wcyddO1xuXHRcdGNvbnN0IHNsb3QgPSB0aGlzLnNsb3Q7XG5cdFx0aWYgKHNsb3RDaGFuZ2UpIHtcblx0XHRcdGNvbnN0IG5ld1Nsb3RUeXBlID0gZ2V0U2xvdFR5cGUoc2xvdCk7XG5cdFx0XHRpZiAobmV3U2xvdFR5cGUgIT09IHRoaXMuX3Nsb3RUeXBlKSB7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gbmV3U2xvdFR5cGUgPyBuZXcgbmV3U2xvdFR5cGUodGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fZG9jdW1lbnQpIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9zbG90VHlwZSA9IG5ld1Nsb3RUeXBlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnNsb3RDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fSBlbHNlIGlmIChwcm9wc0NoYW5nZSkge1xuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnByb3BzQ2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
