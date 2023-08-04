const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SlotDefaultDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: SlotDefaultDirective, isStandalone: true, selector: "[auSlotDefault]", inputs: { auSlotDefault: "auSlotDefault" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SlotDefaultDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[auSlotDefault]', standalone: true }]
        }], propDecorators: { auSlotDefault: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvc2xvdERlZmF1bHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBSXBFLE1BQU0sT0FBTyxvQkFBb0I7SUFEakM7UUFJQyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQWMsQ0FBQSxDQUFDLENBQUM7S0FLckM7SUFIQSxRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzhHQVBXLG9CQUFvQjtrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQURoQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7OEJBRWhELGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7V3JpdGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnLi9zbG90LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2F1U2xvdERlZmF1bHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xvdERlZmF1bHREaXJlY3RpdmU8VCBleHRlbmRzIG9iamVjdD4gaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBhdVNsb3REZWZhdWx0OiBXcml0YWJsZVNpZ25hbDx7c2xvdERlZmF1bHQ/OiBTbG90Q29udGVudDxUPn0+O1xuXG5cdHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFQ+KTtcblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmF1U2xvdERlZmF1bHQudXBkYXRlKCh2YWx1ZSkgPT4gKHsuLi52YWx1ZSwgc2xvdERlZmF1bHQ6IHRoaXMudGVtcGxhdGVSZWZ9KSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
