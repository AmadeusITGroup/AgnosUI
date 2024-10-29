const Q=`import { Injectable, NgZone, inject } from '@angular/core';
import * as i0 from "@angular/core";
const noop = () => { };
const identity = (a) => a;
const createObjectWrapper = (wrap) => (object) => {
    if (!object || typeof object !== 'object') {
        return object;
    }
    const res = {};
    for (const key of Object.keys(object)) {
        res[key] = wrap(object[key]);
    }
    return res;
};
const createReturnValueWrapper = (wrapReturnValue, wrapResult) => (fn) => wrapResult(typeof fn === 'function' ? ((...args) => wrapReturnValue(fn(...args))) : fn);
/**
 * A utility class that provides methods to run functions inside or outside of Angular's NgZone.
 * This can be useful for optimizing performance by avoiding unnecessary change detection cycles.
 */
export class ZoneWrapper {
    constructor() {
        this.#zone = inject(NgZone);
        this.#hasZone = this.#zone.run(() => NgZone.isInAngularZone()); // check if zone is enabled (can be NoopZone, cf https://angular.io/guide/zone#noopzone)
        this.#runNeeded = false;
        this.#runPlanned = false;
        this.planNgZoneRun = this.#hasZone
            ? () => {
                if (this.#zone.isStable) {
                    this.#runNeeded = true;
                    if (!this.#runPlanned) {
                        this.#runPlanned = true;
                        void (async () => {
                            await Promise.resolve();
                            this.#runPlanned = false;
                            if (this.#runNeeded) {
                                this.ngZoneRun(noop);
                            }
                        })();
                    }
                }
            }
            : noop;
        this.insideNgZone = this.#hasZone
            ? (fn) => (typeof fn === 'function' ? ((...args) => this.ngZoneRun(() => fn(...args))) : fn)
            : identity;
        this.insideNgZoneWrapFunctionsObject = createObjectWrapper(this.insideNgZone);
        this.outsideNgZone = this.#hasZone
            ? (fn) => (typeof fn === 'function' ? ((...args) => this.#zone.runOutsideAngular(() => fn(...args))) : fn)
            : identity;
        this.outsideNgZoneWrapFunctionsObject = createObjectWrapper(this.outsideNgZone);
        this.outsideNgZoneWrapDirective = createReturnValueWrapper(this.outsideNgZoneWrapFunctionsObject, this.outsideNgZone);
        this.outsideNgZoneWrapDirectivesObject = createObjectWrapper(this.outsideNgZoneWrapDirective);
    }
    #zone;
    #hasZone; // check if zone is enabled (can be NoopZone, cf https://angular.io/guide/zone#noopzone)
    #runNeeded;
    #runPlanned;
    /**
     * Run the input function synchronously within the Angular zone
     *
     * @param fn - a function to run
     * @returns the value returned by the function
     */
    ngZoneRun(fn) {
        this.#runNeeded = false;
        return this.#zone.run(fn);
    }
    static { this.ɵfac = function ZoneWrapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ZoneWrapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZoneWrapper, factory: ZoneWrapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoneWrapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy96b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUksQ0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFJaEMsTUFBTSxtQkFBbUIsR0FDeEIsQ0FBQyxJQUFhLEVBQVcsRUFBRSxDQUMzQixDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLEdBQUcsR0FBRyxFQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDLENBQUM7QUFFSCxNQUFNLHdCQUF3QixHQUM3QixDQUFDLGVBQXdCLEVBQUUsVUFBbUIsRUFBVyxFQUFFLENBQzNELENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDTixVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTFHOzs7R0FHRztBQUlI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QUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmUsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IGlkZW50aXR5ID0gPFQ+KGE6IFQpID0+IGE7XG5cbnR5cGUgV3JhcHBlciA9IDxUPihmbjogVCkgPT4gVDtcblxuY29uc3QgY3JlYXRlT2JqZWN0V3JhcHBlciA9XG5cdCh3cmFwOiBXcmFwcGVyKTogV3JhcHBlciA9PlxuXHQob2JqZWN0KSA9PiB7XG5cdFx0aWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IHt9IGFzIGFueTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRyZXNba2V5XSA9IHdyYXAoKG9iamVjdCBhcyBhbnkpW2tleV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzO1xuXHR9O1xuXG5jb25zdCBjcmVhdGVSZXR1cm5WYWx1ZVdyYXBwZXIgPVxuXHQod3JhcFJldHVyblZhbHVlOiBXcmFwcGVyLCB3cmFwUmVzdWx0OiBXcmFwcGVyKTogV3JhcHBlciA9PlxuXHQoZm4pID0+XG5cdFx0d3JhcFJlc3VsdCh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyAoKCguLi5hcmdzOiBhbnlbXSkgPT4gd3JhcFJldHVyblZhbHVlKGZuKC4uLmFyZ3MpKSkgYXMgYW55KSA6IGZuKTtcblxuLyoqXG4gKiBBIHV0aWxpdHkgY2xhc3MgdGhhdCBwcm92aWRlcyBtZXRob2RzIHRvIHJ1biBmdW5jdGlvbnMgaW5zaWRlIG9yIG91dHNpZGUgb2YgQW5ndWxhcidzIE5nWm9uZS5cbiAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBmb3Igb3B0aW1pemluZyBwZXJmb3JtYW5jZSBieSBhdm9pZGluZyB1bm5lY2Vzc2FyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFpvbmVXcmFwcGVyIHtcblx0cmVhZG9ubHkgI3pvbmUgPSBpbmplY3QoTmdab25lKTtcblx0cmVhZG9ubHkgI2hhc1pvbmUgPSB0aGlzLiN6b25lLnJ1bigoKSA9PiBOZ1pvbmUuaXNJbkFuZ3VsYXJab25lKCkpOyAvLyBjaGVjayBpZiB6b25lIGlzIGVuYWJsZWQgKGNhbiBiZSBOb29wWm9uZSwgY2YgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3pvbmUjbm9vcHpvbmUpXG5cdCNydW5OZWVkZWQgPSBmYWxzZTtcblx0I3J1blBsYW5uZWQgPSBmYWxzZTtcblxuXHRwbGFuTmdab25lUnVuID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy4jem9uZS5pc1N0YWJsZSkge1xuXHRcdFx0XHRcdHRoaXMuI3J1bk5lZWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLiNydW5QbGFubmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiNydW5QbGFubmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuI3J1blBsYW5uZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuI3J1bk5lZWRlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmdab25lUnVuKG5vb3ApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdDogbm9vcDtcblxuXHQvKipcblx0ICogUnVuIHRoZSBpbnB1dCBmdW5jdGlvbiBzeW5jaHJvbm91c2x5IHdpdGhpbiB0aGUgQW5ndWxhciB6b25lXG5cdCAqXG5cdCAqIEBwYXJhbSBmbiAtIGEgZnVuY3Rpb24gdG8gcnVuXG5cdCAqIEByZXR1cm5zIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb25cblx0ICovXG5cdG5nWm9uZVJ1bjxUPihmbjogKCkgPT4gVCk6IFQge1xuXHRcdHRoaXMuI3J1bk5lZWRlZCA9IGZhbHNlO1xuXHRcdHJldHVybiB0aGlzLiN6b25lLnJ1bihmbik7XG5cdH1cblxuXHRpbnNpZGVOZ1pvbmU6IFdyYXBwZXIgPSB0aGlzLiNoYXNab25lXG5cdFx0PyAoZm4pID0+ICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyAoKCguLi5hcmdzOiBhbnlbXSkgPT4gdGhpcy5uZ1pvbmVSdW4oKCkgPT4gZm4oLi4uYXJncykpKSBhcyBhbnkpIDogZm4pXG5cdFx0OiBpZGVudGl0eTtcblx0aW5zaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCA9IGNyZWF0ZU9iamVjdFdyYXBwZXIodGhpcy5pbnNpZGVOZ1pvbmUpO1xuXG5cdG91dHNpZGVOZ1pvbmU6IFdyYXBwZXIgPSB0aGlzLiNoYXNab25lXG5cdFx0PyAoZm4pID0+ICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyAoKCguLi5hcmdzOiBhbnlbXSkgPT4gdGhpcy4jem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBmbiguLi5hcmdzKSkpIGFzIGFueSkgOiBmbilcblx0XHQ6IGlkZW50aXR5O1xuXG5cdG91dHNpZGVOZ1pvbmVXcmFwRnVuY3Rpb25zT2JqZWN0ID0gY3JlYXRlT2JqZWN0V3JhcHBlcih0aGlzLm91dHNpZGVOZ1pvbmUpO1xuXHRvdXRzaWRlTmdab25lV3JhcERpcmVjdGl2ZSA9IGNyZWF0ZVJldHVyblZhbHVlV3JhcHBlcih0aGlzLm91dHNpZGVOZ1pvbmVXcmFwRnVuY3Rpb25zT2JqZWN0LCB0aGlzLm91dHNpZGVOZ1pvbmUpO1xuXHRvdXRzaWRlTmdab25lV3JhcERpcmVjdGl2ZXNPYmplY3QgPSBjcmVhdGVPYmplY3RXcmFwcGVyKHRoaXMub3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmUpO1xufVxuIl19`;export{Q as default};
