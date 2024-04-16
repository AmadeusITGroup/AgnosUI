const U=`import { isPlatformServer } from '@angular/common';
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
        this.#useDirective.update(this.use, this.params);
    }
    static { this.ɵfac = function UseDirective_Factory(t) { return new (t || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: [i0.ɵɵInputFlags.None, "auUse", "use"], params: [i0.ɵɵInputFlags.None, "auUseParams", "params"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
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
        }], params: [{
            type: Input,
            args: ['auUseParams']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFOUksY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxDQUFJLFNBQStCLEVBQUUsTUFBVSxFQUFFLEVBQUU7SUFDckYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsSUFBSSxRQUFxRCxDQUFDO0lBQzFELElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRWpDLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMvQyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ0wsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNGLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDTCxJQUFJLG9CQUFvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDUixDQUFDO1lBQ0Qsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztvQkFDN0IsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFFSixTQUFTLHdCQUF3QjtRQUNoQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDN0IsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsU0FBUyxNQUFNLENBQUMsWUFBa0MsRUFBRSxTQUFhO1FBQ2hFLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQzthQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0lBRUQsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQU1GLE1BQU0sT0FBTyxZQUFZO0lBT2YsYUFBYSxHQUFHLG1CQUFtQixFQUFLLENBQUM7SUFFbEQsa0JBQWtCO0lBQ2xCLFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOzZFQVpXLFlBQVk7b0VBQVosWUFBWTs7aUZBQVosWUFBWTtjQUp4QixTQUFTO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2FBQ25CO2dCQUdBLEdBQUc7a0JBREYsS0FBSzttQkFBQyxPQUFPO1lBSWQsTUFBTTtrQkFETCxLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RGlyZWN0aXZlIGFzIEFnbm9zVUlEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7aXNQbGF0Zm9ybVNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgUExBVEZPUk1fSUQsIGFmdGVyTmV4dFJlbmRlciwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS91dGlscy9kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFNldCB1cCBhbiBhZ25vcy11aSBkaXJlY3RpdmUgYXMgYW4gYW5ndWxhciBob3N0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0gZGlyZWN0aXZlIC0gdGhlIGRpcmVjdGl2ZVxuICogQHBhcmFtIHBhcmFtcyAtIHRoZSBwYXJhbXMgdG8gcGFzcyB0byB0aGUgZGlyZWN0aXZlXG4gKiBAcmV0dXJucyB0aGUgdXBkYXRlIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgZGlyZWN0aXZlIG9yIHBhcmFtc1xuICovXG5leHBvcnQgY29uc3QgdXNlRGlyZWN0aXZlRm9ySG9zdCA9IDxUPihkaXJlY3RpdmU/OiBBZ25vc1VJRGlyZWN0aXZlPFQ+LCBwYXJhbXM/OiBUKSA9PiB7XG5cdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0Y29uc3QgcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXHRjb25zdCBwbGF0Zm9ybSA9IGluamVjdChQTEFURk9STV9JRCk7XG5cblx0bGV0IGluc3RhbmNlOiB1bmRlZmluZWQgfCBSZXR1cm5UeXBlPEFnbm9zVUlEaXJlY3RpdmU8VD4+O1xuXHRsZXQgcGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblxuXHRjb25zdCBjYWxsRGlyZWN0aXZlID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybSlcblx0XHQ/ICgpID0+IHtcblx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXHRcdFx0fVxuXHRcdDogKCkgPT4ge1xuXHRcdFx0XHRpZiAocGxhbm5lZENhbGxEaXJlY3RpdmUgfHwgIWRpcmVjdGl2ZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGFubmVkQ2FsbERpcmVjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGFmdGVyTmV4dFJlbmRlcigoKSA9PiB7XG5cdFx0XHRcdFx0XHRwbGFubmVkQ2FsbERpcmVjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0ZnVuY3Rpb24gZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCkge1xuXHRcdGNvbnN0IG9sZEluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0ZGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuXHRcdG9sZEluc3RhbmNlPy5kZXN0cm95Py4oKTtcblx0fVxuXG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKTtcblxuXHRmdW5jdGlvbiB1cGRhdGUobmV3RGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgbmV3UGFyYW1zPzogVCkge1xuXHRcdGlmIChuZXdEaXJlY3RpdmUgIT09IGRpcmVjdGl2ZSkge1xuXHRcdFx0dm9pZCBkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHRcdGRpcmVjdGl2ZSA9IG5ld0RpcmVjdGl2ZTtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGNhbGxEaXJlY3RpdmUoKTtcblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGluc3RhbmNlPy51cGRhdGU/LihwYXJhbXMgYXMgVCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsbERpcmVjdGl2ZSgpO1xuXHRyZXR1cm4ge3VwZGF0ZX07XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCdhdVVzZScpXG5cdHVzZTogQWdub3NVSURpcmVjdGl2ZTxUPiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1VXNlUGFyYW1zJylcblx0cGFyYW1zOiBUIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5ICN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PFQ+KCk7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUodGhpcy51c2UsIHRoaXMucGFyYW1zKTtcblx0fVxufVxuIl19`;export{U as default};
