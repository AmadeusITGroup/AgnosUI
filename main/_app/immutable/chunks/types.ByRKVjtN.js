const G=`import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/types';
/**
 * Represents a template for a component with specified properties.
 *
 * @template Props - The type of properties that the template accepts.
 * @template K - The key in the template object that maps to the template reference.
 * @template T - An object type where each key of type K maps to a TemplateRef of Props.
 *
 * @param component - The component type that contains the template.
 * @param templateProp - The key in the component that maps to the template reference.
 */
export class ComponentTemplate {
    constructor(component, templateProp) {
        this.component = component;
        this.templateProp = templateProp;
    }
}
/**
 * A directive representing a slot component that can be used to manage the state and context of a widget.
 *
 * @template W - The type of the widget that this slot component manages.
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRS9DLGNBQWMsc0JBQXNCLENBQUM7QUFFckM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQUM3QixZQUNpQixTQUFrQixFQUNsQixZQUFlO1FBRGYsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBRztJQUM3QixDQUFDO0NBQ0o7QUFxQkQ7Ozs7R0FJRztBQUVILE1BQU0sT0FBZ0IsYUFBYTs4R0FBYixhQUFhO29FQUFiLGFBQWE7O2lGQUFiLGFBQWE7Y0FEbEMsU0FBUztnQkFNVCxLQUFLO2tCQURKLEtBQUs7WUFNTixHQUFHO2tCQURGLEtBQUs7WUFNTixVQUFVO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnQgYXMgQ29yZVNsb3RDb250ZW50LCBXaWRnZXQsIFdpZGdldFN0YXRlLCBFeHRlbmRzfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7U2lnbmFsLCBUZW1wbGF0ZVJlZiwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHRlbXBsYXRlIGZvciBhIGNvbXBvbmVudCB3aXRoIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICpcbiAqIEB0ZW1wbGF0ZSBQcm9wcyAtIFRoZSB0eXBlIG9mIHByb3BlcnRpZXMgdGhhdCB0aGUgdGVtcGxhdGUgYWNjZXB0cy5cbiAqIEB0ZW1wbGF0ZSBLIC0gVGhlIGtleSBpbiB0aGUgdGVtcGxhdGUgb2JqZWN0IHRoYXQgbWFwcyB0byB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlLlxuICogQHRlbXBsYXRlIFQgLSBBbiBvYmplY3QgdHlwZSB3aGVyZSBlYWNoIGtleSBvZiB0eXBlIEsgbWFwcyB0byBhIFRlbXBsYXRlUmVmIG9mIFByb3BzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgLSBUaGUgY29tcG9uZW50IHR5cGUgdGhhdCBjb250YWlucyB0aGUgdGVtcGxhdGUuXG4gKiBAcGFyYW0gdGVtcGxhdGVQcm9wIC0gVGhlIGtleSBpbiB0aGUgY29tcG9uZW50IHRoYXQgbWFwcyB0byB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlLlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEsgZXh0ZW5kcyBzdHJpbmcsIFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fT4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50OiBUeXBlPFQ+LFxuXHRcdHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZVByb3A6IEssXG5cdCkge31cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjb250ZW50IHRoYXQgY2FuIGJlIHVzZWQgaW4gYSBzbG90LlxuICpcbiAqIEB0ZW1wbGF0ZSBQcm9wcyAtIFRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhlIHNsb3QgY29udGVudCBjYW4gYWNjZXB0LlxuICpcbiAqIFRoaXMgdHlwZSBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XG4gKiAtIGB1bmRlZmluZWQgfCBudWxsYDogTnVsbGlzaCB2YWx1ZVxuICogLSBgc3RyaW5nYDogQSBzdGF0aWMgc3RyaW5nXG4gKiAtIGAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmdgOiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcHMgYXMgaW5wdXQgYW5kIHJldHVybnMgYSBzdHJpbmcgdGVtcGxhdGVcbiAqIC0gYFRlbXBsYXRlUmVmPFByb3BzPmA6IEEgcmVmZXJlbmNlIHRvIGFuIEFuZ3VsYXIgdGVtcGxhdGUgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gKiAtIGBUeXBlPHVua25vd24+YDogQSB0eXBlIHJlcHJlc2VudGluZyBhbiB1bmtub3duIGNvbXBvbmVudCBvciBkaXJlY3RpdmUuXG4gKiAtIGBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgYW55LCBhbnk+YDogQSBjb21wb25lbnQgdGVtcGxhdGUgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFNsb3RDb250ZW50PFByb3BzIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PiA9XG5cdHwgQ29yZVNsb3RDb250ZW50PFByb3BzPlxuXHR8IFRlbXBsYXRlUmVmPFByb3BzPlxuXHR8IFR5cGU8dW5rbm93bj5cblx0fCBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgYW55LCBhbnk+O1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHJlcHJlc2VudGluZyBhIHNsb3QgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgdG8gbWFuYWdlIHRoZSBzdGF0ZSBhbmQgY29udGV4dCBvZiBhIHdpZGdldC5cbiAqXG4gKiBAdGVtcGxhdGUgVyAtIFRoZSB0eXBlIG9mIHRoZSB3aWRnZXQgdGhhdCB0aGlzIHNsb3QgY29tcG9uZW50IG1hbmFnZXMuXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNsb3RDb21wb25lbnQ8VyBleHRlbmRzIFdpZGdldD4ge1xuXHQvKipcblx0ICogVGhlIHN0YXRlIG9mIHRoZSB3aWRnZXQuIEVhY2ggcHJvcGVydHkgb2YgdGhlIHN0YXRlIGlzIGV4cG9zZWQgdGhyb3VnaCBhbiBBbmd1bGFyIHtAbGluayBodHRwczovL2FuZ3VsYXIuZGV2L2FwaS9jb3JlL1NpZ25hbCB8IFNpZ25hbH1cblx0ICovXG5cdEBJbnB1dCgpXG5cdHN0YXRlITogQW5ndWxhclN0YXRlPFc+O1xuXHQvKipcblx0ICogYWxsIHRoZSBhcGkgZnVuY3Rpb25zIHRvIGludGVyYWN0IHdpdGggdGhlIHdpZGdldFxuXHQgKi9cblx0QElucHV0KClcblx0YXBpITogV1snYXBpJ107XG5cdC8qKlxuXHQgKiBkaXJlY3RpdmVzIHRvIGJlIHVzZWQgb24gaHRtbCBlbGVtZW50cyBpbiB0aGUgdGVtcGxhdGUgb2YgdGhlIHNsb3Rcblx0ICovXG5cdEBJbnB1dCgpXG5cdGRpcmVjdGl2ZXMhOiBXWydkaXJlY3RpdmVzJ107XG59XG5cbi8qKlxuICogVHlwZSB1dGlsaXR5IHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHR5cGUgYFRgIGlzIG9yIGV4dGVuZHMgYFNsb3RDb250ZW50PGFueT5gLlxuICpcbiAqIFRoaXMgdHlwZSBhbGlhcyB1c2VzIGNvbmRpdGlvbmFsIHR5cGVzIHRvIGNoZWNrIGlmIGBUYCBleHRlbmRzIGBTbG90Q29udGVudDxhbnk+YCBvciBpZiBgU2xvdENvbnRlbnQ8YW55PmAgZXh0ZW5kcyBgVGAuXG4gKiBJZiBlaXRoZXIgY29uZGl0aW9uIGlzIHRydWUsIGl0IHJlc29sdmVzIHRvIGBUYCwgb3RoZXJ3aXNlIGl0IHJlc29sdmVzIHRvIGAwYC5cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIFRoZSB0eXBlIHRvIGJlIGNoZWNrZWQuXG4gKi9cbmV4cG9ydCB0eXBlIElzU2xvdENvbnRlbnQ8VD4gPSBFeHRlbmRzPFQsIFNsb3RDb250ZW50PGFueT4+IHwgRXh0ZW5kczxTbG90Q29udGVudDxhbnk+LCBUPiBleHRlbmRzIDEgPyBUIDogMDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiBhbiBBbmd1bGFyIHdpZGdldCwgd2hlcmUgZWFjaCBrZXkgaW4gdGhlIHdpZGdldCdzIHN0YXRlXG4gKiBpcyBtYXBwZWQgdG8gYSBTaWduYWwgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGUgdmFsdWUuXG4gKlxuICogQHRlbXBsYXRlIFcgLSBUaGUgdHlwZSBvZiB0aGUgd2lkZ2V0LlxuICovXG5leHBvcnQgdHlwZSBBbmd1bGFyU3RhdGU8VyBleHRlbmRzIFdpZGdldD4gPSB7W2tleSBpbiBrZXlvZiBXaWRnZXRTdGF0ZTxXPl06IFNpZ25hbDxXaWRnZXRTdGF0ZTxXPltrZXldPn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBBbmd1bGFyIHdpZGdldCB0aGF0IGV4dGVuZHMgYSBiYXNlIHdpZGdldCB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBXIC0gVGhlIHR5cGUgb2YgdGhlIGJhc2Ugd2lkZ2V0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJXaWRnZXQ8VyBleHRlbmRzIFdpZGdldD4gZXh0ZW5kcyBQaWNrPFcsICdhcGknIHwgJ2RpcmVjdGl2ZXMnIHwgJ3BhdGNoJz4ge1xuXHQvKipcblx0ICogQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgd2lkZ2V0IGlzIGluaXRpYWxpemVkXG5cdCAqL1xuXHRpbml0aWFsaXplZDogUHJvbWlzZTx2b2lkPjtcblx0LyoqXG5cdCAqIFRoZSBzdGF0ZSBvZiB0aGUgd2lkZ2V0LiBFYWNoIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBpcyBleHBvc2VkIHRocm91Z2ggYW4gQW5ndWxhciB7QGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmRldi9hcGkvY29yZS9TaWduYWwgfCBTaWduYWx9XG5cdCAqL1xuXHRzdGF0ZTogQW5ndWxhclN0YXRlPFc+O1xuXHQvKipcblx0ICogQSBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBBbmd1bGFyIHdpZGdldC5cblx0ICovXG5cdG5nSW5pdDogKCkgPT4gdm9pZDtcblx0LyoqXG5cdCAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNsb3QgcHJvcGVydGllcy5cblx0ICovXG5cdHVwZGF0ZVNsb3RzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFNsb3RDb250ZXh0PFcgZXh0ZW5kcyBXaWRnZXQ+IGV4dGVuZHMgUGljazxXLCAnYXBpJyB8ICdkaXJlY3RpdmVzJz4ge1xuXHQvKipcblx0ICogdGhlIHN0YXRlIG9mIHRoZSB3aWRnZXRcblx0ICovXG5cdHN0YXRlOiBBbmd1bGFyU3RhdGU8Vz47XG59XG4iXX0=`;export{G as default};