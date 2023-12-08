import type {Widget, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import {useEffect, useRef} from 'react';
import {useObservable} from './stores';

export function useWidget<Factory extends (...arg: any[]) => Widget>(
	createWidget: Factory,
	props: Partial<WidgetProps<ReturnType<Factory>>> = {},
	...initProps: Parameters<Factory>
) {
	type W = ReturnType<Factory>;
	type State = WidgetState<W>;

	const apiRef = useRef<W | undefined>(undefined);

	if (!apiRef.current) {
		apiRef.current = createWidget(...initProps) as W;
		apiRef.current.patch(props);
	}
	const api = apiRef.current;
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
