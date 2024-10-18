const Q=`import { computed, writable } from '@amadeus-it-group/tansu';
import { Directive, Injector, inject, runInInjectionContext } from '@angular/core';
import { toSlotContextWidget, } from '../types';
import { toAngularSignal, toReadableStore } from './stores';
import { ZoneWrapper } from './zone';
import * as i0 from "@angular/core";
const createPatchSlots = (set) => {
    let lastValue = {};
    return (object) => {
        const newValue = {};
        let hasChange = false;
        for (const key of Object.keys(object)) {
            const objectKey = object[key];
            if (objectKey != null) {
                // only use defined slots
                newValue[key] = objectKey;
            }
            if (objectKey != lastValue[key]) {
                hasChange = true;
            }
        }
        if (hasChange) {
            lastValue = newValue;
            set(newValue);
        }
    };
};
/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.afterInit - a callback to call after successful setup of the widget
 * @returns the widget
 */
export const callWidgetFactoryWithConfig = ({ factory, defaultConfig, widgetConfig, events, afterInit, }) => {
    const injector = inject(Injector);
    const slots$ = writable({});
    const props = {};
    let initDone;
    const res = {
        initialized: new Promise((resolve) => {
            initDone = resolve;
        }),
        patchSlots: createPatchSlots(slots$.set),
        patch(newProps) {
            // temporary function replaced in ngInit
            Object.assign(props, newProps);
        },
        ngInit() {
            runInInjectionContext(injector, () => {
                const zoneWrapper = inject(ZoneWrapper);
                factory = zoneWrapper.outsideNgZone(factory);
                const defaultConfig$ = toReadableStore(defaultConfig);
                events = zoneWrapper.insideNgZoneWrapFunctionsObject(events);
                const widget = factory({
                    config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...events })),
                    props,
                });
                const wrappedWidget = {
                    ...widget,
                    patch: zoneWrapper.outsideNgZone(widget.patch),
                    directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
                    api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
                };
                Object.assign(res, wrappedWidget, {
                    widget: toSlotContextWidget(wrappedWidget),
                    ngState: toAngularSignal(wrappedWidget.state$),
                });
                afterInit?.();
                initDone();
            });
        },
    };
    return res;
};
function patchSimpleChanges(patchFn, changes) {
    const obj = {};
    for (const [key, simpleChange] of Object.entries(changes)) {
        if (simpleChange !== undefined) {
            obj[key] = simpleChange.currentValue;
        }
    }
    patchFn(obj);
}
export class BaseWidgetDirective {
    /**
     * Retrieves the widget api
     * @returns the widget api
     */
    get api() {
        return this._widget.api;
    }
    /**
     * Retrieves the widget state as an Angular {@link Signal}
     * @returns the widget state
     */
    get state() {
        return this._widget.ngState;
    }
    /**
     * Retrieves the widget
     * @returns the widget
     */
    get widget() {
        return this._widget.widget;
    }
    /** @inheritdoc */
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    /** @inheritdoc */
    ngOnInit() {
        this._widget.ngInit();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseWidgetDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUNOLG1CQUFtQixHQU9uQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUVuQyxNQUFNLGdCQUFnQixHQUFHLENBQW1CLEdBQWlDLEVBQUUsRUFBRTtJQUNoRixJQUFJLFNBQVMsR0FBZSxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUFDLE1BQVMsRUFBRSxFQUFFO1FBQ3BCLE1BQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBeUIsRUFBRSxDQUFDO1lBQy9ELE1BQU0sU0FBUyxHQUFJLE1BQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIseUJBQXlCO2dCQUN6QixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELElBQUksU0FBUyxFQUFFLENBQUM7WUFDZixTQUFTLEdBQUcs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QyxDQUFDO0lBQ0YsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLENBQUM7QUFHRCxNQUFNLE9BQWdCLG1CQUFtQjtJQUd4Qzs7O09BR0c7SUFDSCxJQUFJLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztvSEFuQ29CLG1CQUFtQjtvRUFBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBRHhDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkLCB3cml0YWJsZSwgdHlwZSBSZWFkYWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgT25Jbml0LCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEluamVjdG9yLCBpbmplY3QsIHJ1bkluSW5qZWN0aW9uQ29udGV4dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxuXHR0eXBlIEFuZ3VsYXJXaWRnZXQsXG5cdHR5cGUgQ29udGV4dFdpZGdldCxcblx0dHlwZSBXaWRnZXQsXG5cdHR5cGUgV2lkZ2V0RmFjdG9yeSxcblx0dHlwZSBXaWRnZXRQcm9wcyxcblx0dHlwZSBXaWRnZXRTdGF0ZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHt0b0FuZ3VsYXJTaWduYWwsIHRvUmVhZGFibGVTdG9yZX0gZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0IHtab25lV3JhcHBlcn0gZnJvbSAnLi96b25lJztcblxuY29uc3QgY3JlYXRlUGF0Y2hTbG90cyA9IDxUIGV4dGVuZHMgb2JqZWN0PihzZXQ6IChvYmplY3Q6IFBhcnRpYWw8VD4pID0+IHZvaWQpID0+IHtcblx0bGV0IGxhc3RWYWx1ZTogUGFydGlhbDxUPiA9IHt9O1xuXHRyZXR1cm4gKG9iamVjdDogVCkgPT4ge1xuXHRcdGNvbnN0IG5ld1ZhbHVlOiBQYXJ0aWFsPFQ+ID0ge307XG5cdFx0bGV0IGhhc0NoYW5nZSA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkgYXMgKHN0cmluZyAmIGtleW9mIFQpW10pIHtcblx0XHRcdGNvbnN0IG9iamVjdEtleSA9IChvYmplY3QgYXMgYW55KVtrZXldO1xuXHRcdFx0aWYgKG9iamVjdEtleSAhPSBudWxsKSB7XG5cdFx0XHRcdC8vIG9ubHkgdXNlIGRlZmluZWQgc2xvdHNcblx0XHRcdFx0bmV3VmFsdWVba2V5XSA9IG9iamVjdEtleTtcblx0XHRcdH1cblx0XHRcdGlmIChvYmplY3RLZXkgIT0gbGFzdFZhbHVlW2tleV0pIHtcblx0XHRcdFx0aGFzQ2hhbmdlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGhhc0NoYW5nZSkge1xuXHRcdFx0bGFzdFZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHRzZXQobmV3VmFsdWUpO1xuXHRcdH1cblx0fTtcbn07XG5cbi8qKlxuICogQ2FsbCBhIHdpZGdldCBmYWN0b3J5IHVzaW5nIHByb3ZpZGVkIGNvbmZpZ3MuXG4gKlxuICogQHBhcmFtIHBhcmFtZXRlciAtIHRoZSBwYXJhbWV0ZXJcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuZmFjdG9yeSAtIHRoZSB3aWRnZXQgZmFjdG9yeSB0byBjYWxsXG4gKiBAcGFyYW0gcGFyYW1ldGVyLmRlZmF1bHRDb25maWcgLSB0aGUgZGVmYXVsdCBjb25maWcgb2YgdGhlIHdpZGdldFxuICogQHBhcmFtIHBhcmFtZXRlci53aWRnZXRDb25maWcgLSB0aGUgY29uZmlnIG9mIHRoZSB3aWRnZXQsIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRDb25maWdcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuZXZlbnRzIC0gdGhlIGV2ZW50cyBvZiB0aGUgd2lkZ2V0XG4gKiBAcGFyYW0gcGFyYW1ldGVyLmFmdGVySW5pdCAtIGEgY2FsbGJhY2sgdG8gY2FsbCBhZnRlciBzdWNjZXNzZnVsIHNldHVwIG9mIHRoZSB3aWRnZXRcbiAqIEByZXR1cm5zIHRoZSB3aWRnZXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZyA9IDxXIGV4dGVuZHMgV2lkZ2V0Pih7XG5cdGZhY3RvcnksXG5cdGRlZmF1bHRDb25maWcsXG5cdHdpZGdldENvbmZpZyxcblx0ZXZlbnRzLFxuXHRhZnRlckluaXQsXG59OiB7XG5cdGZhY3Rvcnk6IFdpZGdldEZhY3Rvcnk8Vz47XG5cdGRlZmF1bHRDb25maWc/OiBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0d2lkZ2V0Q29uZmlnPzogbnVsbCB8IHVuZGVmaW5lZCB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0ZXZlbnRzPzogUGFydGlhbDxQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+Pjtcblx0YWZ0ZXJJbml0PzogKCkgPT4gdm9pZDtcbn0pOiBBbmd1bGFyV2lkZ2V0PFc+ID0+IHtcblx0Y29uc3QgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRjb25zdCBzbG90cyQgPSB3cml0YWJsZSh7fSk7XG5cdGNvbnN0IHByb3BzID0ge307XG5cdGxldCBpbml0RG9uZTogKCkgPT4gdm9pZDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdGluaXRpYWxpemVkOiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0aW5pdERvbmUgPSByZXNvbHZlO1xuXHRcdH0pLFxuXHRcdHBhdGNoU2xvdHM6IGNyZWF0ZVBhdGNoU2xvdHMoc2xvdHMkLnNldCksXG5cdFx0cGF0Y2gobmV3UHJvcHMpIHtcblx0XHRcdC8vIHRlbXBvcmFyeSBmdW5jdGlvbiByZXBsYWNlZCBpbiBuZ0luaXRcblx0XHRcdE9iamVjdC5hc3NpZ24ocHJvcHMsIG5ld1Byb3BzKTtcblx0XHR9LFxuXHRcdG5nSW5pdCgpIHtcblx0XHRcdHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB6b25lV3JhcHBlciA9IGluamVjdChab25lV3JhcHBlcik7XG5cdFx0XHRcdGZhY3RvcnkgPSB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lKGZhY3RvcnkpO1xuXHRcdFx0XHRjb25zdCBkZWZhdWx0Q29uZmlnJCA9IHRvUmVhZGFibGVTdG9yZShkZWZhdWx0Q29uZmlnKTtcblx0XHRcdFx0ZXZlbnRzID0gem9uZVdyYXBwZXIuaW5zaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdChldmVudHMpO1xuXHRcdFx0XHRjb25zdCB3aWRnZXQgPSBmYWN0b3J5KHtcblx0XHRcdFx0XHRjb25maWc6IGNvbXB1dGVkKCgpID0+ICh7Li4uZGVmYXVsdENvbmZpZyQoKSwgLi4ud2lkZ2V0Q29uZmlnPy4oKSwgLi4uc2xvdHMkKCksIC4uLihldmVudHMgYXMgUGFydGlhbDxXaWRnZXRQcm9wczxXPj4pfSkpLFxuXHRcdFx0XHRcdHByb3BzLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3Qgd3JhcHBlZFdpZGdldDogVyA9IHtcblx0XHRcdFx0XHQuLi53aWRnZXQsXG5cdFx0XHRcdFx0cGF0Y2g6IHpvbmVXcmFwcGVyLm91dHNpZGVOZ1pvbmUod2lkZ2V0LnBhdGNoKSxcblx0XHRcdFx0XHRkaXJlY3RpdmVzOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcERpcmVjdGl2ZXNPYmplY3Qod2lkZ2V0LmRpcmVjdGl2ZXMpLFxuXHRcdFx0XHRcdGFwaTogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3Qod2lkZ2V0LmFwaSksXG5cdFx0XHRcdH07XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24ocmVzLCB3cmFwcGVkV2lkZ2V0LCB7XG5cdFx0XHRcdFx0d2lkZ2V0OiB0b1Nsb3RDb250ZXh0V2lkZ2V0KHdyYXBwZWRXaWRnZXQpLFxuXHRcdFx0XHRcdG5nU3RhdGU6IHRvQW5ndWxhclNpZ25hbCh3cmFwcGVkV2lkZ2V0LnN0YXRlJCBhcyBSZWFkYWJsZVNpZ25hbDxXaWRnZXRTdGF0ZTxXPj4pLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YWZ0ZXJJbml0Py4oKTtcblx0XHRcdFx0aW5pdERvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdH0gYXMgQW5ndWxhcldpZGdldDxXPjtcblxuXHRyZXR1cm4gcmVzO1xufTtcblxuZnVuY3Rpb24gcGF0Y2hTaW1wbGVDaGFuZ2VzKHBhdGNoRm46IChvYmo6IGFueSkgPT4gdm9pZCwgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRjb25zdCBvYmo6IGFueSA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHNpbXBsZUNoYW5nZV0gb2YgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykpIHtcblx0XHRpZiAoc2ltcGxlQ2hhbmdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG9ialtrZXldID0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblx0cGF0Y2hGbihvYmopO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFcgZXh0ZW5kcyBXaWRnZXQ+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX3dpZGdldDogQW5ndWxhcldpZGdldDxXPjtcblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB3aWRnZXQgYXBpXG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXQgYXBpXG5cdCAqL1xuXHRnZXQgYXBpKCk6IFdbJ2FwaSddIHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LmFwaTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHdpZGdldCBzdGF0ZSBhcyBhbiBBbmd1bGFyIHtAbGluayBTaWduYWx9XG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXQgc3RhdGVcblx0ICovXG5cdGdldCBzdGF0ZSgpOiBTaWduYWw8V2lkZ2V0U3RhdGU8Vz4+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0Lm5nU3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB3aWRnZXRcblx0ICogQHJldHVybnMgdGhlIHdpZGdldFxuXHQgKi9cblx0Z2V0IHdpZGdldCgpOiBDb250ZXh0V2lkZ2V0PFc+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LndpZGdldDtcblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0Lm5nSW5pdCgpO1xuXHR9XG59XG4iXX0=`;export{Q as default};
