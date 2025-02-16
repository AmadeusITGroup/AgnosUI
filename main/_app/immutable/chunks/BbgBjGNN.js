const t=`import type { PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetSlotContext } from '@agnos-ui/core/types';
/**
 * The useWidget function.
 *
 * Allows to create and attach an agnos-ui/core widget to the current react component.
 * @template W - The type of the widget.
 * @param createWidget - the widget factory
 * @param props - the props
 * @param propsConfig - the props config
 * @returns the state and api to track and interact with the widget
 */
export declare function useWidget<W extends Widget>(createWidget: WidgetFactory<W>, props?: Partial<WidgetProps<W>>, propsConfig?: PropsConfig<WidgetProps<W>>): WidgetSlotContext<W>;
`;export{t as default};
