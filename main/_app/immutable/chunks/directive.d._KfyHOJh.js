const e=`import type { Directive as AgnosUIDirective } from '@agnos-ui/core/types';
import type { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
export declare const useDirectiveForHost: <T>(use?: AgnosUIDirective<T> | undefined, params?: T | undefined) => {
    update: (newUse?: AgnosUIDirective<T> | undefined, newParams?: T | undefined) => Promise<void>;
};
export declare class UseDirective<T> implements OnChanges {
    #private;
    use: AgnosUIDirective<T> | undefined;
    params: T | undefined;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseDirective<any>, "[auUse]", never, { "use": { "alias": "auUse"; "required": false; }; "params": { "alias": "auUseParams"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
