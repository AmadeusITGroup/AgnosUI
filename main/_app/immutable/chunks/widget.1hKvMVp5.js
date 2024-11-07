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
/**
 * An abstract base class for widget directives, providing common functionality
 * for Angular components that interact with widgets.
 *
 * @template W - The type of the widget.
 */
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
     * Retrieves the widget state. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
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
    /**
     * @inheritdoc
     * @internal
     */
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    /** @internal */
    ngOnInit() {
        this._widget.ngInit();
    }
    /** @internal */
    ngAfterContentChecked() {
        this._widget.updateSlots();
    }
    static { this.ɵfac = function BaseWidgetDirective_Factory(__ngFactoryType__) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseWidgetDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetDirective, [{
        type: Directive
    }], () => [{ type: undefined }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUF1QixRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRixPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFtQixHQUFpQyxFQUFFLEVBQUU7SUFDaEYsSUFBSSxTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxNQUFTLEVBQUUsRUFBRTtRQUNwQixNQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQXlCLEVBQUUsQ0FBQztZQUMvRCxNQUFNLFNBQVMsR0FBSSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLHlCQUF5QjtnQkFDekIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2YsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFD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bUJBQW1CO2NBRHhDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkLCB0eXBlIFJlYWRhYmxlU2lnbmFsLCB3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5qZWN0b3IsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtBbmd1bGFyU3RhdGUsIEFuZ3VsYXJXaWRnZXQsIElzU2xvdENvbnRlbnQsIFNsb3RDb250ZW50LCBXaWRnZXQsIFdpZGdldEZhY3RvcnksIFdpZGdldFByb3BzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge3RvQW5ndWxhclNpZ25hbCwgdG9SZWFkYWJsZVN0b3JlfSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQge1pvbmVXcmFwcGVyfSBmcm9tICcuL3pvbmUnO1xuXG5jb25zdCBjcmVhdGVQYXRjaFNsb3RzID0gPFQgZXh0ZW5kcyBvYmplY3Q+KHNldDogKG9iamVjdDogUGFydGlhbDxUPikgPT4gdm9pZCkgPT4ge1xuXHRsZXQgbGFzdFZhbHVlOiBQYXJ0aWFsPFQ+ID0ge307XG5cdHJldHVybiAob2JqZWN0OiBUKSA9PiB7XG5cdFx0Y29uc3QgbmV3VmFsdWU6IFBhcnRpYWw8VD4gPSB7fTtcblx0XHRsZXQgaGFzQ2hhbmdlID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSBhcyAoc3RyaW5nICYga2V5b2YgVClbXSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0S2V5ID0gKG9iamVjdCBhcyBhbnkpW2tleV07XG5cdFx0XHRpZiAob2JqZWN0S2V5ICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gb25seSB1c2UgZGVmaW5lZCBzbG90c1xuXHRcdFx0XHRuZXdWYWx1ZVtrZXldID0gb2JqZWN0S2V5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9iamVjdEtleSAhPSBsYXN0VmFsdWVba2V5XSkge1xuXHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaGFzQ2hhbmdlKSB7XG5cdFx0XHRsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdHNldChuZXdWYWx1ZSk7XG5cdFx0fVxuXHR9O1xufTtcblxuLyoqXG4gKiBDYWxsIGEgd2lkZ2V0IGZhY3RvcnkgdXNpbmcgcHJvdmlkZWQgY29uZmlncy5cbiAqXG4gKiBAcGFyYW0gcGFyYW1ldGVyIC0gdGhlIHBhcmFtZXRlclxuICogQHBhcmFtIHBhcmFtZXRlci5mYWN0b3J5IC0gdGhlIHdpZGdldCBmYWN0b3J5IHRvIGNhbGxcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuZGVmYXVsdENvbmZpZyAtIHRoZSBkZWZhdWx0IGNvbmZpZyBvZiB0aGUgd2lkZ2V0XG4gKiBAcGFyYW0gcGFyYW1ldGVyLndpZGdldENvbmZpZyAtIHRoZSBjb25maWcgb2YgdGhlIHdpZGdldCwgb3ZlcnJpZGluZyB0aGUgZGVmYXVsdENvbmZpZ1xuICogQHBhcmFtIHBhcmFtZXRlci5ldmVudHMgLSB0aGUgZXZlbnRzIG9mIHRoZSB3aWRnZXRcbiAqIEBwYXJhbSBwYXJhbWV0ZXIuYWZ0ZXJJbml0IC0gYSBjYWxsYmFjayB0byBjYWxsIGFmdGVyIHN1Y2Nlc3NmdWwgc2V0dXAgb2YgdGhlIHdpZGdldFxuICogQHBhcmFtIHBhcmFtZXRlci5zbG90VGVtcGxhdGVzIC0gYSBmdW5jdGlvbiB0byBwcm92aWRlIGFsbCBzbG90IHRlbXBsYXRlcyB1c2luZyBjaGlsZCBxdWVyaWVzXG4gKiBAcGFyYW0gcGFyYW1ldGVyLnNsb3RDaGlsZHJlbiAtIGEgZnVuY3Rpb24gdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBjaGlsZHJlbiBzbG90IHVzaW5nIGEgdmlldyBxdWVyeVxuICogQHJldHVybnMgdGhlIHdpZGdldFxuICovXG5leHBvcnQgY29uc3QgY2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0ZmFjdG9yeSxcblx0ZGVmYXVsdENvbmZpZyxcblx0d2lkZ2V0Q29uZmlnLFxuXHRldmVudHMsXG5cdGFmdGVySW5pdCxcblx0c2xvdFRlbXBsYXRlcyxcblx0c2xvdENoaWxkcmVuLFxufToge1xuXHRmYWN0b3J5OiBXaWRnZXRGYWN0b3J5PFc+O1xuXHRkZWZhdWx0Q29uZmlnPzogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD47XG5cdHdpZGdldENvbmZpZz86IG51bGwgfCB1bmRlZmluZWQgfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD47XG5cdGV2ZW50cz86IFBhcnRpYWw8UGljazxXaWRnZXRQcm9wczxXPiwga2V5b2YgV2lkZ2V0UHJvcHM8Vz4gJiBgb24ke3N0cmluZ31gPj47XG5cdGFmdGVySW5pdD86ICh3aWRnZXQ6IEFuZ3VsYXJXaWRnZXQ8Vz4pID0+IHZvaWQ7XG5cdHNsb3RUZW1wbGF0ZXM/OiAoKSA9PiB7XG5cdFx0W0sgaW4ga2V5b2YgV2lkZ2V0UHJvcHM8Vz4gYXMgSXNTbG90Q29udGVudDxXaWRnZXRQcm9wczxXPltLXT4gZXh0ZW5kcyAwID8gbmV2ZXIgOiBLXTogV2lkZ2V0UHJvcHM8Vz5bS10gZXh0ZW5kcyBTbG90Q29udGVudDxpbmZlciBVPlxuXHRcdFx0PyBUZW1wbGF0ZVJlZjxVPiB8IHVuZGVmaW5lZFxuXHRcdFx0OiBuZXZlcjtcblx0fTtcblx0c2xvdENoaWxkcmVuPzogKCkgPT4gVGVtcGxhdGVSZWY8dm9pZD4gfCB1bmRlZmluZWQ7XG59KTogQW5ndWxhcldpZGdldDxXPiA9PiB7XG5cdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0Y29uc3Qgc2xvdHMkID0gd3JpdGFibGUoe30pO1xuXHRjb25zdCBwcm9wcyA9IHt9O1xuXHRsZXQgaW5pdERvbmU6ICgpID0+IHZvaWQ7XG5cdGNvbnN0IHBhdGNoU2xvdHMgPSBjcmVhdGVQYXRjaFNsb3RzKHNsb3RzJC5zZXQpO1xuXG5cdGNvbnN0IHJlcyA9IHtcblx0XHRpbml0aWFsaXplZDogbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcblx0XHRcdGluaXREb25lID0gcmVzb2x2ZTtcblx0XHR9KSxcblx0XHR1cGRhdGVTbG90czogKCkgPT4ge1xuXHRcdFx0aWYgKHNsb3RUZW1wbGF0ZXMpIHtcblx0XHRcdFx0cGF0Y2hTbG90cyhzbG90VGVtcGxhdGVzKCkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cGF0Y2gobmV3UHJvcHM6IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+KSB7XG5cdFx0XHQvLyB0ZW1wb3JhcnkgZnVuY3Rpb24gcmVwbGFjZWQgaW4gbmdJbml0XG5cdFx0XHRPYmplY3QuYXNzaWduKHByb3BzLCBuZXdQcm9wcyk7XG5cdFx0fSxcblx0XHRuZ0luaXQoKSB7XG5cdFx0XHRydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgem9uZVdyYXBwZXIgPSBpbmplY3QoWm9uZVdyYXBwZXIpO1xuXHRcdFx0XHRmYWN0b3J5ID0gem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZShmYWN0b3J5KTtcblx0XHRcdFx0Y29uc3QgZGVmYXVsdENvbmZpZyQgPSB0b1JlYWRhYmxlU3RvcmUoZGVmYXVsdENvbmZpZyk7XG5cdFx0XHRcdGV2ZW50cyA9IHpvbmVXcmFwcGVyLmluc2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QoZXZlbnRzKTtcblx0XHRcdFx0Y29uc3Qgd2lkZ2V0ID0gZmFjdG9yeSh7XG5cdFx0XHRcdFx0Y29uZmlnOiBjb21wdXRlZCgoKSA9PiAoe1xuXHRcdFx0XHRcdFx0Li4uZGVmYXVsdENvbmZpZyQoKSxcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBzbG90Q2hpbGRyZW4/LigpLFxuXHRcdFx0XHRcdFx0Li4ud2lkZ2V0Q29uZmlnPy4oKSxcblx0XHRcdFx0XHRcdC4uLnNsb3RzJCgpLFxuXHRcdFx0XHRcdFx0Li4uKGV2ZW50cyBhcyBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiksXG5cdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRcdHByb3BzLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXMsIHtcblx0XHRcdFx0XHRwYXRjaDogem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZSh3aWRnZXQucGF0Y2gpLFxuXHRcdFx0XHRcdGRpcmVjdGl2ZXM6IHpvbmVXcmFwcGVyLm91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlc09iamVjdCh3aWRnZXQuZGlyZWN0aXZlcyksXG5cdFx0XHRcdFx0YXBpOiB6b25lV3JhcHBlci5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCh3aWRnZXQuYXBpKSxcblx0XHRcdFx0XHRzdGF0ZTogT2JqZWN0LmZyb21FbnRyaWVzKFxuXHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXM8UmVhZGFibGVTaWduYWw8dW5rbm93bj4+KHdpZGdldC5zdG9yZXMgYXMgYW55KS5tYXAoKFtrZXksIHZhbF0pID0+IFtrZXkuc2xpY2UoMCwgLTEpLCB0b0FuZ3VsYXJTaWduYWwodmFsKV0pLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhZnRlckluaXQ/LihyZXMgYXMgQW5ndWxhcldpZGdldDxXPik7XG5cdFx0XHRcdGluaXREb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiByZXMgYXMgQW5ndWxhcldpZGdldDxXPjtcbn07XG5cbmZ1bmN0aW9uIHBhdGNoU2ltcGxlQ2hhbmdlcyhwYXRjaEZuOiAob2JqOiBhbnkpID0+IHZvaWQsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0Y29uc3Qgb2JqOiBhbnkgPSB7fTtcblx0Zm9yIChjb25zdCBba2V5LCBzaW1wbGVDaGFuZ2VdIG9mIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpKSB7XG5cdFx0aWYgKHNpbXBsZUNoYW5nZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRvYmpba2V5XSA9IHNpbXBsZUNoYW5nZS5jdXJyZW50VmFsdWU7XG5cdFx0fVxuXHR9XG5cdHBhdGNoRm4ob2JqKTtcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB3aWRnZXQgZGlyZWN0aXZlcywgcHJvdmlkaW5nIGNvbW1vbiBmdW5jdGlvbmFsaXR5XG4gKiBmb3IgQW5ndWxhciBjb21wb25lbnRzIHRoYXQgaW50ZXJhY3Qgd2l0aCB3aWRnZXRzLlxuICpcbiAqIEB0ZW1wbGF0ZSBXIC0gVGhlIHR5cGUgb2YgdGhlIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVdpZGdldERpcmVjdGl2ZTxXIGV4dGVuZHMgV2lkZ2V0PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfd2lkZ2V0OiBBbmd1bGFyV2lkZ2V0PFc+KSB7fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHdpZGdldCBhcGlcblx0ICogQHJldHVybnMgdGhlIHdpZGdldCBhcGlcblx0ICovXG5cdGdldCBhcGkoKTogV1snYXBpJ10ge1xuXHRcdHJldHVybiB0aGlzLl93aWRnZXQuYXBpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgd2lkZ2V0IHN0YXRlLiBFYWNoIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBpcyBleHBvc2VkIHRocm91Z2ggYW4gQW5ndWxhciB7QGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmRldi9hcGkvY29yZS9TaWduYWwgfCBTaWduYWx9XG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXQgc3RhdGVcblx0ICovXG5cdGdldCBzdGF0ZSgpOiBBbmd1bGFyU3RhdGU8Vz4ge1xuXHRcdHJldHVybiB0aGlzLl93aWRnZXQuc3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB3aWRnZXQgZGlyZWN0aXZlc1xuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0IGRpcmVjdGl2ZXNcblx0ICovXG5cdGdldCBkaXJlY3RpdmVzKCk6IFdbJ2RpcmVjdGl2ZXMnXSB7XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0ZG9jXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQubmdJbml0KCk7XG5cdH1cblxuXHQvKiogQGludGVybmFsICovXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQudXBkYXRlU2xvdHMoKTtcblx0fVxufVxuIl19`;export{Q as default};
