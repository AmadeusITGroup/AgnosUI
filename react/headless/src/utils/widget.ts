import type {PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '@agnos-ui/core/types';
import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import {useMemo, useRef} from 'react';
import {useObservablesProxy} from './stores';

/**
 * Create and attach an agnos-ui/core widget to the current react component.
 *
 * @template W - The type of the widget.
 * @param factory - the widget factory
 * @param props - the props
 * @param propsConfig - the props config
 * @returns the state, api and directives to track and interact with the widget
 */
export function useWidgetWithConfig<W extends Widget>(
	factory: WidgetFactory<W>,
	props: Partial<WidgetProps<W>> = {},
	propsConfig?: PropsConfig<WidgetProps<W>>,
): WidgetSlotContext<W> {
	const coreWidget = useMemo(() => factory({...propsConfig, props: {...propsConfig?.props, ...props}}), []);
	const previousProps = useRef(props);

	useMemo(() => {
		const changedProps = findChangedProperties(previousProps.current, props);
		previousProps.current = props;
		if (changedProps) {
			coreWidget.patch(changedProps);
		}
	}, [props]);

	const state = useObservablesProxy<WidgetState<W>>(coreWidget.stores as any);

	return {state, api: coreWidget.api, directives: coreWidget.directives};
}
