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
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngOnInit() {
        this._widget.ngInit();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(t) { return new (t || BaseWidgetDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUNOLG1CQUFtQixHQU9uQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUVuQyxNQUFNLGdCQUFnQixHQUFHLENBQW1CLEdBQWlDLEVBQUUsRUFBRTtJQUNoRixJQUFJLFNBQVMsR0FBZSxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUFDLE1BQVMsRUFBRSxFQUFFO1FBQ3BCLE1BQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBeUIsRUFBRTtZQUM5RCxNQUFNLFNBQVMsR0FBSSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDMUI7WUFDRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDRDtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNyQixHQUFHLENBQUMsUUFBUSxDQUFD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RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQVcsRUFBRSxRQUFxQixFQUFFLFVBQThCLEVBQUUsRUFBRTtJQUNwRyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ25DLFVBQVUsQ0FBQyxHQUFHLEdBQUc7UUFDaEIsTUFBTSxLQUFLLEdBQUcsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFHRixNQUFNLE9BQWdCLG1CQUFtQjtJQUd4QyxJQUFJLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7b0ZBckJvQixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUR4QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZCwgd3JpdGFibGUsIHR5cGUgUmVhZGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXMsIE9uSW5pdCwgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbmplY3RvciwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0dG9TbG90Q29udGV4dFdpZGdldCxcblx0dHlwZSBBbmd1bGFyV2lkZ2V0LFxuXHR0eXBlIENvbnRleHRXaWRnZXQsXG5cdHR5cGUgV2lkZ2V0LFxuXHR0eXBlIFdpZGdldEZhY3RvcnksXG5cdHR5cGUgV2lkZ2V0UHJvcHMsXG5cdHR5cGUgV2lkZ2V0U3RhdGUsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7dG9Bbmd1bGFyU2lnbmFsLCB0b1JlYWRhYmxlU3RvcmV9IGZyb20gJy4vc3RvcmVzJztcbmltcG9ydCB7Wm9uZVdyYXBwZXJ9IGZyb20gJy4vem9uZSc7XG5cbmNvbnN0IGNyZWF0ZVBhdGNoU2xvdHMgPSA8VCBleHRlbmRzIG9iamVjdD4oc2V0OiAob2JqZWN0OiBQYXJ0aWFsPFQ+KSA9PiB2b2lkKSA9PiB7XG5cdGxldCBsYXN0VmFsdWU6IFBhcnRpYWw8VD4gPSB7fTtcblx0cmV0dXJuIChvYmplY3Q6IFQpID0+IHtcblx0XHRjb25zdCBuZXdWYWx1ZTogUGFydGlhbDxUPiA9IHt9O1xuXHRcdGxldCBoYXNDaGFuZ2UgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpIGFzIChzdHJpbmcgJiBrZXlvZiBUKVtdKSB7XG5cdFx0XHRjb25zdCBvYmplY3RLZXkgPSAob2JqZWN0IGFzIGFueSlba2V5XTtcblx0XHRcdGlmIChvYmplY3RLZXkgIT0gbnVsbCkge1xuXHRcdFx0XHQvLyBvbmx5IHVzZSBkZWZpbmVkIHNsb3RzXG5cdFx0XHRcdG5ld1ZhbHVlW2tleV0gPSBvYmplY3RLZXk7XG5cdFx0XHR9XG5cdFx0XHRpZiAob2JqZWN0S2V5ICE9IGxhc3RWYWx1ZVtrZXldKSB7XG5cdFx0XHRcdGhhc0NoYW5nZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChoYXNDaGFuZ2UpIHtcblx0XHRcdGxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdFx0c2V0KG5ld1ZhbHVlKTtcblx0XHR9XG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgY2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0ZmFjdG9yeSxcblx0ZGVmYXVsdENvbmZpZyxcblx0d2lkZ2V0Q29uZmlnLFxuXHRldmVudHMsXG5cdGFmdGVySW5pdCxcbn06IHtcblx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0ZGVmYXVsdENvbmZpZz86IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHR3aWRnZXRDb25maWc/OiBudWxsIHwgdW5kZWZpbmVkIHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHRldmVudHM6IFBpY2s8V2lkZ2V0UHJvcHM8Vz4sIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYG9uJHtzdHJpbmd9YD47XG5cdGFmdGVySW5pdD86ICgpID0+IHZvaWQ7XG59KTogQW5ndWxhcldpZGdldDxXPiA9PiB7XG5cdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0Y29uc3Qgc2xvdHMkID0gd3JpdGFibGUoe30pO1xuXHRjb25zdCBwcm9wcyA9IHt9O1xuXHRsZXQgaW5pdERvbmU6ICgpID0+IHZvaWQ7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRpbml0aWFsaXplZDogbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGluaXREb25lID0gcmVzb2x2ZTtcblx0XHR9KSxcblx0XHRwYXRjaFNsb3RzOiBjcmVhdGVQYXRjaFNsb3RzKHNsb3RzJC5zZXQpLFxuXHRcdHBhdGNoKG5ld1Byb3BzKSB7XG5cdFx0XHQvLyB0ZW1wb3JhcnkgZnVuY3Rpb24gcmVwbGFjZWQgaW4gbmdJbml0XG5cdFx0XHRPYmplY3QuYXNzaWduKHByb3BzLCBuZXdQcm9wcyk7XG5cdFx0fSxcblx0XHRuZ0luaXQoKSB7XG5cdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgem9uZVdyYXBwZXIgPSBpbmplY3QoWm9uZVdyYXBwZXIpO1xuXHRcdFx0XHRmYWN0b3J5ID0gem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZShmYWN0b3J5KTtcblx0XHRcdFx0Y29uc3QgZGVmYXVsdENvbmZpZyQgPSB0b1JlYWRhYmxlU3RvcmUoZGVmYXVsdENvbmZpZyk7XG5cdFx0XHRcdGV2ZW50cyA9IHpvbmVXcmFwcGVyLmluc2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QoZXZlbnRzKTtcblx0XHRcdFx0Y29uc3Qgd2lkZ2V0ID0gZmFjdG9yeSh7XG5cdFx0XHRcdFx0Y29uZmlnOiBjb21wdXRlZCgoKSA9PiAoey4uLmRlZmF1bHRDb25maWckKCksIC4uLndpZGdldENvbmZpZz8uKCksIC4uLnNsb3RzJCgpLCAuLi4oZXZlbnRzIGFzIFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+KX0pKSxcblx0XHRcdFx0XHRwcm9wcyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHdyYXBwZWRXaWRnZXQ6IFcgPSB7XG5cdFx0XHRcdFx0Li4ud2lkZ2V0LFxuXHRcdFx0XHRcdHBhdGNoOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lKHdpZGdldC5wYXRjaCksXG5cdFx0XHRcdFx0ZGlyZWN0aXZlczogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmVzT2JqZWN0KHdpZGdldC5kaXJlY3RpdmVzKSxcblx0XHRcdFx0XHRhY3Rpb25zOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCh3aWRnZXQuYWN0aW9ucyksXG5cdFx0XHRcdFx0YXBpOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCh3aWRnZXQuYXBpKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXMsIHdyYXBwZWRXaWRnZXQsIHtcblx0XHRcdFx0XHR3aWRnZXQ6IHRvU2xvdENvbnRleHRXaWRnZXQod3JhcHBlZFdpZGdldCksXG5cdFx0XHRcdFx0bmdTdGF0ZTogdG9Bbmd1bGFyU2lnbmFsKHdyYXBwZWRXaWRnZXQuc3RhdGUkIGFzIFJlYWRhYmxlU2lnbmFsPFdpZGdldFN0YXRlPFc+PiksXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhZnRlckluaXQ/LigpO1xuXHRcdFx0XHRpbml0RG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0fSBhcyBBbmd1bGFyV2lkZ2V0PFc+O1xuXG5cdHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBwYXRjaFNpbXBsZUNoYW5nZXMocGF0Y2hGbjogKG9iajogYW55KSA9PiB2b2lkLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdGNvbnN0IG9iajogYW55ID0ge307XG5cdGZvciAoY29uc3QgW2tleSwgc2ltcGxlQ2hhbmdlXSBvZiBPYmplY3QuZW50cmllcyhjaGFuZ2VzKSkge1xuXHRcdGlmIChzaW1wbGVDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0b2JqW2tleV0gPSBzaW1wbGVDaGFuZ2UuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXHRwYXRjaEZuKG9iaik7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGdldHRlciBhbmQgcmV0dXJucyB0aGF0IHJlc3VsdCBkaXJlY3RseSBmb3Igc3Vic2VxdWVudCBjYWxsc1xuICpcbiAqIEFwcGxpZXMgdG86IGNsYXNzIGdldHRlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IENhY2hlZFByb3BlcnR5ID0gKHRhcmdldDogYW55LCBwcm9wZXJ0eTogUHJvcGVydHlLZXksIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuXHRjb25zdCBvcmlnaW5hbEdldCA9IGRlc2NyaXB0b3IuZ2V0O1xuXHRkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IG9yaWdpbmFsR2V0Py5jYWxsKHRoaXMpO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eSwge3ZhbHVlLCB3cml0YWJsZTogZmFsc2V9KTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH07XG59O1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFcgZXh0ZW5kcyBXaWRnZXQ+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX3dpZGdldDogQW5ndWxhcldpZGdldDxXPjtcblxuXHRnZXQgYXBpKCk6IFdbJ2FwaSddIHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0LmFwaTtcblx0fVxuXG5cdGdldCBzdGF0ZSgpOiBTaWduYWw8V2lkZ2V0U3RhdGU8Vz4+IHtcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0Lm5nU3RhdGU7XG5cdH1cblxuXHRnZXQgd2lkZ2V0KCk6IENvbnRleHRXaWRnZXQ8Vz4ge1xuXHRcdHJldHVybiB0aGlzLl93aWRnZXQud2lkZ2V0O1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0Lm5nSW5pdCgpO1xuXHR9XG59XG4iXX0=`;export{Q as default};
