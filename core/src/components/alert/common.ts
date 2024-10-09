import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {noop} from '../../utils/internal/func';
import {stateStores, writablesForProps} from '../../utils/stores';
import {typeBoolean, typeFunction, typeString} from '../../utils/writables';

/**
 * Interface representing the common properties and state for an alert component.
 */
export interface CommonAlertCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 *
	 * @defaultValue `true`
	 */
	dismissible: boolean;
	/**
	 * If `true` the alert is visible to the user
	 *
	 * @defaultValue `true`
	 */
	visible: boolean;

	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	ariaCloseButtonLabel: string;
}

/**
 * Represents the state of a common alert component.
 */
export interface CommonAlertState extends CommonAlertCommonPropsAndState {
	/**
	 * Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}

/**
 * Interface representing the common properties for an alert component.
 */
export interface CommonAlertProps extends CommonAlertCommonPropsAndState {
	/**
	 * Callback called when the alert visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Callback called when the alert is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;

	/**
	 * Callback called when the alert is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue
	 * ```ts
	 * async () => {}
	 * ```
	 */
	transition: TransitionFn;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 *
	 * @defaultValue `false`
	 */
	animatedOnInit: boolean;
	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;
}

/**
 * Interface representing the common API for alert components.
 */
export interface CommonAlertApi {
	/**
	 * Triggers alert closing programmatically (same as clicking on the close button (×)).
	 */
	close(): void;

	/**
	 * Triggers the alert to be displayed for the user.
	 */
	open(): void;
}

/**
 * Interface representing common alert directives.
 */
export interface CommonAlertDirectives {
	/**
	 * the transition directive, piloting what is the visual effect of going from hidden to visible
	 */
	transitionDirective: Directive;
}

/**
 * Represents a common alert widget with specified properties, state, API, and directives.
 */
export type CommonAlertWidget = Widget<CommonAlertProps, CommonAlertState, CommonAlertApi, CommonAlertDirectives>;

const defaultCommonAlertConfig: CommonAlertProps = {
	visible: true,
	dismissible: true,
	ariaCloseButtonLabel: 'Close',
	onVisibleChange: noop,
	onShown: noop,
	onHidden: noop,
	animated: true,
	animatedOnInit: false,
	transition: async () => {},
	className: '',
};

/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getCommonAlertDefaultConfig(): CommonAlertProps {
	return {...defaultCommonAlertConfig};
}

const commonAlertConfigValidator: ConfigValidator<CommonAlertProps> = {
	dismissible: typeBoolean,
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	transition: typeFunction,
	animatedOnInit: typeBoolean,
	animated: typeBoolean,
	visible: typeBoolean,
	ariaCloseButtonLabel: typeString,
	className: typeString,
};

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export function createCommonAlert(config?: PropsConfig<CommonAlertProps>): CommonAlertWidget {
	const [
		{
			transition$,
			animatedOnInit$,
			animated$,
			visible$: requestedVisible$,
			onVisibleChange$,
			onHidden$,
			onShown$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultCommonAlertConfig, config, commonAlertConfigValidator);

	const transition = createTransition({
		props: {
			transition: transition$,
			visible: requestedVisible$,
			animated: animated$,
			animatedOnInit: animatedOnInit$,
			onVisibleChange: onVisibleChange$,
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});

	const visible$ = transition.stores.visible$;
	const hidden$ = transition.stores.hidden$;
	return {
		...stateStores({...stateProps, visible$, hidden$}),
		patch,
		api: {
			open: transition.api.show,
			close: transition.api.hide,
		},
		directives: {
			transitionDirective: transition.directives.directive,
		},
	};
}
