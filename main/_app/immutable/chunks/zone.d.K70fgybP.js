const e=`import * as i0 from "@angular/core";
type Wrapper = <T>(fn: T) => T;
export declare class ZoneWrapper {
    #private;
    planNgZoneRun: () => void;
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
