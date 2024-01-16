const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    /** @inheritdoc */
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = function SlotDefaultDirective_Factory(t) { return new (t || SlotDefaultDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDefaultDirective, selectors: [["", "auSlotDefault", ""]], inputs: { auSlotDefault: "auSlotDefault" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotDefaultDirective, [{
        type: Directive,
        args: [{ selector: '[auSlotDefault]', standalone: true }]
    }], null, { auSlotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUlwRSxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBSUMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFjLENBQUEsQ0FBQyxDQUFDO0tBTXJDO0lBSkEsa0JBQWtCO0lBQ2xCLFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7cUZBUlcsb0JBQW9CO29FQUFwQixvQkFBb0I7O2lGQUFwQixvQkFBb0I7Y0FEaEMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7Z0JBRWpDLGFBQWE7a0JBQXBDLEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbYXVTbG90RGVmYXVsdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbG90RGVmYXVsdERpcmVjdGl2ZTxUIGV4dGVuZHMgb2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIGF1U2xvdERlZmF1bHQ6IFdyaXRhYmxlU2lnbmFsPHtzbG90RGVmYXVsdD86IFNsb3RDb250ZW50PFQ+fT47XG5cblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VD4pO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmF1U2xvdERlZmF1bHQudXBkYXRlKCh2YWx1ZSkgPT4gKHsuLi52YWx1ZSwgc2xvdERlZmF1bHQ6IHRoaXMudGVtcGxhdGVSZWZ9KSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
