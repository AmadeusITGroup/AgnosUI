const t=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SlotContent, SlotSvelteComponent, SlotsPresent } from './slotTypes';
export declare function createPatchChangedProps<T extends object>(patchFn: (arg: Partial<T>) => void): (props: Partial<T>) => void;
export declare const callWidgetFactoryWithConfig: <W extends Widget<object, object, object, object, object>>({ factory, $$slots, defaultConfig, widgetConfig, events, }: {
    factory: WidgetFactory<W>;
    $$slots: SlotsPresent<WidgetProps<W>>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    widgetConfig?: ReadableSignal<Partial<WidgetProps<W>> | undefined> | null | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>;
}) => W & {
    patchChangedProps: W["patch"];
};
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;
`;export{t as default};
