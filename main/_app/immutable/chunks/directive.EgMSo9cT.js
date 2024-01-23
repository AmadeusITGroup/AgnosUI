const U=`import { DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQyxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLDRGQUE0RjtBQUM1Riw2RkFBNkY7QUFFN0Y7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxTQUErQixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQ3JGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixJQUFJLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO0lBRTNELEtBQUssVUFBVSx3QkFBd0I7UUFDdEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLFdBQVcsRUFBRSxPQUFPLEVBQUU7WUFDekIsTUFBTSxDQUFDLENBQUM7WUFDUixXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxZQUFrQyxFQUFFLFNBQWE7UUFDdEUsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQy9CLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxDQUFDO2dCQUNSLDBEQUEwRDtnQkFDMUQsSUFBSSxTQUFTLEtBQUssWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUM1QyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7aUJBQ3JEO2FBQ0Q7U0FDRDthQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDO1lBQ1IsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVELE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQU94QixhQUFhLEdBQUcsbUJBQW1CLEVBQUssQ0FBQztJQUV6QyxrQkFBa0I7SUFDbEIsV0FBVztRQUNWLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs2RUFaVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTztZQUlkLE1BQU07a0JBREwsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0RpcmVjdGl2ZSBhcyBBZ25vc1VJRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzdHJveVJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLy8gQWxsIGNhbGxzIG9mIHRoZSBkaXJlY3RpdmUgaW4gdGhpcyBjbGFzcyBhcmUgZG9uZSBhc3luY2hyb25vdXNseSAod2l0aCBhd2FpdCAwKVxuLy8gaW4gb3JkZXIgdG8gYXZvaWQgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxuLy8gb3IgdGhlIGNvcnJlc3BvbmRpbmcgaXNzdWUgd2l0aCBzaWduYWxzIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy81MDMyMClcbi8vIFRoaXMgaXMgcmVsZXZhbnQgZXNwZWNpYWxseSBpZiBjYWxsaW5nIHRoZSBkaXJlY3RpdmUgY2hhbmdlcyB2YXJpYWJsZXMgdXNlZCBpbiBhIHRlbXBsYXRlLlxuXG4vKipcbiAqIFNldCB1cCBhbiBhZ25vcy11aSBkaXJlY3RpdmUgYXMgYW4gYW5ndWxhciBob3N0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0gZGlyZWN0aXZlIC0gdGhlIGRpcmVjdGl2ZVxuICogQHBhcmFtIHBhcmFtcyAtIHRoZSBwYXJhbXMgdG8gcGFzcyB0byB0aGUgZGlyZWN0aXZlXG4gKiBAcmV0dXJucyB0aGUgdXBkYXRlIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgZGlyZWN0aXZlIG9yIHBhcmFtc1xuICovXG5leHBvcnQgY29uc3QgdXNlRGlyZWN0aXZlRm9ySG9zdCA9IDxUPihkaXJlY3RpdmU/OiBBZ25vc1VJRGlyZWN0aXZlPFQ+LCBwYXJhbXM/OiBUKSA9PiB7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblxuXHRsZXQgaW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBvbGRJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHRcdGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdGRpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcblx0XHRpZiAob2xkSW5zdGFuY2U/LmRlc3Ryb3kpIHtcblx0XHRcdGF3YWl0IDA7XG5cdFx0XHRvbGRJbnN0YW5jZS5kZXN0cm95Py4oKTtcblx0XHR9XG5cdH1cblxuXHRpbmplY3QoRGVzdHJveVJlZikub25EZXN0cm95KGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gdXBkYXRlKG5ld0RpcmVjdGl2ZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIG5ld1BhcmFtcz86IFQpIHtcblx0XHRpZiAobmV3RGlyZWN0aXZlICE9PSBkaXJlY3RpdmUpIHtcblx0XHRcdHZvaWQgZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHRkaXJlY3RpdmUgPSBuZXdEaXJlY3RpdmU7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpZiAobmV3RGlyZWN0aXZlKSB7XG5cdFx0XHRcdGF3YWl0IDA7XG5cdFx0XHRcdC8vIGNoZWNrcyB0aGF0IHRoZSBkaXJlY3RpdmUgZGlkIG5vdCBjaGFuZ2Ugd2hpbGUgd2FpdGluZzpcblx0XHRcdFx0aWYgKGRpcmVjdGl2ZSA9PT0gbmV3RGlyZWN0aXZlICYmICFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlKHJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMgYXMgVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGF3YWl0IDA7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7dXBkYXRlfTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRzZWxlY3RvcjogJ1thdVVzZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoJ2F1VXNlJylcblx0dXNlOiBBZ25vc1VJRGlyZWN0aXZlPFQ+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVVc2VQYXJhbXMnKVxuXHRwYXJhbXM6IFQgfCB1bmRlZmluZWQ7XG5cblx0I3VzZURpcmVjdGl2ZSA9IHVzZURpcmVjdGl2ZUZvckhvc3Q8VD4oKTtcblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dm9pZCB0aGlzLiN1c2VEaXJlY3RpdmUudXBkYXRlKHRoaXMudXNlLCB0aGlzLnBhcmFtcyk7XG5cdH1cbn1cbiJdfQ==`;export{U as default};
