const Q=`import { DOCUMENT } from '@angular/common';
import { Directive, EnvironmentInjector, Input, TemplateRef, ViewContainerRef, createComponent, inject, reflectComponentType } from '@angular/core';
import { ComponentTemplate } from './utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9oZWFkbGVzcy9zcmMvbGliL3Nsb3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsSixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7O0FBRTFDLE1BQWUsV0FBVztJQUN6QixZQUFtQixnQkFBa0MsRUFBUyxRQUFrQjtRQUE3RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFDcEYsVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN2QyxXQUFXLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3hDLE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLGlCQUFxRCxTQUFRLFdBQTBCO0lBQzVGLFFBQVEsQ0FBbUI7SUFDM0IsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ04sTUFBTSxvQkFBb0IsR0FBd0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7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QVMsR0FBRyxXQUFXLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzhHQTdCVyxhQUFhO2tHQUFiLGFBQWE7OzJGQUFiLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2lCQUNoQjs4QkFFaUIsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRO2dCQUNPLEtBQUs7c0JBQTFCLEtBQUs7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbnZpcm9ubWVudEluamVjdG9yLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIGNyZWF0ZUNvbXBvbmVudCwgaW5qZWN0LCByZWZsZWN0Q29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtDb21wb25lbnRUZW1wbGF0ZX0gZnJvbSAnLi91dGlscyc7XG5cbmFic3RyYWN0IGNsYXNzIFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiwgU2xvdCBleHRlbmRzIFNsb3RDb250ZW50PFByb3BzPiA9IFNsb3RDb250ZW50PFByb3BzPj4ge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGRvY3VtZW50OiBEb2N1bWVudCkge31cblx0c2xvdENoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdHByb3BzQ2hhbmdlKHNsb3Q6IFNsb3QsIHByb3BzOiBQcm9wcykge31cblx0ZGVzdHJveSgpIHt9XG59XG5cbmNsYXNzIFN0cmluZ1Nsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgc3RyaW5nPiB7XG5cdCNub2RlUmVmOiBUZXh0IHwgdW5kZWZpbmVkO1xuXHQjcHJldmlvdXNUZXh0ID0gJyc7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoc2xvdCA9PT0gdGhpcy4jcHJldmlvdXNUZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuI3ByZXZpb3VzVGV4dCA9IHNsb3Q7XG5cdFx0aWYgKHRoaXMuI25vZGVSZWYpIHtcblx0XHRcdHRoaXMuI25vZGVSZWYudGV4dENvbnRlbnQgPSBzbG90O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB2aWV3Q29udGFpbmVyRWxlbWVudDogQ29tbWVudCB8IHVuZGVmaW5lZCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRpZiAodGhpcy5kb2N1bWVudCAmJiB2aWV3Q29udGFpbmVyRWxlbWVudD8ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLiNub2RlUmVmID0gdmlld0NvbnRhaW5lckVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzbG90KSwgdmlld0NvbnRhaW5lckVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jbm9kZVJlZj8ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGhpcy4jbm9kZVJlZik7XG5cdFx0dGhpcy4jbm9kZVJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jbGFzcyBGdW5jdGlvblNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nPiB7XG5cdCNzdHJpbmdTbG90SGFuZGxlciA9IG5ldyBTdHJpbmdTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZG9jdW1lbnQpO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLmRlc3Ryb3koKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFR5cGU8dW5rbm93bj4+IHtcblx0I2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wZXJ0aWVzOiBzdHJpbmdbXTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHNsb3QpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcyk7XG5cdH1cblxuXHQjYXBwbHlQcm9wZXJ0aWVzKHByb3BzOiBQcm9wcywgb2xkUHJvcGVydGllcz86IFNldDxzdHJpbmc+KSB7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHR0aGlzLiNwcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCBwcm9wc1twcm9wZXJ0eV0pO1xuXHRcdFx0b2xkUHJvcGVydGllcz8uZGVsZXRlKHByb3BlcnR5KTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldCh0aGlzLiNwcm9wZXJ0aWVzKTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMsIG9sZFByb3BlcnRpZXMpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZiE7XG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuc2V0SW5wdXQocHJvcGVydHksIHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgVGVtcGxhdGVSZWZTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIFRlbXBsYXRlUmVmPFByb3BzPj4ge1xuXHQjdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblx0I3Byb3BzOiBQcm9wcztcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFRlbXBsYXRlUmVmPFByb3BzPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI3ZpZXdSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRwcm9wcyA9IHsuLi5wcm9wc307XG5cdFx0dGhpcy4jcHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLiN2aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhzbG90LCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVByb3BzID0gdGhpcy4jcHJvcHM7XG5cdFx0XHRjb25zdCBvbGRQcm9wZXJ0aWVzID0gbmV3IFNldDxrZXlvZiBQcm9wcz4oT2JqZWN0LmtleXModGVtcGxhdGVQcm9wcykpO1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wcykgYXMgKGtleW9mIFByb3BzKVtdKSB7XG5cdFx0XHRcdHRlbXBsYXRlUHJvcHNbcHJvcGVydHldID0gcHJvcHNbcHJvcGVydHldO1xuXHRcdFx0XHRvbGRQcm9wZXJ0aWVzLmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IG9sZFByb3BlcnR5IG9mIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdFx0ZGVsZXRlIHRlbXBsYXRlUHJvcHNbb2xkUHJvcGVydHldO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4jdmlld1JlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI8XG5cdFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pixcblx0SyBleHRlbmRzIHN0cmluZyxcblx0VCBleHRlbmRzIHtba2V5IGluIEtdOiBUZW1wbGF0ZVJlZjxQcm9wcz59XG4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gfCB1bmRlZmluZWQ7XG5cdCN0ZW1wbGF0ZVNsb3RIYW5kbGVyID0gbmV3IFRlbXBsYXRlUmVmU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmLCB0aGlzLmRvY3VtZW50KTtcblx0I3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSBjcmVhdGVDb21wb25lbnQoc2xvdC5jb21wb25lbnQsIHtcblx0XHRcdGVsZW1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLFxuXHRcdFx0ZW52aXJvbm1lbnRJbmplY3RvcjogdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yLmdldChFbnZpcm9ubWVudEluamVjdG9yKSxcblx0XHR9KTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVJlZiA9IHRoaXMuI2NvbXBvbmVudFJlZi5pbnN0YW5jZVtzbG90LnRlbXBsYXRlUHJvcF07XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5zbG90Q2hhbmdlKHRoaXMuI3RlbXBsYXRlUmVmLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIucHJvcHNDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYhLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jb25zdCBnZXRTbG90VHlwZSA9ICh2YWx1ZTogYW55KTogdW5kZWZpbmVkIHwge25ldyAodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgZG9jdW1lbnQ6IERvY3VtZW50KTogU2xvdEhhbmRsZXI8YW55Pn0gPT4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIFN0cmluZ1Nsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdGlmIChyZWZsZWN0Q29tcG9uZW50VHlwZSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEZ1bmN0aW9uU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHJldHVybiBUZW1wbGF0ZVJlZlNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQ29tcG9uZW50VGVtcGxhdGUpIHtcblx0XHRcdFx0cmV0dXJuIENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1U2xvdF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTbG90RGlyZWN0aXZlPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgnYXVTbG90Jykgc2xvdDogU2xvdENvbnRlbnQ8UHJvcHM+O1xuXHRASW5wdXQoJ2F1U2xvdFByb3BzJykgcHJvcHM6IFByb3BzO1xuXG5cdHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX2RvY3VtZW50ID0gaW5qZWN0KERPQ1VNRU5UKTtcblx0cHJpdmF0ZSBfc2xvdFR5cGU6IFJldHVyblR5cGU8dHlwZW9mIGdldFNsb3RUeXBlPjtcblx0cHJpdmF0ZSBfc2xvdEhhbmRsZXI6IFNsb3RIYW5kbGVyPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2xvdENoYW5nZSA9IGNoYW5nZXNbJ3Nsb3QnXTtcblx0XHRjb25zdCBwcm9wc0NoYW5nZSA9IGNoYW5nZXNbJ3Byb3BzJ107XG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuc2xvdDtcblx0XHRpZiAoc2xvdENoYW5nZSkge1xuXHRcdFx0Y29uc3QgbmV3U2xvdFR5cGUgPSBnZXRTbG90VHlwZShzbG90KTtcblx0XHRcdGlmIChuZXdTbG90VHlwZSAhPT0gdGhpcy5fc2xvdFR5cGUpIHtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LmRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSBuZXdTbG90VHlwZSA/IG5ldyBuZXdTbG90VHlwZSh0aGlzLl92aWV3Q29udGFpbmVyUmVmLCB0aGlzLl9kb2N1bWVudCkgOiB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX3Nsb3RUeXBlID0gbmV3U2xvdFR5cGU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uc2xvdENoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9IGVsc2UgaWYgKHByb3BzQ2hhbmdlKSB7XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8ucHJvcHNDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5fc2xvdEhhbmRsZXI/LmRlc3Ryb3koKTtcblx0XHR0aGlzLl9zbG90SGFuZGxlciA9IHVuZGVmaW5lZDtcblx0fVxufVxuIl19`;export{Q as default};
