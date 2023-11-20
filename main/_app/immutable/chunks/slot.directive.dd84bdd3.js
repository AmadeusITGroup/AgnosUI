const Q=`import { DOCUMENT } from '@angular/common';
import { Directive, EnvironmentInjector, Input, TemplateRef, ViewContainerRef, createComponent, inject, reflectComponentType } from '@angular/core';
import { ComponentTemplate } from './slotTypes';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SlotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: SlotDirective, isStandalone: true, selector: "[auSlot]", inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SlotDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9oZWFkbGVzcy9zcmMvbGliL3Nsb3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsSixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBRTlDLE1BQWUsV0FBVztJQUN6QixZQUNRLGdCQUFrQyxFQUNsQyxRQUFrQjtRQURsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdkIsQ0FBQztJQUNKLFVBQVUsQ0FBQyxJQUFVLEVBQUUsS0FBWSxJQUFHLENBQUM7SUFDdkMsV0FBVyxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN4QyxPQUFPLEtBQUksQ0FBQztDQUNaO0FBRUQsTUFBTSxpQkFBcUQsU0FBUSxXQUEwQjtJQUM1RixRQUFRLENBQW1CO0lBQzNCLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFFVixVQUFVLENBQUMsSUFBWTtRQUMvQixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDakM7YUFBTTtZQUNOLE1BQU0sb0JBQW9CLEdBQXdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFD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QUFTLEdBQUcsV0FBVyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDthQUFNLElBQUksV0FBVyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs4R0E3QlcsYUFBYTtrR0FBYixhQUFhOzsyRkFBYixhQUFhO2tCQUp6QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtpQkFDaEI7OEJBRWlCLElBQUk7c0JBQXBCLEtBQUs7dUJBQUMsUUFBUTtnQkFDTyxLQUFLO3NCQUExQixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0NvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRW52aXJvbm1lbnRJbmplY3RvciwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBjcmVhdGVDb21wb25lbnQsIGluamVjdCwgcmVmbGVjdENvbXBvbmVudFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3Nsb3RUeXBlcyc7XG5pbXBvcnQge0NvbXBvbmVudFRlbXBsYXRlfSBmcm9tICcuL3Nsb3RUeXBlcyc7XG5cbmFic3RyYWN0IGNsYXNzIFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiwgU2xvdCBleHRlbmRzIFNsb3RDb250ZW50PFByb3BzPiA9IFNsb3RDb250ZW50PFByb3BzPj4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwdWJsaWMgZG9jdW1lbnQ6IERvY3VtZW50LFxuXHQpIHt9XG5cdHNsb3RDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRwcm9wc0NoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5jbGFzcyBTdHJpbmdTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIHN0cmluZz4ge1xuXHQjbm9kZVJlZjogVGV4dCB8IHVuZGVmaW5lZDtcblx0I3ByZXZpb3VzVGV4dCA9ICcnO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHNsb3QgPT09IHRoaXMuI3ByZXZpb3VzVGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiNwcmV2aW91c1RleHQgPSBzbG90O1xuXHRcdGlmICh0aGlzLiNub2RlUmVmKSB7XG5cdFx0XHR0aGlzLiNub2RlUmVmLnRleHRDb250ZW50ID0gc2xvdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgdmlld0NvbnRhaW5lckVsZW1lbnQ6IENvbW1lbnQgfCB1bmRlZmluZWQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnQgJiYgdmlld0NvbnRhaW5lckVsZW1lbnQ/LnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy4jbm9kZVJlZiA9IHZpZXdDb250YWluZXJFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2xvdCksIHZpZXdDb250YWluZXJFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI25vZGVSZWY/LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRoaXMuI25vZGVSZWYpO1xuXHRcdHRoaXMuI25vZGVSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgRnVuY3Rpb25TbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIChwcm9wczogUHJvcHMpID0+IHN0cmluZz4ge1xuXHQjc3RyaW5nU2xvdEhhbmRsZXIgPSBuZXcgU3RyaW5nU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmLCB0aGlzLmRvY3VtZW50KTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50U2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUeXBlPHVua25vd24+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcGVydGllczogc3RyaW5nW107XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChzbG90KTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMpO1xuXHR9XG5cblx0I2FwcGx5UHJvcGVydGllcyhwcm9wczogUHJvcHMsIG9sZFByb3BlcnRpZXM/OiBTZXQ8c3RyaW5nPikge1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0dGhpcy4jcHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgcHJvcHNbcHJvcGVydHldKTtcblx0XHRcdG9sZFByb3BlcnRpZXM/LmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQodGhpcy4jcHJvcGVydGllcyk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzLCBvbGRQcm9wZXJ0aWVzKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCB1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUZW1wbGF0ZVJlZjxQcm9wcz4+IHtcblx0I3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wczogUHJvcHM7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0cHJvcHMgPSB7Li4ucHJvcHN9O1xuXHRcdHRoaXMuI3Byb3BzID0gcHJvcHM7XG5cdFx0dGhpcy4jdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoc2xvdCwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQcm9wcyA9IHRoaXMuI3Byb3BzO1xuXHRcdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQ8a2V5b2YgUHJvcHM+KE9iamVjdC5rZXlzKHRlbXBsYXRlUHJvcHMpKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcHMpIGFzIChrZXlvZiBQcm9wcylbXSkge1xuXHRcdFx0XHR0ZW1wbGF0ZVByb3BzW3Byb3BlcnR5XSA9IHByb3BzW3Byb3BlcnR5XTtcblx0XHRcdFx0b2xkUHJvcGVydGllcy5kZWxldGUocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBvbGRQcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wbGF0ZVByb3BzW29sZFByb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuI3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPFxuXHRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdEsgZXh0ZW5kcyBzdHJpbmcsXG5cdFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fSxcbj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IHVuZGVmaW5lZDtcblx0I3RlbXBsYXRlU2xvdEhhbmRsZXIgPSBuZXcgVGVtcGxhdGVSZWZTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZG9jdW1lbnQpO1xuXHQjdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IGNyZWF0ZUNvbXBvbmVudChzbG90LmNvbXBvbmVudCwge1xuXHRcdFx0ZWxlbWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IsXG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdH0pO1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmID0gdGhpcy4jY29tcG9uZW50UmVmLmluc3RhbmNlW3Nsb3QudGVtcGxhdGVQcm9wXTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnNsb3RDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5wcm9wc0NoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiEsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNvbnN0IGdldFNsb3RUeXBlID0gKHZhbHVlOiBhbnkpOiB1bmRlZmluZWQgfCB7bmV3ICh2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBkb2N1bWVudDogRG9jdW1lbnQpOiBTbG90SGFuZGxlcjxhbnk+fSA9PiB7XG5cdGlmICghdmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG5cdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gU3RyaW5nU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0aWYgKHJlZmxlY3RDb21wb25lbnRUeXBlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50U2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRnVuY3Rpb25TbG90SGFuZGxlcjtcblx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0cmV0dXJuIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnRUZW1wbGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVTbG90XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNsb3REaXJlY3RpdmU8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0QElucHV0KCdhdVNsb3QnKSBzbG90OiBTbG90Q29udGVudDxQcm9wcz47XG5cdEBJbnB1dCgnYXVTbG90UHJvcHMnKSBwcm9wczogUHJvcHM7XG5cblx0cHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZiA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcblx0cHJpdmF0ZSBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xuXHRwcml2YXRlIF9zbG90VHlwZTogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2xvdFR5cGU+O1xuXHRwcml2YXRlIF9zbG90SGFuZGxlcjogU2xvdEhhbmRsZXI8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBzbG90Q2hhbmdlID0gY2hhbmdlc1snc2xvdCddO1xuXHRcdGNvbnN0IHByb3BzQ2hhbmdlID0gY2hhbmdlc1sncHJvcHMnXTtcblx0XHRjb25zdCBzbG90ID0gdGhpcy5zbG90O1xuXHRcdGlmIChzbG90Q2hhbmdlKSB7XG5cdFx0XHRjb25zdCBuZXdTbG90VHlwZSA9IGdldFNsb3RUeXBlKHNsb3QpO1xuXHRcdFx0aWYgKG5ld1Nsb3RUeXBlICE9PSB0aGlzLl9zbG90VHlwZSkge1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlciA9IG5ld1Nsb3RUeXBlID8gbmV3IG5ld1Nsb3RUeXBlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIHRoaXMuX2RvY3VtZW50KSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0dGhpcy5fc2xvdFR5cGUgPSBuZXdTbG90VHlwZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5zbG90Q2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH0gZWxzZSBpZiAocHJvcHNDaGFuZ2UpIHtcblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5wcm9wc0NoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
