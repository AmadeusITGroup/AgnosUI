const e=`import type { SlotContent as CoreSlotContent, Widget, WidgetProps, WidgetState, Extends } from '@agnos-ui/core/types';
import type { Signal, TemplateRef, Type } from '@angular/core';
import * as i0 from "@angular/core";
export * from '@agnos-ui/core/types';
export declare class ComponentTemplate<Props, K extends string, T extends {
    [key in K]: TemplateRef<Props>;
}> {
    readonly component: Type<T>;
    readonly templateProp: K;
    constructor(component: Type<T>, templateProp: K);
}
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | TemplateRef<Props> | Type<unknown> | ComponentTemplate<Props, any, any>;
export declare abstract class SlotComponent<W extends Widget> {
    state: WidgetState<W>;
    api: W['api'];
    directives: W['directives'];
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotComponent<any>, never, never, { "state": { "alias": "state"; "required": false; }; "api": { "alias": "api"; "required": false; }; "directives": { "alias": "directives"; "required": false; }; }, {}, never, never, false, never>;
}
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
export type AngularWidget<W extends Widget> = Pick<W, 'api' | 'directives' | 'patch'> & {
    initialized: Promise<void>;
    state: Signal<WidgetState<W>>;
    ngInit: () => void;
    patchSlots(slots: {
        [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
    }): void;
};
`;export{e as default};
