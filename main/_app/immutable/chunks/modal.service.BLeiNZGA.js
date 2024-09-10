const Q=`import { ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector } from '@angular/core';
import { ModalComponent } from './modal.component';
import * as i0 from "@angular/core";
export class ModalService {
    constructor() {
        this._injector = inject(Injector);
        this._applicationRef = inject(ApplicationRef);
    }
    async open(options, { injector = this._injector } = {}) {
        const component = createComponent(ModalComponent, {
            environmentInjector: injector.get(EnvironmentInjector),
            elementInjector: injector,
        });
        const subscriptions = [];
        try {
            for (const [prop, value] of Object.entries(options)) {
                if (prop.startsWith('on')) {
                    const eventName = \`\${prop[2].toLowerCase()}\${prop.substring(3)}\`;
                    const eventEmitter = component.instance[eventName];
                    if (eventEmitter instanceof EventEmitter) {
                        subscriptions.push(eventEmitter.subscribe(value));
                    }
                }
                else {
                    component.setInput(\`au\${prop.substring(0, 1).toUpperCase()}\${prop.substring(1)}\`, value);
                }
            }
            this._applicationRef.attachView(component.hostView);
            await component.instance._widget.initialized;
            return await component.instance.api.open();
        }
        finally {
            component.destroy();
            for (const subscription of subscriptions) {
                subscription.unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ModalService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFRakQsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFa0IsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQThCMUQ7SUE1QkEsS0FBSyxDQUFDLElBQUksQ0FBTyxPQUFrQyxFQUFFLEVBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQTZCLEVBQUU7UUFDN0csTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUNqRCxtQkFBbUIsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELGVBQWUsRUFBRSxRQUFRO1NBQ3pCLENBQUMsQ0FBQztRQUNILE1BQU0sYUFBYSxHQUFtQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDO1lBQ0osS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDakUsTUFBTSxZQUFZLEdBQUksU0FBUyxDQUFDLFFBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVELElBQUksWUFBWSxZQUFZLFlBQVksRUFBRSxDQUFDO3dCQUMxQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsQ0FBQztnQkFDRixDQUFDO3FCQUFNLENBQUM7b0JBQ1AsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUYsQ0FBQztZQUNGLENBQUM7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDN0MsT0FBTyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7Z0JBQVMsQ0FBQztZQUNWLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFLLE1BQU0sWUFBWSxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUMxQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDOzZHQS9CVyxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZLG1CQURBLE1BQU07O2lGQUNsQixZQUFZO2NBRHhCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBjcmVhdGVDb21wb25lbnQsIEVudmlyb25tZW50SW5qZWN0b3IsIEV2ZW50RW1pdHRlciwgaW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TW9kYWxDb21wb25lbnR9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB0eXBlIHtNb2RhbFByb3BzfSBmcm9tICcuL21vZGFsLmdlbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMge1xuXHRpbmplY3Rvcj86IEluamVjdG9yO1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2FwcGxpY2F0aW9uUmVmID0gaW5qZWN0KEFwcGxpY2F0aW9uUmVmKTtcblxuXHRhc3luYyBvcGVuPERhdGE+KG9wdGlvbnM6IFBhcnRpYWw8TW9kYWxQcm9wczxEYXRhPj4sIHtpbmplY3RvciA9IHRoaXMuX2luamVjdG9yfTogTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMgPSB7fSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KE1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiBpbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdGZvciAoY29uc3QgW3Byb3AsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuXHRcdFx0XHRpZiAocHJvcC5zdGFydHNXaXRoKCdvbicpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gYCR7cHJvcFsyXS50b0xvd2VyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMyl9YDtcblx0XHRcdFx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSAoY29tcG9uZW50Lmluc3RhbmNlIGFzIGFueSlbZXZlbnROYW1lXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRFbWl0dGVyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zLnB1c2goZXZlbnRFbWl0dGVyLnN1YnNjcmliZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0SW5wdXQoYGF1JHtwcm9wLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMSl9YCwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0XHRhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuX3dpZGdldC5pbml0aWFsaXplZDtcblx0XHRcdHJldHVybiBhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuYXBpLm9wZW4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHtcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=`;export{Q as default};
