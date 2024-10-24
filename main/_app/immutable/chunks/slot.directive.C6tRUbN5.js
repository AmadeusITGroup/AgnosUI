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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsTUFBTSxFQUNOLG9CQUFvQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7SUFVVyxZQUFhOzs7SUFBYixnQ0FBYTs7QUFSbEUsTUFBZSxXQUFXO0lBQ3pCLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUN6RCxVQUFVLENBQUMsS0FBVyxFQUFFLE1BQWEsSUFBRyxDQUFDO0lBQ3pDLFdBQVcsQ0FBQyxLQUFXLEVBQUUsTUFBYSxJQUFHLENBQUM7SUFDMUMsT0FBTyxLQUFJLENBQUM7Q0FDWjtBQUVELE1BR00sbUJBQW1CO29IQUFuQixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7Ozs7O1lBRmIscUhBQXlDOzs7aUZBRS9DLG1CQUFtQjtjQUh4QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNFQUFzRTthQUNoRjtnQkFFbUMsSUFBSTtrQkFBdEMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFENUIsbUJBQW1CO0FBR3pCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBaUQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkksTUFBTSxpQkFBcUQsU0FBUSxXQUEwQjtJQUNuRix1QkFBdUIsR0FBRyxJQUFJLDRCQUE0QixDQUFpRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzSSxZQUFZLEdBQUcsS0FBSyxD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QUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUM5QixDQUFDO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO2FBQU0sSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDRixDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7OEdBOUJXLGFBQWE7b0VBQWIsYUFBYTs7aUZBQWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2FBQ2hCO2dCQUVpQixJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFDZ0MsS0FBSztrQkFBbkQsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHREaXJlY3RpdmUsXG5cdEVudmlyb25tZW50SW5qZWN0b3IsXG5cdElucHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRjcmVhdGVDb21wb25lbnQsXG5cdGluamVjdCxcblx0cmVmbGVjdENvbXBvbmVudFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Q29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4vdHlwZXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIFNsb3QgZXh0ZW5kcyBTbG90Q29udGVudDxQcm9wcz4gPSBTbG90Q29udGVudDxQcm9wcz4+IHtcblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cdHNsb3RDaGFuZ2UoX3Nsb3Q6IFNsb3QsIF9wcm9wczogUHJvcHMpIHt9XG5cdHByb3BzQ2hhbmdlKF9zbG90OiBTbG90LCBfcHJvcHM6IFByb3BzKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICN0ZXh0IGxldC1jb250ZW50PVwiY29udGVudFwiPnt7IGNvbnRlbnQgfX08L25nLXRlbXBsYXRlPmAsXG59KVxuY2xhc3MgU3RyaW5nU2xvdENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7c3RhdGljOiB0cnVlfSkgdGV4dCE6IFRlbXBsYXRlUmVmPHtjb250ZW50OiBzdHJpbmd9Pjtcbn1cbmNvbnN0IHN0cmluZ1Nsb3RDb21wb25lbnRUZW1wbGF0ZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZTx7Y29udGVudDogc3RyaW5nfSwgJ3RleHQnLCBTdHJpbmdTbG90Q29tcG9uZW50PihTdHJpbmdTbG90Q29tcG9uZW50LCAndGV4dCcpO1xuXG5jbGFzcyBTdHJpbmdTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIHN0cmluZz4ge1xuXHRyZWFkb25seSAjdGVtcGxhdGVSZWZTbG90SGFuZGxlciA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPHtjb250ZW50OiBzdHJpbmd9LCAndGV4dCcsIFN0cmluZ1Nsb3RDb21wb25lbnQ+KHRoaXMudmlld0NvbnRhaW5lclJlZik7XG5cdCNpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2UoY29udGVudDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLiNpbml0aWFsaXplZCkge1xuXHRcdFx0dGhpcy4jaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy4jdGVtcGxhdGVSZWZTbG90SGFuZGxlci5zbG90Q2hhbmdlKHN0cmluZ1Nsb3RDb21wb25lbnRUZW1wbGF0ZSwge2NvbnRlbnR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4jdGVtcGxhdGVSZWZTbG90SGFuZGxlci5wcm9wc0NoYW5nZShzdHJpbmdTbG90Q29tcG9uZW50VGVtcGxhdGUsIHtjb250ZW50fSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVJlZlNsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0fVxufVxuXG5jbGFzcyBGdW5jdGlvblNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nPiB7XG5cdHJlYWRvbmx5ICNzdHJpbmdTbG90SGFuZGxlciA9IG5ldyBTdHJpbmdTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFR5cGU8dW5rbm93bj4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wZXJ0aWVzPzogc3RyaW5nW107XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChzbG90KTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMpO1xuXHR9XG5cblx0I2FwcGx5UHJvcGVydGllcyhwcm9wczogUHJvcHMsIG9sZFByb3BlcnRpZXM/OiBTZXQ8c3RyaW5nPikge1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0dGhpcy4jcHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgcHJvcHNbcHJvcGVydHldKTtcblx0XHRcdG9sZFByb3BlcnRpZXM/LmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2UoX3Nsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0KHRoaXMuI3Byb3BlcnRpZXMpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcywgb2xkUHJvcGVydGllcyk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgdW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jbGFzcyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVGVtcGxhdGVSZWY8UHJvcHM+PiB7XG5cdCN2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcHM/OiBQcm9wcztcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRwcm9wcyA9IHsuLi5wcm9wc307XG5cdFx0dGhpcy4jcHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLiN2aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhzbG90LCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShfc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQcm9wcyA9IHRoaXMuI3Byb3BzITtcblx0XHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0PGtleW9mIFByb3BzPihPYmplY3Qua2V5cyh0ZW1wbGF0ZVByb3BzKSk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKHByb3BzKSBhcyAoa2V5b2YgUHJvcHMpW10pIHtcblx0XHRcdFx0dGVtcGxhdGVQcm9wc1twcm9wZXJ0eV0gPSBwcm9wc1twcm9wZXJ0eV07XG5cdFx0XHRcdG9sZFByb3BlcnRpZXMuZGVsZXRlKHByb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3Qgb2xkUHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0XHRkZWxldGUgdGVtcGxhdGVQcm9wc1tvbGRQcm9wZXJ0eV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiN2aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjxcblx0UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRLIGV4dGVuZHMgc3RyaW5nLFxuXHRUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn0sXG4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gfCB1bmRlZmluZWQ7XG5cdHJlYWRvbmx5ICN0ZW1wbGF0ZVNsb3RIYW5kbGVyID0gbmV3IFRlbXBsYXRlUmVmU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblx0I3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSBjcmVhdGVDb21wb25lbnQoc2xvdC5jb21wb25lbnQsIHtcblx0XHRcdGVsZW1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLFxuXHRcdFx0ZW52aXJvbm1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLmdldChFbnZpcm9ubWVudEluamVjdG9yKSxcblx0XHR9KTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZi5pbnN0YW5jZVtzbG90LnRlbXBsYXRlUHJvcF07XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5zbG90Q2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShfc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnByb3BzQ2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmISwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWY/LmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY29uc3QgZ2V0U2xvdFR5cGUgPSAodmFsdWU6IGFueSk6IHVuZGVmaW5lZCB8IHtuZXcgKHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpOiBTbG90SGFuZGxlcjxhbnk+fSA9PiB7XG5cdGlmICghdmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG5cdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gU3RyaW5nU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0aWYgKHJlZmxlY3RDb21wb25lbnRUeXBlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50U2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRnVuY3Rpb25TbG90SGFuZGxlcjtcblx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0cmV0dXJuIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnRUZW1wbGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVTbG90XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNsb3REaXJlY3RpdmU8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0QElucHV0KCdhdVNsb3QnKSBzbG90OiBTbG90Q29udGVudDxQcm9wcz47XG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNsb3RQcm9wcycsIHJlcXVpcmVkOiB0cnVlfSkgcHJvcHMhOiBQcm9wcztcblxuXHRwcml2YXRlIHJlYWRvbmx5IF92aWV3Q29udGFpbmVyUmVmID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuXHRwcml2YXRlIF9zbG90VHlwZTogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2xvdFR5cGU+O1xuXHRwcml2YXRlIF9zbG90SGFuZGxlcjogU2xvdEhhbmRsZXI8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2xvdENoYW5nZSA9IGNoYW5nZXNbJ3Nsb3QnXTtcblx0XHRjb25zdCBwcm9wc0NoYW5nZSA9IGNoYW5nZXNbJ3Byb3BzJ107XG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuc2xvdDtcblx0XHRpZiAoc2xvdENoYW5nZSkge1xuXHRcdFx0Y29uc3QgbmV3U2xvdFR5cGUgPSBnZXRTbG90VHlwZShzbG90KTtcblx0XHRcdGlmIChuZXdTbG90VHlwZSAhPT0gdGhpcy5fc2xvdFR5cGUpIHtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LmRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSBuZXdTbG90VHlwZSA/IG5ldyBuZXdTbG90VHlwZSh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0dGhpcy5fc2xvdFR5cGUgPSBuZXdTbG90VHlwZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5zbG90Q2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH0gZWxzZSBpZiAocHJvcHNDaGFuZ2UpIHtcblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5wcm9wc0NoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9XG5cdH1cblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5fc2xvdEhhbmRsZXI/LmRlc3Ryb3koKTtcblx0XHR0aGlzLl9zbG90SGFuZGxlciA9IHVuZGVmaW5lZDtcblx0fVxufVxuIl19`;export{Q as default};
