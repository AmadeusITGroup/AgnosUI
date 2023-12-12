const F=`import { ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector } from '@angular/core';
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
            for (const prop of Object.keys(options)) {
                const value = options[prop];
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
            return await component.instance.api.open();
        }
        finally {
            component.destroy();
            for (const subscription of subscriptions) {
                subscription.unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RhbC9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBT2pELE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRWtCLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0Isb0JBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7S0E4QjFEO0lBNUJBLEtBQUssQ0FBQyxJQUFJLENBQU8sT0FBa0MsRUFBRSxFQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUE2QixFQUFFO1FBQzdHLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxjQUFjLEVBQUU7WUFDakQsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztZQUN0RCxlQUFlLEVBQUUsUUFBUTtTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLGFBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUk7WUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF3QyxFQUFFO2dCQUMvRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqRSxNQUFNLFlBQVksR0FBSSxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxZQUFZLFlBQVksWUFBWSxFQUFFO3dCQUN6QyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0Q7cUJBQU07b0JBQ04sU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDekY7YUFDRDtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxPQUFPLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0M7Z0JBQVM7WUFDVCxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUU7Z0JBQ3pDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtTQUNEO0lBQ0YsQ0FBQzs2RUEvQlcsWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQSxNQUFNOztpRkFDbEIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge01vZGFsUHJvcHN9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWYsIGNyZWF0ZUNvbXBvbmVudCwgRW52aXJvbm1lbnRJbmplY3RvciwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsU2VydmljZU9wZW5PcHRpb25zIHtcblx0aW5qZWN0b3I/OiBJbmplY3Rvcjtcbn1cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblx0cHJpdmF0ZSByZWFkb25seSBfaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9hcHBsaWNhdGlvblJlZiA9IGluamVjdChBcHBsaWNhdGlvblJlZik7XG5cblx0YXN5bmMgb3BlbjxEYXRhPihvcHRpb25zOiBQYXJ0aWFsPE1vZGFsUHJvcHM8RGF0YT4+LCB7aW5qZWN0b3IgPSB0aGlzLl9pbmplY3Rvcn06IE1vZGFsU2VydmljZU9wZW5PcHRpb25zID0ge30pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChNb2RhbENvbXBvbmVudCwge1xuXHRcdFx0ZW52aXJvbm1lbnRJbmplY3RvcjogaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdFx0ZWxlbWVudEluamVjdG9yOiBpbmplY3Rvcixcblx0XHR9KTtcblx0XHRjb25zdCBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMob3B0aW9ucykgYXMgKHN0cmluZyAmIGtleW9mIE1vZGFsUHJvcHM8RGF0YT4pW10pIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xuXHRcdFx0XHRpZiAocHJvcC5zdGFydHNXaXRoKCdvbicpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gYCR7cHJvcFsyXS50b0xvd2VyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMyl9YDtcblx0XHRcdFx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSAoY29tcG9uZW50Lmluc3RhbmNlIGFzIGFueSlbZXZlbnROYW1lXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRFbWl0dGVyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zLnB1c2goZXZlbnRFbWl0dGVyLnN1YnNjcmliZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0SW5wdXQoYGF1JHtwcm9wLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMSl9YCwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgY29tcG9uZW50Lmluc3RhbmNlLmFwaS5vcGVuKCk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHRmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiBzdWJzY3JpcHRpb25zKSB7XG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19`;export{F as default};
