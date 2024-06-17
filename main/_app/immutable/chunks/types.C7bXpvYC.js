const t=`import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/types';
export class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
export class SlotComponent {
    static { this.ɵfac = function SlotComponent_Factory(t) { return new (t || SlotComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotComponent, inputs: { state: "state", widget: "widget" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotComponent, [{
        type: Directive
    }], null, { state: [{
            type: Input
        }], widget: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRS9DLGNBQWMsc0JBQXNCLENBQUM7QUFFckMsTUFBTSxPQUFPLGlCQUFpQjtJQUM3QixZQUNpQixTQUFrQixFQUNsQixZQUFlO1FBRGYsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBRztJQUM3QixDQUFDO0NBQ0o7QUFTRCxNQUFNLE9BQWdCLGFBQWE7OEVBQWIsYUFBYTtvRUFBYixhQUFhOztpRkFBYixhQUFhO2NBRGxDLFNBQVM7Z0JBR1QsS0FBSztrQkFESixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0NvbnRleHRXaWRnZXQsIFNsb3RDb250ZW50IGFzIENvcmVTbG90Q29udGVudCwgV2lkZ2V0LCBXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtTaWduYWwsIFRlbXBsYXRlUmVmLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn0+IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHJlYWRvbmx5IGNvbXBvbmVudDogVHlwZTxUPixcblx0XHRwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVQcm9wOiBLLFxuXHQpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFNsb3RDb250ZW50PFByb3BzIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PiA9XG5cdHwgQ29yZVNsb3RDb250ZW50PFByb3BzPlxuXHR8IFRlbXBsYXRlUmVmPFByb3BzPlxuXHR8IFR5cGU8dW5rbm93bj5cblx0fCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgYW55LCBhbnk+O1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbG90Q29tcG9uZW50PFcgZXh0ZW5kcyBXaWRnZXQ+IHtcblx0QElucHV0KClcblx0c3RhdGUhOiBXaWRnZXRTdGF0ZTxXPjtcblx0QElucHV0KClcblx0d2lkZ2V0ITogQ29udGV4dFdpZGdldDxXPjtcbn1cblxuZXhwb3J0IHR5cGUgQW5ndWxhcldpZGdldDxXIGV4dGVuZHMgV2lkZ2V0PiA9IFcgJiB7XG5cdGluaXRpYWxpemVkOiBQcm9taXNlPHZvaWQ+O1xuXHR3aWRnZXQ6IENvbnRleHRXaWRnZXQ8Vz47XG5cdG5nU3RhdGU6IFNpZ25hbDxXaWRnZXRTdGF0ZTxXPj47XG5cdG5nSW5pdDogKCkgPT4gdm9pZDtcblx0cGF0Y2hTbG90cyhzbG90czoge1xuXHRcdFtLIGluIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYHNsb3Qke3N0cmluZ31gXTogV2lkZ2V0UHJvcHM8Vz5bS10gZXh0ZW5kcyBTbG90Q29udGVudDxpbmZlciBVPiA/IFRlbXBsYXRlUmVmPFU+IHwgdW5kZWZpbmVkIDogbmV2ZXI7XG5cdH0pOiB2b2lkO1xufTtcbiJdfQ==`;export{t as default};
