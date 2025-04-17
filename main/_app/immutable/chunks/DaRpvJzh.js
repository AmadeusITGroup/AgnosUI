const t=`import type { PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetSlotContext } from '@agnos-ui/core/types';
/**
 * Create and attach an agnos-ui/core widget to the current react component.
 *
 * @template W - The type of the widget.
 * @param factory - the widget factory
 * @param props - the props
 * @param propsConfig - the props config
 * @returns the state, api and directives to track and interact with the widget
 */
export declare function useWidgetWithConfig<W extends Widget>(factory: WidgetFactory<W>, props?: Partial<WidgetProps<W>>, propsConfig?: PropsConfig<WidgetProps<W>>): WidgetSlotContext<W>;
`;export{t as default};
