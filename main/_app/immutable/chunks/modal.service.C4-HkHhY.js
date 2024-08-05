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
    static { this.ɵfac = function ModalService_Factory(ɵt) { return new (ɵt || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFRakQsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFa0IsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQStCMUQ7SUE3QkEsS0FBSyxDQUFDLElBQUksQ0FBTyxPQUFrQyxFQUFFLEVBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQTZCLEVBQUU7UUFDN0csTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUNqRCxtQkFBbUIsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELGVBQWUsRUFBRSxRQUFRO1NBQ3pCLENBQUMsQ0FBQztRQUNILE1BQU0sYUFBYSxHQUFtQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDO1lBQ0osS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBd0MsRUFBRSxDQUFDO2dCQUNoRixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUMzQixNQUFNLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pFLE1BQU0sWUFBWSxHQUFJLFNBQVMsQ0FBQyxRQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLFlBQVksWUFBWSxZQUFZLEVBQUUsQ0FBQzt3QkFDMUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0YsQ0FBQztxQkFBTSxDQUFDO29CQUNQLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzFGLENBQUM7WUFDRixDQUFDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQzdDLE9BQU8sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxDQUFDO2dCQUFTLENBQUM7WUFDVixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDMUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQzsrRUFoQ1csWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQSxNQUFNOztpRkFDbEIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgY3JlYXRlQ29tcG9uZW50LCBFbnZpcm9ubWVudEluamVjdG9yLCBFdmVudEVtaXR0ZXIsIGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7TW9kYWxQcm9wc30gZnJvbSAnLi9tb2RhbC5nZW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsU2VydmljZU9wZW5PcHRpb25zIHtcblx0aW5qZWN0b3I/OiBJbmplY3Rvcjtcbn1cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblx0cHJpdmF0ZSByZWFkb25seSBfaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9hcHBsaWNhdGlvblJlZiA9IGluamVjdChBcHBsaWNhdGlvblJlZik7XG5cblx0YXN5bmMgb3BlbjxEYXRhPihvcHRpb25zOiBQYXJ0aWFsPE1vZGFsUHJvcHM8RGF0YT4+LCB7aW5qZWN0b3IgPSB0aGlzLl9pbmplY3Rvcn06IE1vZGFsU2VydmljZU9wZW5PcHRpb25zID0ge30pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChNb2RhbENvbXBvbmVudCwge1xuXHRcdFx0ZW52aXJvbm1lbnRJbmplY3RvcjogaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdFx0ZWxlbWVudEluamVjdG9yOiBpbmplY3Rvcixcblx0XHR9KTtcblx0XHRjb25zdCBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMob3B0aW9ucykgYXMgKHN0cmluZyAmIGtleW9mIE1vZGFsUHJvcHM8RGF0YT4pW10pIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xuXHRcdFx0XHRpZiAocHJvcC5zdGFydHNXaXRoKCdvbicpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gYCR7cHJvcFsyXS50b0xvd2VyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMyl9YDtcblx0XHRcdFx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSAoY29tcG9uZW50Lmluc3RhbmNlIGFzIGFueSlbZXZlbnROYW1lXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRFbWl0dGVyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zLnB1c2goZXZlbnRFbWl0dGVyLnN1YnNjcmliZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0SW5wdXQoYGF1JHtwcm9wLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpfSR7cHJvcC5zdWJzdHJpbmcoMSl9YCwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0XHRhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuX3dpZGdldC5pbml0aWFsaXplZDtcblx0XHRcdHJldHVybiBhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuYXBpLm9wZW4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHtcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=`;export{Q as default};
