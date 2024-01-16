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
                    actions: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.actions),
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
/**
 * Stores the result of the first call to the getter and returns that result directly for subsequent calls
 *
 * Applies to: class getters
 *
 * @param target - the target
 * @param property - the property
 * @param descriptor - the property descriptor
 */
export const CachedProperty = (target, property, descriptor) => {
    const originalGet = descriptor.get;
    descriptor.get = function () {
        const value = originalGet?.call(this);
        Object.defineProperty(this, property, { value, writable: false });
        return value;
    };
};
export class BaseWidgetDirective {
    get api() {
        return this._widget.api;
    }
    get state() {
        return this._widget.ngState;
    }
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
    static { this.ɵfac = function BaseWidgetDirective_Factory(t) { return new (t || BaseWidgetDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUNOLG1CQUFtQixHQU9uQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUVuQyxNQUFNLGdCQUFnQixHQUFHLENBQW1CLEdBQWlDLEVBQUUsRUFBRTtJQUNoRixJQUFJLFNBQVMsR0FBZSxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUFDLE1BQVMsRUFBRSxFQUFFO1FBQ3BCLE1BQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBeUIsRUFBRTtZQUM5RCxNQUFNLFNBQVMsR0FBSSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDMUI7WUFDRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDRDtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNyQixHQUFHLENBQUMsUUFBUSxDQUFD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cHV0ZWQsIHdyaXRhYmxlLCB0eXBlIFJlYWRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzLCBPbkluaXQsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5qZWN0b3IsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG5cdHR5cGUgQW5ndWxhcldpZGdldCxcblx0dHlwZSBDb250ZXh0V2lkZ2V0LFxuXHR0eXBlIFdpZGdldCxcblx0dHlwZSBXaWRnZXRGYWN0b3J5LFxuXHR0eXBlIFdpZGdldFByb3BzLFxuXHR0eXBlIFdpZGdldFN0YXRlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge3RvQW5ndWxhclNpZ25hbCwgdG9SZWFkYWJsZVN0b3JlfSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQge1pvbmVXcmFwcGVyfSBmcm9tICcuL3pvbmUnO1xuXG5jb25zdCBjcmVhdGVQYXRjaFNsb3RzID0gPFQgZXh0ZW5kcyBvYmplY3Q+KHNldDogKG9iamVjdDogUGFydGlhbDxUPikgPT4gdm9pZCkgPT4ge1xuXHRsZXQgbGFzdFZhbHVlOiBQYXJ0aWFsPFQ+ID0ge307XG5cdHJldHVybiAob2JqZWN0OiBUKSA9PiB7XG5cdFx0Y29uc3QgbmV3VmFsdWU6IFBhcnRpYWw8VD4gPSB7fTtcblx0XHRsZXQgaGFzQ2hhbmdlID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSBhcyAoc3RyaW5nICYga2V5b2YgVClbXSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0S2V5ID0gKG9iamVjdCBhcyBhbnkpW2tleV07XG5cdFx0XHRpZiAob2JqZWN0S2V5ICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gb25seSB1c2UgZGVmaW5lZCBzbG90c1xuXHRcdFx0XHRuZXdWYWx1ZVtrZXldID0gb2JqZWN0S2V5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9iamVjdEtleSAhPSBsYXN0VmFsdWVba2V5XSkge1xuXHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaGFzQ2hhbmdlKSB7XG5cdFx0XHRsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdHNldChuZXdWYWx1ZSk7XG5cdFx0fVxuXHR9O1xufTtcblxuLyoqXG4gKiBDYWxsIGEgd2lkZ2V0IGZhY3RvcnkgdXNpbmcgcHJvdmlkZWQgY29uZmlncy5cbiAqXG4gKiBAcGFyYW0gcGFyYW1ldGVyIC0gdGhlIHBhcmFtZXRlclxuICogQHBhcmFtIHBhcmFtZXRlci5mYWN0b3J5IC0gdGhlIHdpZGdldCBmYWN0b3J5IHRvIGNhbGxcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuZGVmYXVsdENvbmZpZyAtIHRoZSBkZWZhdWx0IGNvbmZpZyBvZiB0aGUgd2lkZ2V0XG4gKiBAcGFyYW0gcGFyYW1ldGVyLndpZGdldENvbmZpZyAtIHRoZSBjb25maWcgb2YgdGhlIHdpZGdldCwgb3ZlcnJpZGluZyB0aGUgZGVmYXVsdENvbmZpZ1xuICogQHBhcmFtIHBhcmFtZXRlci5ldmVudHMgLSB0aGUgZXZlbnRzIG9mIHRoZSB3aWRnZXRcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuYWZ0ZXJJbml0IC0gYSBjYWxsYmFjayB0byBjYWxsIGFmdGVyIHN1Y2Nlc3NmdWwgc2V0dXAgb2YgdGhlIHdpZGdldFxuICogQHJldHVybnMgdGhlIHdpZGdldFxuICovXG5leHBvcnQgY29uc3QgY2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0ZmFjdG9yeSxcblx0ZGVmYXVsdENvbmZpZyxcblx0d2lkZ2V0Q29uZmlnLFxuXHRldmVudHMsXG5cdGFmdGVySW5pdCxcbn06IHtcblx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0ZGVmYXVsdENvbmZpZz86IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHR3aWRnZXRDb25maWc/OiBudWxsIHwgdW5kZWZpbmVkIHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHRldmVudHM6IFBpY2s8V2lkZ2V0UHJvcHM8Vz4sIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYG9uJHtzdHJpbmd9YD47XG5cdGFmdGVySW5pdD86ICgpID0+IHZvaWQ7XG59KTogQW5ndWxhcldpZGdldDxXPiA9PiB7XG5cdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0Y29uc3Qgc2xvdHMkID0gd3JpdGFibGUoe30pO1xuXHRjb25zdCBwcm9wcyA9IHt9O1xuXHRsZXQgaW5pdERvbmU6ICgpID0+IHZvaWQ7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRpbml0aWFsaXplZDogbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGluaXREb25lID0gcmVzb2x2ZTtcblx0XHR9KSxcblx0XHRwYXRjaFNsb3RzOiBjcmVhdGVQYXRjaFNsb3RzKHNsb3RzJC5zZXQpLFxuXHRcdHBhdGNoKG5ld1Byb3BzKSB7XG5cdFx0XHQvLyB0ZW1wb3JhcnkgZnVuY3Rpb24gcmVwbGFjZWQgaW4gbmdJbml0XG5cdFx0XHRPYmplY3QuYXNzaWduKHByb3BzLCBuZXdQcm9wcyk7XG5cdFx0fSxcblx0XHRuZ0luaXQoKSB7XG5cdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgem9uZVdyYXBwZXIgPSBpbmplY3QoWm9uZVdyYXBwZXIpO1xuXHRcdFx0XHRmYWN0b3J5ID0gem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZShmYWN0b3J5KTtcblx0XHRcdFx0Y29uc3QgZGVmYXVsdENvbmZpZyQgPSB0b1JlYWRhYmxlU3RvcmUoZGVmYXVsdENvbmZpZyk7XG5cdFx0XHRcdGV2ZW50cyA9IHpvbmVXcmFwcGVyLmluc2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QoZXZlbnRzKTtcblx0XHRcdFx0Y29uc3Qgd2lkZ2V0ID0gZmFjdG9yeSh7XG5cdFx0XHRcdFx0Y29uZmlnOiBjb21wdXRlZCgoKSA9PiAoey4uLmRlZmF1bHRDb25maWckKCksIC4uLndpZGdldENvbmZpZz8uKCksIC4uLnNsb3RzJCgpLCAuLi4oZXZlbnRzIGFzIFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+KX0pKSxcblx0XHRcdFx0XHRwcm9wcyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHdyYXBwZWRXaWRnZXQ6IFcgPSB7XG5cdFx0XHRcdFx0Li4ud2lkZ2V0LFxuXHRcdFx0XHRcdHBhdGNoOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lKHdpZGdldC5wYXRjaCksXG5cdFx0XHRcdFx0ZGlyZWN0aXZlczogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmVzT2JqZWN0KHdpZGdldC5kaXJlY3RpdmVzKSxcblx0XHRcdFx0XHRhY3Rpb25zOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCh3aWRnZXQuYWN0aW9ucyksXG5cdFx0XHRcdFx0YXBpOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCh3aWRnZXQuYXBpKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXMsIHdyYXBwZWRXaWRnZXQsIHtcblx0XHRcdFx0XHR3aWRnZXQ6IHRvU2xvdENvbnRleHRXaWRnZXQod3JhcHBlZFdpZGdldCksXG5cdFx0XHRcdFx0bmdTdGF0ZTogdG9Bbmd1bGFyU2lnbmFsKHdyYXBwZWRXaWRnZXQuc3RhdGUkIGFzIFJlYWRhYmxlU2lnbmFsPFdpZGdldFN0YXRlPFc+PiksXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhZnRlckluaXQ/LigpO1xuXHRcdFx0XHRpbml0RG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0fSBhcyBBbmd1bGFyV2lkZ2V0PFc+O1xuXG5cdHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBwYXRjaFNpbXBsZUNoYW5nZXMocGF0Y2hGbjogKG9iajogYW55KSA9PiB2b2lkLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdGNvbnN0IG9iajogYW55ID0ge307XG5cdGZvciAoY29uc3QgW2tleSwgc2ltcGxlQ2hhbmdlXSBvZiBPYmplY3QuZW50cmllcyhjaGFuZ2VzKSkge1xuXHRcdGlmIChzaW1wbGVDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0b2JqW2tleV0gPSBzaW1wbGVDaGFuZ2UuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXHRwYXRjaEZuKG9iaik7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGdldHRlciBhbmQgcmV0dXJucyB0aGF0IHJlc3VsdCBkaXJlY3RseSBmb3Igc3Vic2VxdWVudCBjYWxsc1xuICpcbiAqIEFwcGxpZXMgdG86IGNsYXNzIGdldHRlcnNcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IC0gdGhlIHRhcmdldFxuICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0gZGVzY3JpcHRvciAtIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBDYWNoZWRQcm9wZXJ0eSA9ICh0YXJnZXQ6IGFueSwgcHJvcGVydHk6IFByb3BlcnR5S2V5LCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcblx0Y29uc3Qgb3JpZ2luYWxHZXQgPSBkZXNjcmlwdG9yLmdldDtcblx0ZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAodGhpczogYW55KSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBvcmlnaW5hbEdldD8uY2FsbCh0aGlzKTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHksIHt2YWx1ZSwgd3JpdGFibGU6IGZhbHNlfSk7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xufTtcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVdpZGdldERpcmVjdGl2ZTxXIGV4dGVuZHMgV2lkZ2V0PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblx0cHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IF93aWRnZXQ6IEFuZ3VsYXJXaWRnZXQ8Vz47XG5cblx0Z2V0IGFwaSgpOiBXWydhcGknXSB7XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldC5hcGk7XG5cdH1cblxuXHRnZXQgc3RhdGUoKTogU2lnbmFsPFdpZGdldFN0YXRlPFc+PiB7XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldC5uZ1N0YXRlO1xuXHR9XG5cblx0Z2V0IHdpZGdldCgpOiBDb250ZXh0V2lkZ2V0PFc+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LndpZGdldDtcblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0Lm5nSW5pdCgpO1xuXHR9XG59XG4iXX0=`;export{Q as default};
