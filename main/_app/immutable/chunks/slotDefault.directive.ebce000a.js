const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SlotDefaultDirective, isStandalone: true, selector: "[auSlotDefault]", inputs: { auSlotDefault: "auSlotDefault" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[auSlotDefault]', standalone: true }]
        }], propDecorators: { auSlotDefault: [{
                type: Input,
                args: ['auSlotDefault']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vaGVhZGxlc3Mvc3JjL2xpYi9zbG90RGVmYXVsdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFJcEUsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUlDLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBYyxDQUFBLENBQUMsQ0FBQztLQUtyQztJQUhBLFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OEdBUFcsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs4QkFFakMsYUFBYTtzQkFBcEMsS0FBSzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1dyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1thdVNsb3REZWZhdWx0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsb3REZWZhdWx0RGlyZWN0aXZlPFQgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCdhdVNsb3REZWZhdWx0JykgYXVTbG90RGVmYXVsdDogV3JpdGFibGVTaWduYWw8e3Nsb3REZWZhdWx0PzogU2xvdENvbnRlbnQ8VD59PjtcblxuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUPik7XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdVNsb3REZWZhdWx0LnVwZGF0ZSgodmFsdWUpID0+ICh7Li4udmFsdWUsIHNsb3REZWZhdWx0OiB0aGlzLnRlbXBsYXRlUmVmfSkpO1xuXHR9XG59XG4iXX0=`;export{t as default};
