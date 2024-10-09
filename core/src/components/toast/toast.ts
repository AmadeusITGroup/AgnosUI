import {computed} from '@amadeus-it-group/tansu';
import {extendWidgetProps} from '../../services/extendWidget';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {createAttributesDirective, directiveSubscribe} from '../../utils/directive';
import {typeBoolean, typeNumberInRangeFactory} from '../../utils/writables';
import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState, CommonAlertWidget} from '../alert/common';
import {createCommonAlert, getCommonAlertDefaultConfig} from '../alert/common';

interface ToastExtraProps {
	/**
	 * If `true` automatically hides the toast after the delay.
	 *
	 * @defaultValue `true`
	 */
	autoHide: boolean;
	/**
	 * Delay in milliseconds before hiding the toast.
	 *
	 * @defaultValue `5000`
	 */
	delay: number;
}

interface ExtraDirectives {
	/**
	 * Directive that handles the autohide of the toast component
	 */
	autoHideDirective: Directive;
	/**
	 * Directive that adds all the necessary attributes to the body
	 */
	bodyDirective: Directive;
	/**
	 * Directive that adds all the necessary attributes to the close button depending on the presence of the header
	 */
	closeButtonDirective: Directive;
}

/**
 * Represents the state of a Toast component, extending the common alert state and additional toast properties.
 */
export interface ToastState extends CommonAlertState, ToastExtraProps {}

/**
 * Represents the properties for the Toast component.
 */
export interface ToastProps extends CommonAlertProps, ToastExtraProps {}

/**
 * Represents the API for the Toast component, extending the common alert functionalities.
 */
export interface ToastApi extends CommonAlertApi {}

/**
 * Interface representing the directives for a Toast component.
 */
export interface ToastDirectives extends CommonAlertDirectives, ExtraDirectives {}

/**
 * Represents a Toast widget with specific properties, state, API, and directives.
 */
export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, ToastDirectives>;

const toastDefaultConfig: ToastExtraProps = {
	autoHide: true,
	delay: 5000,
};

const toastConfigValidator: ConfigValidator<ToastExtraProps> = {
	autoHide: typeBoolean,
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
		if (extendedAlert.stores.autoHide$()) {
			_timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
		}
	});

	const bodyDirective = createAttributesDirective(() => ({
		attributes: {
			role: 'alert',
			'aria-atomic': 'true',
			class: computed(() => extendedAlert.stores.className$()),
		},
		classNames: {
			'au-toast': true,
			toast: true,
		},
	}));

	const closeButtonDirective = createAttributesDirective(() => ({
		attributes: {
			type: 'button',
			'aria-label': computed(() => extendedAlert.stores.ariaCloseButtonLabel$()),
		},
		events: {
			click: extendedAlert.api.close,
		},
	}));

	return {
		...extendedAlert,
		directives: {
			...extendedAlert.directives,
			autoHideDirective: directiveSubscribe(time$),
			bodyDirective,
			closeButtonDirective,
		},
	};
}
