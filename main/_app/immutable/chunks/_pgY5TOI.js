const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Widget, WidgetFactory, WidgetProps, WidgetSlotContext } from '../types';
/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.props - the props of the widget
 * @param parameter.enablePatchChanged - enable patching changed props
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>(parameter: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>>;
    props?: Partial<WidgetProps<W>>;
    enablePatchChanged?: true;
}) => WidgetSlotContext<W>;
`;export{e as default};
