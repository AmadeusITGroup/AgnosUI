import type {PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import {useEffect, useMemo, useRef} from 'react';
import {useObservable} from './stores';

export function useWidget<W extends Widget>(
	createWidget: WidgetFactory<W>,
	props: Partial<WidgetProps<W>> = {},
	propsConfig?: PropsConfig<WidgetProps<W>>,
) {
	type State = WidgetState<W>;

	const api = useMemo(() => createWidget({...propsConfig, props: {...propsConfig?.props, ...props}}), []);
	const previousProps = useRef(props);

	useEffect(() => {
		const changedProps = findChangedProperties(previousProps.current, props);
		previousProps.current = props;
		if (changedProps) {
			api.patch(changedProps);
		}
	}, [props]);

	const state = useObservable(api.state$);

	return <[State, W]>[state, api];
}
