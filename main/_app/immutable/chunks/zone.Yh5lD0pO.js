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
                            await 0;
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
    static { this.ɵfac = function ZoneWrapper_Factory(t) { return new (t || ZoneWrapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZoneWrapper, factory: ZoneWrapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoneWrapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy96b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUksQ0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFJaEMsTUFBTSxtQkFBbUIsR0FDeEIsQ0FBQyxJQUFhLEVBQVcsRUFBRSxDQUMzQixDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDMUMsT0FBTyxNQUFNLENBQUM7S0FDZDtJQUNELE1BQU0sR0FBRyxHQUFHLEVBQVMsQ0FBQztJQUN0QixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUgsTUFBTSx3QkFBd0IsR0FDN0IsQ0FBQyxlQUF3QixFQUFFLFVBQW1CLEVBQVcsRUFBRSxDQUMzRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQ04sVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUsxRyxNQUFNLE9BQU8sV0FBVztJQUh4QjtRQUlVLFVBQUss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IGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IGlkZW50aXR5ID0gPFQ+KGE6IFQpID0+IGE7XG5cbnR5cGUgV3JhcHBlciA9IDxUPihmbjogVCkgPT4gVDtcblxuY29uc3QgY3JlYXRlT2JqZWN0V3JhcHBlciA9XG5cdCh3cmFwOiBXcmFwcGVyKTogV3JhcHBlciA9PlxuXHQob2JqZWN0KSA9PiB7XG5cdFx0aWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IHt9IGFzIGFueTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRyZXNba2V5XSA9IHdyYXAoKG9iamVjdCBhcyBhbnkpW2tleV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzO1xuXHR9O1xuXG5jb25zdCBjcmVhdGVSZXR1cm5WYWx1ZVdyYXBwZXIgPVxuXHQod3JhcFJldHVyblZhbHVlOiBXcmFwcGVyLCB3cmFwUmVzdWx0OiBXcmFwcGVyKTogV3JhcHBlciA9PlxuXHQoZm4pID0+XG5cdFx0d3JhcFJlc3VsdCh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyAoKCguLi5hcmdzOiBhbnlbXSkgPT4gd3JhcFJldHVyblZhbHVlKGZuKC4uLmFyZ3MpKSkgYXMgYW55KSA6IGZuKTtcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFpvbmVXcmFwcGVyIHtcblx0cmVhZG9ubHkgI3pvbmUgPSBpbmplY3QoTmdab25lKTtcblx0cmVhZG9ubHkgI2hhc1pvbmUgPSB0aGlzLiN6b25lLnJ1bigoKSA9PiBOZ1pvbmUuaXNJbkFuZ3VsYXJab25lKCkpOyAvLyBjaGVjayBpZiB6b25lIGlzIGVuYWJsZWQgKGNhbiBiZSBOb29wWm9uZSwgY2YgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3pvbmUjbm9vcHpvbmUpXG5cdCNydW5OZWVkZWQgPSBmYWxzZTtcblx0I3J1blBsYW5uZWQgPSBmYWxzZTtcblxuXHRwbGFuTmdab25lUnVuID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy4jem9uZS5pc1N0YWJsZSkge1xuXHRcdFx0XHRcdHRoaXMuI3J1bk5lZWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLiNydW5QbGFubmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiNydW5QbGFubmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgMDtcblx0XHRcdFx0XHRcdFx0dGhpcy4jcnVuUGxhbm5lZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy4jcnVuTmVlZGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uZ1pvbmVSdW4obm9vcCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0OiBub29wO1xuXG5cdC8qKlxuXHQgKiBSdW4gdGhlIGlucHV0IGZ1bmN0aW9uIHN5bmNocm9ub3VzbHkgd2l0aGluIHRoZSBBbmd1bGFyIHpvbmVcblx0ICpcblx0ICogQHBhcmFtIGZuIC0gYSBmdW5jdGlvbiB0byBydW5cblx0ICogQHJldHVybnMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvblxuXHQgKi9cblx0bmdab25lUnVuPFQ+KGZuOiAoKSA9PiBUKTogVCB7XG5cdFx0dGhpcy4jcnVuTmVlZGVkID0gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMuI3pvbmUucnVuKGZuKTtcblx0fVxuXG5cdGluc2lkZU5nWm9uZTogV3JhcHBlciA9IHRoaXMuI2hhc1pvbmVcblx0XHQ/IChmbikgPT4gKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/ICgoKC4uLmFyZ3M6IGFueVtdKSA9PiB0aGlzLm5nWm9uZVJ1bigoKSA9PiBmbiguLi5hcmdzKSkpIGFzIGFueSkgOiBmbilcblx0XHQ6IGlkZW50aXR5O1xuXHRpbnNpZGVOZ1pvbmVXcmFwRnVuY3Rpb25zT2JqZWN0ID0gY3JlYXRlT2JqZWN0V3JhcHBlcih0aGlzLmluc2lkZU5nWm9uZSk7XG5cblx0b3V0c2lkZU5nWm9uZTogV3JhcHBlciA9IHRoaXMuI2hhc1pvbmVcblx0XHQ/IChmbikgPT4gKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/ICgoKC4uLmFyZ3M6IGFueVtdKSA9PiB0aGlzLiN6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IGZuKC4uLmFyZ3MpKSkgYXMgYW55KSA6IGZuKVxuXHRcdDogaWRlbnRpdHk7XG5cblx0b3V0c2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QgPSBjcmVhdGVPYmplY3RXcmFwcGVyKHRoaXMub3V0c2lkZU5nWm9uZSk7XG5cdG91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlID0gY3JlYXRlUmV0dXJuVmFsdWVXcmFwcGVyKHRoaXMub3V0c2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QsIHRoaXMub3V0c2lkZU5nWm9uZSk7XG5cdG91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlc09iamVjdCA9IGNyZWF0ZU9iamVjdFdyYXBwZXIodGhpcy5vdXRzaWRlTmdab25lV3JhcERpcmVjdGl2ZSk7XG59XG4iXX0=`;export{Q as default};
