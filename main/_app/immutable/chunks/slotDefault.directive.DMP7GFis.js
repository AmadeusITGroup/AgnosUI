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
            args: [{ alias: 'auSlotDefault', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUlwRSxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBSUMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFjLENBQUEsQ0FBQyxDQUFDO0tBTXJDO0lBSkEsa0JBQWtCO0lBQ2xCLFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7cUZBUlcsb0JBQW9CO29FQUFwQixvQkFBb0I7O2lGQUFwQixvQkFBb0I7Y0FEaEMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7Z0JBRVIsYUFBYTtrQkFBN0QsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbYXVTbG90RGVmYXVsdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbG90RGVmYXVsdERpcmVjdGl2ZTxUIGV4dGVuZHMgb2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNsb3REZWZhdWx0JywgcmVxdWlyZWQ6IHRydWV9KSBhdVNsb3REZWZhdWx0ITogV3JpdGFibGVTaWduYWw8e3Nsb3REZWZhdWx0PzogU2xvdENvbnRlbnQ8VD59PjtcblxuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUPik7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuYXVTbG90RGVmYXVsdC51cGRhdGUoKHZhbHVlKSA9PiAoey4uLnZhbHVlLCBzbG90RGVmYXVsdDogdGhpcy50ZW1wbGF0ZVJlZn0pKTtcblx0fVxufVxuIl19`;export{t as default};
