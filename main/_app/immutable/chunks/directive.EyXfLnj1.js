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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFOUksY0FBYyxnQ0FBZ0MsQ0FBQztBQUUvQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxDQUFJLFNBQStCLEVBQUUsTUFBVSxFQUFFLEVBQUU7SUFDckYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsSUFBSSxRQUFxRCxDQUFDO0lBQzFELElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRWpDLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMvQyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ0wsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNGLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDTCxJQUFJLG9CQUFvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDUixDQUFDO1lBQ0Qsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztvQkFDN0IsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFFSixTQUFTLHdCQUF3QjtRQUNoQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDN0IsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdkQsU0FBUyxNQUFNLENBQUMsWUFBa0MsRUFBRSxTQUFhO1FBQ2hFLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQzthQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0lBRUQsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQU1GLE1BQU0sT0FBTyxZQUFZO0lBT3hCLGFBQWEsR0FBRyxtQkFBbUIsRUFBSyxDQUFDO0lBRXpDLGtCQUFrQjtJQUNsQixXQUFXO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs2RUFaVyxZQUFZO29FQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsU0FBUztlQUFDO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsU0FBUzthQUNuQjtnQkFHQSxHQUFHO2tCQURGLEtBQUs7bUJBQUMsT0FBTztZQUlkLE1BQU07a0JBREwsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0RpcmVjdGl2ZSBhcyBBZ25vc1VJRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQge2lzUGxhdGZvcm1TZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzdHJveVJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lELCBhZnRlck5leHRSZW5kZXIsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLyoqXG4gKiBTZXQgdXAgYW4gYWdub3MtdWkgZGlyZWN0aXZlIGFzIGFuIGFuZ3VsYXIgaG9zdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIGRpcmVjdGl2ZSAtIHRoZSBkaXJlY3RpdmVcbiAqIEBwYXJhbSBwYXJhbXMgLSB0aGUgcGFyYW1zIHRvIHBhc3MgdG8gdGhlIGRpcmVjdGl2ZVxuICogQHJldHVybnMgdGhlIHVwZGF0ZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIGRpcmVjdGl2ZSBvciBwYXJhbXNcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZURpcmVjdGl2ZUZvckhvc3QgPSA8VD4oZGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgcGFyYW1zPzogVCkgPT4ge1xuXHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblx0Y29uc3QgcGxhdGZvcm0gPSBpbmplY3QoUExBVEZPUk1fSUQpO1xuXG5cdGxldCBpbnN0YW5jZTogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTxBZ25vc1VJRGlyZWN0aXZlPFQ+Pjtcblx0bGV0IHBsYW5uZWRDYWxsRGlyZWN0aXZlID0gZmFsc2U7XG5cblx0Y29uc3QgY2FsbERpcmVjdGl2ZSA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm0pXG5cdFx0PyAoKSA9PiB7XG5cdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdH1cblx0XHQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKHBsYW5uZWRDYWxsRGlyZWN0aXZlIHx8ICFkaXJlY3RpdmUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0XHRhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGluc3RhbmNlID0gZGlyZWN0aXZlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdGZ1bmN0aW9uIGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBvbGRJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHRcdGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdGRpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcblx0XHRvbGRJbnN0YW5jZT8uZGVzdHJveT8uKCk7XG5cdH1cblxuXHRpbmplY3QoRGVzdHJveVJlZikub25EZXN0cm95KGRlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlKG5ld0RpcmVjdGl2ZT86IEFnbm9zVUlEaXJlY3RpdmU8VD4sIG5ld1BhcmFtcz86IFQpIHtcblx0XHRpZiAobmV3RGlyZWN0aXZlICE9PSBkaXJlY3RpdmUpIHtcblx0XHRcdHZvaWQgZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHRkaXJlY3RpdmUgPSBuZXdEaXJlY3RpdmU7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRjYWxsRGlyZWN0aXZlKCk7XG5cdFx0fSBlbHNlIGlmIChuZXdQYXJhbXMgIT0gcGFyYW1zKSB7XG5cdFx0XHRwYXJhbXMgPSBuZXdQYXJhbXM7XG5cdFx0XHRpbnN0YW5jZT8udXBkYXRlPy4ocGFyYW1zIGFzIFQpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGxEaXJlY3RpdmUoKTtcblx0cmV0dXJuIHt1cGRhdGV9O1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHNlbGVjdG9yOiAnW2F1VXNlXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmU8VD4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVVzZVBhcmFtcycpXG5cdHBhcmFtczogVCB8IHVuZGVmaW5lZDtcblxuXHQjdXNlRGlyZWN0aXZlID0gdXNlRGlyZWN0aXZlRm9ySG9zdDxUPigpO1xuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLiN1c2VEaXJlY3RpdmUudXBkYXRlKHRoaXMudXNlLCB0aGlzLnBhcmFtcyk7XG5cdH1cbn1cbiJdfQ==`;export{U as default};
