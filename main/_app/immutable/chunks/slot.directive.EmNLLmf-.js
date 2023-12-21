const Q=`import { DOCUMENT } from '@angular/common';
import { Directive, EnvironmentInjector, Input, TemplateRef, ViewContainerRef, createComponent, inject, reflectComponentType } from '@angular/core';
import { ComponentTemplate } from './types';
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
    static { this.ɵfac = function SlotDirective_Factory(t) { return new (t || SlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDirective, selectors: [["", "auSlot", ""]], inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7QUFFMUMsTUFBZSxXQUFXO0lBQ3pCLFlBQ1EsZ0JBQWtDLEVBQ2xDLFFBQWtCO1FBRGxCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBQ0osVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN2QyxXQUFXLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3hDLE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLGlCQUFxRCxTQUFRLFdBQTBCO0lBQzVGLFFBQVEsQ0FBbUI7SUFDM0IsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ04sTUFBTSxvQkFBb0IsR0FBd0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDOUYsSUFBSSxJQUFJLENB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YUFDN0I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzhFQTdCVyxhQUFhO29FQUFiLGFBQWE7O2lGQUFiLGFBQWE7Y0FKekIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsSUFBSTthQUNoQjtnQkFFaUIsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBQ08sS0FBSztrQkFBMUIsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVudmlyb25tZW50SW5qZWN0b3IsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgY3JlYXRlQ29tcG9uZW50LCBpbmplY3QsIHJlZmxlY3RDb21wb25lbnRUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0NvbXBvbmVudFRlbXBsYXRlfSBmcm9tICcuL3R5cGVzJztcblxuYWJzdHJhY3QgY2xhc3MgU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBTbG90IGV4dGVuZHMgU2xvdENvbnRlbnQ8UHJvcHM+ID0gU2xvdENvbnRlbnQ8UHJvcHM+PiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHB1YmxpYyBkb2N1bWVudDogRG9jdW1lbnQsXG5cdCkge31cblx0c2xvdENoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdHByb3BzQ2hhbmdlKHNsb3Q6IFNsb3QsIHByb3BzOiBQcm9wcykge31cblx0ZGVzdHJveSgpIHt9XG59XG5cbmNsYXNzIFN0cmluZ1Nsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgc3RyaW5nPiB7XG5cdCNub2RlUmVmOiBUZXh0IHwgdW5kZWZpbmVkO1xuXHQjcHJldmlvdXNUZXh0ID0gJyc7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoc2xvdCA9PT0gdGhpcy4jcHJldmlvdXNUZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuI3ByZXZpb3VzVGV4dCA9IHNsb3Q7XG5cdFx0aWYgKHRoaXMuI25vZGVSZWYpIHtcblx0XHRcdHRoaXMuI25vZGVSZWYudGV4dENvbnRlbnQgPSBzbG90O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB2aWV3Q29udGFpbmVyRWxlbWVudDogQ29tbWVudCB8IHVuZGVmaW5lZCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRpZiAodGhpcy5kb2N1bWVudCAmJiB2aWV3Q29udGFpbmVyRWxlbWVudD8ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLiNub2RlUmVmID0gdmlld0NvbnRhaW5lckVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzbG90KSwgdmlld0NvbnRhaW5lckVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jbm9kZVJlZj8ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGhpcy4jbm9kZVJlZik7XG5cdFx0dGhpcy4jbm9kZVJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jbGFzcyBGdW5jdGlvblNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nPiB7XG5cdCNzdHJpbmdTbG90SGFuZGxlciA9IG5ldyBTdHJpbmdTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZG9jdW1lbnQpO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFR5cGU8dW5rbm93bj4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wZXJ0aWVzOiBzdHJpbmdbXTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHNsb3QpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcyk7XG5cdH1cblxuXHQjYXBwbHlQcm9wZXJ0aWVzKHByb3BzOiBQcm9wcywgb2xkUHJvcGVydGllcz86IFNldDxzdHJpbmc+KSB7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHR0aGlzLiNwcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCBwcm9wc1twcm9wZXJ0eV0pO1xuXHRcdFx0b2xkUHJvcGVydGllcz8uZGVsZXRlKHByb3BlcnR5KTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldCh0aGlzLiNwcm9wZXJ0aWVzKTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMsIG9sZFByb3BlcnRpZXMpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgVGVtcGxhdGVSZWZTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFRlbXBsYXRlUmVmPFByb3BzPj4ge1xuXHQjdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblx0I3Byb3BzOiBQcm9wcztcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRwcm9wcyA9IHsuLi5wcm9wc307XG5cdFx0dGhpcy4jcHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLiN2aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhzbG90LCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVByb3BzID0gdGhpcy4jcHJvcHM7XG5cdFx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldDxrZXlvZiBQcm9wcz4oT2JqZWN0LmtleXModGVtcGxhdGVQcm9wcykpO1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wcykgYXMgKGtleW9mIFByb3BzKVtdKSB7XG5cdFx0XHRcdHRlbXBsYXRlUHJvcHNbcHJvcGVydHldID0gcHJvcHNbcHJvcGVydHldO1xuXHRcdFx0XHRvbGRQcm9wZXJ0aWVzLmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IG9sZFByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdFx0ZGVsZXRlIHRlbXBsYXRlUHJvcHNbb2xkUHJvcGVydHldO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4jdmlld1JlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI8XG5cdFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pixcblx0SyBleHRlbmRzIHN0cmluZyxcblx0VCBleHRlbmRzIHtba2V5IGluIEtdOiBUZW1wbGF0ZVJlZjxQcm9wcz59LFxuPiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgdW5kZWZpbmVkO1xuXHQjdGVtcGxhdGVTbG90SGFuZGxlciA9IG5ldyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZiwgdGhpcy5kb2N1bWVudCk7XG5cdCN0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gY3JlYXRlQ29tcG9uZW50KHNsb3QuY29tcG9uZW50LCB7XG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvcixcblx0XHRcdGVudmlyb25tZW50SW5qZWN0b3I6IHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0fSk7XG5cdFx0dGhpcy4jdGVtcGxhdGVSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYuaW5zdGFuY2Vbc2xvdC50ZW1wbGF0ZVByb3BdO1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuc2xvdENoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnByb3BzQ2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmISwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWY/LmRlc3Ryb3koKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY29uc3QgZ2V0U2xvdFR5cGUgPSAodmFsdWU6IGFueSk6IHVuZGVmaW5lZCB8IHtuZXcgKHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGRvY3VtZW50OiBEb2N1bWVudCk6IFNsb3RIYW5kbGVyPGFueT59ID0+IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiBTdHJpbmdTbG90SGFuZGxlcjtcblx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRpZiAocmVmbGVjdENvbXBvbmVudFR5cGUodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBGdW5jdGlvblNsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHRyZXR1cm4gVGVtcGxhdGVSZWZTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbXBvbmVudFRlbXBsYXRlKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdVNsb3RdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xvdERpcmVjdGl2ZTxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXHRASW5wdXQoJ2F1U2xvdCcpIHNsb3Q6IFNsb3RDb250ZW50PFByb3BzPjtcblx0QElucHV0KCdhdVNsb3RQcm9wcycpIHByb3BzOiBQcm9wcztcblxuXHRwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuXHRwcml2YXRlIF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG5cdHByaXZhdGUgX3Nsb3RUeXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTbG90VHlwZT47XG5cdHByaXZhdGUgX3Nsb3RIYW5kbGVyOiBTbG90SGFuZGxlcjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGNvbnN0IHNsb3RDaGFuZ2UgPSBjaGFuZ2VzWydzbG90J107XG5cdFx0Y29uc3QgcHJvcHNDaGFuZ2UgPSBjaGFuZ2VzWydwcm9wcyddO1xuXHRcdGNvbnN0IHNsb3QgPSB0aGlzLnNsb3Q7XG5cdFx0aWYgKHNsb3RDaGFuZ2UpIHtcblx0XHRcdGNvbnN0IG5ld1Nsb3RUeXBlID0gZ2V0U2xvdFR5cGUoc2xvdCk7XG5cdFx0XHRpZiAobmV3U2xvdFR5cGUgIT09IHRoaXMuX3Nsb3RUeXBlKSB7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gbmV3U2xvdFR5cGUgPyBuZXcgbmV3U2xvdFR5cGUodGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fZG9jdW1lbnQpIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9zbG90VHlwZSA9IG5ld1Nsb3RUeXBlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnNsb3RDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fSBlbHNlIGlmIChwcm9wc0NoYW5nZSkge1xuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnByb3BzQ2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
