const e=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SimpleChanges, TemplateRef } from '@angular/core';
import type { SlotContent } from './slotTypes';
export type WithPatchSlots<W extends Widget> = W & {
    patchSlots(slots: {
        [K in keyof WidgetProps<W> & \`slot\${string}\`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
    }): void;
};
export declare const callWidgetFactoryWithConfig: <W extends Widget<object, object, object, object, object>>({ factory, defaultConfig, widgetConfig, events, }: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    widgetConfig?: ReadableSignal<Partial<WidgetProps<W>> | undefined> | null | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
}) => WithPatchSlots<W>;
export declare function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges): void;
`;export{e as default};
