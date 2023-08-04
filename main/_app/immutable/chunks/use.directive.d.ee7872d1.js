const e=`import type { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import type { Directive as AgnosUIDirective } from '@agnos-ui/core';
import * as i0 from "@angular/core";
export declare class UseDirective<T> implements OnChanges, OnDestroy {
    use: AgnosUIDirective<T> | undefined;
    params: T | undefined;
    private _ref;
    private _directive;
    private _directiveInstance?;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseDirective<any>, "[auUse]", never, { "use": { "alias": "auUse"; "required": false; }; "params": { "alias": "auUseParams"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
