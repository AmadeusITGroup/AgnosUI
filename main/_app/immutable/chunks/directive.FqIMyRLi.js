const U=`import { DestroyRef, Directive, ElementRef, Injector, Input, afterNextRender, inject, runInInjectionContext } from '@angular/core';
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
    let instance;
    let plannedCallDirective = false;
    const callDirective = () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUVqSSxjQUFjLGdDQUFnQyxDQUFDO0FBRS9DOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUksU0FBK0IsRUFBRSxNQUFVLEVBQUUsRUFBRTtJQUNyRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRS9CLElBQUksUUFBcUQsQ0FBQztJQUMxRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUVqQyxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hDLE9BQU87UUFDUixDQUFDO1FBQ0Qsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDcEMsZUFBZSxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFXLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsU0FBUyx3QkFBd0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXZELFNBQVMsTUFBTSxDQUFDLFlBQWtDLEVBQUUsU0FBYTtRQUNoRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxLQUFLLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUN6QixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLGFBQWEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQUVELGFBQWEsRUFBRSxDQUFDO0lBQ2hCLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQU94QixhQUFhLEdBQUcsbUJBQW1CLEVBQUssQ0FBQztJQUV6QyxrQkFBa0I7SUFDbEIsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7NkVBWlcsWUFBWTtvRUFBWixZQUFZOztpRkFBWixZQUFZO2NBSnhCLFNBQVM7ZUFBQztnQkFDVixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLFNBQVM7YUFDbkI7Z0JBR0EsR0FBRztrQkFERixLQUFLO21CQUFDLE9BQU87WUFJZCxNQUFNO2tCQURMLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtEaXJlY3RpdmUgYXMgQWdub3NVSURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc3Ryb3lSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBhZnRlck5leHRSZW5kZXIsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvdXRpbHMvZGlyZWN0aXZlJztcblxuLyoqXG4gKiBTZXQgdXAgYW4gYWdub3MtdWkgZGlyZWN0aXZlIGFzIGFuIGFuZ3VsYXIgaG9zdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIGRpcmVjdGl2ZSAtIHRoZSBkaXJlY3RpdmVcbiAqIEBwYXJhbSBwYXJhbXMgLSB0aGUgcGFyYW1zIHRvIHBhc3MgdG8gdGhlIGRpcmVjdGl2ZVxuICogQHJldHVybnMgdGhlIHVwZGF0ZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIGRpcmVjdGl2ZSBvciBwYXJhbXNcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZURpcmVjdGl2ZUZvckhvc3QgPSA8VD4oZGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgcGFyYW1zPzogVCkgPT4ge1xuXHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdGNvbnN0IHJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblxuXHRsZXQgaW5zdGFuY2U6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8QWdub3NVSURpcmVjdGl2ZTxUPj47XG5cdGxldCBwbGFubmVkQ2FsbERpcmVjdGl2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0IGNhbGxEaXJlY3RpdmUgPSAoKSA9PiB7XG5cdFx0aWYgKHBsYW5uZWRDYWxsRGlyZWN0aXZlIHx8ICFkaXJlY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSB0cnVlO1xuXHRcdHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4ge1xuXHRcdFx0YWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcblx0XHRcdFx0cGxhbm5lZENhbGxEaXJlY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0aW5zdGFuY2UgPSBkaXJlY3RpdmU/LihyZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zIGFzIFQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCkge1xuXHRcdGNvbnN0IG9sZEluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0ZGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuXHRcdG9sZEluc3RhbmNlPy5kZXN0cm95Py4oKTtcblx0fVxuXG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKTtcblxuXHRmdW5jdGlvbiB1cGRhdGUobmV3RGlyZWN0aXZlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgbmV3UGFyYW1zPzogVCkge1xuXHRcdGlmIChuZXdEaXJlY3RpdmUgIT09IGRpcmVjdGl2ZSkge1xuXHRcdFx0dm9pZCBkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHRcdGRpcmVjdGl2ZSA9IG5ld0RpcmVjdGl2ZTtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGNhbGxEaXJlY3RpdmUoKTtcblx0XHR9IGVsc2UgaWYgKG5ld1BhcmFtcyAhPSBwYXJhbXMpIHtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGluc3RhbmNlPy51cGRhdGU/LihwYXJhbXMgYXMgVCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsbERpcmVjdGl2ZSgpO1xuXHRyZXR1cm4ge3VwZGF0ZX07XG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCdhdVVzZScpXG5cdHVzZTogQWdub3NVSURpcmVjdGl2ZTxUPiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1VXNlUGFyYW1zJylcblx0cGFyYW1zOiBUIHwgdW5kZWZpbmVkO1xuXG5cdCN1c2VEaXJlY3RpdmUgPSB1c2VEaXJlY3RpdmVGb3JIb3N0PFQ+KCk7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUodGhpcy51c2UsIHRoaXMucGFyYW1zKTtcblx0fVxufVxuIl19`;export{U as default};
