const t=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Widget, WidgetFactory, WidgetProps, WidgetSlotContext } from '../types';
/**
 * Call a widget factory using provided configs.
 *
 * @param factory - the widget factory to call
 * @param options - the optional options
 * @param options.defaultConfig - the default config of the widget
 * @param options.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param options.events - the events of the widget
 * @param options.props - the props of the widget
 * @returns the state, api and directives to track and interact with the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>(factory: WidgetFactory<W>, options?: {
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>>;
    props?: Partial<WidgetProps<W>>;
}) => WidgetSlotContext<W>;
`;export{t as default};
