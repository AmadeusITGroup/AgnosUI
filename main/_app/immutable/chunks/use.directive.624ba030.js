const U=`import { DestroyRef, Directive, ElementRef, inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: UseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: UseDirective, isStandalone: true, selector: "[auUse]", inputs: { use: ["auUse", "use"], params: ["auUseParams", "params"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: UseDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRsZXNzL3NyYy9saWIvdXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFHL0Usa0ZBQWtGO0FBQ2xGLGdFQUFnRTtBQUNoRSw0RkFBNEY7QUFDNUYsNkZBQTZGO0FBRTdGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUksR0FBeUIsRUFBRSxNQUFVLEVBQUUsRUFBRTtJQUMvRSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFXLENBQUMsQ0FBQztJQUVyRCxLQUFLLFVBQVUsd0JBQXdCO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEIsSUFBSSxXQUFXLEVBQUUsT0FBTyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxDQUFDO1lBQ1IsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXZELEtBQUssVUFBVSxNQUFNLENBQUMsTUFBNEIsRUFBRSxTQUFhO1FBQ2hFLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUNuQix3QkFBd0IsRUFBRSxDQUFDO1lBQzNCLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDYixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLElBQUksTUFBTSxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxDQUFDO2dCQUNSLDBEQUEwRDtnQkFDMUQsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNoQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBVyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Q7U0FDRDthQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDO1lBQ1IsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVELE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQU94QixhQUFhLEdBQUcsbUJBQW1CLEVBQUssQ0FBQztJQUV6QyxXQUFXO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQzsrR0FYVyxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2lCQUNuQjs4QkFHQSxHQUFHO3NCQURGLEtBQUs7dUJBQUMsT0FBTztnQkFJZCxNQUFNO3NCQURMLEtBQUs7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0RpcmVjdGl2ZSBhcyBBZ25vc1VJRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5cbi8vIEFsbCBjYWxscyBvZiB0aGUgZGlyZWN0aXZlIGluIHRoaXMgY2xhc3MgYXJlIGRvbmUgYXN5bmNocm9ub3VzbHkgKHdpdGggYXdhaXQgMClcbi8vIGluIG9yZGVyIHRvIGF2b2lkIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3Jcbi8vIG9yIHRoZSBjb3JyZXNwb25kaW5nIGlzc3VlIHdpdGggc2lnbmFscyAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNTAzMjApXG4vLyBUaGlzIGlzIHJlbGV2YW50IGVzcGVjaWFsbHkgaWYgY2FsbGluZyB0aGUgZGlyZWN0aXZlIGNoYW5nZXMgdmFyaWFibGVzIHVzZWQgaW4gYSB0ZW1wbGF0ZS5cblxuZXhwb3J0IGNvbnN0IHVzZURpcmVjdGl2ZUZvckhvc3QgPSA8VD4odXNlPzogQWdub3NVSURpcmVjdGl2ZTxUPiwgcGFyYW1zPzogVCkgPT4ge1xuXHRjb25zdCByZWYgPSBpbmplY3QoRWxlbWVudFJlZik7XG5cblx0bGV0IGluc3RhbmNlID0gdXNlPy4ocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblxuXHRhc3luYyBmdW5jdGlvbiBkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKSB7XG5cdFx0Y29uc3Qgb2xkSW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0XHRpbnN0YW5jZSA9IHVuZGVmaW5lZDtcblx0XHR1c2UgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKG9sZEluc3RhbmNlPy5kZXN0cm95KSB7XG5cdFx0XHRhd2FpdCAwO1xuXHRcdFx0b2xkSW5zdGFuY2UuZGVzdHJveT8uKCk7XG5cdFx0fVxuXHR9XG5cblx0aW5qZWN0KERlc3Ryb3lSZWYpLm9uRGVzdHJveShkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShuZXdVc2U/OiBBZ25vc1VJRGlyZWN0aXZlPFQ+LCBuZXdQYXJhbXM/OiBUKSB7XG5cdFx0aWYgKG5ld1VzZSAhPT0gdXNlKSB7XG5cdFx0XHRkZXN0cm95RGlyZWN0aXZlSW5zdGFuY2UoKTtcblx0XHRcdHVzZSA9IG5ld1VzZTtcblx0XHRcdHBhcmFtcyA9IG5ld1BhcmFtcztcblx0XHRcdGlmIChuZXdVc2UpIHtcblx0XHRcdFx0YXdhaXQgMDtcblx0XHRcdFx0Ly8gY2hlY2tzIHRoYXQgdGhlIGRpcmVjdGl2ZSBkaWQgbm90IGNoYW5nZSB3aGlsZSB3YWl0aW5nOlxuXHRcdFx0XHRpZiAodXNlID09PSBuZXdVc2UgJiYgIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0aW5zdGFuY2UgPSB1c2UocmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmFtcyBhcyBUKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobmV3UGFyYW1zICE9IHBhcmFtcykge1xuXHRcdFx0cGFyYW1zID0gbmV3UGFyYW1zO1xuXHRcdFx0YXdhaXQgMDtcblx0XHRcdGluc3RhbmNlPy51cGRhdGU/LihwYXJhbXMgYXMgVCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHt1cGRhdGV9O1xufTtcblxuQERpcmVjdGl2ZSh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHNlbGVjdG9yOiAnW2F1VXNlXScsXG59KVxuZXhwb3J0IGNsYXNzIFVzZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgnYXVVc2UnKVxuXHR1c2U6IEFnbm9zVUlEaXJlY3RpdmU8VD4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVVzZVBhcmFtcycpXG5cdHBhcmFtczogVCB8IHVuZGVmaW5lZDtcblxuXHQjdXNlRGlyZWN0aXZlID0gdXNlRGlyZWN0aXZlRm9ySG9zdDxUPigpO1xuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuI3VzZURpcmVjdGl2ZS51cGRhdGUodGhpcy51c2UsIHRoaXMucGFyYW1zKTtcblx0fVxufVxuIl19`;export{U as default};
