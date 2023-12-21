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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUlwRSxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBSUMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFjLENBQUEsQ0FBQyxDQUFDO0tBS3JDO0lBSEEsUUFBUTtRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztxRkFQVyxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7aUZBQXBCLG9CQUFvQjtjQURoQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztnQkFFakMsYUFBYTtrQkFBcEMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1dyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1thdVNsb3REZWZhdWx0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsb3REZWZhdWx0RGlyZWN0aXZlPFQgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCdhdVNsb3REZWZhdWx0JykgYXVTbG90RGVmYXVsdDogV3JpdGFibGVTaWduYWw8e3Nsb3REZWZhdWx0PzogU2xvdENvbnRlbnQ8VD59PjtcblxuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUPik7XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdVNsb3REZWZhdWx0LnVwZGF0ZSgodmFsdWUpID0+ICh7Li4udmFsdWUsIHNsb3REZWZhdWx0OiB0aGlzLnRlbXBsYXRlUmVmfSkpO1xuXHR9XG59XG4iXX0=`;export{t as default};
