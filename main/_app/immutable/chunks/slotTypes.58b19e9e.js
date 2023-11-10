const c=`import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
export class SlotComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SlotComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SlotComponent, inputs: { state: "state", widget: "widget" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SlotComponent, decorators: [{
            type: Directive
        }], propDecorators: { state: [{
                type: Input
            }], widget: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vaGVhZGxlc3Mvc3JjL2xpYi9zbG90VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQThCLE1BQU0sZUFBZSxDQUFDOztBQUU1RSxNQUFNLE9BQU8saUJBQWlCO0lBQzdCLFlBQTRCLFNBQWtCLEVBQWtCLFlBQWU7UUFBbkQsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUFrQixpQkFBWSxHQUFaLFlBQVksQ0FBRztJQUFHLENBQUM7Q0FDbkY7QUE2QkQsTUFBTSxPQUFnQixhQUFhOytHQUFiLGFBQWE7bUdBQWIsYUFBYTs7NEZBQWIsYUFBYTtrQkFEbEMsU0FBUzs4QkFHVCxLQUFLO3NCQURKLEtBQUs7Z0JBR04sTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0NvbnRleHRXaWRnZXQsIFNsb3RDb250ZW50IGFzIENvcmVTbG90Q29udGVudCwgV2lkZ2V0LCBXaWRnZXRGYWN0b3J5LCBXaWRnZXRQcm9wcywgV2lkZ2V0U2xvdENvbnRleHQsIFdpZGdldFN0YXRlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIHR5cGUgVGVtcGxhdGVSZWYsIHR5cGUgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSyBleHRlbmRzIHN0cmluZywgVCBleHRlbmRzIHtba2V5IGluIEtdOiBUZW1wbGF0ZVJlZjxQcm9wcz59PiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjb21wb25lbnQ6IFR5cGU8VD4sIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZVByb3A6IEspIHt9XG59XG5cbmV4cG9ydCB0eXBlIFNsb3RDb250ZW50PFByb3BzIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PiA9XG5cdHwgQ29yZVNsb3RDb250ZW50PFByb3BzPlxuXHR8IFRlbXBsYXRlUmVmPFByb3BzPlxuXHR8IFR5cGU8dW5rbm93bj5cblx0fCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgYW55LCBhbnk+O1xuXG5leHBvcnQgdHlwZSBBZGFwdFNsb3RDb250ZW50UHJvcHM8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IFByb3BzIGV4dGVuZHMgV2lkZ2V0U2xvdENvbnRleHQ8aW5mZXIgVT5cblx0PyBXaWRnZXRTbG90Q29udGV4dDxBZGFwdFdpZGdldFNsb3RzPFU+PiAmIEFkYXB0UHJvcHNTbG90czxPbWl0PFByb3BzLCBrZXlvZiBXaWRnZXRTbG90Q29udGV4dDxhbnk+Pj5cblx0OiBBZGFwdFByb3BzU2xvdHM8UHJvcHM+O1xuXG5leHBvcnQgdHlwZSBBZGFwdFByb3BzU2xvdHM8UHJvcHM+ID0gT21pdDxQcm9wcywgYHNsb3Qke3N0cmluZ31gPiAmIHtcblx0W0sgaW4ga2V5b2YgUHJvcHMgJiBgc2xvdCR7c3RyaW5nfWBdOiBQcm9wc1tLXSBleHRlbmRzIENvcmVTbG90Q29udGVudDxpbmZlciBVPiA/IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxVPj4gOiBQcm9wc1tLXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkYXB0V2lkZ2V0RmFjdG9yaWVzPFQ+ID0ge1xuXHRbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFdpZGdldEZhY3Rvcnk8aW5mZXIgVT4gPyBXaWRnZXRGYWN0b3J5PEFkYXB0V2lkZ2V0U2xvdHM8VT4+IDogVFtLXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkYXB0V2lkZ2V0U2xvdHM8VyBleHRlbmRzIFdpZGdldD4gPSBXaWRnZXQ8XG5cdEFkYXB0UHJvcHNTbG90czxXaWRnZXRQcm9wczxXPj4sXG5cdEFkYXB0UHJvcHNTbG90czxXaWRnZXRTdGF0ZTxXPj4sXG5cdEFkYXB0V2lkZ2V0RmFjdG9yaWVzPFdbJ2FwaSddPixcblx0V1snYWN0aW9ucyddLFxuXHRXWydkaXJlY3RpdmVzJ11cbj47XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNsb3RDb21wb25lbnQ8VyBleHRlbmRzIFdpZGdldD4ge1xuXHRASW5wdXQoKVxuXHRzdGF0ZSE6IFdpZGdldFN0YXRlPFc+O1xuXHRASW5wdXQoKVxuXHR3aWRnZXQhOiBDb250ZXh0V2lkZ2V0PFc+O1xufVxuIl19`;export{c as default};
