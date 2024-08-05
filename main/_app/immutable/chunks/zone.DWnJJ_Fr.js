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
    static { this.ɵfac = function ZoneWrapper_Factory(ɵt) { return new (ɵt || ZoneWrapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZoneWrapper, factory: ZoneWrapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoneWrapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy96b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUksQ0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFJaEMsTUFBTSxtQkFBbUIsR0FDeEIsQ0FBQyxJQUFhLEVBQVcsRUFBRSxDQUMzQixDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLEdBQUcsR0FBRyxFQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDLENBQUM7QUFFSCxNQUFNLHdCQUF3QixHQUM3QixDQUFDLGVBQXdCLEVBQUUsVUFBbUIsRUFBVyxFQUFFLENBQzNELENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDTixVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBSzFHLE1BQU0sT0FBTyxX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bEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuY29uc3QgaWRlbnRpdHkgPSA8VD4oYTogVCkgPT4gYTtcblxudHlwZSBXcmFwcGVyID0gPFQ+KGZuOiBUKSA9PiBUO1xuXG5jb25zdCBjcmVhdGVPYmplY3RXcmFwcGVyID1cblx0KHdyYXA6IFdyYXBwZXIpOiBXcmFwcGVyID0+XG5cdChvYmplY3QpID0+IHtcblx0XHRpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzID0ge30gYXMgYW55O1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRcdHJlc1trZXldID0gd3JhcCgob2JqZWN0IGFzIGFueSlba2V5XSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXM7XG5cdH07XG5cbmNvbnN0IGNyZWF0ZVJldHVyblZhbHVlV3JhcHBlciA9XG5cdCh3cmFwUmV0dXJuVmFsdWU6IFdyYXBwZXIsIHdyYXBSZXN1bHQ6IFdyYXBwZXIpOiBXcmFwcGVyID0+XG5cdChmbikgPT5cblx0XHR3cmFwUmVzdWx0KHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/ICgoKC4uLmFyZ3M6IGFueVtdKSA9PiB3cmFwUmV0dXJuVmFsdWUoZm4oLi4uYXJncykpKSBhcyBhbnkpIDogZm4pO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgWm9uZVdyYXBwZXIge1xuXHRyZWFkb25seSAjem9uZSA9IGluamVjdChOZ1pvbmUpO1xuXHRyZWFkb25seSAjaGFzWm9uZSA9IHRoaXMuI3pvbmUucnVuKCgpID0+IE5nWm9uZS5pc0luQW5ndWxhclpvbmUoKSk7IC8vIGNoZWNrIGlmIHpvbmUgaXMgZW5hYmxlZCAoY2FuIGJlIE5vb3Bab25lLCBjZiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvem9uZSNub29wem9uZSlcblx0I3J1bk5lZWRlZCA9IGZhbHNlO1xuXHQjcnVuUGxhbm5lZCA9IGZhbHNlO1xuXG5cdHBsYW5OZ1pvbmVSdW4gPSB0aGlzLiNoYXNab25lXG5cdFx0PyAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLiN6b25lLmlzU3RhYmxlKSB7XG5cdFx0XHRcdFx0dGhpcy4jcnVuTmVlZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuI3J1blBsYW5uZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMuI3J1blBsYW5uZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCAwO1xuXHRcdFx0XHRcdFx0XHR0aGlzLiNydW5QbGFubmVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLiNydW5OZWVkZWQpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5nWm9uZVJ1bihub29wKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQ6IG5vb3A7XG5cblx0LyoqXG5cdCAqIFJ1biB0aGUgaW5wdXQgZnVuY3Rpb24gc3luY2hyb25vdXNseSB3aXRoaW4gdGhlIEFuZ3VsYXIgem9uZVxuXHQgKlxuXHQgKiBAcGFyYW0gZm4gLSBhIGZ1bmN0aW9uIHRvIHJ1blxuXHQgKiBAcmV0dXJucyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uXG5cdCAqL1xuXHRuZ1pvbmVSdW48VD4oZm46ICgpID0+IFQpOiBUIHtcblx0XHR0aGlzLiNydW5OZWVkZWQgPSBmYWxzZTtcblx0XHRyZXR1cm4gdGhpcy4jem9uZS5ydW4oZm4pO1xuXHR9XG5cblx0aW5zaWRlTmdab25lOiBXcmFwcGVyID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKGZuKSA9PiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gKCgoLi4uYXJnczogYW55W10pID0+IHRoaXMubmdab25lUnVuKCgpID0+IGZuKC4uLmFyZ3MpKSkgYXMgYW55KSA6IGZuKVxuXHRcdDogaWRlbnRpdHk7XG5cdGluc2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QgPSBjcmVhdGVPYmplY3RXcmFwcGVyKHRoaXMuaW5zaWRlTmdab25lKTtcblxuXHRvdXRzaWRlTmdab25lOiBXcmFwcGVyID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKGZuKSA9PiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gKCgoLi4uYXJnczogYW55W10pID0+IHRoaXMuI3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gZm4oLi4uYXJncykpKSBhcyBhbnkpIDogZm4pXG5cdFx0OiBpZGVudGl0eTtcblxuXHRvdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCA9IGNyZWF0ZU9iamVjdFdyYXBwZXIodGhpcy5vdXRzaWRlTmdab25lKTtcblx0b3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmUgPSBjcmVhdGVSZXR1cm5WYWx1ZVdyYXBwZXIodGhpcy5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCwgdGhpcy5vdXRzaWRlTmdab25lKTtcblx0b3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmVzT2JqZWN0ID0gY3JlYXRlT2JqZWN0V3JhcHBlcih0aGlzLm91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlKTtcbn1cbiJdfQ==`;export{Q as default};
