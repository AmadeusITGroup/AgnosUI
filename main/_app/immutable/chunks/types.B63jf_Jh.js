const c=`import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/types';
export class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
export class SlotComponent {
    static { this.ɵfac = function SlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotComponent, inputs: { state: "state", api: "api", directives: "directives" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotComponent, [{
        type: Directive
    }], null, { state: [{
            type: Input
        }], api: [{
            type: Input
        }], directives: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRS9DLGNBQWMsc0JBQXNCLENBQUM7QUFFckMsTUFBTSxPQUFPLGlCQUFpQjtJQUM3QixZQUNpQixTQUFrQixFQUNsQixZQUFlO1FBRGYsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBRztJQUM3QixDQUFDO0NBQ0o7QUFTRCxNQUFNLE9BQWdCLGFBQWE7OEdBQWIsYUFBYTtvRUFBYixhQUFhOztpRkFBYixhQUFhO2NBRGxDLFNBQVM7Z0JBR1QsS0FBSztrQkFESixLQUFLO1lBR04sR0FBRztrQkFERixLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50IGFzIENvcmVTbG90Q29udGVudCwgV2lkZ2V0LCBXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGUsIEV4dGVuZHN9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtTaWduYWwsIFRlbXBsYXRlUmVmLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMge1trZXkgaW4gS106IFRlbXBsYXRlUmVmPFByb3BzPn0+IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHJlYWRvbmx5IGNvbXBvbmVudDogVHlwZTxUPixcblx0XHRwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVQcm9wOiBLLFxuXHQpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFNsb3RDb250ZW50PFByb3BzIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PiA9XG5cdHwgQ29yZVNsb3RDb250ZW50PFByb3BzPlxuXHR8IFRlbXBsYXRlUmVmPFByb3BzPlxuXHR8IFR5cGU8dW5rbm93bj5cblx0fCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgYW55LCBhbnk+O1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbG90Q29tcG9uZW50PFcgZXh0ZW5kcyBXaWRnZXQ+IHtcblx0QElucHV0KClcblx0c3RhdGUhOiBXaWRnZXRTdGF0ZTxXPjtcblx0QElucHV0KClcblx0YXBpITogV1snYXBpJ107XG5cdEBJbnB1dCgpXG5cdGRpcmVjdGl2ZXMhOiBXWydkaXJlY3RpdmVzJ107XG59XG5cbmV4cG9ydCB0eXBlIElzU2xvdENvbnRlbnQ8VD4gPSBFeHRlbmRzPFQsIFNsb3RDb250ZW50PGFueT4+IHwgRXh0ZW5kczxTbG90Q29udGVudDxhbnk+LCBUPiBleHRlbmRzIDEgPyBUIDogMDtcblxuZXhwb3J0IHR5cGUgQW5ndWxhcldpZGdldDxXIGV4dGVuZHMgV2lkZ2V0PiA9IFBpY2s8VywgJ2FwaScgfCAnZGlyZWN0aXZlcycgfCAncGF0Y2gnPiAmIHtcblx0aW5pdGlhbGl6ZWQ6IFByb21pc2U8dm9pZD47XG5cdHN0YXRlOiBTaWduYWw8V2lkZ2V0U3RhdGU8Vz4+O1xuXHRuZ0luaXQ6ICgpID0+IHZvaWQ7XG5cdHBhdGNoU2xvdHMoc2xvdHM6IHtcblx0XHRbSyBpbiBrZXlvZiBXaWRnZXRQcm9wczxXPiBhcyBJc1Nsb3RDb250ZW50PFdpZGdldFByb3BzPFc+W0tdPiBleHRlbmRzIDAgPyBuZXZlciA6IEtdOiBXaWRnZXRQcm9wczxXPltLXSBleHRlbmRzIFNsb3RDb250ZW50PGluZmVyIFU+XG5cdFx0XHQ/IFRlbXBsYXRlUmVmPFU+IHwgdW5kZWZpbmVkXG5cdFx0XHQ6IG5ldmVyO1xuXHR9KTogdm9pZDtcbn07XG4iXX0=`;export{c as default};
