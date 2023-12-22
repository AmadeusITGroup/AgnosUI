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
    static { this.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFa0IsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQStCMUQ7SUE3QkEsS0FBSyxDQUFDLElBQUksQ0FBTyxPQUFrQyxFQUFFLEVBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQTZCLEVBQUU7UUFDN0csTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUNqRCxtQkFBbUIsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELGVBQWUsRUFBRSxRQUFRO1NBQ3pCLENBQUMsQ0FBQztRQUNILE1BQU0sYUFBYSxHQUFtQixFQUFFLENBQUM7UUFDekMsSUFBSTtZQUNILEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXdDLEVBQUU7Z0JBQy9FLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxQixNQUFNLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pFLE1BQU0sWUFBWSxHQUFJLFNBQVMsQ0FBQyxRQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLFlBQVksWUFBWSxZQUFZLEVBQUU7d0JBQ3pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUNsRDtpQkFDRDtxQkFBTTtvQkFDTixTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN6RjthQUNEO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQzdDLE9BQU8sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMzQztnQkFBUztZQUNULFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFLLE1BQU0sWUFBWSxJQUFJLGFBQWEsRUFBRTtnQkFDekMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDOzZFQWhDVyxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZLG1CQURBLE1BQU07O2lGQUNsQixZQUFZO2NBRHhCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7TW9kYWxQcm9wc30gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgY3JlYXRlQ29tcG9uZW50LCBFbnZpcm9ubWVudEluamVjdG9yLCBFdmVudEVtaXR0ZXIsIGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMge1xuXHRpbmplY3Rvcj86IEluamVjdG9yO1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2FwcGxpY2F0aW9uUmVmID0gaW5qZWN0KEFwcGxpY2F0aW9uUmVmKTtcblxuXHRhc3luYyBvcGVuPERhdGE+KG9wdGlvbnM6IFBhcnRpYWw8TW9kYWxQcm9wczxEYXRhPj4sIHtpbmplY3RvciA9IHRoaXMuX2luamVjdG9yfTogTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMgPSB7fSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KE1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiBpbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhvcHRpb25zKSBhcyAoc3RyaW5nICYga2V5b2YgTW9kYWxQcm9wczxEYXRhPilbXSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XG5cdFx0XHRcdGlmIChwcm9wLnN0YXJ0c1dpdGgoJ29uJykpIHtcblx0XHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSBgJHtwcm9wWzJdLnRvTG93ZXJDYXNlKCl9JHtwcm9wLnN1YnN0cmluZygzKX1gO1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50RW1pdHRlciA9IChjb21wb25lbnQuaW5zdGFuY2UgYXMgYW55KVtldmVudE5hbWVdO1xuXHRcdFx0XHRcdGlmIChldmVudEVtaXR0ZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChldmVudEVtaXR0ZXIuc3Vic2NyaWJlKHZhbHVlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRJbnB1dChgYXUke3Byb3Auc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtwcm9wLnN1YnN0cmluZygxKX1gLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50Lmhvc3RWaWV3KTtcblx0XHRcdGF3YWl0IGNvbXBvbmVudC5pbnN0YW5jZS5fd2lkZ2V0LmluaXRpYWxpemVkO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGNvbXBvbmVudC5pbnN0YW5jZS5hcGkub3BlbigpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0Zm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2Ygc3Vic2NyaXB0aW9ucykge1xuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
