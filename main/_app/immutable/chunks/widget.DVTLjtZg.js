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
    static { this.ɵfac = function BaseWidgetDirective_Factory(ɵt) { return new (ɵt || BaseWidgetDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUNOLG1CQUFtQixHQU9uQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUVuQyxNQUFNLGdCQUFnQixHQUFHLENBQW1CLEdBQWlDLEVBQUUsRUFBRTtJQUNoRixJQUFJLFNBQVMsR0FBZSxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUFDLE1BQVMsRUFBRSxFQUFFO1FBQ3BCLE1BQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBeUIsRUFBRSxDQUFDO1lBQy9ELE1BQU0sU0FBUyxHQUFJLE1BQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIseUJBQXlCO2dCQUN6QixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELElBQUksU0FBUyxFQUFFLENBQUM7WUFDZixTQUFTLEdBQUcs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QUFDO1lBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ3RDLENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUdELE1BQU0sT0FBZ0IsbUJBQW1CO0lBR3hDLElBQUksR0FBRztRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixXQUFXLENBQUMsT0FBc0I7UUFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO3NGQXZCb0IsbUJBQW1CO29FQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FEeEMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWQsIHdyaXRhYmxlLCB0eXBlIFJlYWRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzLCBPbkluaXQsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5qZWN0b3IsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG5cdHR5cGUgQW5ndWxhcldpZGdldCxcblx0dHlwZSBDb250ZXh0V2lkZ2V0LFxuXHR0eXBlIFdpZGdldCxcblx0dHlwZSBXaWRnZXRGYWN0b3J5LFxuXHR0eXBlIFdpZGdldFByb3BzLFxuXHR0eXBlIFdpZGdldFN0YXRlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge3RvQW5ndWxhclNpZ25hbCwgdG9SZWFkYWJsZVN0b3JlfSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQge1pvbmVXcmFwcGVyfSBmcm9tICcuL3pvbmUnO1xuXG5jb25zdCBjcmVhdGVQYXRjaFNsb3RzID0gPFQgZXh0ZW5kcyBvYmplY3Q+KHNldDogKG9iamVjdDogUGFydGlhbDxUPikgPT4gdm9pZCkgPT4ge1xuXHRsZXQgbGFzdFZhbHVlOiBQYXJ0aWFsPFQ+ID0ge307XG5cdHJldHVybiAob2JqZWN0OiBUKSA9PiB7XG5cdFx0Y29uc3QgbmV3VmFsdWU6IFBhcnRpYWw8VD4gPSB7fTtcblx0XHRsZXQgaGFzQ2hhbmdlID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSBhcyAoc3RyaW5nICYga2V5b2YgVClbXSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0S2V5ID0gKG9iamVjdCBhcyBhbnkpW2tleV07XG5cdFx0XHRpZiAob2JqZWN0S2V5ICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gb25seSB1c2UgZGVmaW5lZCBzbG90c1xuXHRcdFx0XHRuZXdWYWx1ZVtrZXldID0gb2JqZWN0S2V5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9iamVjdEtleSAhPSBsYXN0VmFsdWVba2V5XSkge1xuXHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaGFzQ2hhbmdlKSB7XG5cdFx0XHRsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdHNldChuZXdWYWx1ZSk7XG5cdFx0fVxuXHR9O1xufTtcblxuLyoqXG4gKiBDYWxsIGEgd2lkZ2V0IGZhY3RvcnkgdXNpbmcgcHJvdmlkZWQgY29uZmlncy5cbiAqXG4gKiBAcGFyYW0gcGFyYW1ldGVyIC0gdGhlIHBhcmFtZXRlclxuICogQHBhcmFtIHBhcmFtZXRlci5mYWN0b3J5IC0gdGhlIHdpZGdldCBmYWN0b3J5IHRvIGNhbGxcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuZGVmYXVsdENvbmZpZyAtIHRoZSBkZWZhdWx0IGNvbmZpZyBvZiB0aGUgd2lkZ2V0XG4gKiBAcGFyYW0gcGFyYW1ldGVyLndpZGdldENvbmZpZyAtIHRoZSBjb25maWcgb2YgdGhlIHdpZGdldCwgb3ZlcnJpZGluZyB0aGUgZGVmYXVsdENvbmZpZ1xuICogQHBhcmFtIHBhcmFtZXRlci5ldmVudHMgLSB0aGUgZXZlbnRzIG9mIHRoZSB3aWRnZXRcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuYWZ0ZXJJbml0IC0gYSBjYWxsYmFjayB0byBjYWxsIGFmdGVyIHN1Y2Nlc3NmdWwgc2V0dXAgb2YgdGhlIHdpZGdldFxuICogQHJldHVybnMgdGhlIHdpZGdldFxuICovXG5leHBvcnQgY29uc3QgY2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0ZmFjdG9yeSxcblx0ZGVmYXVsdENvbmZpZyxcblx0d2lkZ2V0Q29uZmlnLFxuXHRldmVudHMsXG5cdGFmdGVySW5pdCxcbn06IHtcblx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0ZGVmYXVsdENvbmZpZz86IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHR3aWRnZXRDb25maWc/OiBudWxsIHwgdW5kZWZpbmVkIHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHRldmVudHM/OiBQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+O1xuXHRhZnRlckluaXQ/OiAoKSA9PiB2b2lkO1xufSk6IEFuZ3VsYXJXaWRnZXQ8Vz4gPT4ge1xuXHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdGNvbnN0IHNsb3RzJCA9IHdyaXRhYmxlKHt9KTtcblx0Y29uc3QgcHJvcHMgPSB7fTtcblx0bGV0IGluaXREb25lOiAoKSA9PiB2b2lkO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0aW5pdGlhbGl6ZWQ6IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRpbml0RG9uZSA9IHJlc29sdmU7XG5cdFx0fSksXG5cdFx0cGF0Y2hTbG90czogY3JlYXRlUGF0Y2hTbG90cyhzbG90cyQuc2V0KSxcblx0XHRwYXRjaChuZXdQcm9wcykge1xuXHRcdFx0Ly8gdGVtcG9yYXJ5IGZ1bmN0aW9uIHJlcGxhY2VkIGluIG5nSW5pdFxuXHRcdFx0T2JqZWN0LmFzc2lnbihwcm9wcywgbmV3UHJvcHMpO1xuXHRcdH0sXG5cdFx0bmdJbml0KCkge1xuXHRcdFx0cnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHpvbmVXcmFwcGVyID0gaW5qZWN0KFpvbmVXcmFwcGVyKTtcblx0XHRcdFx0ZmFjdG9yeSA9IHpvbmVXcmFwcGVyLm91dHNpZGVOZ1pvbmUoZmFjdG9yeSk7XG5cdFx0XHRcdGNvbnN0IGRlZmF1bHRDb25maWckID0gdG9SZWFkYWJsZVN0b3JlKGRlZmF1bHRDb25maWcpO1xuXHRcdFx0XHRldmVudHMgPSB6b25lV3JhcHBlci5pbnNpZGVOZ1pvbmVXcmFwRnVuY3Rpb25zT2JqZWN0KGV2ZW50cyk7XG5cdFx0XHRcdGNvbnN0IHdpZGdldCA9IGZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbmZpZzogY29tcHV0ZWQoKCkgPT4gKHsuLi5kZWZhdWx0Q29uZmlnJCgpLCAuLi53aWRnZXRDb25maWc/LigpLCAuLi5zbG90cyQoKSwgLi4uKGV2ZW50cyBhcyBQYXJ0aWFsPFdpZGdldFByb3BzPFc+Pil9KSksXG5cdFx0XHRcdFx0cHJvcHMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCB3cmFwcGVkV2lkZ2V0OiBXID0ge1xuXHRcdFx0XHRcdC4uLndpZGdldCxcblx0XHRcdFx0XHRwYXRjaDogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZSh3aWRnZXQucGF0Y2gpLFxuXHRcdFx0XHRcdGRpcmVjdGl2ZXM6IHpvbmVXcmFwcGVyLm91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlc09iamVjdCh3aWRnZXQuZGlyZWN0aXZlcyksXG5cdFx0XHRcdFx0YWN0aW9uczogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3Qod2lkZ2V0LmFjdGlvbnMpLFxuXHRcdFx0XHRcdGFwaTogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3Qod2lkZ2V0LmFwaSksXG5cdFx0XHRcdH07XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24ocmVzLCB3cmFwcGVkV2lkZ2V0LCB7XG5cdFx0XHRcdFx0d2lkZ2V0OiB0b1Nsb3RDb250ZXh0V2lkZ2V0KHdyYXBwZWRXaWRnZXQpLFxuXHRcdFx0XHRcdG5nU3RhdGU6IHRvQW5ndWxhclNpZ25hbCh3cmFwcGVkV2lkZ2V0LnN0YXRlJCBhcyBSZWFkYWJsZVNpZ25hbDxXaWRnZXRTdGF0ZTxXPj4pLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YWZ0ZXJJbml0Py4oKTtcblx0XHRcdFx0aW5pdERvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdH0gYXMgQW5ndWxhcldpZGdldDxXPjtcblxuXHRyZXR1cm4gcmVzO1xufTtcblxuZnVuY3Rpb24gcGF0Y2hTaW1wbGVDaGFuZ2VzKHBhdGNoRm46IChvYmo6IGFueSkgPT4gdm9pZCwgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRjb25zdCBvYmo6IGFueSA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHNpbXBsZUNoYW5nZV0gb2YgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykpIHtcblx0XHRpZiAoc2ltcGxlQ2hhbmdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG9ialtrZXldID0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblx0cGF0Y2hGbihvYmopO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFcgZXh0ZW5kcyBXaWRnZXQ+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX3dpZGdldDogQW5ndWxhcldpZGdldDxXPjtcblxuXHRnZXQgYXBpKCk6IFdbJ2FwaSddIHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LmFwaTtcblx0fVxuXG5cdGdldCBzdGF0ZSgpOiBTaWduYWw8V2lkZ2V0U3RhdGU8Vz4+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0Lm5nU3RhdGU7XG5cdH1cblxuXHRnZXQgd2lkZ2V0KCk6IENvbnRleHRXaWRnZXQ8Vz4ge1xuXHRcdHJldHVybiB0aGlzLl93aWRnZXQud2lkZ2V0O1xuXHR9XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQubmdJbml0KCk7XG5cdH1cbn1cbiJdfQ==`;export{Q as default};
