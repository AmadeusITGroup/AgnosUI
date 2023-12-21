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
            destroyDirectiveInstance();
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
        this.#useDirective.update(this.use, this.params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQyxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLDRGQUE0RjtBQUM1Riw2RkFBNkY7QUFFN0YsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBSSxHQUF5QixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQy9FLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQVcsQ0FBQyxDQUFDO0lBRXJELEtBQUssVUFBVSx3QkFBd0I7UUFDdEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQixJQUFJLFdBQVcsRUFBRSxPQUFPLEVBQUU7WUFDekIsTUFBTSxDQUFDLENBQUM7WUFDUixXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUE0QixFQUFFLFNBQWE7UUFDaEUsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ25CLHdCQUF3QixFQUFFLENBQUM7WUFDM0IsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNiLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLENBQUM7Z0JBQ1IsMERBQTBEO2dCQUMxRCxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2hDLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFXLENBQUMsQ0FBQztpQkFDL0M7YUFDRDtTQUNEO2FBQU0sSUFBSSxTQUFTLElBQUksTUFBTSxFQUFFO1lBQy9CLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsTUFBTSxDQUFDLENBQUM7WUFDUixRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBVyxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRUQsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQU1GLE1BQU0sT0FBTyxZQUFZO0lBT3hCLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRXpDLFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOzZFQVhXLFlBQVk7b0VBQVosWUFBWTs7aUZBQVosWUFBWTtjQUp4QixTQUFTO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2FBQ25CO2dCQUdBLEdBQUc7a0JBREYsS0FBSzttQkFBQyxPQUFPO1lBSWQsTUFBTTtrQkFETCxLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RGlyZWN0aXZlIGFzIEFnbm9zVUlEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS91dGlscy9kaXJlY3RpdmUnO1xuXG4vLyBBbGwgY2FsbHMgb2YgdGhlIGRpcmVjdGl2ZSBpbiB0aGlzIGNsYXNzIGFyZSBkb25lIGFzeW5jaHJvbm91c2x5ICh3aXRoIGF3YWl0IDApXG4vLyBpbiBvcmRlciB0byBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG4vLyBvciB0aGUgY29ycmVzcG9uZGluZyBpc3N1ZSB3aXRoIHNpZ25hbHMgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzUwMzIwKVxuLy8gVGhpcyBpcyByZWxldmFudCBlc3BlY2lhbGx5IGlmIGNhbGxpbmcgdGhlIGRpcmVjdGl2ZSBjaGFuZ2VzIHZhcmlhYmxlcyB1c2VkIGluIGEgdGVtcGxhdGUuXG5cbmV4cG9ydCBjb25zdCB1c2VEaXJlY3RpdmVGb3JIb3N0ID0gPFQ+KHVzZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIHBhcmFtcz86IFQpID0+IHtcblx0Y29uc3QgcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXG5cdGxldCBpbnN0YW5jZSA9IHVzZT8uKHJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMgYXMgVCk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCkge1xuXHRcdGNvbnN0IG9sZEluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0dXNlID0gdW5kZWZpbmVkO1xuXHRcdGlmIChvbGRJbnN0YW5jZT8uZGVzdHJveSkge1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdG9sZEluc3RhbmNlLmRlc3Ryb3k/LigpO1xuXHRcdH1cblx0fVxuXG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKTtcblxuXHRhc3luYyBmdW5jdGlvbiB1cGRhdGUobmV3VXNlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgbmV3UGFyYW1zPzogVCkge1xuXHRcdGlmIChuZXdVc2UgIT09IHVzZSkge1xuXHRcdFx0ZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHR1c2UgPSBuZXdVc2U7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpZiAobmV3VXNlKSB7XG5cdFx0XHRcdGF3YWl0IDA7XG5cdFx0XHRcdC8vIGNoZWNrcyB0aGF0IHRoZSBkaXJlY3RpdmUgZGlkIG5vdCBjaGFuZ2Ugd2hpbGUgd2FpdGluZzpcblx0XHRcdFx0aWYgKHVzZSA9PT0gbmV3VXNlICYmICFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdGluc3RhbmNlID0gdXNlKHJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMgYXMgVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGF3YWl0IDA7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7dXBkYXRlfTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRzZWxlY3RvcjogJ1thdVVzZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoJ2F1VXNlJylcblx0dXNlOiBBZ25vc1VJRGlyZWN0aXZlPFQ+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVVc2VQYXJhbXMnKVxuXHRwYXJhbXM6IFQgfCB1bmRlZmluZWQ7XG5cblx0I3VzZURpcmVjdGl2ZSA9IHVzZURpcmVjdGl2ZUZvckhvc3Q8VD4oKTtcblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLiN1c2VEaXJlY3RpdmUudXBkYXRlKHRoaXMudXNlLCB0aGlzLnBhcmFtcyk7XG5cdH1cbn1cbiJdfQ==`;export{F as default};
