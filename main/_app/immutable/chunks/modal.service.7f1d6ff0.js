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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFRakQsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFUyxjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBOEJqRDtJQTVCQSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQTRCLEVBQUUsRUFBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBNkIsRUFBRTtRQUNqRyxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsY0FBYyxFQUFFO1lBQ2pELG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsZUFBZSxFQUFFLFFBQVE7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJO1lBQ0gsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBa0MsRUFBRTtnQkFDekUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLE1BQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDakUsTUFBTSxZQUFZLEdBQUksU0FBUyxDQUFDLFFBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVELElBQUksWUFBWSxZQUFZLFlBQVksRUFBRTt3QkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ2xEO2lCQUNEO3FCQUFNO29CQUNOLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNoQzthQUNEO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMzQztnQkFBUztZQUNULFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFLLE1BQU0sWUFBWSxJQUFJLGFBQWEsRUFBRTtnQkFDekMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDOzhHQS9CVyxZQUFZO2tIQUFaLFlBQVksY0FEQSxNQUFNOzsyRkFDbEIsWUFBWTtrQkFEeEIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBjcmVhdGVDb21wb25lbnQsIEVudmlyb25tZW50SW5qZWN0b3IsIEV2ZW50RW1pdHRlciwgaW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7TW9kYWxQcm9wc30gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHR5cGUge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMge1xuXHRpbmplY3Rvcj86IEluamVjdG9yO1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwcml2YXRlIF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmID0gaW5qZWN0KEFwcGxpY2F0aW9uUmVmKTtcblxuXHRhc3luYyBvcGVuKG9wdGlvbnM6IFBhcnRpYWw8TW9kYWxQcm9wcz4sIHtpbmplY3RvciA9IHRoaXMuX2luamVjdG9yfTogTW9kYWxTZXJ2aWNlT3Blbk9wdGlvbnMgPSB7fSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KE1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiBpbmplY3Rvci5nZXQoRW52aXJvbm1lbnRJbmplY3RvciksXG5cdFx0XHRlbGVtZW50SW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhvcHRpb25zKSBhcyAoc3RyaW5nICYga2V5b2YgTW9kYWxQcm9wcylbXSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XG5cdFx0XHRcdGlmIChwcm9wLnN0YXJ0c1dpdGgoJ29uJykpIHtcblx0XHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSBgJHtwcm9wWzJdLnRvTG93ZXJDYXNlKCl9JHtwcm9wLnN1YnN0cmluZygzKX1gO1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50RW1pdHRlciA9IChjb21wb25lbnQuaW5zdGFuY2UgYXMgYW55KVtldmVudE5hbWVdO1xuXHRcdFx0XHRcdGlmIChldmVudEVtaXR0ZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChldmVudEVtaXR0ZXIuc3Vic2NyaWJlKHZhbHVlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRJbnB1dChwcm9wLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50Lmhvc3RWaWV3KTtcblx0XHRcdHJldHVybiBhd2FpdCBjb21wb25lbnQuaW5zdGFuY2UuYXBpLm9wZW4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHtcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=`;export{Q as default};
