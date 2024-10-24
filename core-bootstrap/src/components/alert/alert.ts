import type {AlertDirectives, AlertState as CoreState, AlertProps as CoreProps, AlertApi} from '@agnos-ui/core/components/alert';
import {createAlert as createCoreAlert, getAlertDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/alert';
import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {typeString} from '@agnos-ui/core/utils/writables';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {fadeTransition} from '../../services/transitions';
import type {BSContextualClass} from '../../types';
import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';

export * from '@agnos-ui/core/components/alert';

/**
 * Represents the context for an Alert component.
 */
export type AlertContext = WidgetSlotContext<AlertWidget>;

interface AlertExtraProps {
	/**
	 * Global template for the alert component
	 */
	structure: SlotContent<AlertContext>;
	/**
	 * Template for the alert content
	 */
	children: SlotContent<AlertContext>;
	/**
	 * Type of the alert, following bootstrap types.
	 *
	 * @defaultValue `'primary'`
	 */
	type: BSContextualClass;
}

/**
 * Represents the state of an alert component.
 */
export interface AlertState extends CoreState, AlertExtraProps {}
/**
 * Represents the properties for the Alert component.
 */
export interface AlertProps extends CoreProps, AlertExtraProps {
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
 * Represents an alert widget component.
 */
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, AlertDirectives>;

const defaultConfigExtraProps: AlertExtraProps = {
	structure: undefined,
	children: undefined,
	type: 'primary',
};
const coreOverride: Partial<CoreProps> = {
	transition: fadeTransition,
};
const configValidator: ConfigValidator<AlertExtraProps> = {
	type: typeString as any,
};

/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
export function getAlertDefaultConfig(): AlertProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride} as any;
}

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export const createAlert: WidgetFactory<AlertWidget> = extendWidgetProps(createCoreAlert, defaultConfigExtraProps, configValidator, coreOverride);
