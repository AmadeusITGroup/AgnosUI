const Q=`import { DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.
/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
 */
export const useDirectiveForHost = (directive, params) => {
    const ref = inject(ElementRef);
    let instance = directive?.(ref.nativeElement, params);
    async function destroyDirectiveInstance() {
        const oldInstance = instance;
        instance = undefined;
        directive = undefined;
        if (oldInstance?.destroy) {
            await 0;
            oldInstance.destroy?.();
        }
    }
    inject(DestroyRef).onDestroy(destroyDirectiveInstance);
    async function update(newDirective, newParams) {
        if (newDirective !== directive) {
            void destroyDirectiveInstance();
            directive = newDirective;
            params = newParams;
            if (newDirective) {
                await 0;
                // checks that the directive did not change while waiting:
                if (directive === newDirective && !instance) {
                    instance = directive(ref.nativeElement, params);
                }
            }
        }
        else if (newParams != params) {
            params = newParams;
            await 0;
            instance?.update?.(params);
        }
    }
    return { update };
};
export class UseDirective {
    #useDirective = useDirectiveForHost();
    /** @inheritdoc */
    ngOnChanges() {
        void this.#useDirective.update(this.use, this.params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQyxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLDRGQUE0RjtBQUM1Riw2RkFBNkY7QUFFN0Y7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxTQUErQixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQ3JGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixJQUFJLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO0lBRTNELEtBQUssVUFBVSx3QkFBd0I7UUFDdEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQztZQUNSLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXZELEtBQUssVUFBVSxNQUFNLENBQUMsWUFBa0MsRUFBRSxTQUFhO1FBQ3RFLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLENBQUM7Z0JBQ1IsMERBQTBEO2dCQUMxRCxJQUFJLFNBQVMsS0FBSyxZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDN0MsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDO1lBQ1IsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQU1GLE1BQU0sT0FBTyxZQUFZO0lBT3hCLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRXpDLGtCQUFrQjtJQUNsQixXQUFXO1FBQ1YsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOzZFQVpXLFlBQVk7b0VBQVosWUFBWTs7aUZBQVosWUFBWTtjQUp4QixTQUFTO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2FBQ25CO2dCQUdBLEdBQUc7a0JBREYsS0FBSzttQkFBQyxPQUFPO1lBSWQsTUFBTTtrQkFETCxLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RGlyZWN0aXZlIGFzIEFnbm9zVUlEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS91dGlscy9kaXJlY3RpdmUnO1xuXG4vLyBBbGwgY2FsbHMgb2YgdGhlIGRpcmVjdGl2ZSBpbiB0aGlzIGNsYXNzIGFyZSBkb25lIGFzeW5jaHJvbm91c2x5ICh3aXRoIGF3YWl0IDApXG4vLyBpbiBvcmRlciB0byBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG4vLyBvciB0aGUgY29ycmVzcG9uZGluZyBpc3N1ZSB3aXRoIHNpZ25hbHMgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzUwMzIwKVxuLy8gVGhpcyBpcyByZWxldmFudCBlc3BlY2lhbGx5IGlmIGNhbGxpbmcgdGhlIGRpcmVjdGl2ZSBjaGFuZ2VzIHZhcmlhYmxlcyB1c2VkIGluIGEgdGVtcGxhdGUuXG5cbi8qKlxuICogU2V0IHVwIGFuIGFnbm9zLXVpIGRpcmVjdGl2ZSBhcyBhbiBhbmd1bGFyIGhvc3QgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSBkaXJlY3RpdmUgLSB0aGUgZGlyZWN0aXZlXG4gKiBAcGFyYW0gcGFyYW1zIC0gdGhlIHBhcmFtcyB0byBwYXNzIHRvIHRoZSBkaXJlY3RpdmVcbiAqIEByZXR1cm5zIHRoZSB1cGRhdGUgZnVuY3Rpb24gdG8gY2hhbmdlIHRoZSBkaXJlY3RpdmUgb3IgcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VEaXJlY3RpdmVGb3JIb3N0ID0gPFQ+KGRpcmVjdGl2ZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIHBhcmFtcz86IFQpID0+IHtcblx0Y29uc3QgcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXG5cdGxldCBpbnN0YW5jZSA9IGRpcmVjdGl2ZT8uKHJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMgYXMgVCk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCkge1xuXHRcdGNvbnN0IG9sZEluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0ZGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuXHRcdGlmIChvbGRJbnN0YW5jZT8uZGVzdHJveSkge1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdG9sZEluc3RhbmNlLmRlc3Ryb3k/LigpO1xuXHRcdH1cblx0fVxuXG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKTtcblxuXHRhc3luYyBmdW5jdGlvbiB1cGRhdGUobmV3RGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgbmV3UGFyYW1zPzogVCkge1xuXHRcdGlmIChuZXdEaXJlY3RpdmUgIT09IGRpcmVjdGl2ZSkge1xuXHRcdFx0dm9pZCBkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHRcdGRpcmVjdGl2ZSA9IG5ld0RpcmVjdGl2ZTtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGlmIChuZXdEaXJlY3RpdmUpIHtcblx0XHRcdFx0YXdhaXQgMDtcblx0XHRcdFx0Ly8gY2hlY2tzIHRoYXQgdGhlIGRpcmVjdGl2ZSBkaWQgbm90IGNoYW5nZSB3aGlsZSB3YWl0aW5nOlxuXHRcdFx0XHRpZiAoZGlyZWN0aXZlID09PSBuZXdEaXJlY3RpdmUgJiYgIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmUocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobmV3UGFyYW1zICE9IHBhcmFtcykge1xuXHRcdFx0cGFyYW1zID0gbmV3UGFyYW1zO1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdGluc3RhbmNlPy51cGRhdGU/LihwYXJhbXMgYXMgVCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHt1cGRhdGV9O1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHNlbGVjdG9yOiAnW2F1VXNlXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmU8VD4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVVzZVBhcmFtcycpXG5cdHBhcmFtczogVCB8IHVuZGVmaW5lZDtcblxuXHQjdXNlRGlyZWN0aXZlID0gdXNlRGlyZWN0aXZlRm9ySG9zdDxUPigpO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR2b2lkIHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUodGhpcy51c2UsIHRoaXMucGFyYW1zKTtcblx0fVxufVxuIl19`;export{Q as default};
