const Q=`import { computed, writable } from '@amadeus-it-group/tansu';
import { Directive, Injector, inject, runInInjectionContext } from '@angular/core';
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
 * @param parameter.slotTemplates - a function to provide all slot templates using child queries
 * @param parameter.slotChildren - a function to provide the default children slot using a view query
 * @returns the widget
 */
export const callWidgetFactoryWithConfig = ({ factory, defaultConfig, widgetConfig, events, afterInit, slotTemplates, slotChildren, }) => {
    const injector = inject(Injector);
    const slots$ = writable({});
    const props = {};
    let initDone;
    const patchSlots = createPatchSlots(slots$.set);
    const res = {
        initialized: new Promise((resolve) => {
            initDone = resolve;
        }),
        updateSlots: () => {
            if (slotTemplates) {
                patchSlots(slotTemplates());
            }
        },
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
                    config: computed(() => ({
                        ...defaultConfig$(),
                        children: slotChildren?.(),
                        ...widgetConfig?.(),
                        ...slots$(),
                        ...events,
                    })),
                    props,
                });
                Object.assign(res, {
                    patch: zoneWrapper.outsideNgZone(widget.patch),
                    directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
                    api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
                    state: Object.fromEntries(Object.entries(widget.stores).map(([key, val]) => [key.slice(0, -1), toAngularSignal(val)])),
                });
                afterInit?.(res);
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
    constructor(_widget) {
        this._widget = _widget;
    }
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
        return this._widget.state;
    }
    /**
     * Retrieves the widget directives
     * @returns the widget directives
     */
    get directives() {
        return this._widget.directives;
    }
    /** @inheritdoc */
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    /** @inheritdoc */
    ngOnInit() {
        this._widget.ngInit();
    }
    /** @inheritdoc */
    ngAfterContentChecked() {
        this._widget.updateSlots();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(__ngFactoryType__) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], () => [{ type: undefined }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUF1QixRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFtQixHQUFpQyxFQUFFLEVBQUU7SUFDaEYsSUFBSSxTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxNQUFTLEVBQUUsRUFBRTtRQUNwQixNQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQXlCLEVBQUUsQ0FBQztZQUMvRCxNQUFNLFNBQVMsR0FBSSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLHlCQUF5QjtnQkFDekIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2YsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFD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U0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWQsIHR5cGUgUmVhZGFibGVTaWduYWwsIHdyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbmplY3RvciwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0FuZ3VsYXJTdGF0ZSwgQW5ndWxhcldpZGdldCwgSXNTbG90Q29udGVudCwgU2xvdENvbnRlbnQsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgV2lkZ2V0UHJvcHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7dG9Bbmd1bGFyU2lnbmFsLCB0b1JlYWRhYmxlU3RvcmV9IGZyb20gJy4vc3RvcmVzJztcbmltcG9ydCB7Wm9uZVdyYXBwZXJ9IGZyb20gJy4vem9uZSc7XG5cbmNvbnN0IGNyZWF0ZVBhdGNoU2xvdHMgPSA8VCBleHRlbmRzIG9iamVjdD4oc2V0OiAob2JqZWN0OiBQYXJ0aWFsPFQ+KSA9PiB2b2lkKSA9PiB7XG5cdGxldCBsYXN0VmFsdWU6IFBhcnRpYWw8VD4gPSB7fTtcblx0cmV0dXJuIChvYmplY3Q6IFQpID0+IHtcblx0XHRjb25zdCBuZXdWYWx1ZTogUGFydGlhbDxUPiA9IHt9O1xuXHRcdGxldCBoYXNDaGFuZ2UgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpIGFzIChzdHJpbmcgJiBrZXlvZiBUKVtdKSB7XG5cdFx0XHRjb25zdCBvYmplY3RLZXkgPSAob2JqZWN0IGFzIGFueSlba2V5XTtcblx0XHRcdGlmIChvYmplY3RLZXkgIT0gbnVsbCkge1xuXHRcdFx0XHQvLyBvbmx5IHVzZSBkZWZpbmVkIHNsb3RzXG5cdFx0XHRcdG5ld1ZhbHVlW2tleV0gPSBvYmplY3RLZXk7XG5cdFx0XHR9XG5cdFx0XHRpZiAob2JqZWN0S2V5ICE9IGxhc3RWYWx1ZVtrZXldKSB7XG5cdFx0XHRcdGhhc0NoYW5nZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChoYXNDaGFuZ2UpIHtcblx0XHRcdGxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdFx0c2V0KG5ld1ZhbHVlKTtcblx0XHR9XG5cdH07XG59O1xuXG4vKipcbiAqIENhbGwgYSB3aWRnZXQgZmFjdG9yeSB1c2luZyBwcm92aWRlZCBjb25maWdzLlxuICpcbiAqIEBwYXJhbSBwYXJhbWV0ZXIgLSB0aGUgcGFyYW1ldGVyXG4gKiBAcGFyYW0gcGFyYW1ldGVyLmZhY3RvcnkgLSB0aGUgd2lkZ2V0IGZhY3RvcnkgdG8gY2FsbFxuICogQHBhcmFtIHBhcmFtZXRlci5kZWZhdWx0Q29uZmlnIC0gdGhlIGRlZmF1bHQgY29uZmlnIG9mIHRoZSB3aWRnZXRcbiAqIEBwYXJhbSBwYXJhbWV0ZXIud2lkZ2V0Q29uZmlnIC0gdGhlIGNvbmZpZyBvZiB0aGUgd2lkZ2V0LCBvdmVycmlkaW5nIHRoZSBkZWZhdWx0Q29uZmlnXG4gKiBAcGFyYW0gcGFyYW1ldGVyLmV2ZW50cyAtIHRoZSBldmVudHMgb2YgdGhlIHdpZGdldFxuICogQHBhcmFtIHBhcmFtZXRlci5hZnRlckluaXQgLSBhIGNhbGxiYWNrIHRvIGNhbGwgYWZ0ZXIgc3VjY2Vzc2Z1bCBzZXR1cCBvZiB0aGUgd2lkZ2V0XG4gKiBAcGFyYW0gcGFyYW1ldGVyLnNsb3RUZW1wbGF0ZXMgLSBhIGZ1bmN0aW9uIHRvIHByb3ZpZGUgYWxsIHNsb3QgdGVtcGxhdGVzIHVzaW5nIGNoaWxkIHF1ZXJpZXNcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuc2xvdENoaWxkcmVuIC0gYSBmdW5jdGlvbiB0byBwcm92aWRlIHRoZSBkZWZhdWx0IGNoaWxkcmVuIHNsb3QgdXNpbmcgYSB2aWV3IHF1ZXJ5XG4gKiBAcmV0dXJucyB0aGUgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjb25zdCBjYWxsV2lkZ2V0RmFjdG9yeVdpdGhDb25maWcgPSA8VyBleHRlbmRzIFdpZGdldD4oe1xuXHRmYWN0b3J5LFxuXHRkZWZhdWx0Q29uZmlnLFxuXHR3aWRnZXRDb25maWcsXG5cdGV2ZW50cyxcblx0YWZ0ZXJJbml0LFxuXHRzbG90VGVtcGxhdGVzLFxuXHRzbG90Q2hpbGRyZW4sXG59OiB7XG5cdGZhY3Rvcnk6IFdpZGdldEZhY3Rvcnk8Vz47XG5cdGRlZmF1bHRDb25maWc/OiBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0d2lkZ2V0Q29uZmlnPzogbnVsbCB8IHVuZGVmaW5lZCB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0ZXZlbnRzPzogUGFydGlhbDxQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+Pjtcblx0YWZ0ZXJJbml0PzogKHdpZGdldDogQW5ndWxhcldpZGdldDxXPikgPT4gdm9pZDtcblx0c2xvdFRlbXBsYXRlcz86ICgpID0+IHtcblx0XHRbSyBpbiBrZXlvZiBXaWRnZXRQcm9wczxXPiBhcyBJc1Nsb3RDb250ZW50PFdpZGdldFByb3BzPFc+W0tdPiBleHRlbmRzIDAgPyBuZXZlciA6IEtdOiBXaWRnZXRQcm9wczxXPltLXSBleHRlbmRzIFNsb3RDb250ZW50PGluZmVyIFU+XG5cdFx0XHQ/IFRlbXBsYXRlUmVmPFU+IHwgdW5kZWZpbmVkXG5cdFx0XHQ6IG5ldmVyO1xuXHR9O1xuXHRzbG90Q2hpbGRyZW4/OiAoKSA9PiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZDtcbn0pOiBBbmd1bGFyV2lkZ2V0PFc+ID0+IHtcblx0Y29uc3QgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRjb25zdCBzbG90cyQgPSB3cml0YWJsZSh7fSk7XG5cdGNvbnN0IHByb3BzID0ge307XG5cdGxldCBpbml0RG9uZTogKCkgPT4gdm9pZDtcblx0Y29uc3QgcGF0Y2hTbG90cyA9IGNyZWF0ZVBhdGNoU2xvdHMoc2xvdHMkLnNldCk7XG5cblx0Y29uc3QgcmVzID0ge1xuXHRcdGluaXRpYWxpemVkOiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuXHRcdFx0aW5pdERvbmUgPSByZXNvbHZlO1xuXHRcdH0pLFxuXHRcdHVwZGF0ZVNsb3RzOiAoKSA9PiB7XG5cdFx0XHRpZiAoc2xvdFRlbXBsYXRlcykge1xuXHRcdFx0XHRwYXRjaFNsb3RzKHNsb3RUZW1wbGF0ZXMoKSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwYXRjaChuZXdQcm9wczogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4pIHtcblx0XHRcdC8vIHRlbXBvcmFyeSBmdW5jdGlvbiByZXBsYWNlZCBpbiBuZ0luaXRcblx0XHRcdE9iamVjdC5hc3NpZ24ocHJvcHMsIG5ld1Byb3BzKTtcblx0XHR9LFxuXHRcdG5nSW5pdCgpIHtcblx0XHRcdHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB6b25lV3JhcHBlciA9IGluamVjdChab25lV3JhcHBlcik7XG5cdFx0XHRcdGZhY3RvcnkgPSB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lKGZhY3RvcnkpO1xuXHRcdFx0XHRjb25zdCBkZWZhdWx0Q29uZmlnJCA9IHRvUmVhZGFibGVTdG9yZShkZWZhdWx0Q29uZmlnKTtcblx0XHRcdFx0ZXZlbnRzID0gem9uZVdyYXBwZXIuaW5zaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdChldmVudHMpO1xuXHRcdFx0XHRjb25zdCB3aWRnZXQgPSBmYWN0b3J5KHtcblx0XHRcdFx0XHRjb25maWc6IGNvbXB1dGVkKCgpID0+ICh7XG5cdFx0XHRcdFx0XHQuLi5kZWZhdWx0Q29uZmlnJCgpLFxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IHNsb3RDaGlsZHJlbj8uKCksXG5cdFx0XHRcdFx0XHQuLi53aWRnZXRDb25maWc/LigpLFxuXHRcdFx0XHRcdFx0Li4uc2xvdHMkKCksXG5cdFx0XHRcdFx0XHQuLi4oZXZlbnRzIGFzIFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+KSxcblx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdFx0cHJvcHMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKHJlcywge1xuXHRcdFx0XHRcdHBhdGNoOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lKHdpZGdldC5wYXRjaCksXG5cdFx0XHRcdFx0ZGlyZWN0aXZlczogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmVzT2JqZWN0KHdpZGdldC5kaXJlY3RpdmVzKSxcblx0XHRcdFx0XHRhcGk6IHpvbmVXcmFwcGVyLm91dHNpZGVOZ1pvbmVXcmFwRnVuY3Rpb25zT2JqZWN0KHdpZGdldC5hcGkpLFxuXHRcdFx0XHRcdHN0YXRlOiBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0XHRcdFx0XHRPYmplY3QuZW50cmllczxSZWFkYWJsZVNpZ25hbDx1bmtub3duPj4od2lkZ2V0LnN0b3JlcyBhcyBhbnkpLm1hcCgoW2tleSwgdmFsXSkgPT4gW2tleS5zbGljZSgwLCAtMSksIHRvQW5ndWxhclNpZ25hbCh2YWwpXSksXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGFmdGVySW5pdD8uKHJlcyBhcyBBbmd1bGFyV2lkZ2V0PFc+KTtcblx0XHRcdFx0aW5pdERvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHJlcyBhcyBBbmd1bGFyV2lkZ2V0PFc+O1xufTtcblxuZnVuY3Rpb24gcGF0Y2hTaW1wbGVDaGFuZ2VzKHBhdGNoRm46IChvYmo6IGFueSkgPT4gdm9pZCwgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRjb25zdCBvYmo6IGFueSA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHNpbXBsZUNoYW5nZV0gb2YgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykpIHtcblx0XHRpZiAoc2ltcGxlQ2hhbmdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG9ialtrZXldID0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblx0cGF0Y2hGbihvYmopO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFcgZXh0ZW5kcyBXaWRnZXQ+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF93aWRnZXQ6IEFuZ3VsYXJXaWRnZXQ8Vz4pIHt9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgd2lkZ2V0IGFwaVxuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0IGFwaVxuXHQgKi9cblx0Z2V0IGFwaSgpOiBXWydhcGknXSB7XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldC5hcGk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB3aWRnZXQgc3RhdGUgYXMgYW4gQW5ndWxhciB7QGxpbmsgU2lnbmFsfVxuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0IHN0YXRlXG5cdCAqL1xuXHRnZXQgc3RhdGUoKTogQW5ndWxhclN0YXRlPFc+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LnN0YXRlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgd2lkZ2V0IGRpcmVjdGl2ZXNcblx0ICogQHJldHVybnMgdGhlIHdpZGdldCBkaXJlY3RpdmVzXG5cdCAqL1xuXHRnZXQgZGlyZWN0aXZlcygpOiBXWydkaXJlY3RpdmVzJ10ge1xuXHRcdHJldHVybiB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcztcblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHQvKiogQGluaGVyaXRkb2MgKi9cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0Lm5nSW5pdCgpO1xuXHR9XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQudXBkYXRlU2xvdHMoKTtcblx0fVxufVxuIl19`;export{Q as default};
