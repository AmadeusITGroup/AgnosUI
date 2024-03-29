const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SlotContent, SlotSvelteComponent, SlotsPresent, WidgetFactory, WidgetProps } from '../types';
/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.$$slots - the slots of the widget
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.$$props - the props of the widget
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>({ factory, $$slots, defaultConfig, widgetConfig, events, $$props, }: {
    factory: WidgetFactory<W>;
    $$slots?: SlotsPresent<WidgetProps<W>> | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Pick<WidgetProps<W>, \`on\${string}Change\`> | undefined;
    $$props: WidgetProps<W>;
}) => W & {
    patchChangedProps: W['patch'];
};
/**
 * A type guard checking if a provided slot content is a Svelte component.
 *
 * @param content - the slot content
 * @returns true if the slot content is a svelte component
 */
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;
`;export{e as default};
