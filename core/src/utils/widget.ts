import {FACTORY_WIDGET_NAME} from '../types';
import type {PropsConfig, Widget, WidgetFactory, WidgetProps} from '../types';

/**
 * Define a widget factory that can be linked with configuration through the provided widget name.
 *
 * @param widgetName - the widget name, used for configuration injection
 * @param factory - the widget factory function
 * @template W - The type of the widget
 * @template T - The type of the widget factory function. Useful when the widget factory has a generic.
 * @returns the widget factory
 */
export function createWidgetFactory<
	W extends Widget,
	T extends (config?: PropsConfig<WidgetProps<W>>) => W = (config?: PropsConfig<WidgetProps<W>>) => W,
>(widgetName: string, factory: T): WidgetFactory<W, T> {
	(factory as any)[FACTORY_WIDGET_NAME] = widgetName;
	return factory;
}
