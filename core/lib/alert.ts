import type {WidgetsCommonPropsAndState} from './commonProps.js';
import type {ConfigValidator, PropsConfig} from './services/index.js';
import {bindDirectiveNoArg, stateStores, typeBoolean, typeString, writablesForProps} from './services/index.js';
import type {TransitionFn} from './transitions/index.js';
import {createTransition} from './transitions/index.js';
import {fadeTransition} from './transitions/bootstrap/index.js';
import type {Directive, SlotContent, Widget, WidgetSlotContext} from './types.js';
import {noop} from './utils.js';

export type AlertContext = WidgetSlotContext<AlertWidget>;

export interface AlertCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 */
	dismissible: boolean;

	/**
	 * Type of the alert.
	 * There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
	 */
	type: string;

	/**
	 * Template for the alert content
	 */
	slotDefault: SlotContent<AlertContext>;

	/**
	 * Global template for the alert component
	 */
	slotStructure: SlotContent<AlertContext>;

	/**
	 * If `true` the alert is visible to the user
	 */
	visible: boolean;

	/**
	 * Accessibility close button label
	 */
	ariaCloseButtonLabel: string;
}

export interface AlertState extends AlertCommonPropsAndState {
	/**
	 * Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}

export interface AlertProps extends AlertCommonPropsAndState {
	/**
	 * Callback called when the alert visibility changed.
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Callback called when the alert is hidden.
	 */
	onHidden: () => void;

	/**
	 * Callback called when the alert is shown.
	 */
	onShown: () => void;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of {@link AlertProps.animationOnInit}, the animation can be optionally skipped during the showing process.
	 */
	transition: TransitionFn;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 */
	animationOnInit: boolean;
	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 */
	animation: boolean;
}

export interface AlertApi {
	/**
	 * Triggers alert closing programmatically (same as clicking on the close button (×)).
	 */
	close(): void;

	/**
	 * Triggers the alert to be displayed for the user.
	 */
	open(): void;
}

export interface AlertDirectives {
	/**
	 * the transition directive, piloting what is the visual effect of going from hidden to visible
	 */
	transitionDirective: Directive;
}

export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;

const defaultConfig: AlertProps = {
	visible: true,
	dismissible: true,
	type: 'primary',
	ariaCloseButtonLabel: 'Close',
	onVisibleChange: noop,
	onShown: noop,
	onHidden: noop,
	slotStructure: undefined,
	slotDefault: undefined,
	animation: true,
	animationOnInit: false,
	transition: fadeTransition,
	className: '',
};

/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getAlertDefaultConfig(): AlertProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<AlertProps> = {
	dismissible: typeBoolean,
	type: typeString,
};

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export function createAlert(config?: PropsConfig<AlertProps>): AlertWidget {
	const [
		{
			transition$,
			animationOnInit$,
			animation$,
			visible$: requestedVisible$,
			onVisibleChange$,
			onHidden$,
			onShown$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const transition = createTransition({
		transition: transition$,
		visible: requestedVisible$,
		animation: animation$,
		animationOnInit: animationOnInit$,
		onVisibleChange: onVisibleChange$,
		onHidden: onHidden$,
		onShown: onShown$,
	});
	const close = () => {
		patch({visible: false});
	};

	const open = () => {
		patch({visible: true});
	};

	const visible$ = transition.stores.visible$;
	const hidden$ = transition.stores.hidden$;
	return {
		...stateStores({...stateProps, visible$, hidden$}),
		patch,
		api: {
			open,
			close,
		},
		directives: {
			transitionDirective: bindDirectiveNoArg(transition.directives.directive),
		},
		actions: {},
	};
}
