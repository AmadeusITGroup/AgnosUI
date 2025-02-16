const e=`import * as i0 from "@angular/core";
type Wrapper = <T>(fn: T) => T;
/**
 * A utility class that provides methods to run functions inside or outside of Angular's NgZone.
 * This can be useful for optimizing performance by avoiding unnecessary change detection cycles.
 */
export declare class ZoneWrapper {
    #private;
    planNgZoneRun: () => void;
    /**
     * Run the input function synchronously within the Angular zone
     *
     * @param fn - a function to run
     * @returns the value returned by the function
     */
    ngZoneRun<T>(fn: () => T): T;
    insideNgZone: Wrapper;
    insideNgZoneWrapFunctionsObject: Wrapper;
    outsideNgZone: Wrapper;
    outsideNgZoneWrapFunctionsObject: Wrapper;
    outsideNgZoneWrapDirective: Wrapper;
    outsideNgZoneWrapDirectivesObject: Wrapper;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZoneWrapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ZoneWrapper>;
}
export {};
`;export{e as default};
