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
export class SlotDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsTUFBTSxFQUNOLG9CQUFvQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7SUFVVyxZQUFhOzs7SUFBYixnQ0FBYTs7QUFSbEUsTUFBZSxXQUFXO0lBQ3pCLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUN6RCxVQUFVLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3ZDLFdBQVcsQ0FBQyxJQUFVLEVBQUUsS0FBWSxJQUFHLENBQUM7SUFDeEMsT0FBTyxLQUFJLENBQUM7Q0FDWjtBQUVELE1BR00sbUJBQW1CO29GQUFuQixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7Ozs7O1lBRmIscUhBQXlDOzs7aUZBRS9DLG1CQUFtQjtjQUh4QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNFQUFzRTthQUNoRjtnQkFFbUMsSUFBSTtrQkFBdEMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFENUIsbUJBQW1CO0FBR3pCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBaUQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkksTUFBTSxpQkFBcUQsU0FBUSxXQUEwQjtJQUM1Rix1QkFBdUIsR0FBRyxJQUFJLDRCQUE0QixDQUFpRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsSSxZQUFZLEdBQUcsS0FBSyxD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QUksV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQzlCLENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7YUFBTSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs4RUE5QlcsYUFBYTtvRUFBYixhQUFhOztpRkFBYixhQUFhO2NBSnpCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsVUFBVSxFQUFFLElBQUk7YUFDaEI7Z0JBRWlCLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUNPLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHREaXJlY3RpdmUsXG5cdEVudmlyb25tZW50SW5qZWN0b3IsXG5cdElucHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRjcmVhdGVDb21wb25lbnQsXG5cdGluamVjdCxcblx0cmVmbGVjdENvbXBvbmVudFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Q29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4vdHlwZXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIFNsb3QgZXh0ZW5kcyBTbG90Q29udGVudDxQcm9wcz4gPSBTbG90Q29udGVudDxQcm9wcz4+IHtcblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cdHNsb3RDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRwcm9wc0NoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RleHQgbGV0LWNvbnRlbnQ9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvbmctdGVtcGxhdGU+YCxcbn0pXG5jbGFzcyBTdHJpbmdTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgndGV4dCcsIHtzdGF0aWM6IHRydWV9KSB0ZXh0OiBUZW1wbGF0ZVJlZjx7Y29udGVudDogc3RyaW5nfT47XG59XG5jb25zdCBzdHJpbmdTbG90Q29tcG9uZW50VGVtcGxhdGUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGU8e2NvbnRlbnQ6IHN0cmluZ30sICd0ZXh0JywgU3RyaW5nU2xvdENvbXBvbmVudD4oU3RyaW5nU2xvdENvbXBvbmVudCwgJ3RleHQnKTtcblxuY2xhc3MgU3RyaW5nU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBzdHJpbmc+IHtcblx0I3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjx7Y29udGVudDogc3RyaW5nfSwgJ3RleHQnLCBTdHJpbmdTbG90Q29tcG9uZW50Pih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHQjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzdHJpbmdTbG90Q29tcG9uZW50VGVtcGxhdGUsIHtjb250ZW50fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIucHJvcHNDaGFuZ2Uoc3RyaW5nU2xvdENvbXBvbmVudFRlbXBsYXRlLCB7Y29udGVudH0pO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVSZWZTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgRnVuY3Rpb25TbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIChwcm9wczogUHJvcHMpID0+IHN0cmluZz4ge1xuXHQjc3RyaW5nU2xvdEhhbmRsZXIgPSBuZXcgU3RyaW5nU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50U2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUeXBlPHVua25vd24+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcGVydGllczogc3RyaW5nW107XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChzbG90KTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMpO1xuXHR9XG5cblx0I2FwcGx5UHJvcGVydGllcyhwcm9wczogUHJvcHMsIG9sZFByb3BlcnRpZXM/OiBTZXQ8c3RyaW5nPikge1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0dGhpcy4jcHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgcHJvcHNbcHJvcGVydHldKTtcblx0XHRcdG9sZFByb3BlcnRpZXM/LmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQodGhpcy4jcHJvcGVydGllcyk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzLCBvbGRQcm9wZXJ0aWVzKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCB1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUZW1wbGF0ZVJlZjxQcm9wcz4+IHtcblx0I3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wczogUHJvcHM7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0cHJvcHMgPSB7Li4ucHJvcHN9O1xuXHRcdHRoaXMuI3Byb3BzID0gcHJvcHM7XG5cdFx0dGhpcy4jdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoc2xvdCwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQcm9wcyA9IHRoaXMuI3Byb3BzO1xuXHRcdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQ8a2V5b2YgUHJvcHM+KE9iamVjdC5rZXlzKHRlbXBsYXRlUHJvcHMpKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcHMpIGFzIChrZXlvZiBQcm9wcylbXSkge1xuXHRcdFx0XHR0ZW1wbGF0ZVByb3BzW3Byb3BlcnR5XSA9IHByb3BzW3Byb3BlcnR5XTtcblx0XHRcdFx0b2xkUHJvcGVydGllcy5kZWxldGUocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBvbGRQcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wbGF0ZVByb3BzW29sZFByb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuI3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPFxuXHRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdEsgZXh0ZW5kcyBzdHJpbmcsXG5cdFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fSxcbj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IHVuZGVmaW5lZDtcblx0I3RlbXBsYXRlU2xvdEhhbmRsZXIgPSBuZXcgVGVtcGxhdGVSZWZTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHQjdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IGNyZWF0ZUNvbXBvbmVudChzbG90LmNvbXBvbmVudCwge1xuXHRcdFx0ZWxlbWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IsXG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdH0pO1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmID0gdGhpcy4jY29tcG9uZW50UmVmLmluc3RhbmNlW3Nsb3QudGVtcGxhdGVQcm9wXTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnNsb3RDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5wcm9wc0NoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiEsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNvbnN0IGdldFNsb3RUeXBlID0gKHZhbHVlOiBhbnkpOiB1bmRlZmluZWQgfCB7bmV3ICh2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTogU2xvdEhhbmRsZXI8YW55Pn0gPT4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIFN0cmluZ1Nsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdGlmIChyZWZsZWN0Q29tcG9uZW50VHlwZSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEZ1bmN0aW9uU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHJldHVybiBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQ29tcG9uZW50VGVtcGxhdGUpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1U2xvdF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTbG90RGlyZWN0aXZlPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgnYXVTbG90Jykgc2xvdDogU2xvdENvbnRlbnQ8UHJvcHM+O1xuXHRASW5wdXQoJ2F1U2xvdFByb3BzJykgcHJvcHM6IFByb3BzO1xuXG5cdHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX3Nsb3RUeXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTbG90VHlwZT47XG5cdHByaXZhdGUgX3Nsb3RIYW5kbGVyOiBTbG90SGFuZGxlcjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBzbG90Q2hhbmdlID0gY2hhbmdlc1snc2xvdCddO1xuXHRcdGNvbnN0IHByb3BzQ2hhbmdlID0gY2hhbmdlc1sncHJvcHMnXTtcblx0XHRjb25zdCBzbG90ID0gdGhpcy5zbG90O1xuXHRcdGlmIChzbG90Q2hhbmdlKSB7XG5cdFx0XHRjb25zdCBuZXdTbG90VHlwZSA9IGdldFNsb3RUeXBlKHNsb3QpO1xuXHRcdFx0aWYgKG5ld1Nsb3RUeXBlICE9PSB0aGlzLl9zbG90VHlwZSkge1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlciA9IG5ld1Nsb3RUeXBlID8gbmV3IG5ld1Nsb3RUeXBlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9zbG90VHlwZSA9IG5ld1Nsb3RUeXBlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnNsb3RDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fSBlbHNlIGlmIChwcm9wc0NoYW5nZSkge1xuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnByb3BzQ2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
