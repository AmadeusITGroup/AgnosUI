const F=`import { ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector } from '@angular/core';
import { ModalComponent } from './modal.component';
import * as i0 from "@angular/core";
/**
 * Service to handle the opening and management of modal components.
 */
export class ModalService {
    constructor() {
        this._injector = inject(Injector);
        this._applicationRef = inject(ApplicationRef);
    }
    /**
     * Opens a modal dialog with the specified options.
     *
     * @template Data - The type of data that the modal will handle.
     * @param options - The options to configure the modal.
     * @param injector - The injector to use when creating the modal component
     * @returns A promise that resolves when the modal is closed.
     */
    async open(options, injector = this._injector) {
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
            await component.instance['_widget'].initialized;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHakQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUVrQixjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBc0MxRDtJQXBDQTs7Ozs7OztPQU9HO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBTyxPQUFrQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUztRQUM3RSxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsY0FBYyxFQUFFO1lBQ2pELG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsZUFBZSxFQUFFLFFBQVE7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUM7WUFDSixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqRSxNQUFNLFlBQVksR0FBSSxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxZQUFZLFlBQVksWUFBWSxFQUFFLENBQUM7d0JBQzFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNGLENBQUM7cUJBQU0sQ0FBQztvQkFDUCxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxRixDQUFDO1lBQ0YsQ0FBQztZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2hELE9BQU8sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxDQUFDO2dCQUFTLENBQUM7WUFDVixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDMUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQzs2R0F2Q1csWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQSxNQUFNOztpRkFDbEIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgY3JlYXRlQ29tcG9uZW50LCBFbnZpcm9ubWVudEluamVjdG9yLCBFdmVudEVtaXR0ZXIsIGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7TW9kYWxQcm9wc30gZnJvbSAnLi9tb2RhbC5nZW4nO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gaGFuZGxlIHRoZSBvcGVuaW5nIGFuZCBtYW5hZ2VtZW50IG9mIG1vZGFsIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0cHJpdmF0ZSByZWFkb25seSBfYXBwbGljYXRpb25SZWYgPSBpbmplY3QoQXBwbGljYXRpb25SZWYpO1xuXG5cdC8qKlxuXHQgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy5cblx0ICpcblx0ICogQHRlbXBsYXRlIERhdGEgLSBUaGUgdHlwZSBvZiBkYXRhIHRoYXQgdGhlIG1vZGFsIHdpbGwgaGFuZGxlLlxuXHQgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgbW9kYWwuXG5cdCAqIEBwYXJhbSBpbmplY3RvciAtIFRoZSBpbmplY3RvciB0byB1c2Ugd2hlbiBjcmVhdGluZyB0aGUgbW9kYWwgY29tcG9uZW50XG5cdCAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIGlzIGNsb3NlZC5cblx0ICovXG5cdGFzeW5jIG9wZW48RGF0YT4ob3B0aW9uczogUGFydGlhbDxNb2RhbFByb3BzPERhdGE+PiwgaW5qZWN0b3IgPSB0aGlzLl9pbmplY3Rvcik6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KE1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiBpbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdGZvciAoY29uc3QgW3Byb3AsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuXHRcdFx0XHRpZiAocHJvcC5zdGFydHNXaXRoKCdvbicpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gYCR7cHJvcFsyXS50b0xvd2VyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMyl9YDtcblx0XHRcdFx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSAoY29tcG9uZW50Lmluc3RhbmNlIGFzIGFueSlbZXZlbnROYW1lXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRFbWl0dGVyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zLnB1c2goZXZlbnRFbWl0dGVyLnN1YnNjcmliZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0SW5wdXQoYGF1JHtwcm9wLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMSl9YCwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0XHRhd2FpdCBjb21wb25lbnQuaW5zdGFuY2VbJ193aWRnZXQnXS5pbml0aWFsaXplZDtcblx0XHRcdHJldHVybiBhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuYXBpLm9wZW4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHtcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=`;export{F as default};
