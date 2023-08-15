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
                    component.setInput(prop, value);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: ModalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFUyxjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBOEJqRDtJQTVCQSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQTRCLEVBQUUsRUFBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBNkIsRUFBRTtRQUNqRyxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsY0FBYyxFQUFFO1lBQ2pELG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsZUFBZSxFQUFFLFFBQVE7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUk7WUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFrQyxFQUFFO2dCQUN6RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqRSxNQUFNLFlBQVksR0FBSSxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxZQUFZLFlBQVksWUFBWSxFQUFFO3dCQUN6QyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0Q7cUJBQU07b0JBQ04sU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Q7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNDO2dCQUFTO1lBQ1QsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLEtBQUssTUFBTSxZQUFZLElBQUksYUFBYSxFQUFFO2dCQUN6QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0I7U0FDRDtJQUNGLENBQUM7OEdBL0JXLFlBQVk7a0hBQVosWUFBWSxjQURBLE1BQU07OzJGQUNsQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwbGljYXRpb25SZWYsIGNyZWF0ZUNvbXBvbmVudCwgRW52aXJvbm1lbnRJbmplY3RvciwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtNb2RhbFByb3BzfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMge1xuXHRpbmplY3Rvcj86IEluamVjdG9yO1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwcml2YXRlIF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmID0gaW5qZWN0KEFwcGxpY2F0aW9uUmVmKTtcblxuXHRhc3luYyBvcGVuKG9wdGlvbnM6IFBhcnRpYWw8TW9kYWxQcm9wcz4sIHtpbmplY3RvciA9IHRoaXMuX2luamVjdG9yfTogTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMgPSB7fSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KE1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiBpbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKG9wdGlvbnMpIGFzIChzdHJpbmcgJiBrZXlvZiBNb2RhbFByb3BzKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcblx0XHRcdFx0aWYgKHByb3Auc3RhcnRzV2l0aCgnb24nKSkge1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TmFtZSA9IGAke3Byb3BbMl0udG9Mb3dlckNhc2UoKX0ke3Byb3Auc3Vic3RyaW5nKDMpfWA7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRFbWl0dGVyID0gKGNvbXBvbmVudC5pbnN0YW5jZSBhcyBhbnkpW2V2ZW50TmFtZV07XG5cdFx0XHRcdFx0aWYgKGV2ZW50RW1pdHRlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKGV2ZW50RW1pdHRlci5zdWJzY3JpYmUodmFsdWUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldElucHV0KHByb3AsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnQuaG9zdFZpZXcpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGNvbXBvbmVudC5pbnN0YW5jZS5hcGkub3BlbigpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0Zm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2Ygc3Vic2NyaXB0aW9ucykge1xuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==`;export{F as default};
