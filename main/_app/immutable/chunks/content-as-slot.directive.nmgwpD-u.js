const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Directive that allows to pass the templateRef associated to a ng-content to a store.
 * The input of the directive is a {@link WritableSignal}<{children: {@link SlotContent}<T>}>.
 */
export class ContentAsSlotDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    /** @inheritdoc */
    ngOnInit() {
        this.auContentAsSlot.update((value) => ({ ...value, children: this.templateRef }));
    }
    static { this.ɵfac = function ContentAsSlotDirective_Factory(t) { return new (t || ContentAsSlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContentAsSlotDirective, selectors: [["", "auContentAsSlot", ""]], inputs: { auContentAsSlot: "auContentAsSlot" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentAsSlotDirective, [{
        type: Directive,
        args: [{ selector: '[auContentAsSlot]', standalone: true }]
    }], null, { auContentAsSlot: [{
            type: Input,
            args: [{ alias: 'auContentAsSlot', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1hcy1zbG90LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZW50LWFzLXNsb3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR3BFOzs7R0FHRztBQUVILE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFJQyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQWMsQ0FBQSxDQUFDLENBQUM7S0FNckM7SUFKQSxrQkFBa0I7SUFDbEIsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzt1RkFSVyxzQkFBc0I7b0VBQXRCLHNCQUFzQjs7aUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztnQkFFUixlQUFlO2tCQUFqRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7V3JpdGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWxsb3dzIHRvIHBhc3MgdGhlIHRlbXBsYXRlUmVmIGFzc29jaWF0ZWQgdG8gYSBuZy1jb250ZW50IHRvIGEgc3RvcmUuXG4gKiBUaGUgaW5wdXQgb2YgdGhlIGRpcmVjdGl2ZSBpcyBhIHtAbGluayBXcml0YWJsZVNpZ25hbH08e2NoaWxkcmVuOiB7QGxpbmsgU2xvdENvbnRlbnR9PFQ+fT4uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2F1Q29udGVudEFzU2xvdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBDb250ZW50QXNTbG90RGlyZWN0aXZlPFQgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KHthbGlhczogJ2F1Q29udGVudEFzU2xvdCcsIHJlcXVpcmVkOiB0cnVlfSkgYXVDb250ZW50QXNTbG90ITogV3JpdGFibGVTaWduYWw8e2NoaWxkcmVuPzogU2xvdENvbnRlbnQ8VD59PjtcblxuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUPik7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuYXVDb250ZW50QXNTbG90LnVwZGF0ZSgodmFsdWUpID0+ICh7Li4udmFsdWUsIGNoaWxkcmVuOiB0aGlzLnRlbXBsYXRlUmVmfSkpO1xuXHR9XG59XG4iXX0=`;export{t as default};
