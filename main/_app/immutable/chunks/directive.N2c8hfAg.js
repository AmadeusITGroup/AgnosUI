const U=`import { multiDirective } from '@agnos-ui/core/utils/directive';
import { isPlatformServer } from '@angular/common';
import { DestroyRef, Directive, ElementRef, Injector, Input, PLATFORM_ID, afterNextRender, inject, runInInjectionContext } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
/**
 * A utility function to manage the lifecycle of a directive for a host element.
 *
 * This function handles the creation, updating, and destruction of a directive instance
 * associated with a host element. It ensures that the directive is called appropriately
 * based on the platform (server or client) and manages the directive's lifecycle within
 * the Angular injection context.
 *
 * @template T - The type of parameters that the directive accepts.
 *
 * @param [directive] - The directive to be applied to the host element.
 * @param [params] - The parameters to be passed to the directive.
 *
 * @returns An object containing an \`update\` function to update the directive and its parameters.
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
/**
 * A directive that allows the use of another directive with optional parameters.
 *
 * @template T - The type of the parameter that can be passed to the directive.
 *
 * @remarks
 * This directive uses a private instance of {@link useDirectiveForHost} to manage the directive and its parameter.
 */
export class UseDirective {
    #useDirective = useDirectiveForHost();
    /** @internal */
    ngOnChanges() {
        const use = this.use;
        const [directive, param] = Array.isArray(use) ? use : [use];
        this.#useDirective.update(directive, param);
    }
    static { this.ɵfac = function UseDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UseDirective)(); }; }
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
/**
 * A directive that allows the use of multiple directives on a host element.
 *
 * @template T - A tuple type representing the directives and their optional parameters.
 */
export class UseMultiDirective {
    #useDirective = useDirectiveForHost();
    /** @internal */
    ngOnChanges() {
        this.#useDirective.update(multiDirective, this.useMulti);
    }
    static { this.ɵfac = function UseMultiDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UseMultiDirective)(); }; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRTlJLGNBQWMsZ0NBQWdDLENBQUM7QUFFL0M7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxDQUFJLFNBQStCLEVBQUUsTUFBVSxFQUFFLEVBQUU7SUFDckYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsSUFBSSxRQUFxRCxDQUFDO0lBQzFELElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRWpDLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMvQyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ0wsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNGLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDTCxJQUFJLG9CQUFvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDUixDQUFDO1lBQ0Qsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztvQkFDN0IsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFFSixTQUFTLHdCQUF3QjtRQUNoQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDN0IsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsU0FBUyxNQUFNLENBQUMsWUFBa0MsRUFBRSxTQUFhO1FBQ2hFLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQzthQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0lBRUQsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFLSCxNQUFNLE9BQU8sWUFBWTtJQUlmLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRWxELGdCQUFnQjtJQUNoQixXQUFXO1FBQ1YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs2R0FYVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTzs7QUFhZjs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLGlCQUFpQjtJQU9wQixhQUFhLEdBQUcsbUJBQW1CLEVBQTRCLENBQUM7SUFFekUsZ0JBQWdCO0lBQ2hCLFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7a0hBWlcsaUJBQWlCO29FQUFqQixpQkFBaUI7O2lGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsY0FBYzthQUN4QjtnQkFNQSxRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RGlyZWN0aXZlIGFzIEFnbm9zVUlEaXJlY3RpdmUsIERpcmVjdGl2ZUFuZFBhcmFtLCBEaXJlY3RpdmVzQW5kT3B0UGFyYW19IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7bXVsdGlEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3V0aWxzL2RpcmVjdGl2ZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1TZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzdHJveVJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lELCBhZnRlck5leHRSZW5kZXIsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdG8gbWFuYWdlIHRoZSBsaWZlY3ljbGUgb2YgYSBkaXJlY3RpdmUgZm9yIGEgaG9zdCBlbGVtZW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY3JlYXRpb24sIHVwZGF0aW5nLCBhbmQgZGVzdHJ1Y3Rpb24gb2YgYSBkaXJlY3RpdmUgaW5zdGFuY2VcbiAqIGFzc29jaWF0ZWQgd2l0aCBhIGhvc3QgZWxlbWVudC4gSXQgZW5zdXJlcyB0aGF0IHRoZSBkaXJlY3RpdmUgaXMgY2FsbGVkIGFwcHJvcHJpYXRlbHlcbiAqIGJhc2VkIG9uIHRoZSBwbGF0Zm9ybSAoc2VydmVyIG9yIGNsaWVudCkgYW5kIG1hbmFnZXMgdGhlIGRpcmVjdGl2ZSdzIGxpZmVjeWNsZSB3aXRoaW5cbiAqIHRoZSBBbmd1bGFyIGluamVjdGlvbiBjb250ZXh0LlxuICpcbiAqIEB0ZW1wbGF0ZSBUIC0gVGhlIHR5cGUgb2YgcGFyYW1ldGVycyB0aGF0IHRoZSBkaXJlY3RpdmUgYWNjZXB0cy5cbiAqXG4gKiBAcGFyYW0gW2RpcmVjdGl2ZV0gLSBUaGUgZGlyZWN0aXZlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAqIEBwYXJhbSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgZGlyZWN0aXZlLlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFuIGB1cGRhdGVgIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGlyZWN0aXZlIGFuZCBpdHMgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZURpcmVjdGl2ZUZvckhvc3QgPSA8VD4oZGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgcGFyYW1zPzogVCkgPT4ge1xuXHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblx0Y29uc3QgcGxhdGZvcm0gPSBpbmplY3QoUExBVEZPUk1fSUQpO1xuXG5cdGxldCBpbnN0YW5jZTogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTxBZ25vc1VJRGlyZWN0aXZlPFQ+Pjtcblx0bGV0IHBsYW5uZWRDYWxsRGlyZWN0aXZlID0gZmFsc2U7XG5cblx0Y29uc3QgY2FsbERpcmVjdGl2ZSA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm0pXG5cdFx0PyAoKSA9PiB7XG5cdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdH1cblx0XHQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKHBsYW5uZWRDYWxsRGlyZWN0aXZlIHx8ICFkaXJlY3RpdmUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0XHRhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdGZ1bmN0aW9uIGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBvbGRJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHRcdGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdGRpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcblx0XHRvbGRJbnN0YW5jZT8uZGVzdHJveT8uKCk7XG5cdH1cblxuXHRpbmplY3QoRGVzdHJveVJlZikub25EZXN0cm95KGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlKG5ld0RpcmVjdGl2ZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIG5ld1BhcmFtcz86IFQpIHtcblx0XHRpZiAobmV3RGlyZWN0aXZlICE9PSBkaXJlY3RpdmUpIHtcblx0XHRcdHZvaWQgZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHRkaXJlY3RpdmUgPSBuZXdEaXJlY3RpdmU7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRjYWxsRGlyZWN0aXZlKCk7XG5cdFx0fSBlbHNlIGlmIChuZXdQYXJhbXMgIT0gcGFyYW1zKSB7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGxEaXJlY3RpdmUoKTtcblx0cmV0dXJuIHt1cGRhdGV9O1xufTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFsbG93cyB0aGUgdXNlIG9mIGFub3RoZXIgZGlyZWN0aXZlIHdpdGggb3B0aW9uYWwgcGFyYW1ldGVycy5cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIFRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXIgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBkaXJlY3RpdmUuXG4gKlxuICogQHJlbWFya3NcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSBwcml2YXRlIGluc3RhbmNlIG9mIHtAbGluayB1c2VEaXJlY3RpdmVGb3JIb3N0fSB0byBtYW5hZ2UgdGhlIGRpcmVjdGl2ZSBhbmQgaXRzIHBhcmFtZXRlci5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHNlbGVjdG9yOiAnW2F1VXNlXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmUgfCBEaXJlY3RpdmVBbmRQYXJhbTxUPiB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSAjdXNlRGlyZWN0aXZlID0gdXNlRGlyZWN0aXZlRm9ySG9zdDxUPigpO1xuXG5cdC8qKiBAaW50ZXJuYWwgKi9cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0Y29uc3QgdXNlID0gdGhpcy51c2U7XG5cdFx0Y29uc3QgW2RpcmVjdGl2ZSwgcGFyYW1dID0gQXJyYXkuaXNBcnJheSh1c2UpID8gdXNlIDogW3VzZSBhcyBhbnldO1xuXHRcdHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUoZGlyZWN0aXZlLCBwYXJhbSk7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFsbG93cyB0aGUgdXNlIG9mIG11bHRpcGxlIGRpcmVjdGl2ZXMgb24gYSBob3N0IGVsZW1lbnQuXG4gKlxuICogQHRlbXBsYXRlIFQgLSBBIHR1cGxlIHR5cGUgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3RpdmVzIGFuZCB0aGVpciBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuICovXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VNdWx0aV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VNdWx0aURpcmVjdGl2ZTxUIGV4dGVuZHMgYW55W10+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0LyoqXG5cdCAqIEFuIGlucHV0IHByb3BlcnR5IHRoYXQgdGFrZXMgYSB0dXBsZSBvZiBkaXJlY3RpdmVzIGFuZCB0aGVpciBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VXNlTXVsdGknLCByZXF1aXJlZDogdHJ1ZX0pXG5cdHVzZU11bHRpITogRGlyZWN0aXZlc0FuZE9wdFBhcmFtPFQ+O1xuXG5cdHJlYWRvbmx5ICN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PERpcmVjdGl2ZXNBbmRPcHRQYXJhbTxUPj4oKTtcblxuXHQvKiogQGludGVybmFsICovXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUobXVsdGlEaXJlY3RpdmUsIHRoaXMudXNlTXVsdGkpO1xuXHR9XG59XG4iXX0=`;export{U as default};
