import {computed} from '@amadeus-it-group/tansu';
import type {ExtendWidgetAdaptSlotWidgetProps, ExtendWidgetInterfaces} from '../../services/extendWidget';
import {extendWidgetProps} from '../../services/extendWidget';
import type {ConfigValidator, Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '../../types';
import {directiveSubscribe} from '../../utils/directive';
import {typeBoolean, typeNumberInRangeFactory} from '../../utils/writables';
import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState, CommonAlertWidget} from '../alert/common';
import {createCommonAlert, getCommonAlertDefaultConfig} from '../alert/common';

export type ToastContext = WidgetSlotContext<ToastWidget>;

export interface ToastExtraProps {
	/**
	 * If `true` automatically hides the toast after the delay.
	 */
	autohide: boolean;

	/**
	 * Delay in milliseconds before hiding the toast.
	 */
	delay: number;

	/**
	 * Header template for the toast component
	 */
	slotHeader: SlotContent<ToastContext>;
}

export interface ExtraDirectives {
	/**
	 * Directive that handles the autohide of the toast component
	 */
	autohideDirective: Directive;
}

export interface ToastState extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertState, ToastExtraProps, ExtraDirectives> {}

export interface ToastProps extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertProps, ToastExtraProps, ExtraDirectives> {}

export interface ToastApi extends CommonAlertApi {}

export interface ToastDirectives extends ExtendWidgetInterfaces<CommonAlertDirectives, ExtraDirectives> {}

export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, object, ToastDirectives>;

const toastDefaultConfig: ToastExtraProps = {
	autohide: true,
	delay: 5000,
	slotHeader: undefined,
};

const toastConfigValidator: ConfigValidator<ToastExtraProps> = {
	autohide: typeBoolean,
	delay: typeNumberInRangeFactory(0, +Infinity, {strict: true}),
};

/**
 * Retrieve a shallow copy of the default toast config
 * @returns the default toast config
 */
export function getToastDefaultConfig(): ToastProps {
	return {...getCommonAlertDefaultConfig(), ...toastDefaultConfig} as any;
}

/**
 * Create a ToastWidget with given config props
 * @param config - an optional toast config
 * @returns a ToastWidget
 */
export function createToast(config?: PropsConfig<ToastProps>): ToastWidget {
	let _timeout: ReturnType<typeof setTimeout>;

	const extendedAlert = extendWidgetProps<CommonAlertWidget, ToastExtraProps, ExtraDirectives>(
		createCommonAlert,
		toastDefaultConfig,
		toastConfigValidator,
	)(config);

	const time$ = computed(() => {
		clearTimeout(_timeout);
		if (extendedAlert.stores.autohide$()) {
			_timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
		}
	});

	return {
		...extendedAlert,
		directives: {
			...extendedAlert.directives,
			autohideDirective: directiveSubscribe(time$),
		},
	};
}
