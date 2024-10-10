import type {PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '@agnos-ui/core/types';
import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import {useEffect, useMemo, useRef} from 'react';
import {useObservablesProxy} from './stores';

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
export function useWidget<W extends Widget>(
	createWidget: WidgetFactory<W>,
	props: Partial<WidgetProps<W>> = {},
	propsConfig?: PropsConfig<WidgetProps<W>>,
): WidgetSlotContext<W> {
	const coreWidget = useMemo(() => createWidget({...propsConfig, props: {...propsConfig?.props, ...props}}), []);
	const previousProps = useRef(props);

	useEffect(() => {
		const changedProps = findChangedProperties(previousProps.current, props);
		previousProps.current = props;
		if (changedProps) {
			coreWidget.patch(changedProps);
		}
	}, [props]);

	const state = useObservablesProxy<WidgetState<W>>(coreWidget.stores as any);

	return {state, api: coreWidget.api, directives: coreWidget.directives};
}
