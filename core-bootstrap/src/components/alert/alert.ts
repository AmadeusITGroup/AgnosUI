import type {AlertDirectives, AlertState as CoreState, AlertProps as CoreProps, AlertApi} from '@agnos-ui/core/components/alert';
import {createAlert as createCoreAlert, getAlertDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/alert';
import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {typeString} from '@agnos-ui/core/utils/writables';
import type {ExtendWidgetAdaptSlotWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {fadeTransition} from '../../services/transitions';
import type {BSContextualClass} from '../../types';

export * from '@agnos-ui/core/components/alert';

export type AlertContext = WidgetSlotContext<AlertWidget>;

interface AlertExtraProps {
	/**
	 * Global template for the alert component
	 */
	slotStructure: SlotContent<AlertContext>;
	/**
	 * Template for the alert content
	 */
	slotDefault: SlotContent<AlertContext>;
	/**
	 * Type of the alert, following bootstrap types.
	 */
	type: BSContextualClass;
}

export interface AlertState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, AlertExtraProps, object> {}
export interface AlertProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, AlertExtraProps, object> {}

export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;

const defaultConfigExtraProps: AlertExtraProps = {
	slotStructure: undefined,
	slotDefault: undefined,
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
