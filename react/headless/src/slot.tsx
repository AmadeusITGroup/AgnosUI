import {Component} from 'react';
import type {SlotContent} from './types';

/* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type */
const isReactComponent = <Props,>(item: Function): item is React.ComponentClass<Props, any> => item.prototype instanceof Component;

/**
 * The React Slot component, allowing to extensively customize widgets.
 *
 * The input slotContent can be a react component, a function or jsx.
 *
 * @param parameter - the react component parameter
 * @param parameter.slotContent - the slot content
 * @param parameter.props - the react component props
 * @returns the slot component
 */
export const Slot = <Props extends object>({slotContent: SlotContent, props}: {slotContent: SlotContent<Props>; props: Props}) => {
	const isFunction = typeof SlotContent === 'function';
	if (isFunction) {
		return isReactComponent<Props>(SlotContent) ? <SlotContent {...props} /> : <>{SlotContent(props)}</>;
	}
	return <>{SlotContent}</>;
};
