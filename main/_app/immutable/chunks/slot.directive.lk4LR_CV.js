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
    /** @inheritdoc */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7QUFFMUMsTUFBZSxXQUFXO0lBQ3pCLFlBQ1EsZ0JBQWtDLEVBQ2xDLFFBQWtCO1FBRGxCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBQ0osVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN2QyxXQUFXLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3hDLE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLGlCQUFxRCxTQUFRLFdBQTBCO0lBQzVGLFFBQVEsQ0FBbUI7SUFDM0IsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ04sTUFBTSxvQkFBb0IsR0FBd0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDOUYsSUFBSSxJQUFJLENB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QUcsV0FBVyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDthQUFNLElBQUksV0FBVyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7OEVBL0JXLGFBQWE7b0VBQWIsYUFBYTs7aUZBQWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2FBQ2hCO2dCQUVpQixJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFDTyxLQUFLO2tCQUExQixLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0NvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRW52aXJvbm1lbnRJbmplY3RvciwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBjcmVhdGVDb21wb25lbnQsIGluamVjdCwgcmVmbGVjdENvbXBvbmVudFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Q29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4vdHlwZXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIFNsb3QgZXh0ZW5kcyBTbG90Q29udGVudDxQcm9wcz4gPSBTbG90Q29udGVudDxQcm9wcz4+IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHVibGljIGRvY3VtZW50OiBEb2N1bWVudCxcblx0KSB7fVxuXHRzbG90Q2hhbmdlKHNsb3Q6IFNsb3QsIHByb3BzOiBQcm9wcykge31cblx0cHJvcHNDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuY2xhc3MgU3RyaW5nU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBzdHJpbmc+IHtcblx0I25vZGVSZWY6IFRleHQgfCB1bmRlZmluZWQ7XG5cdCNwcmV2aW91c1RleHQgPSAnJztcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChzbG90ID09PSB0aGlzLiNwcmV2aW91c1RleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4jcHJldmlvdXNUZXh0ID0gc2xvdDtcblx0XHRpZiAodGhpcy4jbm9kZVJlZikge1xuXHRcdFx0dGhpcy4jbm9kZVJlZi50ZXh0Q29udGVudCA9IHNsb3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHZpZXdDb250YWluZXJFbGVtZW50OiBDb21tZW50IHwgdW5kZWZpbmVkID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50ICYmIHZpZXdDb250YWluZXJFbGVtZW50Py5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuI25vZGVSZWYgPSB2aWV3Q29udGFpbmVyRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNsb3QpLCB2aWV3Q29udGFpbmVyRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNub2RlUmVmPy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0aGlzLiNub2RlUmVmKTtcblx0XHR0aGlzLiNub2RlUmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIEZ1bmN0aW9uU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmc+IHtcblx0I3N0cmluZ1Nsb3RIYW5kbGVyID0gbmV3IFN0cmluZ1Nsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZiwgdGhpcy5kb2N1bWVudCk7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVHlwZTx1bmtub3duPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IHVuZGVmaW5lZDtcblx0I3Byb3BlcnRpZXM6IHN0cmluZ1tdO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoc2xvdCk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzKTtcblx0fVxuXG5cdCNhcHBseVByb3BlcnRpZXMocHJvcHM6IFByb3BzLCBvbGRQcm9wZXJ0aWVzPzogU2V0PHN0cmluZz4pIHtcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdHRoaXMuI3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHByb3BzW3Byb3BlcnR5XSk7XG5cdFx0XHRvbGRQcm9wZXJ0aWVzPy5kZWxldGUocHJvcGVydHkpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0KHRoaXMuI3Byb3BlcnRpZXMpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcywgb2xkUHJvcGVydGllcyk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgdW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jbGFzcyBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVGVtcGxhdGVSZWY8UHJvcHM+PiB7XG5cdCN2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcHM6IFByb3BzO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHByb3BzID0gey4uLnByb3BzfTtcblx0XHR0aGlzLiNwcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuI3ZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHNsb3QsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUHJvcHMgPSB0aGlzLiNwcm9wcztcblx0XHRcdGNvbnN0IG9sZFByb3BlcnRpZXMgPSBuZXcgU2V0PGtleW9mIFByb3BzPihPYmplY3Qua2V5cyh0ZW1wbGF0ZVByb3BzKSk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKHByb3BzKSBhcyAoa2V5b2YgUHJvcHMpW10pIHtcblx0XHRcdFx0dGVtcGxhdGVQcm9wc1twcm9wZXJ0eV0gPSBwcm9wc1twcm9wZXJ0eV07XG5cdFx0XHRcdG9sZFByb3BlcnRpZXMuZGVsZXRlKHByb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3Qgb2xkUHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0XHRkZWxldGUgdGVtcGxhdGVQcm9wc1tvbGRQcm9wZXJ0eV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiN2aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjxcblx0UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRLIGV4dGVuZHMgc3RyaW5nLFxuXHRUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn0sXG4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gfCB1bmRlZmluZWQ7XG5cdCN0ZW1wbGF0ZVNsb3RIYW5kbGVyID0gbmV3IFRlbXBsYXRlUmVmU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmLCB0aGlzLmRvY3VtZW50KTtcblx0I3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSBjcmVhdGVDb21wb25lbnQoc2xvdC5jb21wb25lbnQsIHtcblx0XHRcdGVsZW1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLFxuXHRcdFx0ZW52aXJvbm1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLmdldChFbnZpcm9ubWVudEluamVjdG9yKSxcblx0XHR9KTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZi5pbnN0YW5jZVtzbG90LnRlbXBsYXRlUHJvcF07XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5zbG90Q2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIucHJvcHNDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYhLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jb25zdCBnZXRTbG90VHlwZSA9ICh2YWx1ZTogYW55KTogdW5kZWZpbmVkIHwge25ldyAodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgZG9jdW1lbnQ6IERvY3VtZW50KTogU2xvdEhhbmRsZXI8YW55Pn0gPT4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIFN0cmluZ1Nsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdGlmIChyZWZsZWN0Q29tcG9uZW50VHlwZSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEZ1bmN0aW9uU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHJldHVybiBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQ29tcG9uZW50VGVtcGxhdGUpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1U2xvdF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTbG90RGlyZWN0aXZlPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgnYXVTbG90Jykgc2xvdDogU2xvdENvbnRlbnQ8UHJvcHM+O1xuXHRASW5wdXQoJ2F1U2xvdFByb3BzJykgcHJvcHM6IFByb3BzO1xuXG5cdHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX2RvY3VtZW50ID0gaW5qZWN0KERPQ1VNRU5UKTtcblx0cHJpdmF0ZSBfc2xvdFR5cGU6IFJldHVyblR5cGU8dHlwZW9mIGdldFNsb3RUeXBlPjtcblx0cHJpdmF0ZSBfc2xvdEhhbmRsZXI6IFNsb3RIYW5kbGVyPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGNvbnN0IHNsb3RDaGFuZ2UgPSBjaGFuZ2VzWydzbG90J107XG5cdFx0Y29uc3QgcHJvcHNDaGFuZ2UgPSBjaGFuZ2VzWydwcm9wcyddO1xuXHRcdGNvbnN0IHNsb3QgPSB0aGlzLnNsb3Q7XG5cdFx0aWYgKHNsb3RDaGFuZ2UpIHtcblx0XHRcdGNvbnN0IG5ld1Nsb3RUeXBlID0gZ2V0U2xvdFR5cGUoc2xvdCk7XG5cdFx0XHRpZiAobmV3U2xvdFR5cGUgIT09IHRoaXMuX3Nsb3RUeXBlKSB7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0XHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gbmV3U2xvdFR5cGUgPyBuZXcgbmV3U2xvdFR5cGUodGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fZG9jdW1lbnQpIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9zbG90VHlwZSA9IG5ld1Nsb3RUeXBlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnNsb3RDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fSBlbHNlIGlmIChwcm9wc0NoYW5nZSkge1xuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnByb3BzQ2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
