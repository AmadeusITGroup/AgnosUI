const e=`import type { ContextWidget, Widget, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { OnChanges, Signal, SimpleChanges, TemplateRef } from '@angular/core';
import type { SlotContent } from './slotTypes';
import * as i0 from "@angular/core";
export declare const toAngularSignal: <T>(tansuSignal: ReadableSignal<T>) => Signal<T>;
export type AngularWidget<W extends Widget> = W & {
    widget: ContextWidget<W>;
    ngState: Signal<WidgetState<W>>;
    patchSlots(slots: {
        [K in keyof WidgetProps<W> & \`slot\${string}\`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
    }): void;
};
export declare const callWidgetFactoryWithConfig: <W extends Widget<object, object, object, object, object>>({ factory, defaultConfig, widgetConfig, events, }: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    widgetConfig?: ReadableSignal<Partial<WidgetProps<W>> | undefined> | null | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
}) => AngularWidget<W>;
export declare function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges): void;
export declare abstract class BaseWidgetDirective<W extends Widget> implements OnChanges {
    protected abstract readonly _widget: AngularWidget<W>;
    get api(): W['api'];
    get state(): Signal<WidgetState<W>>;
    get widget(): ContextWidget<W>;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, false, never>;
}
`;export{e as default};
