const t=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SlotContent, SlotSvelteComponent, SlotsPresent, WidgetFactory, WidgetProps } from '../types';
export declare const callWidgetFactoryWithConfig: <W extends Widget>({ factory, $$slots, defaultConfig, widgetConfig, events, $$props, }: {
    factory: WidgetFactory<W>;
    $$slots: SlotsPresent<WidgetProps<W>>;
    defaultConfig?: any;
    widgetConfig?: ReadableSignal<any> | null | undefined;
    events: Pick<WidgetProps<W>, \`on\${string}Change\`>;
    $$props: WidgetProps<W>;
}) => W & {
    patchChangedProps: W["patch"];
};
export declare const isSvelteComponent: <Props extends object>(content: any) => content is SlotSvelteComponent<Props>;
`;export{t as default};
