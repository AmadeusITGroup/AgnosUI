import {createTransition, type TransitionFn} from '../../services/transitions/baseTransitions';
import type {ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory} from '../../types';
import {idWithDefault, stateStores, writablesForProps} from '../../utils/stores';
import {createAttributesDirective, mergeDirectives} from '../../utils/directive';
import {typeBoolean, typeFunction, typeString} from '../../utils/writables';
import {computed} from '@amadeus-it-group/tansu';
import {noop} from '../../utils/func';
import {createWidgetFactory} from '../../utils/widget';

/**
 * Interface representing the common properties and state for a collapse component.
 */
interface CollapseCommonPropsAndState {
	/**
	 * If `true` the collapse is visible to the user
	 *
	 * @defaultValue `false`
	 */
	visible: boolean;
}

/**
 * Represents the state of a Collapse component.
 */
export interface CollapseState extends CollapseCommonPropsAndState {
	/**
	 * Is `true` when the collapse is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}

/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends CollapseCommonPropsAndState {
	/**
	 * Callback called when the collapse visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 * @param visible - The new visibility state of the collapse.
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Callback called when the collapse is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;

	/**
	 * Callback called when the collapse is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;

	/**
	 * If `true`, collapse opening will be animated at init time.
	 *
	 * @defaultValue `false`
	 */
	animatedOnInit: boolean;

	/**
	 * If `true`, collapse closing and opening will be animated.
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;
	/**
	 * id of the collapse
	 *
	 * @defaultValue `''`
	 */
	id: string;
	/**
	 * The transition function will be executed when the collapse is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	transition: TransitionFn;
}

/**
 * Interface representing the API for a collapsible component.
 */
export interface CollapseApi {
	/**
	 * Triggers collapse closing programmatically.
	 */
	close(): Promise<void>;

	/**
	 * Triggers the collapse content to be displayed for the user.
	 */
	open(): Promise<void>;

	/**
	 * Toggles the collapse content visibility.
	 */
	toggle(): Promise<void>;
}

/**
 * Interface representing the directives used in a collapse component.
 */
export interface CollapseDirectives {
	/**
	 * Directive to apply the collapse.
	 */
	collapseDirective: Directive;
	/**
	 * Directive to apply to a trigger;
	 */
	triggerDirective: Directive;
}

/**
 * Represents a widget for handling collapse functionality.
 *
 * This type defines the structure of a CollapseWidget, which includes properties, state, API, and directives
 * necessary for managing the collapse behavior in the UI.
 *
 * @type {Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>}
 */
export type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>;

const defaultCollapseConfig: CollapseProps = {
	visible: false,
	onVisibleChange: noop,
	onShown: noop,
	onHidden: noop,
	animated: true,
	animatedOnInit: false,
	id: '',
	transition: noop,
};

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export function getCollapseDefaultConfig(): CollapseProps {
	return {...defaultCollapseConfig};
}

const commonCollapseConfigValidator: ConfigValidator<CollapseProps> = {
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	animatedOnInit: typeBoolean,
	animated: typeBoolean,
	visible: typeBoolean,
	id: typeString,
	transition: typeFunction,
};

/**
 * Create an CollapseWidget factory
 * @param transitionFn - the transition function that will be used for the collapse
 * @returns an CollapseWidget
 */
export const createCollapse: WidgetFactory<CollapseWidget> = createWidgetFactory('collapse', (config?: PropsConfig<CollapseProps>) => {
	const [
		{transition$, animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, id$: _dirtyId$, ...stateProps},
		patch,
	] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);

	const id$ = idWithDefault(_dirtyId$);

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
			toggle: transition.api.toggle,
		},
		directives: {
			collapseDirective: mergeDirectives(
				transition.directives.directive,
				createAttributesDirective(() => ({
					attributes: {
						id: id$,
					},
				})),
			),
			triggerDirective: createAttributesDirective(() => ({
				attributes: {
					'aria-expanded': computed(() => `${visible$()}`),
					'aria-controls': id$,
				},
				events: {
					click: () => transition.api.toggle(),
				},
			})),
		},
	};
});
