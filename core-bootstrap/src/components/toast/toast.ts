import type {ToastDirectives, ToastState as CoreState, ToastProps as CoreProps, ToastApi} from '@agnos-ui/core/components/toast';
import {createToast as createCoreToast, getToastDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/toast';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {fadeTransition} from '../../services/transitions';
import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';

export * from '@agnos-ui/core/components/toast';

/**
 * Represents the context for a Toast widget.
 * This type is an alias for `WidgetSlotContext<ToastWidget>`.
 */
export type ToastContext = WidgetSlotContext<ToastWidget>;

/**
 * Interface representing additional properties for the Toast component.
 */
export interface ToastExtraProps {
	/**
	 * Global template for the toast component
	 */
	structure: SlotContent<ToastContext>;
	/**
	 * Template for the toast content
	 */
	children: SlotContent<ToastContext>;
	/**
	 * Header template for the toast component
	 */
	header: SlotContent<ToastContext>;
}

/**
 * Represents the state of a Toast component.
 */
export interface ToastState extends CoreState, ToastExtraProps {}
/**
 * Interface representing the properties for the Toast component.
 */
export interface ToastProps extends CoreProps, ToastExtraProps {
	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue `fadeTransition`
	 */
	transition: TransitionFn;
}

/**
 * Represents a Toast widget component.
 */
export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, ToastDirectives>;

const defaultConfigExtraProps: ToastExtraProps = {
	structure: undefined,
	children: undefined,
	header: undefined,
};
const coreOverride: Partial<CoreProps> = {
	transition: fadeTransition,
};

/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
export function getToastDefaultConfig(): ToastProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride} as any;
}

/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
export const createToast: WidgetFactory<ToastWidget> = extendWidgetProps(createCoreToast, defaultConfigExtraProps, {}, coreOverride);
