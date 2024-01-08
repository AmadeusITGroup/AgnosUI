const F=`import { DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.
export const useDirectiveForHost = (use, params) => {
    const ref = inject(ElementRef);
    let instance = use?.(ref.nativeElement, params);
    async function destroyDirectiveInstance() {
        const oldInstance = instance;
        instance = undefined;
        use = undefined;
        if (oldInstance?.destroy) {
            await 0;
            oldInstance.destroy?.();
        }
    }
    inject(DestroyRef).onDestroy(destroyDirectiveInstance);
    async function update(newUse, newParams) {
        if (newUse !== use) {
            void destroyDirectiveInstance();
            use = newUse;
            params = newParams;
            if (newUse) {
                await 0;
                // checks that the directive did not change while waiting:
                if (use === newUse && !instance) {
                    instance = use(ref.nativeElement, params);
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
    ngOnChanges() {
        void this.#useDirective.update(this.use, this.params);
    }
    static { this.ɵfac = function UseDirective_Factory(t) { return new (t || UseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: UseDirective, selectors: [["", "auUse", ""]], inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQyxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLDRGQUE0RjtBQUM1Riw2RkFBNkY7QUFFN0YsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxHQUF5QixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQy9FLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO0lBRXJELEtBQUssVUFBVSx3QkFBd0I7UUFDdEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQixJQUFJLFdBQVcsRUFBRSxPQUFPLEVBQUU7WUFDekIsTUFBTSxDQUFDLENBQUM7WUFDUixXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUE0QixFQUFFLFNBQWE7UUFDaEUsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ25CLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2IsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUNuQixJQUFJLE1BQU0sRUFBRTtnQkFDWCxNQUFNLENBQUMsQ0FBQztnQkFDUiwwREFBMEQ7Z0JBQzFELElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDaEMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO2lCQUMvQzthQUNEO1NBQ0Q7YUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDL0IsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUNuQixNQUFNLENBQUMsQ0FBQztZQUNSLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRCxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBTUYsTUFBTSxPQUFPLFlBQVk7SUFPeEIsYUFBYSxHQUFHLG1CQUFtQixFQUFLLENBQUM7SUFFekMsV0FBVztRQUNWLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs2RUFYVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTztZQUlkLE1BQU07a0JBREwsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0RpcmVjdGl2ZSBhcyBBZ25vc1VJRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzdHJveVJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLy8gQWxsIGNhbGxzIG9mIHRoZSBkaXJlY3RpdmUgaW4gdGhpcyBjbGFzcyBhcmUgZG9uZSBhc3luY2hyb25vdXNseSAod2l0aCBhd2FpdCAwKVxuLy8gaW4gb3JkZXIgdG8gYXZvaWQgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxuLy8gb3IgdGhlIGNvcnJlc3BvbmRpbmcgaXNzdWUgd2l0aCBzaWduYWxzIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy81MDMyMClcbi8vIFRoaXMgaXMgcmVsZXZhbnQgZXNwZWNpYWxseSBpZiBjYWxsaW5nIHRoZSBkaXJlY3RpdmUgY2hhbmdlcyB2YXJpYWJsZXMgdXNlZCBpbiBhIHRlbXBsYXRlLlxuXG5leHBvcnQgY29uc3QgdXNlRGlyZWN0aXZlRm9ySG9zdCA9IDxUPih1c2U/OiBBZ25vc1VJRGlyZWN0aXZlPFQ+LCBwYXJhbXM/OiBUKSA9PiB7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblxuXHRsZXQgaW5zdGFuY2UgPSB1c2U/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBvbGRJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHRcdGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdHVzZSA9IHVuZGVmaW5lZDtcblx0XHRpZiAob2xkSW5zdGFuY2U/LmRlc3Ryb3kpIHtcblx0XHRcdGF3YWl0IDA7XG5cdFx0XHRvbGRJbnN0YW5jZS5kZXN0cm95Py4oKTtcblx0XHR9XG5cdH1cblxuXHRpbmplY3QoRGVzdHJveVJlZikub25EZXN0cm95KGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gdXBkYXRlKG5ld1VzZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIG5ld1BhcmFtcz86IFQpIHtcblx0XHRpZiAobmV3VXNlICE9PSB1c2UpIHtcblx0XHRcdHZvaWQgZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHR1c2UgPSBuZXdVc2U7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpZiAobmV3VXNlKSB7XG5cdFx0XHRcdGF3YWl0IDA7XG5cdFx0XHRcdC8vIGNoZWNrcyB0aGF0IHRoZSBkaXJlY3RpdmUgZGlkIG5vdCBjaGFuZ2Ugd2hpbGUgd2FpdGluZzpcblx0XHRcdFx0aWYgKHVzZSA9PT0gbmV3VXNlICYmICFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdGluc3RhbmNlID0gdXNlKHJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMgYXMgVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGF3YWl0IDA7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7dXBkYXRlfTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRzZWxlY3RvcjogJ1thdVVzZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoJ2F1VXNlJylcblx0dXNlOiBBZ25vc1VJRGlyZWN0aXZlPFQ+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVVc2VQYXJhbXMnKVxuXHRwYXJhbXM6IFQgfCB1bmRlZmluZWQ7XG5cblx0I3VzZURpcmVjdGl2ZSA9IHVzZURpcmVjdGl2ZUZvckhvc3Q8VD4oKTtcblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR2b2lkIHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUodGhpcy51c2UsIHRoaXMucGFyYW1zKTtcblx0fVxufVxuIl19`;export{F as default};
