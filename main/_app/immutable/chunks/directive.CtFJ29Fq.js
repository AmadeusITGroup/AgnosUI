const Q=`import { multiDirective } from '@agnos-ui/core/utils/directive';
import { isPlatformServer } from '@angular/common';
import { DestroyRef, Directive, ElementRef, Injector, Input, PLATFORM_ID, afterNextRender, inject, runInInjectionContext } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
 */
export const useDirectiveForHost = (directive, params) => {
    const injector = inject(Injector);
    const ref = inject(ElementRef);
    const platform = inject(PLATFORM_ID);
    let instance;
    let plannedCallDirective = false;
    const callDirective = isPlatformServer(platform)
        ? () => {
            instance = directive?.(ref.nativeElement, params);
        }
        : () => {
            if (plannedCallDirective || !directive) {
                return;
            }
            plannedCallDirective = true;
            runInInjectionContext(injector, () => {
                afterNextRender(() => {
                    plannedCallDirective = false;
                    instance = directive?.(ref.nativeElement, params);
                });
            });
        };
    function destroyDirectiveInstance() {
        const oldInstance = instance;
        instance = undefined;
        directive = undefined;
        oldInstance?.destroy?.();
    }
    inject(DestroyRef).onDestroy(destroyDirectiveInstance);
    function update(newDirective, newParams) {
        if (newDirective !== directive) {
            void destroyDirectiveInstance();
            directive = newDirective;
            params = newParams;
            callDirective();
        }
        else if (newParams != params) {
            params = newParams;
            instance?.update?.(params);
        }
    }
    callDirective();
    return { update };
};
export class UseDirective {
    #useDirective = useDirectiveForHost();
    /** @inheritdoc */
    ngOnChanges() {
        const use = this.use;
        const [directive, param] = Array.isArray(use) ? use : [use];
        this.#useDirective.update(directive, param);
    }
    static { this.ɵfac = function UseDirective_Factory(ɵt) { return new (ɵt || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: [0, "auUse", "use"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseDirective, [{
        type: Directive,
        args: [{
                standalone: true,
                selector: '[auUse]',
            }]
    }], null, { use: [{
            type: Input,
            args: ['auUse']
        }] }); })();
export class UseMultiDirective {
    #useDirective = useDirectiveForHost();
    /** @inheritdoc */
    ngOnChanges() {
        this.#useDirective.update(multiDirective, this.useMulti);
    }
    static { this.ɵfac = function UseMultiDirective_Factory(ɵt) { return new (ɵt || UseMultiDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseMultiDirective, selectors: [["", "auUseMulti", ""]], inputs: { useMulti: [0, "auUseMulti", "useMulti"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseMultiDirective, [{
        type: Directive,
        args: [{
                standalone: true,
                selector: '[auUseMulti]',
            }]
    }], null, { useMulti: [{
            type: Input,
            args: [{ alias: 'auUseMulti', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRTlJLGNBQWMsZ0NBQWdDLENBQUM7QUFFL0M7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxTQUErQixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQ3JGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXJDLElBQUksUUFBcUQsQ0FBQztJQUMxRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUVqQyxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNMLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRixDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QyxPQUFPO1lBQ1IsQ0FBQztZQUNELG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUM1QixxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNwQyxlQUFlLENBQUMsR0FBRyxFQUFFO29CQUNwQixvQkFBb0IsR0FBRyxLQUFLLENBQUM7b0JBQzdCLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBRUosU0FBUyx3QkFBd0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXZELFNBQVMsTUFBTSxDQUFDLFlBQWtDLEVBQUUsU0FBYTtRQUNoRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxLQUFLLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUN6QixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLGFBQWEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQUVELGFBQWEsRUFBRSxDQUFDO0lBQ2hCLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQUlmLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRWxELGtCQUFrQjtJQUNsQixXQUFXO1FBQ1YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzsrRUFYVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTzs7QUFpQmYsTUFBTSxPQUFPLGlCQUFpQjtJQUlwQixhQUFhLEdBQUcsbUJBQW1CLEVBQTRCLENBQUM7SUFFekUsa0JBQWtCO0lBQ2xCLFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7b0ZBVFcsaUJBQWlCO29FQUFqQixpQkFBaUI7O2lGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsY0FBYzthQUN4QjtnQkFHQSxRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RGlyZWN0aXZlIGFzIEFnbm9zVUlEaXJlY3RpdmUsIERpcmVjdGl2ZUFuZFBhcmFtLCBEaXJlY3RpdmVzQW5kT3B0UGFyYW19IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7bXVsdGlEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3V0aWxzL2RpcmVjdGl2ZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1TZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzdHJveVJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lELCBhZnRlck5leHRSZW5kZXIsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLyoqXG4gKiBTZXQgdXAgYW4gYWdub3MtdWkgZGlyZWN0aXZlIGFzIGFuIGFuZ3VsYXIgaG9zdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIGRpcmVjdGl2ZSAtIHRoZSBkaXJlY3RpdmVcbiAqIEBwYXJhbSBwYXJhbXMgLSB0aGUgcGFyYW1zIHRvIHBhc3MgdG8gdGhlIGRpcmVjdGl2ZVxuICogQHJldHVybnMgdGhlIHVwZGF0ZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIGRpcmVjdGl2ZSBvciBwYXJhbXNcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZURpcmVjdGl2ZUZvckhvc3QgPSA8VD4oZGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgcGFyYW1zPzogVCkgPT4ge1xuXHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblx0Y29uc3QgcGxhdGZvcm0gPSBpbmplY3QoUExBVEZPUk1fSUQpO1xuXG5cdGxldCBpbnN0YW5jZTogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTxBZ25vc1VJRGlyZWN0aXZlPFQ+Pjtcblx0bGV0IHBsYW5uZWRDYWxsRGlyZWN0aXZlID0gZmFsc2U7XG5cblx0Y29uc3QgY2FsbERpcmVjdGl2ZSA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm0pXG5cdFx0PyAoKSA9PiB7XG5cdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdH1cblx0XHQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKHBsYW5uZWRDYWxsRGlyZWN0aXZlIHx8ICFkaXJlY3RpdmUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0XHRhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdGZ1bmN0aW9uIGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBvbGRJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHRcdGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdGRpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcblx0XHRvbGRJbnN0YW5jZT8uZGVzdHJveT8uKCk7XG5cdH1cblxuXHRpbmplY3QoRGVzdHJveVJlZikub25EZXN0cm95KGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlKG5ld0RpcmVjdGl2ZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIG5ld1BhcmFtcz86IFQpIHtcblx0XHRpZiAobmV3RGlyZWN0aXZlICE9PSBkaXJlY3RpdmUpIHtcblx0XHRcdHZvaWQgZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHRkaXJlY3RpdmUgPSBuZXdEaXJlY3RpdmU7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRjYWxsRGlyZWN0aXZlKCk7XG5cdFx0fSBlbHNlIGlmIChuZXdQYXJhbXMgIT0gcGFyYW1zKSB7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGxEaXJlY3RpdmUoKTtcblx0cmV0dXJuIHt1cGRhdGV9O1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHNlbGVjdG9yOiAnW2F1VXNlXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmUgfCBEaXJlY3RpdmVBbmRQYXJhbTxUPiB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSAjdXNlRGlyZWN0aXZlID0gdXNlRGlyZWN0aXZlRm9ySG9zdDxUPigpO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRjb25zdCB1c2UgPSB0aGlzLnVzZTtcblx0XHRjb25zdCBbZGlyZWN0aXZlLCBwYXJhbV0gPSBBcnJheS5pc0FycmF5KHVzZSkgPyB1c2UgOiBbdXNlIGFzIGFueV07XG5cdFx0dGhpcy4jdXNlRGlyZWN0aXZlLnVwZGF0ZShkaXJlY3RpdmUsIHBhcmFtKTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VNdWx0aV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VNdWx0aURpcmVjdGl2ZTxUIGV4dGVuZHMgYW55W10+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KHthbGlhczogJ2F1VXNlTXVsdGknLCByZXF1aXJlZDogdHJ1ZX0pXG5cdHVzZU11bHRpITogRGlyZWN0aXZlc0FuZE9wdFBhcmFtPFQ+O1xuXG5cdHJlYWRvbmx5ICN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PERpcmVjdGl2ZXNBbmRPcHRQYXJhbTxUPj4oKTtcblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy4jdXNlRGlyZWN0aXZlLnVwZGF0ZShtdWx0aURpcmVjdGl2ZSwgdGhpcy51c2VNdWx0aSk7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
