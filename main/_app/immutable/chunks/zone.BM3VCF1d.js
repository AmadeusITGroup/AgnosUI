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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy96b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUksQ0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFJaEMsTUFBTSxtQkFBbUIsR0FDeEIsQ0FBQyxJQUFhLEVBQVcsRUFBRSxDQUMzQixDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDMUMsT0FBTyxNQUFNLENBQUM7S0FDZDtJQUNELE1BQU0sR0FBRyxHQUFHLEVBQVMsQ0FBQztJQUN0QixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUgsTUFBTSx3QkFBd0IsR0FDN0IsQ0FBQyxlQUF3QixFQUFFLFVBQW1CLEVBQVcsRUFBRSxDQUMzRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQ04sVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUsxRyxNQUFNLE9BQU8sV0FBVztJQUh4QjtRQUlVLFVBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0ZBQXdGO1FBQzVKLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM1QixDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRTs0QkFDaEIsTUFBTSxDQUFDLENBQUM7NEJBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7NEJBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQ0FDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDckI7d0JBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDTDtpQkFDRDtZQUNGLENBQUM7WUFDRixDQUFDLENBQUMsSUFBSSxDQUFDO1FBT1IsaUJBQVksR0FBWSxJQUFJLENBQUMsUUFBUTtZQUNwQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNaLG9DQUErQixHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6RSxrQkFBYSxHQUFZLElBQUksQ0FBQyxRQUFRO1lBQ3JDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMxSCxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRVoscUNBQWdDLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLCtCQUEwQixHQUFHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakgsc0NBQWlDLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7S0FDekY7SUF4Q1MsS0FBSyxDQUFrQjtJQUN2QixRQUFRLENBQWtELENBQUMsd0ZBQXdGO0lBQzVKLFVBQVUsQ0FBUztJQUNuQixXQUFXLENBQVM7SUFvQnBCLFNBQVMsQ0FBSSxFQUFXO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs0RUEzQlcsV0FBVzt1RUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGWCxNQUFNOztpRkFFTixXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5jb25zdCBpZGVudGl0eSA9IDxUPihhOiBUKSA9PiBhO1xuXG50eXBlIFdyYXBwZXIgPSA8VD4oZm46IFQpID0+IFQ7XG5cbmNvbnN0IGNyZWF0ZU9iamVjdFdyYXBwZXIgPVxuXHQod3JhcDogV3JhcHBlcik6IFdyYXBwZXIgPT5cblx0KG9iamVjdCkgPT4ge1xuXHRcdGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gb2JqZWN0O1xuXHRcdH1cblx0XHRjb25zdCByZXMgPSB7fSBhcyBhbnk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0cmVzW2tleV0gPSB3cmFwKChvYmplY3QgYXMgYW55KVtrZXldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fTtcblxuY29uc3QgY3JlYXRlUmV0dXJuVmFsdWVXcmFwcGVyID1cblx0KHdyYXBSZXR1cm5WYWx1ZTogV3JhcHBlciwgd3JhcFJlc3VsdDogV3JhcHBlcik6IFdyYXBwZXIgPT5cblx0KGZuKSA9PlxuXHRcdHdyYXBSZXN1bHQodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gKCgoLi4uYXJnczogYW55W10pID0+IHdyYXBSZXR1cm5WYWx1ZShmbiguLi5hcmdzKSkpIGFzIGFueSkgOiBmbik7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBab25lV3JhcHBlciB7XG5cdHJlYWRvbmx5ICN6b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cdHJlYWRvbmx5ICNoYXNab25lID0gdGhpcy4jem9uZS5ydW4oKCkgPT4gTmdab25lLmlzSW5Bbmd1bGFyWm9uZSgpKTsgLy8gY2hlY2sgaWYgem9uZSBpcyBlbmFibGVkIChjYW4gYmUgTm9vcFpvbmUsIGNmIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS96b25lI25vb3B6b25lKVxuXHQjcnVuTmVlZGVkID0gZmFsc2U7XG5cdCNydW5QbGFubmVkID0gZmFsc2U7XG5cblx0cGxhbk5nWm9uZVJ1biA9IHRoaXMuI2hhc1pvbmVcblx0XHQ/ICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuI3pvbmUuaXNTdGFibGUpIHtcblx0XHRcdFx0XHR0aGlzLiNydW5OZWVkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmICghdGhpcy4jcnVuUGxhbm5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy4jcnVuUGxhbm5lZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IDA7XG5cdFx0XHRcdFx0XHRcdHRoaXMuI3J1blBsYW5uZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuI3J1bk5lZWRlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmdab25lUnVuKG5vb3ApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdDogbm9vcDtcblxuXHRuZ1pvbmVSdW48VD4oZm46ICgpID0+IFQpOiBUIHtcblx0XHR0aGlzLiNydW5OZWVkZWQgPSBmYWxzZTtcblx0XHRyZXR1cm4gdGhpcy4jem9uZS5ydW4oZm4pO1xuXHR9XG5cblx0aW5zaWRlTmdab25lOiBXcmFwcGVyID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKGZuKSA9PiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gKCgoLi4uYXJnczogYW55W10pID0+IHRoaXMubmdab25lUnVuKCgpID0+IGZuKC4uLmFyZ3MpKSkgYXMgYW55KSA6IGZuKVxuXHRcdDogaWRlbnRpdHk7XG5cdGluc2lkZU5nWm9uZVdyYXBGdW5jdGlvbnNPYmplY3QgPSBjcmVhdGVPYmplY3RXcmFwcGVyKHRoaXMuaW5zaWRlTmdab25lKTtcblxuXHRvdXRzaWRlTmdab25lOiBXcmFwcGVyID0gdGhpcy4jaGFzWm9uZVxuXHRcdD8gKGZuKSA9PiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gKCgoLi4uYXJnczogYW55W10pID0+IHRoaXMuI3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gZm4oLi4uYXJncykpKSBhcyBhbnkpIDogZm4pXG5cdFx0OiBpZGVudGl0eTtcblxuXHRvdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCA9IGNyZWF0ZU9iamVjdFdyYXBwZXIodGhpcy5vdXRzaWRlTmdab25lKTtcblx0b3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmUgPSBjcmVhdGVSZXR1cm5WYWx1ZVdyYXBwZXIodGhpcy5vdXRzaWRlTmdab25lV3JhcEZ1bmN0aW9uc09iamVjdCwgdGhpcy5vdXRzaWRlTmdab25lKTtcblx0b3V0c2lkZU5nWm9uZVdyYXBEaXJlY3RpdmVzT2JqZWN0ID0gY3JlYXRlT2JqZWN0V3JhcHBlcih0aGlzLm91dHNpZGVOZ1pvbmVXcmFwRGlyZWN0aXZlKTtcbn1cbiJdfQ==`;export{Q as default};
