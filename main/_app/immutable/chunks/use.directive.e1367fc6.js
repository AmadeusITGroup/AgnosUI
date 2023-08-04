const Q=`import { Directive, ElementRef, inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class UseDirective {
    constructor() {
        this._ref = inject(ElementRef);
    }
    async ngOnChanges(changes) {
        if (this.use !== this._directive) {
            this._directiveInstance?.destroy?.();
            this._directiveInstance = undefined;
            const directive = this.use;
            this._directive = directive;
            if (directive) {
                // waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
                // in case calling the directive changes variables used in the template
                await Promise.resolve();
                // checks that the directive did not change while waiting:
                if (directive === this._directive && !this._directiveInstance) {
                    this._directiveInstance = directive(this._ref.nativeElement, this.params);
                }
            }
        }
        else if (changes['params']) {
            // waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
            // in case calling the directive changes variables used in the template
            await Promise.resolve();
            this._directiveInstance?.update?.(this.params);
        }
    }
    ngOnDestroy() {
        this._directiveInstance?.destroy?.();
        this._directiveInstance = undefined;
        this._directive = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: UseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: UseDirective, isStandalone: true, selector: "[auUse]", inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: UseDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[auUse]',
                }]
        }], propDecorators: { use: [{
                type: Input,
                args: ['auUse']
            }], params: [{
                type: Input,
                args: ['auUseParams']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3RyYW5zaXRpb24vdXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU9uRSxNQUFNLE9BQU8sWUFBWTtJQUp6QjtRQVdTLFNBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FpQ2xDO0lBNUJBLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksU0FBUyxFQUFFO2dCQUNkLGlGQUFpRjtnQkFDakYsdUVBQXVFO2dCQUN2RSxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsMERBQTBEO2dCQUMxRCxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFXLENBQUMsQ0FBQztpQkFDL0U7YUFDRDtTQUNEO2FBQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsaUZBQWlGO1lBQ2pGLHVFQUF1RTtZQUN2RSxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7OEdBdkNXLFlBQVk7a0dBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLFNBQVM7aUJBQ25COzhCQUdBLEdBQUc7c0JBREYsS0FBSzt1QkFBQyxPQUFPO2dCQUlkLE1BQU07c0JBREwsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtEaXJlY3RpdmUgYXMgQWdub3NVSURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0c2VsZWN0b3I6ICdbYXVVc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXHRASW5wdXQoJ2F1VXNlJylcblx0dXNlOiBBZ25vc1VJRGlyZWN0aXZlPFQ+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVVc2VQYXJhbXMnKVxuXHRwYXJhbXM6IFQgfCB1bmRlZmluZWQ7XG5cblx0cHJpdmF0ZSBfcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXG5cdHByaXZhdGUgX2RpcmVjdGl2ZTogQWdub3NVSURpcmVjdGl2ZTxUPiB8IHVuZGVmaW5lZDtcblx0cHJpdmF0ZSBfZGlyZWN0aXZlSW5zdGFuY2U/OiBSZXR1cm5UeXBlPEFnbm9zVUlEaXJlY3RpdmU8VD4+O1xuXG5cdGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy51c2UgIT09IHRoaXMuX2RpcmVjdGl2ZSkge1xuXHRcdFx0dGhpcy5fZGlyZWN0aXZlSW5zdGFuY2U/LmRlc3Ryb3k/LigpO1xuXHRcdFx0dGhpcy5fZGlyZWN0aXZlSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0XHRjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnVzZTtcblx0XHRcdHRoaXMuX2RpcmVjdGl2ZSA9IGRpcmVjdGl2ZTtcblx0XHRcdGlmIChkaXJlY3RpdmUpIHtcblx0XHRcdFx0Ly8gd2FpdGluZyBoZXJlIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG5cdFx0XHRcdC8vIGluIGNhc2UgY2FsbGluZyB0aGUgZGlyZWN0aXZlIGNoYW5nZXMgdmFyaWFibGVzIHVzZWQgaW4gdGhlIHRlbXBsYXRlXG5cdFx0XHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0XHQvLyBjaGVja3MgdGhhdCB0aGUgZGlyZWN0aXZlIGRpZCBub3QgY2hhbmdlIHdoaWxlIHdhaXRpbmc6XG5cdFx0XHRcdGlmIChkaXJlY3RpdmUgPT09IHRoaXMuX2RpcmVjdGl2ZSAmJiAhdGhpcy5fZGlyZWN0aXZlSW5zdGFuY2UpIHtcblx0XHRcdFx0XHR0aGlzLl9kaXJlY3RpdmVJbnN0YW5jZSA9IGRpcmVjdGl2ZSh0aGlzLl9yZWYubmF0aXZlRWxlbWVudCwgdGhpcy5wYXJhbXMgYXMgVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoYW5nZXNbJ3BhcmFtcyddKSB7XG5cdFx0XHQvLyB3YWl0aW5nIGhlcmUgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3Jcblx0XHRcdC8vIGluIGNhc2UgY2FsbGluZyB0aGUgZGlyZWN0aXZlIGNoYW5nZXMgdmFyaWFibGVzIHVzZWQgaW4gdGhlIHRlbXBsYXRlXG5cdFx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdHRoaXMuX2RpcmVjdGl2ZUluc3RhbmNlPy51cGRhdGU/Lih0aGlzLnBhcmFtcyBhcyBUKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9kaXJlY3RpdmVJbnN0YW5jZT8uZGVzdHJveT8uKCk7XG5cdFx0dGhpcy5fZGlyZWN0aXZlSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fZGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=`;export{Q as default};
