import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {noop} from '../../utils/internal/func';
import {stateStores, writablesForProps} from '../../utils/stores';
import {bindDirectiveNoArg} from '../../utils/directive';
import {typeBoolean} from '../../utils/writables';

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

export interface CommonAlertState extends CommonAlertCommonPropsAndState {
	/**
	 * Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}

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

export interface CommonAlertDirectives {
	/**
	 * the transition directive, piloting what is the visual effect of going from hidden to visible
	 */
	transitionDirective: Directive;
}

export type CommonAlertWidget = Widget<CommonAlertProps, CommonAlertState, CommonAlertApi, object, CommonAlertDirectives>;

export const defaultCommonAlertConfig: CommonAlertProps = {
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

export const commonAlertConfigValidator: ConfigValidator<CommonAlertProps> = {
	dismissible: typeBoolean,
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
