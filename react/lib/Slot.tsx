import type {
	SlotContent as CoreSlotContent,
	WidgetsConfig as CoreWidgetsConfig,
	Widget,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
} from '@agnos-ui/core';
import {Component} from 'react';

export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| ((props: Props) => React.ReactNode)
	| React.ComponentType<Props>
	| React.ReactNode;

export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U>
	? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
	: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = Omit<Props, `slot${string}`> & {
	[K in keyof Props & `slot${string}`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};

export type WidgetsConfig = {
	[WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	W['api'],
	W['actions'],
	W['directives']
>;

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
