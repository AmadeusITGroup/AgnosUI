const e=`import type { Directive as AgnosUIDirective, DirectiveAndParam, DirectivesAndOptParam } from '@agnos-ui/core/types';
import type { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
 */
export declare const useDirectiveForHost: <T>(directive?: AgnosUIDirective<T>, params?: T) => {
    update: (newDirective?: AgnosUIDirective<T>, newParams?: T) => void;
};
export declare class UseDirective<T> implements OnChanges {
    #private;
    use: AgnosUIDirective | DirectiveAndParam<T> | undefined;
    /** @inheritdoc */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseDirective<any>, "[auUse]", never, { "use": { "alias": "auUse"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class UseMultiDirective<T extends any[]> implements OnChanges {
    #private;
    useMulti: DirectivesAndOptParam<T>;
    /** @inheritdoc */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseMultiDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseMultiDirective<any>, "[auUseMulti]", never, { "useMulti": { "alias": "auUseMulti"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
