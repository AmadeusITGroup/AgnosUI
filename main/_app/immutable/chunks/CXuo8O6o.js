const a=`import { ToasterService } from './toaster.service';
import * as i0 from "@angular/core";
export declare class ToasterComponent {
    readonly toasterService: ToasterService;
    readonly auDismissible: import("@angular/core").InputSignal<boolean>;
    readonly auDuration: import("@angular/core").InputSignal<number>;
    readonly auPosition: import("@angular/core").InputSignal<import("@agnos-ui/angular-headless").ToastPositions>;
    readonly auLimit: import("@angular/core").InputSignal<number | undefined>;
    readonly auPauseOnHover: import("@angular/core").InputSignal<boolean | undefined>;
    readonly auCloseAll: import("@angular/core").InputSignal<boolean | undefined>;
    readonly auCloseAllLabel: import("@angular/core").InputSignal<string | undefined>;
    readonly positionClass: import("@angular/core").Signal<string>;
    constructor();
    handleHidden(toast: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToasterComponent, "[auToaster]", never, { "auDismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "auDuration": { "alias": "auDuration"; "required": false; "isSignal": true; }; "auPosition": { "alias": "auPosition"; "required": false; "isSignal": true; }; "auLimit": { "alias": "auLimit"; "required": false; "isSignal": true; }; "auPauseOnHover": { "alias": "auPauseOnHover"; "required": false; "isSignal": true; }; "auCloseAll": { "alias": "auCloseAll"; "required": false; "isSignal": true; }; "auCloseAllLabel": { "alias": "auCloseAllLabel"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
`;export{a as default};
