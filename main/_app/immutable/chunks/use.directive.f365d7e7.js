const Q=`import { Directive, ElementRef, inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.
export class UseDirective {
    #ref = inject(ElementRef);
    #directive;
    #directiveInstance;
    async #destroyDirectiveInstance() {
        const directiveInstance = this.#directiveInstance;
        this.#directiveInstance = undefined;
        if (directiveInstance?.destroy) {
            await 0;
            directiveInstance.destroy?.();
        }
    }
    async ngOnChanges(changes) {
        if (this.use !== this.#directive) {
            this.#destroyDirectiveInstance();
            const directive = this.use;
            this.#directive = directive;
            if (directive) {
                await 0;
                // checks that the directive did not change while waiting:
                if (directive === this.#directive && !this.#directiveInstance) {
                    this.#directiveInstance = directive(this.#ref.nativeElement, this.params);
                }
            }
        }
        else if (changes['params']) {
            await 0;
            this.#directiveInstance?.update?.(this.params);
        }
    }
    ngOnDestroy() {
        this.#destroyDirectiveInstance();
        this.#directive = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: UseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.7", type: UseDirective, isStandalone: true, selector: "[auUse]", inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: UseDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRsZXNzL3NyYy9saWIvdXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUduRSxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLDRGQUE0RjtBQUM1Riw2RkFBNkY7QUFNN0YsTUFBTSxPQUFPLFlBQVk7SUFPeEIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUxQixVQUFVLENBQWtDO0lBQzVDLGtCQUFrQixDQUFtQztJQUVyRCxLQUFLLENBQUMseUJBQXlCO1FBQzlCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsSUFBSSxpQkFBaUIsRUFBRSxPQUFPLEVBQUU7WUFDL0IsTUFBTSxDQUFDLENBQUM7WUFDUixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLFNBQVMsRUFBRTtnQkFDZCxNQUFNLENBQUMsQ0FBQztnQkFDUiwwREFBMEQ7Z0JBQzFELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQzlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQVcsQ0FBQyxDQUFDO2lCQUMvRTthQUNEO1NBQ0Q7YUFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixNQUFNLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBVyxDQUFDLENBQUM7U0FDcEQ7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7OEdBMUNXLFlBQVk7a0dBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLFNBQVM7aUJBQ25COzhCQUdBLEdBQUc7c0JBREYsS0FBSzt1QkFBQyxPQUFPO2dCQUlkLE1BQU07c0JBREwsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtEaXJlY3RpdmUgYXMgQWdub3NVSURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuXG4vLyBBbGwgY2FsbHMgb2YgdGhlIGRpcmVjdGl2ZSBpbiB0aGlzIGNsYXNzIGFyZSBkb25lIGFzeW5jaHJvbm91c2x5ICh3aXRoIGF3YWl0IDApXG4vLyBpbiBvcmRlciB0byBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG4vLyBvciB0aGUgY29ycmVzcG9uZGluZyBpc3N1ZSB3aXRoIHNpZ25hbHMgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzUwMzIwKVxuLy8gVGhpcyBpcyByZWxldmFudCBlc3BlY2lhbGx5IGlmIGNhbGxpbmcgdGhlIGRpcmVjdGl2ZSBjaGFuZ2VzIHZhcmlhYmxlcyB1c2VkIGluIGEgdGVtcGxhdGUuXG5cbkBEaXJlY3RpdmUoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRzZWxlY3RvcjogJ1thdVVzZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmU8VD4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVVzZVBhcmFtcycpXG5cdHBhcmFtczogVCB8IHVuZGVmaW5lZDtcblxuXHQjcmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuXG5cdCNkaXJlY3RpdmU6IEFnbm9zVUlEaXJlY3RpdmU8VD4gfCB1bmRlZmluZWQ7XG5cdCNkaXJlY3RpdmVJbnN0YW5jZT86IFJldHVyblR5cGU8QWdub3NVSURpcmVjdGl2ZTxUPj47XG5cblx0YXN5bmMgI2Rlc3Ryb3lEaXJlY3RpdmVJbnN0YW5jZSgpIHtcblx0XHRjb25zdCBkaXJlY3RpdmVJbnN0YW5jZSA9IHRoaXMuI2RpcmVjdGl2ZUluc3RhbmNlO1xuXHRcdHRoaXMuI2RpcmVjdGl2ZUluc3RhbmNlID0gdW5kZWZpbmVkO1xuXHRcdGlmIChkaXJlY3RpdmVJbnN0YW5jZT8uZGVzdHJveSkge1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdGRpcmVjdGl2ZUluc3RhbmNlLmRlc3Ryb3k/LigpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy51c2UgIT09IHRoaXMuI2RpcmVjdGl2ZSkge1xuXHRcdFx0dGhpcy4jZGVzdHJveURpcmVjdGl2ZUluc3RhbmNlKCk7XG5cdFx0XHRjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnVzZTtcblx0XHRcdHRoaXMuI2RpcmVjdGl2ZSA9IGRpcmVjdGl2ZTtcblx0XHRcdGlmIChkaXJlY3RpdmUpIHtcblx0XHRcdFx0YXdhaXQgMDtcblx0XHRcdFx0Ly8gY2hlY2tzIHRoYXQgdGhlIGRpcmVjdGl2ZSBkaWQgbm90IGNoYW5nZSB3aGlsZSB3YWl0aW5nOlxuXHRcdFx0XHRpZiAoZGlyZWN0aXZlID09PSB0aGlzLiNkaXJlY3RpdmUgJiYgIXRoaXMuI2RpcmVjdGl2ZUluc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy4jZGlyZWN0aXZlSW5zdGFuY2UgPSBkaXJlY3RpdmUodGhpcy4jcmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucGFyYW1zIGFzIFQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGFuZ2VzWydwYXJhbXMnXSkge1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdHRoaXMuI2RpcmVjdGl2ZUluc3RhbmNlPy51cGRhdGU/Lih0aGlzLnBhcmFtcyBhcyBUKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLiNkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHR0aGlzLiNkaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
