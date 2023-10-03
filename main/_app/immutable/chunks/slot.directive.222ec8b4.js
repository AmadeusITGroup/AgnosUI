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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: SlotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.7", type: SlotDirective, isStandalone: true, selector: "[auSlot]", inputs: { slot: ["auSlot", "slot"], props: ["auSlotProps", "props"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: SlotDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9oZWFkbGVzcy9zcmMvbGliL3Nsb3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsSixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBRTlDLE1BQWUsV0FBVztJQUN6QixZQUFtQixnQkFBa0MsRUFBUyxRQUFrQjtRQUE3RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFDcEYsVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN2QyxXQUFXLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3hDLE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLGlCQUFxRCxTQUFRLFdBQTBCO0lBQzVGLFFBQVEsQ0FBbUI7SUFDM0IsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ04sTUFBTSxvQkFBb0IsR0FBd0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7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QVMsR0FBRyxXQUFXLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzhHQTdCVyxhQUFhO2tHQUFiLGFBQWE7OzJGQUFiLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2lCQUNoQjs4QkFFaUIsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRO2dCQUNPLEtBQUs7c0JBQTFCLEtBQUs7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbnZpcm9ubWVudEluamVjdG9yLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIGNyZWF0ZUNvbXBvbmVudCwgaW5qZWN0LCByZWZsZWN0Q29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vc2xvdFR5cGVzJztcbmltcG9ydCB7Q29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4vc2xvdFR5cGVzJztcblxuYWJzdHJhY3QgY2xhc3MgU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBTbG90IGV4dGVuZHMgU2xvdENvbnRlbnQ8UHJvcHM+ID0gU2xvdENvbnRlbnQ8UHJvcHM+PiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZG9jdW1lbnQ6IERvY3VtZW50KSB7fVxuXHRzbG90Q2hhbmdlKHNsb3Q6IFNsb3QsIHByb3BzOiBQcm9wcykge31cblx0cHJvcHNDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuY2xhc3MgU3RyaW5nU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBzdHJpbmc+IHtcblx0I25vZGVSZWY6IFRleHQgfCB1bmRlZmluZWQ7XG5cdCNwcmV2aW91c1RleHQgPSAnJztcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChzbG90ID09PSB0aGlzLiNwcmV2aW91c1RleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4jcHJldmlvdXNUZXh0ID0gc2xvdDtcblx0XHRpZiAodGhpcy4jbm9kZVJlZikge1xuXHRcdFx0dGhpcy4jbm9kZVJlZi50ZXh0Q29udGVudCA9IHNsb3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHZpZXdDb250YWluZXJFbGVtZW50OiBDb21tZW50IHwgdW5kZWZpbmVkID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50ICYmIHZpZXdDb250YWluZXJFbGVtZW50Py5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuI25vZGVSZWYgPSB2aWV3Q29udGFpbmVyRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNsb3QpLCB2aWV3Q29udGFpbmVyRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNub2RlUmVmPy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0aGlzLiNub2RlUmVmKTtcblx0XHR0aGlzLiNub2RlUmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIEZ1bmN0aW9uU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmc+IHtcblx0I3N0cmluZ1Nsb3RIYW5kbGVyID0gbmV3IFN0cmluZ1Nsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZiwgdGhpcy5kb2N1bWVudCk7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVHlwZTx1bmtub3duPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IHVuZGVmaW5lZDtcblx0I3Byb3BlcnRpZXM6IHN0cmluZ1tdO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoc2xvdCk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzKTtcblx0fVxuXG5cdCNhcHBseVByb3BlcnRpZXMocHJvcHM6IFByb3BzLCBvbGRQcm9wZXJ0aWVzPzogU2V0PHN0cmluZz4pIHtcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdHRoaXMuI3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHByb3BzW3Byb3BlcnR5XSk7XG5cdFx0XHRvbGRQcm9wZXJ0aWVzPy5kZWxldGUocHJvcGVydHkpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0KHRoaXMuI3Byb3BlcnRpZXMpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcywgb2xkUHJvcGVydGllcyk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgdW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jbGFzcyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVGVtcGxhdGVSZWY8UHJvcHM+PiB7XG5cdCN2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcHM6IFByb3BzO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHByb3BzID0gey4uLnByb3BzfTtcblx0XHR0aGlzLiNwcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuI3ZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHNsb3QsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUHJvcHMgPSB0aGlzLiNwcm9wcztcblx0XHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0PGtleW9mIFByb3BzPihPYmplY3Qua2V5cyh0ZW1wbGF0ZVByb3BzKSk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKHByb3BzKSBhcyAoa2V5b2YgUHJvcHMpW10pIHtcblx0XHRcdFx0dGVtcGxhdGVQcm9wc1twcm9wZXJ0eV0gPSBwcm9wc1twcm9wZXJ0eV07XG5cdFx0XHRcdG9sZFByb3BlcnRpZXMuZGVsZXRlKHByb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3Qgb2xkUHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0XHRkZWxldGUgdGVtcGxhdGVQcm9wc1tvbGRQcm9wZXJ0eV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiN2aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjxcblx0UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRLIGV4dGVuZHMgc3RyaW5nLFxuXHRUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn1cbj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IHVuZGVmaW5lZDtcblx0I3RlbXBsYXRlU2xvdEhhbmRsZXIgPSBuZXcgVGVtcGxhdGVSZWZTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZG9jdW1lbnQpO1xuXHQjdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IGNyZWF0ZUNvbXBvbmVudChzbG90LmNvbXBvbmVudCwge1xuXHRcdFx0ZWxlbWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IsXG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdH0pO1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmID0gdGhpcy4jY29tcG9uZW50UmVmLmluc3RhbmNlW3Nsb3QudGVtcGxhdGVQcm9wXTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnNsb3RDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5wcm9wc0NoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiEsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNvbnN0IGdldFNsb3RUeXBlID0gKHZhbHVlOiBhbnkpOiB1bmRlZmluZWQgfCB7bmV3ICh2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBkb2N1bWVudDogRG9jdW1lbnQpOiBTbG90SGFuZGxlcjxhbnk+fSA9PiB7XG5cdGlmICghdmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG5cdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gU3RyaW5nU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0aWYgKHJlZmxlY3RDb21wb25lbnRUeXBlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50U2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRnVuY3Rpb25TbG90SGFuZGxlcjtcblx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0cmV0dXJuIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnRUZW1wbGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVTbG90XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNsb3REaXJlY3RpdmU8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0QElucHV0KCdhdVNsb3QnKSBzbG90OiBTbG90Q29udGVudDxQcm9wcz47XG5cdEBJbnB1dCgnYXVTbG90UHJvcHMnKSBwcm9wczogUHJvcHM7XG5cblx0cHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZiA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcblx0cHJpdmF0ZSBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xuXHRwcml2YXRlIF9zbG90VHlwZTogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2xvdFR5cGU+O1xuXHRwcml2YXRlIF9zbG90SGFuZGxlcjogU2xvdEhhbmRsZXI8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBzbG90Q2hhbmdlID0gY2hhbmdlc1snc2xvdCddO1xuXHRcdGNvbnN0IHByb3BzQ2hhbmdlID0gY2hhbmdlc1sncHJvcHMnXTtcblx0XHRjb25zdCBzbG90ID0gdGhpcy5zbG90O1xuXHRcdGlmIChzbG90Q2hhbmdlKSB7XG5cdFx0XHRjb25zdCBuZXdTbG90VHlwZSA9IGdldFNsb3RUeXBlKHNsb3QpO1xuXHRcdFx0aWYgKG5ld1Nsb3RUeXBlICE9PSB0aGlzLl9zbG90VHlwZSkge1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlciA9IG5ld1Nsb3RUeXBlID8gbmV3IG5ld1Nsb3RUeXBlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIHRoaXMuX2RvY3VtZW50KSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0dGhpcy5fc2xvdFR5cGUgPSBuZXdTbG90VHlwZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5zbG90Q2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH0gZWxzZSBpZiAocHJvcHNDaGFuZ2UpIHtcblx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5wcm9wc0NoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
