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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7QUFFMUMsTUFBZSxXQUFXO0lBQ3pCLFlBQ1EsZ0JBQWtDLEVBQ2xDLFFBQWtCO1FBRGxCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBQ0osVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFZLElBQUcsQ0FBQztJQUN2QyxXQUFXLENBQUMsSUFBVSxFQUFFLEtBQVksSUFBRyxDQUFDO0lBQ3hDLE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLGlCQUFxRCxTQUFRLFdBQTBCO0lBQzVGLFFBQVEsQ0FBbUI7SUFDM0IsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxPQUFPO1FBQ1IsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sb0JBQW9CLEdBQXdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzlGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDeEgsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBRVEsT0FBTztRQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztDQUNEO0FBRUQsTUFBTSxtQkFBdUQsU0FBUSxXQUE0QztJQUNoSCxrQkFBa0IsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEUsVUFBVSxDQUFDLElBQThCLEVBQUUsS0FBWTtRQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUSxXQUFXLENBQUMsSUFBOEIsRUFBRSxLQUFZO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVRLE9BQU87UUFDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztDQUNEO0FBRUQsTUFBTSxvQkFBd0QsU0FBUSxXQUFpQztJQUN0RyxhQUFhLENBQWdDO0lBQzdDLFdBQVcsQ0FBVztJQUViLFVBQVUsQ0FBQyxJQUFtQixFQUFFLEtBQVk7UUFDcEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFZLEVBQUUsYUFBMkI7UUFDekQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYyxDQUFDO1FBQ3pDLEtBQUssTUFBTSxRQUFRLElBQUksVUFBVSxFQUFFLENBQUM7WUFDbkMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakQsYUFBYSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQUVRLFdBQVcsQ0FBQyxJQUFtQixFQUFFLEtBQVk7UUFDckQsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDNUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWMsQ0FBQztRQUN6QyxLQUFLLE1BQU0sUUFBUSxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDRixDQUFDO0lBRVEsT0FBTztRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLHNCQUEwRCxTQUFRLFdBQXNDO0lBQzdHLFFBQVEsQ0FBcUM7SUFDN0MsTUFBTSxDQUFRO0lBRUwsVUFBVSxDQUFDLElBQXdCLEVBQUUsS0FBWTtRQUN6RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUNELEtBQUssR0FBRyxFQUFDLEdBQUcsS0FBSyxFQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFUSxXQUFXLENBQUMsSUFBd0IsRUFBRSxLQUFZO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQW9CLEVBQUUsQ0FBQztnQkFDOUQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsS0FBSyxNQUFNLFdBQVcsSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNGLENBQUM7SUFFUSxPQUFPO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRDtBQUVELE1BQU0sNEJBSUosU0FBUSxXQUFrRDtJQUMzRCxhQUFhLENBQThCO0lBQzNDLG9CQUFvQixHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RixZQUFZLENBQWlDO0lBRXBDLFVBQVUsQ0FBQyxJQUFvQyxFQUFFLEtBQVk7UUFDckUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BELGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtZQUMvQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztTQUM1RSxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVRLFdBQVcsQ0FBQyxJQUFvQyxFQUFFLEtBQVk7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFUSxPQUFPO1FBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztDQUNEO0FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQWdHLEVBQUU7SUFDaEksSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLFNBQVMsQ0FBQztJQUM3QixNQUFNLElBQUksR0FBRyxPQUFPLEtBQUssQ0FBQztJQUMxQixRQUFRLElBQUksRUFBRSxDQUFDO1FBQ2QsS0FBSyxRQUFRO1lBQ1osT0FBTyxpQkFBaUIsQ0FBQztRQUMxQixLQUFLLFVBQVU7WUFDZCxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLE9BQU8sb0JBQW9CLENBQUM7WUFDN0IsQ0FBQztZQUNELE9BQU8sbUJBQW1CLENBQUM7UUFDNUIsS0FBSyxRQUFRO1lBQ1osSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFLENBQUM7Z0JBQ2xDLE9BQU8sc0JBQXNCLENBQUM7WUFDL0IsQ0FBQztZQUNELElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sNEJBQTRCLENBQUM7WUFDckMsQ0FBQztZQUNELE1BQU07SUFDUixDQUFDO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBTUYsTUFBTSxPQUFPLGFBQWE7SUFKMUI7UUFRUyxzQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBMkJyQztJQXZCQSxrQkFBa0I7SUFDbEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQzlCLENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7YUFBTSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs4RUEvQlcsYUFBYTtvRUFBYixhQUFhOztpRkFBYixhQUFhO2NBSnpCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsVUFBVSxFQUFFLElBQUk7YUFDaEI7Z0JBRWlCLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUNPLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbnZpcm9ubWVudEluamVjdG9yLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIGNyZWF0ZUNvbXBvbmVudCwgaW5qZWN0LCByZWZsZWN0Q29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtDb21wb25lbnRUZW1wbGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5cbmFic3RyYWN0IGNsYXNzIFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiwgU2xvdCBleHRlbmRzIFNsb3RDb250ZW50PFByb3BzPiA9IFNsb3RDb250ZW50PFByb3BzPj4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwdWJsaWMgZG9jdW1lbnQ6IERvY3VtZW50LFxuXHQpIHt9XG5cdHNsb3RDaGFuZ2Uoc2xvdDogU2xvdCwgcHJvcHM6IFByb3BzKSB7fVxuXHRwcm9wc0NoYW5nZShzbG90OiBTbG90LCBwcm9wczogUHJvcHMpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5jbGFzcyBTdHJpbmdTbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIHN0cmluZz4ge1xuXHQjbm9kZVJlZjogVGV4dCB8IHVuZGVmaW5lZDtcblx0I3ByZXZpb3VzVGV4dCA9ICcnO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHNsb3QgPT09IHRoaXMuI3ByZXZpb3VzVGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiNwcmV2aW91c1RleHQgPSBzbG90O1xuXHRcdGlmICh0aGlzLiNub2RlUmVmKSB7XG5cdFx0XHR0aGlzLiNub2RlUmVmLnRleHRDb250ZW50ID0gc2xvdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgdmlld0NvbnRhaW5lckVsZW1lbnQ6IENvbW1lbnQgfCB1bmRlZmluZWQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnQgJiYgdmlld0NvbnRhaW5lckVsZW1lbnQ/LnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy4jbm9kZVJlZiA9IHZpZXdDb250YWluZXJFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2xvdCksIHZpZXdDb250YWluZXJFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI25vZGVSZWY/LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRoaXMuI25vZGVSZWYpO1xuXHRcdHRoaXMuI25vZGVSZWYgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgRnVuY3Rpb25TbG90SGFuZGxlcjxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGV4dGVuZHMgU2xvdEhhbmRsZXI8UHJvcHMsIChwcm9wczogUHJvcHMpID0+IHN0cmluZz4ge1xuXHQjc3RyaW5nU2xvdEhhbmRsZXIgPSBuZXcgU3RyaW5nU2xvdEhhbmRsZXIodGhpcy52aWV3Q29udGFpbmVyUmVmLCB0aGlzLmRvY3VtZW50KTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IChwcm9wczogUHJvcHMpID0+IHN0cmluZywgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuc2xvdENoYW5nZShzbG90KHByb3BzKSk7XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdH1cbn1cblxuY2xhc3MgQ29tcG9uZW50U2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUeXBlPHVua25vd24+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXHQjcHJvcGVydGllczogc3RyaW5nW107XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUeXBlPHVua25vd24+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChzbG90KTtcblx0XHR0aGlzLiNhcHBseVByb3BlcnRpZXMocHJvcHMpO1xuXHR9XG5cblx0I2FwcGx5UHJvcGVydGllcyhwcm9wczogUHJvcHMsIG9sZFByb3BlcnRpZXM/OiBTZXQ8c3RyaW5nPikge1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0dGhpcy4jcHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy4jY29tcG9uZW50UmVmITtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5zZXRJbnB1dChwcm9wZXJ0eSwgcHJvcHNbcHJvcGVydHldKTtcblx0XHRcdG9sZFByb3BlcnRpZXM/LmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQodGhpcy4jcHJvcGVydGllcyk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzLCBvbGRQcm9wZXJ0aWVzKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCB1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUZW1wbGF0ZVJlZjxQcm9wcz4+IHtcblx0I3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wczogUHJvcHM7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0cHJvcHMgPSB7Li4ucHJvcHN9O1xuXHRcdHRoaXMuI3Byb3BzID0gcHJvcHM7XG5cdFx0dGhpcy4jdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoc2xvdCwgcHJvcHMpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQcm9wcyA9IHRoaXMuI3Byb3BzO1xuXHRcdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQ8a2V5b2YgUHJvcHM+KE9iamVjdC5rZXlzKHRlbXBsYXRlUHJvcHMpKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcHMpIGFzIChrZXlvZiBQcm9wcylbXSkge1xuXHRcdFx0XHR0ZW1wbGF0ZVByb3BzW3Byb3BlcnR5XSA9IHByb3BzW3Byb3BlcnR5XTtcblx0XHRcdFx0b2xkUHJvcGVydGllcy5kZWxldGUocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBvbGRQcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wbGF0ZVByb3BzW29sZFByb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuI3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPFxuXHRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdEsgZXh0ZW5kcyBzdHJpbmcsXG5cdFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fSxcbj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IHVuZGVmaW5lZDtcblx0I3RlbXBsYXRlU2xvdEhhbmRsZXIgPSBuZXcgVGVtcGxhdGVSZWZTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZG9jdW1lbnQpO1xuXHQjdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IGNyZWF0ZUNvbXBvbmVudChzbG90LmNvbXBvbmVudCwge1xuXHRcdFx0ZWxlbWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IsXG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdH0pO1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmID0gdGhpcy4jY29tcG9uZW50UmVmLmluc3RhbmNlW3Nsb3QudGVtcGxhdGVQcm9wXTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnNsb3RDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5wcm9wc0NoYW5nZSh0aGlzLiN0ZW1wbGF0ZVJlZiEsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jdGVtcGxhdGVTbG90SGFuZGxlci5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNvbnN0IGdldFNsb3RUeXBlID0gKHZhbHVlOiBhbnkpOiB1bmRlZmluZWQgfCB7bmV3ICh2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBkb2N1bWVudDogRG9jdW1lbnQpOiBTbG90SGFuZGxlcjxhbnk+fSA9PiB7XG5cdGlmICghdmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG5cdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gU3RyaW5nU2xvdEhhbmRsZXI7XG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0aWYgKHJlZmxlY3RDb21wb25lbnRUeXBlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50U2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRnVuY3Rpb25TbG90SGFuZGxlcjtcblx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0cmV0dXJuIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnRUZW1wbGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50VGVtcGxhdGVTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVTbG90XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNsb3REaXJlY3RpdmU8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0QElucHV0KCdhdVNsb3QnKSBzbG90OiBTbG90Q29udGVudDxQcm9wcz47XG5cdEBJbnB1dCgnYXVTbG90UHJvcHMnKSBwcm9wczogUHJvcHM7XG5cblx0cHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZiA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcblx0cHJpdmF0ZSBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xuXHRwcml2YXRlIF9zbG90VHlwZTogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2xvdFR5cGU+O1xuXHRwcml2YXRlIF9zbG90SGFuZGxlcjogU2xvdEhhbmRsZXI8UHJvcHM+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2xvdENoYW5nZSA9IGNoYW5nZXNbJ3Nsb3QnXTtcblx0XHRjb25zdCBwcm9wc0NoYW5nZSA9IGNoYW5nZXNbJ3Byb3BzJ107XG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuc2xvdDtcblx0XHRpZiAoc2xvdENoYW5nZSkge1xuXHRcdFx0Y29uc3QgbmV3U2xvdFR5cGUgPSBnZXRTbG90VHlwZShzbG90KTtcblx0XHRcdGlmIChuZXdTbG90VHlwZSAhPT0gdGhpcy5fc2xvdFR5cGUpIHtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LmRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSBuZXdTbG90VHlwZSA/IG5ldyBuZXdTbG90VHlwZSh0aGlzLl92aWV3Q29udGFpbmVyUmVmLCB0aGlzLl9kb2N1bWVudCkgOiB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX3Nsb3RUeXBlID0gbmV3U2xvdFR5cGU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uc2xvdENoYW5nZShzbG90LCB0aGlzLnByb3BzKTtcblx0XHR9IGVsc2UgaWYgKHByb3BzQ2hhbmdlKSB7XG5cdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8ucHJvcHNDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyPy5kZXN0cm95KCk7XG5cdFx0dGhpcy5fc2xvdEhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
