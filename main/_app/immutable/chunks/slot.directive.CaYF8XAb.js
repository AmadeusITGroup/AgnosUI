const Q=`import { Component, Directive, EnvironmentInjector, Input, TemplateRef, ViewChild, ViewContainerRef, createComponent, inject, reflectComponentType, } from '@angular/core';
import { ComponentTemplate } from './types';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = function StringSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StringSlotComponent)(); }; }
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
        this.#templateSlotHandler.slotChange(this.#templateRef, props);
    }
    propsChange(_slot, props) {
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
/**
 * A directive that manages slot content and its properties.
 *
 * @template Props - A record type representing the properties for the slot.
 *
 * @remarks
 * This directive handles changes to the slot content and its properties,
 * and manages the lifecycle of the slot handler.
 */
export class SlotDirective {
    constructor() {
        this._viewContainerRef = inject(ViewContainerRef);
    }
    /**
     * @param changes SimpleChanges from Angular
     * @internal
     */
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
    /** @internal */
    ngOnDestroy() {
        this._slotHandler?.destroy();
        this._slotHandler = undefined;
    }
    static { this.ɵfac = function SlotDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDirective, selectors: [["", "auSlot", ""]], inputs: { slot: [0, "auSlot", "slot"], props: [0, "auSlotProps", "props"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
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
            args: [{ alias: 'auSlotProps', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsTUFBTSxFQUNOLG9CQUFvQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7SUFVVyxZQUFhOzs7SUFBYixnQ0FBYTs7QUFSbEUsTUFBZSxXQUFXO0lBQ3pCLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUN6RCxVQUFVLENBQUMsS0FBVyxFQUFFLE1BQWEsSUFBRyxDQUFDO0lBQ3pDLFdBQVcsQ0FBQyxLQUFXLEVBQUUsTUFBYSxJQUFHLENBQUM7SUFDMUMsT0FBTyxLQUFJLENBQUM7Q0FDWjtBQUVELE1BR00sbUJBQW1CO29IQUFuQixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7Ozs7O1lBRmIscUhBQXlDOzs7aUZBRS9DLG1CQUFtQjtjQUh4QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNFQUFzRTthQUNoRjtnQkFFbUMsSUFBSTtrQkFBdEMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFENUIsbUJBQW1CO0FBR3pCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBaUQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkksTUFBTSxpQkFBcUQsU0FBUSxXQUEwQjtJQUNuRix1QkFBdUIsR0FBRyxJQUFJLDRCQUE0QixDQUFpRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzSSxZQUFZLEdBQUcsS0FBSyxD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Q0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7WUFDOUIsQ0FBQztZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQzthQUFNLElBQUksV0FBVyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0YsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzhHQXZDVyxhQUFhO29FQUFiLGFBQWE7O2lGQUFiLGFBQWE7Y0FKekIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsSUFBSTthQUNoQjtnQkFLaUIsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBSWdDLEtBQUs7a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0RGlyZWN0aXZlLFxuXHRFbnZpcm9ubWVudEluamVjdG9yLFxuXHRJbnB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Y3JlYXRlQ29tcG9uZW50LFxuXHRpbmplY3QsXG5cdHJlZmxlY3RDb21wb25lbnRUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0NvbXBvbmVudFRlbXBsYXRlfSBmcm9tICcuL3R5cGVzJztcblxuYWJzdHJhY3QgY2xhc3MgU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBTbG90IGV4dGVuZHMgU2xvdENvbnRlbnQ8UHJvcHM+ID0gU2xvdENvbnRlbnQ8UHJvcHM+PiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXHRzbG90Q2hhbmdlKF9zbG90OiBTbG90LCBfcHJvcHM6IFByb3BzKSB7fVxuXHRwcm9wc0NoYW5nZShfc2xvdDogU2xvdCwgX3Byb3BzOiBQcm9wcykge31cblx0ZGVzdHJveSgpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtY29udGVudD1cImNvbnRlbnRcIj57eyBjb250ZW50IH19PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmNsYXNzIFN0cmluZ1Nsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCd0ZXh0Jywge3N0YXRpYzogdHJ1ZX0pIHRleHQhOiBUZW1wbGF0ZVJlZjx7Y29udGVudDogc3RyaW5nfT47XG59XG5jb25zdCBzdHJpbmdTbG90Q29tcG9uZW50VGVtcGxhdGUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGU8e2NvbnRlbnQ6IHN0cmluZ30sICd0ZXh0JywgU3RyaW5nU2xvdENvbXBvbmVudD4oU3RyaW5nU2xvdENvbXBvbmVudCwgJ3RleHQnKTtcblxuY2xhc3MgU3RyaW5nU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBzdHJpbmc+IHtcblx0cmVhZG9ubHkgI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjx7Y29udGVudDogc3RyaW5nfSwgJ3RleHQnLCBTdHJpbmdTbG90Q29tcG9uZW50Pih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHQjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzdHJpbmdTbG90Q29tcG9uZW50VGVtcGxhdGUsIHtjb250ZW50fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIucHJvcHNDaGFuZ2Uoc3RyaW5nU2xvdENvbXBvbmVudFRlbXBsYXRlLCB7Y29udGVudH0pO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVSZWZTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgRnVuY3Rpb25TbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIChwcm9wczogUHJvcHMpID0+IHN0cmluZz4ge1xuXHRyZWFkb25seSAjc3RyaW5nU2xvdEhhbmRsZXIgPSBuZXcgU3RyaW5nU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50U2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUeXBlPHVua25vd24+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcGVydGllcz86IHN0cmluZ1tdO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoc2xvdCk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzKTtcblx0fVxuXG5cdCNhcHBseVByb3BlcnRpZXMocHJvcHM6IFByb3BzLCBvbGRQcm9wZXJ0aWVzPzogU2V0PHN0cmluZz4pIHtcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdHRoaXMuI3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHByb3BzW3Byb3BlcnR5XSk7XG5cdFx0XHRvbGRQcm9wZXJ0aWVzPy5kZWxldGUocHJvcGVydHkpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKF9zbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldCh0aGlzLiNwcm9wZXJ0aWVzKTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMsIG9sZFByb3BlcnRpZXMpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgVGVtcGxhdGVSZWZTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFRlbXBsYXRlUmVmPFByb3BzPj4ge1xuXHQjdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblx0I3Byb3BzPzogUHJvcHM7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0cHJvcHMgPSB7Li4ucHJvcHN9O1xuXHRcdHRoaXMuI3Byb3BzID0gcHJvcHM7XG5cdFx0dGhpcy4jdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoc2xvdCwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2UoX3Nsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUHJvcHMgPSB0aGlzLiNwcm9wcyE7XG5cdFx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldDxrZXlvZiBQcm9wcz4oT2JqZWN0LmtleXModGVtcGxhdGVQcm9wcykpO1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wcykgYXMgKGtleW9mIFByb3BzKVtdKSB7XG5cdFx0XHRcdHRlbXBsYXRlUHJvcHNbcHJvcGVydHldID0gcHJvcHNbcHJvcGVydHldO1xuXHRcdFx0XHRvbGRQcm9wZXJ0aWVzLmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IG9sZFByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdFx0ZGVsZXRlIHRlbXBsYXRlUHJvcHNbb2xkUHJvcGVydHldO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4jdmlld1JlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI8XG5cdFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pixcblx0SyBleHRlbmRzIHN0cmluZyxcblx0VCBleHRlbmRzIHtba2V5IGluIEtdOiBUZW1wbGF0ZVJlZjxQcm9wcz59LFxuPiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgdW5kZWZpbmVkO1xuXHRyZWFkb25seSAjdGVtcGxhdGVTbG90SGFuZGxlciA9IG5ldyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZik7XG5cdCN0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gY3JlYXRlQ29tcG9uZW50KHNsb3QuY29tcG9uZW50LCB7XG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvcixcblx0XHRcdGVudmlyb25tZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0fSk7XG5cdFx0dGhpcy4jdGVtcGxhdGVSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYuaW5zdGFuY2Vbc2xvdC50ZW1wbGF0ZVByb3BdO1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuc2xvdENoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2UoX3Nsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5wcm9wc0NoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiEsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNvbnN0IGdldFNsb3RUeXBlID0gKHZhbHVlOiBhbnkpOiB1bmRlZmluZWQgfCB7bmV3ICh2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTogU2xvdEhhbmRsZXI8YW55Pn0gPT4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIFN0cmluZ1Nsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdGlmIChyZWZsZWN0Q29tcG9uZW50VHlwZSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEZ1bmN0aW9uU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHJldHVybiBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQ29tcG9uZW50VGVtcGxhdGUpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IG1hbmFnZXMgc2xvdCBjb250ZW50IGFuZCBpdHMgcHJvcGVydGllcy5cbiAqXG4gKiBAdGVtcGxhdGUgUHJvcHMgLSBBIHJlY29yZCB0eXBlIHJlcHJlc2VudGluZyB0aGUgcHJvcGVydGllcyBmb3IgdGhlIHNsb3QuXG4gKlxuICogQHJlbWFya3NcbiAqIFRoaXMgZGlyZWN0aXZlIGhhbmRsZXMgY2hhbmdlcyB0byB0aGUgc2xvdCBjb250ZW50IGFuZCBpdHMgcHJvcGVydGllcyxcbiAqIGFuZCBtYW5hZ2VzIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHNsb3QgaGFuZGxlci5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1U2xvdF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTbG90RGlyZWN0aXZlPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdC8qKlxuXHQgKiBUaGUgc2xvdCBjb250ZW50IHRvIGJlIG1hbmFnZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2xvdCcpIHNsb3Q6IFNsb3RDb250ZW50PFByb3BzPjtcblx0LyoqXG5cdCAqIFRoZSBwcm9wZXJ0aWVzIGZvciB0aGUgc2xvdCBjb250ZW50LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U2xvdFByb3BzJywgcmVxdWlyZWQ6IHRydWV9KSBwcm9wcyE6IFByb3BzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX3Nsb3RUeXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTbG90VHlwZT47XG5cdHByaXZhdGUgX3Nsb3RIYW5kbGVyOiBTbG90SGFuZGxlcjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBjaGFuZ2VzIFNpbXBsZUNoYW5nZXMgZnJvbSBBbmd1bGFyXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGNvbnN0IHNsb3RDaGFuZ2UgPSBjaGFuZ2VzWydzbG90J107XG5cdFx0Y29uc3QgcHJvcHNDaGFuZ2UgPSBjaGFuZ2VzWydwcm9wcyddO1xuXHRcdGNvbnN0IHNsb3QgPSB0aGlzLnNsb3Q7XG5cdFx0aWYgKHNsb3RDaGFuZ2UpIHtcblx0XHRcdGNvbnN0IG5ld1Nsb3RUeXBlID0gZ2V0U2xvdFR5cGUoc2xvdCk7XG5cdFx0XHRpZiAobmV3U2xvdFR5cGUgIT09IHRoaXMuX3Nsb3RUeXBlKSB7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gbmV3U2xvdFR5cGUgPyBuZXcgbmV3U2xvdFR5cGUodGhpcy5fdmlld0NvbnRhaW5lclJlZikgOiB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX3Nsb3RUeXBlID0gbmV3U2xvdFR5cGU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uc2xvdENoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9IGVsc2UgaWYgKHByb3BzQ2hhbmdlKSB7XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8ucHJvcHNDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
