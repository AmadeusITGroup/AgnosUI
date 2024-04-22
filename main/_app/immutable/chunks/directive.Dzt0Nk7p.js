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
    static { this.ɵfac = function UseDirective_Factory(t) { return new (t || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: [i0.ɵɵInputFlags.None, "auUse", "use"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
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
    static { this.ɵfac = function UseMultiDirective_Factory(t) { return new (t || UseMultiDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseMultiDirective, selectors: [["", "auUseMulti", ""]], inputs: { useMulti: [i0.ɵɵInputFlags.None, "auUseMulti", "useMulti"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UseMultiDirective, [{
        type: Directive,
        args: [{
                standalone: true,
                selector: '[auUseMulti]',
            }]
    }], null, { useMulti: [{
            type: Input,
            args: ['auUseMulti']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRTlJLGNBQWMsZ0NBQWdDLENBQUM7QUFFL0M7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxTQUErQixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQ3JGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXJDLElBQUksUUFBcUQsQ0FBQztJQUMxRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUVqQyxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNMLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRixDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QyxPQUFPO1lBQ1IsQ0FBQztZQUNELG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUM1QixxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNwQyxlQUFlLENBQUMsR0FBRyxFQUFFO29CQUNwQixvQkFBb0IsR0FBRyxLQUFLLENBQUM7b0JBQzdCLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBRUosU0FBUyx3QkFBd0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXZELFNBQVMsTUFBTSxDQUFDLFlBQWtDLEVBQUUsU0FBYTtRQUNoRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxLQUFLLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUN6QixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLGFBQWEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQUVELGFBQWEsRUFBRSxDQUFDO0lBQ2hCLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQUlmLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRWxELGtCQUFrQjtJQUNsQixXQUFXO1FBQ1YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs2RUFYVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTzs7QUFpQmYsTUFBTSxPQUFPLGlCQUFpQjtJQUlwQixhQUFhLEdBQUcsbUJBQW1CLEVBQTRCLENBQUM7SUFFekUsa0JBQWtCO0lBQ2xCLFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7a0ZBVFcsaUJBQWlCO29FQUFqQixpQkFBaUI7O2lGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsY0FBYzthQUN4QjtnQkFHQSxRQUFRO2tCQURQLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtEaXJlY3RpdmUgYXMgQWdub3NVSURpcmVjdGl2ZSwgRGlyZWN0aXZlQW5kUGFyYW0sIERpcmVjdGl2ZXNBbmRPcHRQYXJhbX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHttdWx0aURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcbmltcG9ydCB7aXNQbGF0Zm9ybVNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgUExBVEZPUk1fSUQsIGFmdGVyTmV4dFJlbmRlciwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS91dGlscy9kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFNldCB1cCBhbiBhZ25vcy11aSBkaXJlY3RpdmUgYXMgYW4gYW5ndWxhciBob3N0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0gZGlyZWN0aXZlIC0gdGhlIGRpcmVjdGl2ZVxuICogQHBhcmFtIHBhcmFtcyAtIHRoZSBwYXJhbXMgdG8gcGFzcyB0byB0aGUgZGlyZWN0aXZlXG4gKiBAcmV0dXJucyB0aGUgdXBkYXRlIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgZGlyZWN0aXZlIG9yIHBhcmFtc1xuICovXG5leHBvcnQgY29uc3QgdXNlRGlyZWN0aXZlRm9ySG9zdCA9IDxUPihkaXJlY3RpdmU/OiBBZ25vc1VJRGlyZWN0aXZlPFQ+LCBwYXJhbXM/OiBUKSA9PiB7XG5cdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0Y29uc3QgcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXHRjb25zdCBwbGF0Zm9ybSA9IGluamVjdChQTEFURk9STV9JRCk7XG5cblx0bGV0IGluc3RhbmNlOiB1bmRlZmluZWQgfCBSZXR1cm5UeXBlPEFnbm9zVUlEaXJlY3RpdmU8VD4+O1xuXHRsZXQgcGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblxuXHRjb25zdCBjYWxsRGlyZWN0aXZlID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybSlcblx0XHQ/ICgpID0+IHtcblx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXHRcdFx0fVxuXHRcdDogKCkgPT4ge1xuXHRcdFx0XHRpZiAocGxhbm5lZENhbGxEaXJlY3RpdmUgfHwgIWRpcmVjdGl2ZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGFubmVkQ2FsbERpcmVjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGFmdGVyTmV4dFJlbmRlcigoKSA9PiB7XG5cdFx0XHRcdFx0XHRwbGFubmVkQ2FsbERpcmVjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0ZnVuY3Rpb24gZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCkge1xuXHRcdGNvbnN0IG9sZEluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0ZGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuXHRcdG9sZEluc3RhbmNlPy5kZXN0cm95Py4oKTtcblx0fVxuXG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKTtcblxuXHRmdW5jdGlvbiB1cGRhdGUobmV3RGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgbmV3UGFyYW1zPzogVCkge1xuXHRcdGlmIChuZXdEaXJlY3RpdmUgIT09IGRpcmVjdGl2ZSkge1xuXHRcdFx0dm9pZCBkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHRcdGRpcmVjdGl2ZSA9IG5ld0RpcmVjdGl2ZTtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGNhbGxEaXJlY3RpdmUoKTtcblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGluc3RhbmNlPy51cGRhdGU/LihwYXJhbXMgYXMgVCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsbERpcmVjdGl2ZSgpO1xuXHRyZXR1cm4ge3VwZGF0ZX07XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCdhdVVzZScpXG5cdHVzZTogQWdub3NVSURpcmVjdGl2ZSB8IERpcmVjdGl2ZUFuZFBhcmFtPFQ+IHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5ICN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PFQ+KCk7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGNvbnN0IHVzZSA9IHRoaXMudXNlO1xuXHRcdGNvbnN0IFtkaXJlY3RpdmUsIHBhcmFtXSA9IEFycmF5LmlzQXJyYXkodXNlKSA/IHVzZSA6IFt1c2UgYXMgYW55XTtcblx0XHR0aGlzLiN1c2VEaXJlY3RpdmUudXBkYXRlKGRpcmVjdGl2ZSwgcGFyYW0pO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRzZWxlY3RvcjogJ1thdVVzZU11bHRpXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZU11bHRpRGlyZWN0aXZlPFQgZXh0ZW5kcyBhbnlbXT4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoJ2F1VXNlTXVsdGknKVxuXHR1c2VNdWx0aTogRGlyZWN0aXZlc0FuZE9wdFBhcmFtPFQ+O1xuXG5cdHJlYWRvbmx5ICN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PERpcmVjdGl2ZXNBbmRPcHRQYXJhbTxUPj4oKTtcblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy4jdXNlRGlyZWN0aXZlLnVwZGF0ZShtdWx0aURpcmVjdGl2ZSwgdGhpcy51c2VNdWx0aSk7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
