const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUlwRSxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBSUMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFjLENBQUEsQ0FBQyxDQUFDO0tBS3JDO0lBSEEsUUFBUTtRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztxRkFQVyxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7aUZBQXBCLG9CQUFvQjtjQURoQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztnQkFFakMsYUFBYTtrQkFBcEMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1dyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vc2xvdFR5cGVzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbYXVTbG90RGVmYXVsdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbG90RGVmYXVsdERpcmVjdGl2ZTxUIGV4dGVuZHMgb2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIGF1U2xvdERlZmF1bHQ6IFdyaXRhYmxlU2lnbmFsPHtzbG90RGVmYXVsdD86IFNsb3RDb250ZW50PFQ+fT47XG5cblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VD4pO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuYXVTbG90RGVmYXVsdC51cGRhdGUoKHZhbHVlKSA9PiAoey4uLnZhbHVlLCBzbG90RGVmYXVsdDogdGhpcy50ZW1wbGF0ZVJlZn0pKTtcblx0fVxufVxuIl19`;export{t as default};
