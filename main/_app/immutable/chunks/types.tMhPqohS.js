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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRS9DLGNBQWMsc0JBQXNCLENBQUM7QUFFckMsTUFBTSxPQUFPLGlCQUFpQjtJQUM3QixZQUNpQixTQUFrQixFQUNsQixZQUFlO1FBRGYsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBRztJQUM3QixDQUFDO0NBQ0o7QUFTRCxNQUFNLE9BQWdCLGFBQWE7OEdBQWIsYUFBYTtvRUFBYixhQUFhOztpRkFBYixhQUFhO2NBRGxDLFNBQVM7Z0JBR1QsS0FBSztrQkFESixLQUFLO1lBR04sR0FBRztrQkFERixLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50IGFzIENvcmVTbG90Q29udGVudCwgV2lkZ2V0LCBXaWRnZXRTdGF0ZSwgRXh0ZW5kc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1NpZ25hbCwgVGVtcGxhdGVSZWYsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEsgZXh0ZW5kcyBzdHJpbmcsIFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fT4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50OiBUeXBlPFQ+LFxuXHRcdHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZVByb3A6IEssXG5cdCkge31cbn1cblxuZXhwb3J0IHR5cGUgU2xvdENvbnRlbnQ8UHJvcHMgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3Q+ID1cblx0fCBDb3JlU2xvdENvbnRlbnQ8UHJvcHM+XG5cdHwgVGVtcGxhdGVSZWY8UHJvcHM+XG5cdHwgVHlwZTx1bmtub3duPlxuXHR8IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBhbnksIGFueT47XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNsb3RDb21wb25lbnQ8VyBleHRlbmRzIFdpZGdldD4ge1xuXHRASW5wdXQoKVxuXHRzdGF0ZSE6IEFuZ3VsYXJTdGF0ZTxXPjtcblx0QElucHV0KClcblx0YXBpITogV1snYXBpJ107XG5cdEBJbnB1dCgpXG5cdGRpcmVjdGl2ZXMhOiBXWydkaXJlY3RpdmVzJ107XG59XG5cbmV4cG9ydCB0eXBlIElzU2xvdENvbnRlbnQ8VD4gPSBFeHRlbmRzPFQsIFNsb3RDb250ZW50PGFueT4+IHwgRXh0ZW5kczxTbG90Q29udGVudDxhbnk+LCBUPiBleHRlbmRzIDEgPyBUIDogMDtcbmV4cG9ydCB0eXBlIEFuZ3VsYXJTdGF0ZTxXIGV4dGVuZHMgV2lkZ2V0PiA9IHtba2V5IGluIGtleW9mIFdpZGdldFN0YXRlPFc+XTogU2lnbmFsPFdpZGdldFN0YXRlPFc+W2tleV0+fTtcblxuZXhwb3J0IHR5cGUgQW5ndWxhcldpZGdldDxXIGV4dGVuZHMgV2lkZ2V0PiA9IFBpY2s8VywgJ2FwaScgfCAnZGlyZWN0aXZlcycgfCAncGF0Y2gnPiAmIHtcblx0aW5pdGlhbGl6ZWQ6IFByb21pc2U8dm9pZD47XG5cdHN0YXRlOiBBbmd1bGFyU3RhdGU8Vz47XG5cdG5nSW5pdDogKCkgPT4gdm9pZDtcblx0dXBkYXRlU2xvdHM6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFNsb3RDb250ZXh0PFcgZXh0ZW5kcyBXaWRnZXQ+IGV4dGVuZHMgUGljazxXLCAnYXBpJyB8ICdkaXJlY3RpdmVzJz4ge1xuXHQvKipcblx0ICogdGhlIHN0YXRlIG9mIHRoZSB3aWRnZXRcblx0ICovXG5cdHN0YXRlOiBBbmd1bGFyU3RhdGU8Vz47XG59XG4iXX0=`;export{c as default};
