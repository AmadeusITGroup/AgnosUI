const e=`import type { Directive as AgnosUIDirective, DirectiveAndParam, DirectivesAndOptParam } from '@agnos-ui/core/types';
import type { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/utils/directive';
/**
 * A utility function to manage the lifecycle of a directive for a host element.
 *
 * This function handles the creation, updating, and destruction of a directive instance
 * associated with a host element. It ensures that the directive is called appropriately
 * based on the platform (server or client) and manages the directive's lifecycle within
 * the Angular injection context.
 *
 * @template T - The type of parameters that the directive accepts.
 *
 * @param [directive] - The directive to be applied to the host element.
 * @param [params] - The parameters to be passed to the directive.
 *
 * @returns An object containing an \`update\` function to update the directive and its parameters.
 */
export declare const useDirectiveForHost: <T>(directive?: AgnosUIDirective<T>, params?: T) => {
    update: (newDirective?: AgnosUIDirective<T>, newParams?: T) => void;
};
/**
 * A directive that allows the use of another directive with optional parameters.
 *
 * @template T - The type of the parameter that can be passed to the directive.
 *
 * @remarks
 * This directive uses a private instance of {@link useDirectiveForHost} to manage the directive and its parameter.
 */
export declare class UseDirective<T> implements OnChanges {
    #private;
    use: AgnosUIDirective | DirectiveAndParam<T> | undefined;
    /** @internal */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseDirective<any>, "[auUse]", never, { "use": { "alias": "auUse"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * A directive that allows the use of multiple directives on a host element.
 *
 * @template T - A tuple type representing the directives and their optional parameters.
 */
export declare class UseMultiDirective<T extends any[]> implements OnChanges {
    #private;
    /**
     * An input property that takes a tuple of directives and their optional parameters.
     */
    useMulti: DirectivesAndOptParam<T>;
    /** @internal */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UseMultiDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UseMultiDirective<any>, "[auUseMulti]", never, { "useMulti": { "alias": "auUseMulti"; "required": true; }; }, {}, never, never, true, never>;
}
`;export{e as default};
