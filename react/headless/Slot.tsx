import {Component} from 'react';
import type {SlotContent} from './utils';

type SlotFunction<Props = Record<string, never>> = ((props: Props) => React.ReactNode) | React.FunctionComponent<Props>;

const slotWrapperCache = new WeakMap<SlotFunction<any>, React.FunctionComponent<any>>();

const slotWrapperFactory = <Props,>(slotContent: SlotFunction<Props>) => {
	const SlotWrapper = (props: Props) => <>{slotContent(props)}</>;
	return SlotWrapper;
};

const slotWrapper = <Props,>(slotContent: SlotFunction<Props>) => {
	let res = slotWrapperCache.get(slotContent);
	if (!res) {
		res = slotWrapperFactory(slotContent);
		slotWrapperCache.set(slotContent, res);
	}
	return res;
};

/* eslint-disable-next-line @typescript-eslint/ban-types */
const isReactComponent = <Props,>(item: Function): item is React.ComponentClass<Props, any> => item.prototype instanceof Component;

export const Slot = <Props extends object>({slotContent, props}: {slotContent: SlotContent<Props>; props: Props}) => {
	const isFunction = typeof slotContent === 'function';
	if (isFunction) {
		const SlotComponent = isReactComponent<Props>(slotContent) ? slotContent : slotWrapper(slotContent);
		return <SlotComponent {...props}></SlotComponent>;
	}
	return <>{slotContent}</>;
};
