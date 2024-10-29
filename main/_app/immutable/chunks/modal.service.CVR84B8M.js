const Q=`import { ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPakQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUVrQixjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBOEIxRDtJQTVCQSxLQUFLLENBQUMsSUFBSSxDQUFPLE9BQWtDLEVBQUUsRUFBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBNkIsRUFBRTtRQUM3RyxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsY0FBYyxFQUFFO1lBQ2pELG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsZUFBZSxFQUFFLFFBQVE7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUM7WUFDSixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqRSxNQUFNLFlBQVksR0FBSSxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxZQUFZLFlBQVksWUFBWSxFQUFFLENBQUM7d0JBQzFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNGLENBQUM7cUJBQU0sQ0FBQztvQkFDUCxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxRixDQUFDO1lBQ0YsQ0FBQztZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2hELE9BQU8sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxDQUFDO2dCQUFTLENBQUM7WUFDVixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDMUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQzs2R0EvQlcsWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQSxNQUFNOztpRkFDbEIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgY3JlYXRlQ29tcG9uZW50LCBFbnZpcm9ubWVudEluamVjdG9yLCBFdmVudEVtaXR0ZXIsIGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7TW9kYWxQcm9wc30gZnJvbSAnLi9tb2RhbC5nZW4nO1xuXG5pbnRlcmZhY2UgTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMge1xuXHRpbmplY3Rvcj86IEluamVjdG9yO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgdG8gaGFuZGxlIHRoZSBvcGVuaW5nIGFuZCBtYW5hZ2VtZW50IG9mIG1vZGFsIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0cHJpdmF0ZSByZWFkb25seSBfYXBwbGljYXRpb25SZWYgPSBpbmplY3QoQXBwbGljYXRpb25SZWYpO1xuXG5cdGFzeW5jIG9wZW48RGF0YT4ob3B0aW9uczogUGFydGlhbDxNb2RhbFByb3BzPERhdGE+Piwge2luamVjdG9yID0gdGhpcy5faW5qZWN0b3J9OiBNb2RhbFNlcnZpY2VPcGVuT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoTW9kYWxDb21wb25lbnQsIHtcblx0XHRcdGVudmlyb25tZW50SW5qZWN0b3I6IGluamVjdG9yLmdldChFbnZpcm9ubWVudEluamVjdG9yKSxcblx0XHRcdGVsZW1lbnRJbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Zm9yIChjb25zdCBbcHJvcCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG5cdFx0XHRcdGlmIChwcm9wLnN0YXJ0c1dpdGgoJ29uJykpIHtcblx0XHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSBgJHtwcm9wWzJdLnRvTG93ZXJDYXNlKCl9JHtwcm9wLnN1YnN0cmluZygzKX1gO1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50RW1pdHRlciA9IChjb21wb25lbnQuaW5zdGFuY2UgYXMgYW55KVtldmVudE5hbWVdO1xuXHRcdFx0XHRcdGlmIChldmVudEVtaXR0ZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChldmVudEVtaXR0ZXIuc3Vic2NyaWJlKHZhbHVlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRJbnB1dChgYXUke3Byb3Auc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtwcm9wLnN1YnN0cmluZygxKX1gLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50Lmhvc3RWaWV3KTtcblx0XHRcdGF3YWl0IGNvbXBvbmVudC5pbnN0YW5jZVsnX3dpZGdldCddLmluaXRpYWxpemVkO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGNvbXBvbmVudC5pbnN0YW5jZS5hcGkub3BlbigpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0Zm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2Ygc3Vic2NyaXB0aW9ucykge1xuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
